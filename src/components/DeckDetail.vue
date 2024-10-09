<template>
    <div class="deck-detail-container" v-if="deck">
        <div class="deck-header">
            <div class="deck-title">
                <h2>{{ deck.name }}</h2>
                <p>作者: {{ deck.displayholderUserName }}</p>
            </div>
            <div class="deck-attributes">
                <h3>牌組屬性</h3>
                <div class="attribute-icons">
                    <img v-for="attr in deck.deckAttributes" :key="attr" :src="getTypeImage(attr)" :alt="attr"
                        class="attribute-icon" />
                </div>
            </div>
        </div>

        <div class="deck-preview">
            <h3>牌組預覽</h3>
            <div class="card-grid">
                <div v-for="cardId in sortedDeckCards" :key="cardId" class="card-slot">
                    <img :src="getCardImage(cardId)" :alt="getCardName(cardId)" class="card-image" />
                </div>
            </div>
        </div>
        <div class="deck-description">
            <h3>描述</h3>
            <div v-html="sanitizedDescription"></div>
        </div>

        <div class="button-container">
            <el-button type="primary" @click="shareDeck">分享</el-button>
            <el-button type="primary" @click="goBack">返回</el-button>
            <el-button v-if="isCreator" type="warning" @click="editDeck">編輯牌組</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { cards } from '../data/cards';
import { ElMessage } from 'element-plus';
import DOMPurify from 'dompurify';

const route = useRoute();
const router = useRouter();
const deck = ref<any>(null);

const sortedDeckCards = computed(() => {
  return deck.value ? [...deck.value.cards].sort((a: number, b: number) => a - b) : [];
});

const getCardImage = (cardId: number) => {
  const card = cards.find(c => c.id === cardId);
  return card ? card.imageUrl || `/images/cards/${card.id}.png` : '';
};

const getCardName = (cardId: number) => {
  const card = cards.find(c => c.id === cardId);
  return card ? card.name : '';
};

const getTypeImage = (type: string) => {
  return `/img/type/${type}.png`;
};

const goBack = () => {
  router.push('/decks');
};

const shareUrl = computed(() => `${window.location.origin}/deck/${route.params.id}`);

const shareDeck = async () => {
    try {
        await navigator.clipboard.writeText(shareUrl.value);
        ElMessage.success('牌組連結已複製到剪貼板！');
    } catch (err) {
        ElMessage.error('無法複製連結，請手動複製');
    }
};

const sanitizedDescription = computed(() => {
  return deck.value ? DOMPurify.sanitize(deck.value.description, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ol', 'ul', 'li', 'a', 'img'],
    ALLOWED_ATTR: ['href', 'target', 'src', 'alt']
  }) : '';
});

const isCreator = computed(() => {
  return auth.currentUser && auth.currentUser.uid === deck.value?.holderUser;
});

const editDeck = () => {
  router.push({ name: 'EditDeck', params: { id: deck.value.id } });
};

onMounted(async () => {
  const deckId = route.params.id as string;
  const deckDoc = await getDoc(doc(db, 'decks', deckId));
  if (deckDoc.exists()) {
    deck.value = { id: deckDoc.id, ...deckDoc.data() };
  } else {
    console.error('Deck not found');
    router.push('/decks');
  }
});
</script>

<style scoped>
.deck-detail-container {
  padding: 20px;
  background-color: var(--background-color);
  color: var(--text-color);
}

.deck-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
}

.deck-title h2 {
  margin-top: 0;
  color: var(--primary-color);
}

.deck-attributes {
  text-align: right;
}

.deck-attributes h3 {
  margin-top: 0;
  color: var(--secondary-color);
}

.attribute-icons {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.attribute-icon {
  width: 30px;
  height: 30px;
}

.deck-description, .deck-preview {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
}

.deck-description h3, .deck-preview h3 {
  margin-top: 0;
  color: var(--secondary-color);
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

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

:deep(.el-button) {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: var(--background-color);
}

:deep(.el-button:hover) {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
}

:deep(.el-dialog) {
  background-color: var(--background-color);
  color: var(--text-color);
}

:deep(.el-dialog__header) {
  background-color: var(--background-color);
  color: var(--text-color);
}

:deep(.el-dialog__body) {
  background-color: var(--background-color);
  color: var(--text-color);
}

.deck-description :deep(h1),
.deck-description :deep(h2),
.deck-description :deep(h3),
.deck-description :deep(h4),
.deck-description :deep(h5),
.deck-description :deep(h6) {
  margin-top: 1em;
  margin-bottom: 0.5em;
  color: var(--primary-color);
}

.deck-description :deep(p) {
  margin-bottom: 1em;
}

.deck-description :deep(ul),
.deck-description :deep(ol) {
  padding-left: 2em;
  margin-bottom: 1em;
}

.deck-description :deep(li) {
  margin-bottom: 0.5em;
}

.deck-description :deep(a) {
  color: var(--secondary-color);
  text-decoration: underline;
}

.deck-description :deep(img) {
  max-width: 100%;
  height: auto;
  margin: 1em 0;
}

.deck-description :deep(strong) {
  font-weight: bold;
}

.deck-description :deep(em) {
  font-style: italic;
}

.deck-description :deep(u) {
  text-decoration: underline;
}
</style>