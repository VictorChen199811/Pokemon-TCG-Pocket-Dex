<template>
  <div class="deck-list-container">
    <div class="deck-list-header">
      <h2 class="deck-list-title">分享牌組</h2>
      <el-button type="primary" @click="goToCreateDeck" :disabled="!canCreateDeck">創建新牌組</el-button>
    </div>
    
    <DeckSearchComponent @search="handleSearch" />

    <div v-if="initialLoading" class="initial-loading">
      <el-icon class="is-loading"><Loading /></el-icon>
      <span>加載中...</span>
    </div>

    <div v-else>
      <div class="deck-grid">
        <el-card v-for="deck in decks" :key="deck.id" class="deck-card">
          <template #header>
            <div class="deck-card-header">
              <h3>{{ deck.name }}</h3>
              <span>by {{ deck.displayholderUserName }}</span>
            </div>
          </template>
          <div class="deck-preview">
            <div class="card-grid">
              <div v-for="cardId in sortedDeckCards(deck.cards)" :key="cardId" class="card-slot">
                <img :src="getCardImage(cardId)" :alt="getCardName(cardId)" class="card-image" />
              </div>
            </div>
          </div>
          <div class="deck-actions">
            <el-button type="primary" size="small" @click="viewDeckDetails(deck)">
              <el-icon><View /></el-icon>
              詳情
            </el-button>
            <el-button type="primary" size="small" @click="shareDeck(deck)">
              <el-icon><Share /></el-icon>
              分享
            </el-button>
          </div>
        </el-card>
      </div>

      <div class="load-more-section">
        <div v-if="!noMoreDecks" class="load-more-trigger" ref="loadMoreTrigger">
        </div>
        <div v-else class="no-more-decks">沒有更多牌組了</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { collection, query, orderBy, limit, startAfter, getDocs, type DocumentData, QueryDocumentSnapshot, where } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { cards } from '../data/cards';
import DeckSearchComponent from './DeckSearchComponent.vue';
import { View, Share, Loading } from '@element-plus/icons-vue';
import { ElMessage, ElLoading } from 'element-plus';

const router = useRouter();
const decks = ref<DocumentData[]>([]);
const currentPage = ref(1);
const pageSize = 12;
const loading = ref(false);
const lastVisible = ref<QueryDocumentSnapshot | null>(null);
const noMoreDecks = ref(false);
const loadMoreTrigger = ref<HTMLElement | null>(null);
const initialLoading = ref(true);
const updateDate = ref('');

// 新增：檢查用戶是否可以創建牌組
const canCreateDeck = computed(() => {
  const user = auth.currentUser;
  return user && user.displayName && user.displayName.trim() !== '';
});

const handleSearch = (searchData: { updateDate: string }) => {
  updateDate.value = searchData.updateDate; // 新增
  loadDecks();
};

const sortedDeckCards = (deckCards: number[]) => {
  return [...deckCards].sort((a, b) => a - b);
};

const getCardImage = (cardId: number) => {
  const card = cards.find(c => c.id === cardId);
  return card ? card.imageUrl || `/images/cards/${card.id}.png` : '';
};

const getCardName = (cardId: number) => {
  const card = cards.find(c => c.id === cardId);
  return card ? card.name : '';
};

const loadDecks = async (loadMore = false) => {
  if (loading.value || (loadMore && noMoreDecks.value)) return;

  loading.value = true;
  if (loadMore) {
    ElLoading.service({
      lock: true,
      text: '加載更多...',
      background: 'rgba(0, 0, 0, 0.7)',
      target: '.load-more-section'
    });
  }

  try {
    let q = query(collection(db, "decks"));

    // 根據選擇的更新日期進行過濾
    if (updateDate.value) {
      const now = new Date();
      let dateLimit;
      switch (updateDate.value) {
        case 'lastWeek':
          dateLimit = new Date(now.setDate(now.getDate() - 7));
          break;
        case 'lastMonth':
          dateLimit = new Date(now.setMonth(now.getMonth() - 1));
          break;
        case 'lastYear':
          dateLimit = new Date(now.setFullYear(now.getFullYear() - 1));
          break;
        default:
          dateLimit = null;
      }
      if (dateLimit) {
        q = query(q, where("updateDateAt", ">=", dateLimit));
      }
    }

    q = query(q, orderBy("createDateAt", "desc"), limit(pageSize));
    
    if (loadMore && lastVisible.value) {
      q = query(q, startAfter(lastVisible.value));
    } else {
      decks.value = [];
      noMoreDecks.value = false;
    }

    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      noMoreDecks.value = true;
    } else {
      querySnapshot.forEach((doc) => {
        const deckData = doc.data();
        decks.value.push({ id: doc.id, ...deckData });
      });
      lastVisible.value = querySnapshot.docs[querySnapshot.docs.length - 1];
    }

    if (!loadMore) {
      currentPage.value = 1;
    }
  } catch (error) {
    console.error("Error loading decks:", error);
    ElMessage.error('加載牌組失敗，請稍後再試');
  } finally {
    loading.value = false;
    initialLoading.value = false;
  }
};

