<template>
  <div class="light-filter-component">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LightFilterComponent',
  emits: ['filter'],
  setup(props, { emit }) {
    const searchTerm = ref('')
    const selectedTypes = ref<string[]>([])

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

    const toggleType = (type: string) => {
      const index = selectedTypes.value.indexOf(type)
      if (index === -1) {
        selectedTypes.value.push(type)
      } else {
        selectedTypes.value.splice(index, 1)
      }
      emitFilter()
    }

    const emitFilter = () => {
      emit('filter', {
        searchTerm: searchTerm.value,
        types: selectedTypes.value,
      })
    }

    return {
      searchTerm,
      selectedTypes,
      types,
      toggleType,
      emitFilter
    }
  }
})
</script>

<style scoped>
.light-filter-component {
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

input {
  flex-grow: 1;
  padding: 8px;
  background-color: #2c2f33;
  color: white;
  border: none;
  border-radius: 4px;
}

.type-icons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.type-icons img {
  height: 30px;
  width: auto;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.type-icons img.active {
  opacity: 1;
}
</style>