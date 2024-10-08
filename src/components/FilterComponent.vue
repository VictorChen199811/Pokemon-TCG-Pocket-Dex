<template>
  <div class="filter-component">
    <div class="filter-row">
      <label>搜索</label>
      <input type="text" v-model="searchTerm" placeholder="請輸入寶可夢名稱" @input="emitFilter">
    </div>
    <div class="filter-row">
      <label>屬性</label>
      <div class="type-icons">
        <img v-for="type in types" :key="type" :src="type" @click="toggleType(type)" :class="{ active: selectedTypes.includes(type) }">
      </div>
    </div>
    <div class="filter-row">
      <label>稀有度</label>
      <div class="rarity-icons">
        <template v-for="(rarity, index) in rarities" :key="rarity.value">
          <img 
            :src="rarity.value" 
            @click="toggleRarity(rarity.value)" 
            :class="{ active: selectedRarities.includes(rarity.value) }"
          >
          <span v-if="index < rarities.length - 1" class="rarity-separator">|</span>
        </template>
      </div>
    </div>
    <div class="filter-row">
      <label>系列</label>
      <select v-model="selectedSeries" @change="updatePacks">
        <option value="">全部顯示</option>
        <option v-for="series in availableSeries" :key="series" :value="series">
          {{ getSeriesName(series) }}
        </option>
      </select>
    </div>
    <div class="filter-row">
      <label>擴充包</label>
      <select v-model="selectedPack" @change="emitFilter">
        <option value="">全部顯示</option>
        <option v-for="pack in availablePacks" :key="pack" :value="pack">{{ getPackName(pack) }}</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { cards } from '../data/cards'

export default defineComponent({
  name: 'FilterComponent',
  emits: ['filter'],
  setup(props, { emit }) {
    const searchTerm = ref('')
    const selectedTypes = ref<string[]>([])
    const selectedRarities = ref<string[]>([])
    const selectedSeries = ref('')
    const selectedPack = ref('')

    const types = [
      '/img/type/grass.png',
      '/img/type/fire.png',
      '/img/type/water.png',
      '/img/type/electric.png',
      '/img/type/psychic.png',
      '/img/type/fighting.png',
      '/img/type/darkness.png',
      '/img/type/metal.png',
      '/img/type/dragon.png',
      '/img/type/colorless.png',
    ]

    const rarities = [
      { value: '/img/grade/diamond1.png', label: '◇' },
      { value: '/img/grade/diamond2.png', label: '◇◇' },
      { value: '/img/grade/diamond3.png', label: '◇◇◇' },
      { value: '/img/grade/diamond4.png', label: '◇◇◇◇' },
      { value: '/img/grade/star1.png', label: '☆' },
      { value: '/img/grade/star2.png', label: '☆☆' },
      { value: '/img/grade/star3.png', label: '☆☆☆' },
      { value: '/img/grade/crown.png', label: '👑' }
    ]

    const availableSeries = computed(() => {
      return [...new Set(cards.map(card => card.packs))].sort()
    })

    const availablePacks = computed(() => {
      let packs;
      if (!selectedSeries.value) {
        packs = [...new Set(cards.flatMap(card => card.pack))];
      } else {
        packs = [...new Set(cards
          .filter(card => card.packs === selectedSeries.value)
          .flatMap(card => card.pack))];
      }
      return packs.filter(pack => pack && pack.trim() !== '').sort();
    })

    const toggleType = (type: string) => {
      const index = selectedTypes.value.indexOf(type)
      if (index === -1) {
        selectedTypes.value.push(type)
      } else {
        selectedTypes.value.splice(index, 1)
      }
      emitFilter()
    }

    const toggleRarity = (rarity: string) => {
      const index = selectedRarities.value.indexOf(rarity)
      if (index === -1) {
        selectedRarities.value.push(rarity)
      } else {
        selectedRarities.value.splice(index, 1)
      }
      emitFilter()
    }

    const updatePacks = () => {
      selectedPack.value = ''
      emitFilter()
    }

    const emitFilter = () => {
      emit('filter', {
        searchTerm: searchTerm.value,
        types: selectedTypes.value,
        rarities: selectedRarities.value,
        series: selectedSeries.value,
        pack: selectedPack.value
      })
    }

    const getSeriesName = (series: string) => {
      return series === 'A' ? '最強的基因' : series
    }

    const getPackName = (pack: string) => {
      switch (pack) {
        case 'charizard':
          return '噴火龍'
        case 'mewtwo':
          return '超夢'
        case 'pikachu':
          return '皮卡丘'
        default:
          return pack
      }
    }

    return {
      searchTerm,
      selectedTypes,
      selectedRarities,
      selectedSeries,
      selectedPack,
      types,
      rarities,
      availableSeries,
      availablePacks,
      toggleType,
      toggleRarity,
      updatePacks,
      emitFilter,
      getSeriesName,
      getPackName
    }
  }
})
</script>

<style scoped>
.filter-component {
  background-color: #1e2124;
  color: white;
  padding: 20px;
  border-radius: 8px;
}

.filter-row {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.filter-row label {
  width: 100px;
  font-weight: bold;
}

input, select {
  flex-grow: 1;
  padding: 8px;
  background-color: #2c2f33;
  color: white;
  border: none;
  border-radius: 4px;
}

.type-icons, .rarity-icons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.type-icons img, .rarity-icons img {
  height: 30px;
  width: auto;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.type-icons img.active, .rarity-icons img.active {
  opacity: 1;
}

select {
  width: 100%;
}

.rarity-icons {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  align-items: center;
}

.rarity-separator {
  color: #666;
  font-weight: bold;
  margin: 0 5px;
}
</style>