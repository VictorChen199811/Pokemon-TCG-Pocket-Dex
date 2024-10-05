<template>
  <div class="card-list">
    <FilterComponent @filter="applyFilter" />
    <h2>卡牌列表</h2>
    <div class="card-grid">
      <div v-for="card in filteredCards" :key="card.id" class="card" @click="goToCardDetail(card.id)">
        <img :src="card.imageUrl" :alt="card.name" class="card-image">
        <h3>{{ card.name }}</h3>
        <div class="card-info">
          <img :src="card.rarity" :alt="'稀有度'" class="rarity-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import FilterComponent from './FilterComponent.vue'
import { type Card, cards } from '../data/cards'

interface Filter {
  searchTerm: string;
  types: string[];
  rarities: string[];
  cardName: string;
  pack: string;
}

export default defineComponent({
  name: 'CardList',
  components: {
    FilterComponent
  },
  setup() {
    const cardList = ref<Card[]>(cards)

    const filter = ref<Filter>({
      searchTerm: '',
      types: [],
      rarities: [],
      cardName: '',
      pack: ''
    })

    const applyFilter = (newFilter: Filter) => {
      filter.value = newFilter
    }

    const filteredCards = computed(() => {
      return cardList.value.filter(card => {
        const searchMatch = card.name.toLowerCase().includes(filter.value.searchTerm.toLowerCase())
        const typeMatch = filter.value.types.length === 0 || filter.value.types.includes(card.type)
        const rarityMatch = filter.value.rarities.length === 0 || filter.value.rarities.includes(card.rarity)
        const cardNameMatch = !filter.value.cardName || card.name === filter.value.cardName
        return searchMatch && typeMatch && rarityMatch && cardNameMatch
      })
    })

    const router = useRouter()

    const goToCardDetail = (id: number) => {
      router.push(`/card/${id}`)
    }

    return {
      filteredCards,
      applyFilter,
      goToCardDetail
    }
  }
})
</script>

<style scoped>
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
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f9f9f9;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
  color: #2c3e50;
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
</style>