onMounted(() => {
  loadDecks();
  
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !loading.value && !noMoreDecks.value) {
      loadDecks(true);
    }
  }, { threshold: 0.5 });

  if (loadMoreTrigger.value) {
    observer.observe(loadMoreTrigger.value);
  }
});

watch([updateDate], () => {
  loadDecks();
});

const goToCreateDeck = () => {
  if (canCreateDeck.value) {
    router.push('/create-deck');
  } else {
    ElMessage.warning('請先登入並設置顯示名稱才能創建牌組');
  }
};

const viewDeckDetails = (deck: any) => {
  router.push({ name: 'DeckDetail', params: { id: deck.id } });
}

const shareDeck = async (deck: any) => {
  const shareUrl = `${window.location.origin}/deck/${deck.id}`;
  try {
    await navigator.clipboard.writeText(shareUrl);
    ElMessage.success('牌組連結已複製到剪貼板！');
  } catch (err) {
    console.error('複製連結失敗：', err);
    ElMessage.error('無法複製連結，請手動複製');
  }
};
</script>

<style scoped>
.deck-list-container {
  padding: 20px;
  background-color: var(--background-color);
}

.deck-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.deck-list-title {
  color: var(--primary-color);
  margin: 0;
}

.deck-filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.deck-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.deck-card {
  background-color: var(--background-color);
  border: 2px solid var(--primary-color);
  border-radius: 8px;
}

.deck-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.deck-preview {
  margin-bottom: 10px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 5px;
}

.card-slot {
  aspect-ratio: 2/3;
  background-color: rgba(255, 215, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.deck-description {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--text-color);
}

.deck-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.deck-actions .el-button {
  width: 40%; /* 設置按鈕寬度為 40% */
  padding: 10px 0; /* 增加按鈕的上下內邊距 */
  font-size: 16px; /* 增���字體大小 */
}

.el-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-button .el-icon {
  margin-right: 5px;
  font-size: 18px; /* 增加圖標大小 */
}

:deep(.el-card) {
  background-color: var(--background-color);
  color: var(--text-color);
}

:deep(.el-card__header) {
  background-color: rgba(255, 215, 0, 0.1);
  border-bottom: 1px solid var(--primary-color);
}

:deep(.el-input__inner),
:deep(.el-select .el-input__inner) {
  background-color: var(--background-color);
  color: var(--text-color);
  border-color: var(--primary-color);
}

:deep(.el-button--primary) {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: var(--background-color);
}

:deep(.el-button--text) {
  color: var(--primary-color);
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

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.el-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.el-button .el-icon {
  margin-right: 5px;
}

:deep(.el-button:disabled) {
  background-color: #a0a0a0;
  border-color: #a0a0a0;
  color: #ffffff;
  cursor: not-allowed;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

:deep(.el-pagination) {
  --el-pagination-bg-color: var(--background-color);
  --el-pagination-text-color: var(--text-color);
  --el-pagination-button-color: var(--primary-color);
  --el-pagination-button-bg-color: var(--background-color);
  --el-pagination-button-disabled-color: var(--text-color);
  --el-pagination-button-disabled-bg-color: var(--background-color);
  --el-pagination-hover-color: var(--secondary-color);
}

:deep(.el-pagination .el-pager li) {
  background-color: var(--background-color);
  color: var(--text-color);
}

:deep(.el-pagination .el-pager li.active) {
  background-color: var(--primary-color);
  color: var(--background-color);
}

.load-more-section {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 50px;
  position: relative;
}

.load-more-trigger {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.no-more-decks {
  text-align: center;
  color: var(--text-color);
}

.initial-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: var(--primary-color);
}

.initial-loading .el-icon {
  font-size: 24px;
  margin-right: 10px;
}
</style>