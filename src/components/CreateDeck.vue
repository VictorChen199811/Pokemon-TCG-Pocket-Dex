<template>
  <div class="create-deck-container">
    <div class="deck-header">
      <el-input v-model="deckForm.name" :placeholder="isEditing ? '編輯牌組名稱' : '牌組名稱'" class="deck-name-input" />
    </div>

    <div class="deck-grid">
      <div v-for="(cardId, index) in sortedDeckCards" :key="index" class="card-slot" @click="selectCardSlot(index)">
        <img v-if="cardId" :src="getCardImage(cardId)" :alt="getCardName(cardId)" class="card-image" />
        <span v-else>{{ index + 1 }}</span>
      </div>
    </div>
    <el-button type="primary" @click="showTypeSelection" :loading="loading" class="submit-button">
      {{ isEditing ? '更新牌組' : '創建牌組' }}
    </el-button>

    <div class="deck-tabs">
      <el-button @click="showDescription = true">描述</el-button>
    </div>

    <el-dialog v-model="showDescription" title="牌組描述" width="70%" :show-close="false" :close-on-click-modal="true">
      <QuillEditor 
        v-model:content="deckForm.description" 
        contentType="html" 
        theme="snow" 
        :toolbar="toolbarOptions"
      />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showDescription = false">取消</el-button>
          <el-button type="primary" @click="saveDescription">確認</el-button>
        </span>
      </template>
    </el-dialog>

    <div class="light-filter-component">
      <div class="filter-toggle" @click="toggleFilter">
        <img src="/img/material-symbols-light--keyboard-arrow-down-rounded.png" :class="{ 'rotate': isFilterVisible }"
          alt="Toggle filter" class="toggle-icon">
      </div>
      <div v-if="isFilterVisible" class="filter-content">
        <LightFilterComponent @filter="handleFilter" />
      </div>
    </div>

    <div class="card-selection">
      <div class="card-list">
        <div v-for="card in filteredCards" :key="card.id" class="card-item" @click="addCardToDeck(card)" :class="{ 
               disabled: !canAddCard(card),
               selected: isCardSelected(card)
             }">
          <img :src="getCardImage(card.id)" :alt="card.name" class="card-image" />
          <p class="card-name">{{ card.name }}</p>
          <div v-if="isCardSelected(card)" class="card-count">
            {{ getCardCount(card) }}
          </div>
        </div>
      </div>
    </div>

    <el-dialog v-model="showTypeDialog" :title="isEditing ? '選擇牌組能量' : '選擇牌組能量'" width="50%" :show-close="false" :close-on-click-modal="true">
      <div class="type-selection">
        <div v-for="type in allTypes" :key="type" class="type-item">
          <el-checkbox v-model="selectedTypes" :label="type"
            :disabled="selectedTypes.length >= 3 && !selectedTypes.includes(type)">
            <img :src="getTypeImage(type)" :alt="type" class="type-image" />
          </el-checkbox>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showTypeDialog = false" :disabled="isSubmitting">取消</el-button>
          <el-button type="primary" @click="submitForm" :loading="isSubmitting">
            {{ isEditing ? '確認並更新' : '確認並創建' }}
          </el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { ElMessage } from 'element-plus';
import { cards } from '../data/cards';
import LightFilterComponent from './LightFilterComponent.vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import DOMPurify from 'dompurify';

const route = useRoute();
const router = useRouter();
const loading = ref(false);
const showDescription = ref(false);
const isFilterVisible = ref(true);
const showTypeDialog = ref(false);
const selectedTypes = ref<string[]>([]);
const isEditing = ref(false);
const deckId = ref('');

const deckForm = reactive({
  name: '',
  description: '',
  boxTopper: '',
  cards: [] as number[],
});

const deckCode = ref('');
const searchQuery = ref('');

const filteredCards = computed(() => {
  if (isEditing.value) {
    // 如果是編輯模式，顯示所有卡片
    return cards;
  }
  // 如果不是編輯模式，保持原有的過濾邏輯
  return cards.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesType = selectedTypes.value.length === 0 || selectedTypes.value.includes(card.type);
    return matchesSearch && matchesType;
  });
});

const handleFilter = (filterData: { searchTerm: string; types: string[] }) => {
  searchQuery.value = filterData.searchTerm;
  selectedTypes.value = filterData.types;
};

const toggleFilter = () => {
  isFilterVisible.value = !isFilterVisible.value;
};

const selectCardSlot = (index: number) => {
  const cardId = sortedDeckCards.value[index];
  if (cardId) {
    const originalIndex = deckForm.cards.indexOf(cardId);
    if (originalIndex !== -1) {
      deckForm.cards.splice(originalIndex, 1);
    }
  }
};

