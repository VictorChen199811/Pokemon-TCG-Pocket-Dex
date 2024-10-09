<template>
  <div class="deck-search-component">
    <div class="filter-row">
      <label>更新日期</label>
      <select v-model="selectedUpdateDate" @change="emitSearch">
        <option value="">所有</option>
        <option value="lastWeek">過去一周</option>
        <option value="lastMonth">過去一個月</option>
        <option value="lastYear">過去一年</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const selectedUpdateDate = ref('');

const emit = defineEmits(['search']);

const emitSearch = () => {
  emit('search', {
    updateDate: selectedUpdateDate.value,
  });
};

watch([selectedUpdateDate], () => {
  emitSearch();
}, { deep: true });
</script>

<style scoped>
.deck-search-component {
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

.filter-row select {
  flex-grow: 1;
  padding: 8px;
  background-color: #2c2f33;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>