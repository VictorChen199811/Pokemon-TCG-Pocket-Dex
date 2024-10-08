<template>
  <div class="card-list">
    <FilterComponent @filter="applyFilter" />
    <h2>卡牌列表</h2>
    <div class="card-grid">
      <div v-for="card in filteredCards" :key="card.id" class="card" @click="openCardDetail(card)">
        <img :src="card.imageUrl" :alt="card.name" class="card-image">
        <h3>{{ card.name }}</h3>
        <div class="card-info">
          <img :src="card.rarity" :alt="'稀有度'" class="rarity-image">
        </div>
      </div>
    </div>

    <!-- 修改模态框 -->
    <el-dialog
      v-model="isCardDetailVisible"
      :show-close="false"
      :close-on-click-modal="true"
      :close-on-press-escape="true"
      :modal="true"
      width="80%"
      custom-class="card-detail-dialog"
    >
      <CardDetail v-if="selectedCard" :card="selectedCard" />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import FilterComponent from './FilterComponent.vue'
import CardDetail from './CardDetail.vue'
import { type Card, cards } from '../data/cards'
import { ElDialog } from 'element-plus'

interface Filter {
  searchTerm: string;
  types: string[];
  rarities: string[];
  series: string;
  pack: string;
}

export default defineComponent({
  name: 'CardList',
  components: {
    FilterComponent,
    CardDetail,
    ElDialog
  },
  setup() {
    const router = useRouter()
    const filter = ref<Filter>({
      searchTerm: '',
      types: [],
      rarities: [],
      series: '',
      pack: ''
    })

    const isCardDetailVisible = ref(false)
    const selectedCard = ref<Card | null>(null)

    const applyFilter = (newFilter: Filter) => {
      filter.value = newFilter
    }

    const filteredCards = computed(() => {
      return cards.filter(card => {
        const searchMatch = card.name.toLowerCase().includes(filter.value.searchTerm.toLowerCase())
        const typeMatch = filter.value.types.length === 0 || filter.value.types.includes(card.type)
        const rarityMatch = filter.value.rarities.length === 0 || filter.value.rarities.includes(card.rarity)
        const seriesMatch = !filter.value.series || card.packs === filter.value.series
        const packMatch = !filter.value.pack || (card.pack && card.pack.some(p => p === filter.value.pack))
        return searchMatch && typeMatch && rarityMatch && seriesMatch && packMatch
      })
    })

    const openCardDetail = (card: Card) => {
      selectedCard.value = card
      isCardDetailVisible.value = true
    }

    const closeCardDetail = () => {
      isCardDetailVisible.value = false
      selectedCard.value = null
    }

    return {
      filteredCards,
      applyFilter,
      openCardDetail,
      isCardDetailVisible,
      selectedCard,
      closeCardDetail
    }
  }
})
</script>

<style scoped>
/* 保留原有的样式 */
.card-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
}

h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
}

.card {
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #333333;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px var(--primary-color);
}

.card-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}

.card h3 {
  margin: 0.5rem 0;
  color: var(--text-color);
  font-size: 1rem;
}

.card-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.type-image, .rarity-image {
  height: 20px;
  width: auto;
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}

@media (max-width: 480px) {
  .card-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
}

/* 修改模态框样式 */
:deep(.card-detail-dialog) {
  background-color: var(--background-color);
  border: 2px solid black; /* 添加黑色边框 */
}

:deep(.el-dialog) {
  background-color: black !important; /* 设置对话框背景为黑色 */
  border-radius: 10px; /* 圆角 */
  overflow: hidden; /* 确保内容不会溢出圆角 */
}

:deep(.el-dialog__header) {
  display: none; /* 隐藏标题栏 */
}

:deep(.el-dialog__body) {
  padding: 0;
}

/* 其他样式保持不变 */
</style>