const cardCounts = computed(() => {
  const counts: { [key: number]: number } = {};
  deckForm.cards.forEach(cardId => {
    counts[cardId] = (counts[cardId] || 0) + 1;
  });
  return counts;
});

const canAddCard = (card: any) => {
  return (cardCounts.value[card.id] || 0) < 2 && deckForm.cards.length < 20;
};

const isCardSelected = (card: any) => {
  return deckForm.cards.includes(card.id);
};

const getCardCount = (card: any) => {
  return cardCounts.value[card.id] || 0;
};

const addCardToDeck = (card: any) => {
  if (canAddCard(card)) {
    deckForm.cards.push(card.id);
    ElMessage.success(`已添加 ${card.name} 到牌組`);
  } else if (deckForm.cards.length >= 20) {
    ElMessage.warning('牌組已滿，無法添加更多卡牌');
  } else {
    ElMessage.warning(`${card.name} 已達到最大數量限制（2張）`);
  }
};


const saveDescription = () => {
  deckForm.description = DOMPurify.sanitize(deckForm.description, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ol', 'ul', 'li', 'a', 'img'],
    ALLOWED_ATTR: ['href', 'target', 'src', 'alt']
  });
  showDescription.value = false;
};

// 新增計算屬性來獲取牌組屬性
const deckAttributes = computed(() => {
  const typeCounts = deckForm.cards.reduce((acc, cardId) => {
    const card = cards.find(c => c.id === cardId);
    if (card) {
      acc[card.type] = (acc[card.type] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(typeCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([type]) => type);
});

// 修改 allTypes 數組，使用與圖片檔名相匹配的屬性名稱
const allTypes = [
  'grass',
  'fire',
  'water', 
  'electric', 
  'psychic',
  'fighting', 
  // 'dark',
  // 'steel',
  // 'fairy',
  'dragon',
  'colorless'
];

// 修改 getTypeImage 函數以直接使用 type 作為檔名
const getTypeImage = (type: string) => {
  return `/img/type/${type}.png`;
};

// 修改 availableTypes 計算屬性
const availableTypes = computed(() => {
  return allTypes;
});

const showTypeSelection = () => {
  if (!deckForm.name) {
    ElMessage.error('請輸入牌組名稱');
    return;
  }

  if (deckForm.cards.length !== 20) {
    ElMessage.error('牌組必須包含 20 張卡片');
    return;
  }

  showTypeDialog.value = true;
};

const isSubmitting = ref(false);

onMounted(async () => {
  deckId.value = route.params.id as string;
  isEditing.value = !!deckId.value;

  if (isEditing.value) {
    const deckDoc = await getDoc(doc(db, 'decks', deckId.value));
    if (deckDoc.exists()) {
      const deckData = deckDoc.data();
      deckForm.name = deckData.name;
      deckForm.description = deckData.description;
      deckForm.cards = deckData.cards;
      selectedTypes.value = deckData.deckAttributes;
      // 重置搜索查詢，以確保顯示所有卡片
      searchQuery.value = '';
    } else {
      ElMessage.error('找不到指定的牌組');
      router.push('/decks');
    }
  }
});

const submitForm = async () => {
  if (selectedTypes.value.length === 0) {
    ElMessage.error('請至少選擇一種屬性');
    return;
  }

  isSubmitting.value = true;
  try {
    const user = auth.currentUser;
    if (!user) {
      ElMessage.error('請先登入');
      return;
    }

    const deckData = {
      ...deckForm,
      description: DOMPurify.sanitize(deckForm.description, {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ol', 'ul', 'li', 'a', 'img'],
        ALLOWED_ATTR: ['href', 'target', 'src', 'alt']
      }),
      holderUser: user.uid,
      displayholderUserName: user.displayName,
      deckAttributes: selectedTypes.value,
      updateDateAt: new Date(),
    };

    if (isEditing.value) {
      // 更新現有牌組
      await updateDoc(doc(db, 'decks', deckId.value), deckData);
      ElMessage.success('牌組更新成功');
    } else {
      // 創建新牌組
      const newDeckData = { ...deckData, createDateAt: new Date() };
      await addDoc(collection(db, 'decks'), newDeckData);
      ElMessage.success('牌組創建成功');
    }

    router.push('/decks');
  } catch (error) {
    console.error('操作失敗：', error);
    ElMessage.error(`${isEditing.value ? '更新' : '創建'}牌組失敗，請稍後再試`);
  } finally {
    isSubmitting.value = false;
    showTypeDialog.value = false;
  }
};

const getCardImage = (cardId: number) => {
  const card = cards.find(c => c.id === cardId);
  return card ? card.imageUrl || `/images/cards/${card.id}.png` : '';
};

const getCardName = (cardId: number) => {
  const card = cards.find(c => c.id === cardId);
  return card ? card.name : '';
};

// 添加新的計算屬性來排序牌組卡牌
const sortedDeckCards = computed(() => {
  const sortedCards = [...deckForm.cards].sort((a, b) => a - b);
  // 確保總是顯示 20 個槽位
  while (sortedCards.length < 20) {
    sortedCards.push(0); // 使用 0 表示空槽位
  }
  return sortedCards;
});

const toolbarOptions = [
  ['bold', 'italic', 'underline'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'header': [1, 3, 5, 6, false] }],
  ['link'],
  ['clean']
];
</script>

<style scoped>
.create-deck-container {
  padding: 20px;
  background-color: var(--background-color);
  color: var(--text-color);
}

.deck-header, .deck-tabs, .card-filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.deck-name-input, .youtube-input {
  flex-grow: 1;
  margin-right: 10px;
}

.deck-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 10px;
}

.card-slot {
  aspect-ratio: 2/3;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  color: var(--text-color);
}

.card-slot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.card-selection {
  margin-top: 20px;
}

.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.card-item {
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
}

.card-item:hover {
  transform: scale(1.05);
}

.card-item.selected {
  box-shadow: 0 0 10px 3px var(--secondary-color);
}

.card-item.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.card-name {
  text-align: center;
  margin-top: 5px;
  font-size: 14px;
  color: var(--text-color);
}

.submit-button {
  margin-bottom: 10px;
  width: 100%;
}

:deep(.el-input__inner), :deep(.el-button) {
  background-color: var(--background-color);
  border-color: var(--primary-color);
  color: var(--text-color);
}

:deep(.el-button--primary) {
  background-color: var(--primary-color);
  color: var(--background-color);
}

:deep(.el-button:hover) {
  border-color: var(--secondary-color);
}

:deep(.el-button--primary:hover) {
  background-color: var(--secondary-color);
}

:deep(.el-dialog) {
  background-color: var(--background-color);
}

:deep(.el-dialog__title) {
  color: var(--text-color);
}

:deep(.el-dialog__body) {
  color: var(--text-color);
}

.light-filter-component {
  background-color: #1e2124;
  color: white;
  padding: 5px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.filter-toggle {
  cursor: pointer;
  background-color: #1e2124;
  border-radius: 20px;
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.toggle-icon.rotate {
  transform: rotate(180deg);
}

.filter-content {
  margin-top: 10px;
}

.card-count {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.deck-name-input {
  flex-grow: 1;
  margin-right: 10px;
}

:deep(.el-input__wrapper) {
  background-color: #000000;
  box-shadow: none;
  border: 1px solid var(--primary-color);
}

:deep(.el-input__inner) {
  background-color: #000000;
  color: var(--text-color);
  border: none;
  padding-left: 10px;
  padding-right: 10px;
}

.type-selection {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 25px; /* 增加間距 */
  justify-content: center;
  padding: 20px; /* 增加內邊距 */
  border-radius: 15px; /* 添加圓角 */
  background-color: #1e2124; /* 添加背景色以突出圓角效果 */
}

.type-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px; /* 設置固定寬度 */
  height: 30px; /* 設置固定高度 */
}

.type-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

:deep(.el-checkbox__input) {
  display: none;
}

:deep(.el-checkbox__label) {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

:deep(.el-checkbox.is-checked .type-image) {
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  box-sizing: border-box; /* 確保邊框不會增加元素大小 */
}

:deep(.el-checkbox.is-disabled .type-image) {
  opacity: 0.5;
}

/* 確保對話框有足夠的空間 */
:deep(.el-dialog) {
  min-width: 400px; /* 設置最小寬度 */
}

:deep(.el-dialog__body) {
  padding: 0; /* 移除默認內邊距 */
}

:deep(.el-dialog) {
  border-radius: 20px; /* 為對話框添加圓角 */
  overflow: hidden; /* 確保內容不會超出圓角 */
  background-color: var(--background-color); /* 確保背景顏色與主題一致 */
}

:deep(.el-dialog__header) {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
}

:deep(.el-dialog__body) {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 20px;
}

:deep(.el-dialog__footer) {
  background-color: var(--background-color);
  padding: 20px;
  border-top: 1px solid var(--border-color);
}

:deep(.el-dialog__headerbtn) {
  display: none; /* 隱藏默認的關閉按鈕 */
}

:deep(.ql-container) {
  min-height: 200px;
}

:deep(.ql-snow) {
  border: 1px solid var(--border-color);
}

:deep(.ql-toolbar) {
  background-color: var(--background-color);
  color: var(--text-color);
}

:deep(.ql-editor) {
  background-color: var(--background-color);
  color: var(--text-color);
}

</style>