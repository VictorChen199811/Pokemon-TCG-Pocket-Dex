<template>
  <div class="card-detail" v-if="card">
    <div class="card-content">
      <div class="card-image-container">
        <img :src="card.imageUrl" :alt="card.name" class="card-image">
      </div>
      <div class="card-info">
        <div class="card-header">
          <h2>{{ card.name }}</h2>
          <div class="hp">{{ card.hp }} HP <img :src="card.type" :alt="'屬性'" class="type-image"></div>
        </div>
        <div>
          <img :src="card.rarity" :alt="'稀有度'" class="rarity-image">
        </div>
        <hr>
        <div v-if="card.ability" class="ability">
          <h3>
            <img src="/img/description/ability.png" alt="Ability" class="ability-icon">
            {{ card.ability.name }}
          </h3>
          <p v-html="formatAbilityText(card.ability.defect)"></p>
        </div>
        <hr v-if="card.ability">
        <div class="moves">
          <div class="move" v-if="card.move_1">
            <div class="move-energy">
              <img v-for="(energy, index) in card.move_1.move_energy" :key="index" :src="`/img/type/${energy}.png`"
                :alt="energy" class="energy-image">
            </div>
            <div class="move-info">
              <span class="move-name">{{ card.move_1.move_name }}</span>
              <span class="move-damage">{{ card.move_1.damage }}</span>
            </div>
          </div>
          <p v-if="card.move_1?.move_defect" class="move-defect" v-html="formatAbilityText(card.move_1.move_defect)"></p>
        </div>
        <hr v-if="card.move_2">
        <div class="moves" v-if="card.move_2">
          <div class="move">
            <div class="move-energy">
              <img v-for="(energy, index) in card.move_2.move_energy" :key="index" :src="`/img/type/${energy}.png`"
                :alt="energy" class="energy-image">
            </div>
            <div class="move-info">
              <span class="move-name">{{ card.move_2.move_name }}</span>
              <span class="move-damage">{{ card.move_2.damage }}</span>
            </div>
          </div>
          <p v-if="card.move_2?.move_defect" class="move-defect" v-html="formatAbilityText(card.move_2.move_defect)"></p>
        </div>
        <hr>
        <div class="card-footer">
          <div class="weakness" v-if="card.weakness">
            <span>弱點</span>
            <img :src="`/img/type/${card.weakness.type}.png`" :alt="card.weakness.type" class="type-image">
            <span>+{{ card.weakness.multiplier }}</span>
          </div>
          <div class="retreat-cost" v-if="card.retreat_cost">
            <span>撤退</span>
            <img v-for="n in card.retreat_cost" :key="n" src="/img/type/colorless.png" alt="colorless"
              class="energy-image">
          </div>
        </div>
        <hr>
        <div class="card-number">
          <span>{{ card.id }} of {{ totalCards }}</span>
          <button @click="goBack" class="back-button">返回</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { cards } from '../data/cards'

export default defineComponent({
  name: 'CardDetail',
  setup() {
    const route = useRoute()
    const router = useRouter()

    const card = computed(() => {
      const id = Number(route.params.id)
      return cards.find(c => c.id === id)
    })

    const totalCards = cards.length

    const goBack = () => {
      router.push('/cards')
    }

    const formatAbilityText = (text: string) => {
      // 這裡定義需要加粗的關鍵詞
      const boldWords = ['睡眠', 'HP', '中毒', '麻痺', '燒傷', '混亂'];
      
      // 使用正則表達式替換關鍵詞為加粗版本
      return boldWords.reduce((acc, word) => {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        return acc.replace(regex, `<b>${word}</b>`);
      }, text);
    };

    onMounted(() => {
      // 在組件掛載時滾動到頁面頂部
      window.scrollTo(0, 0)
    })

    return { card, totalCards, goBack, formatAbilityText }
  }
})
</script>

<style scoped>
.card-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f0f0f0;
}

.card-content {
  display: flex;
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.card-image-container {
  flex: 1;
  padding: 1rem;
  background-color: #f8f8f8;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.card-info {
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.hp {
  display: flex;
  align-items: center;
}

.type-image, .energy-image {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}

.moves {
  margin-bottom: 1rem;
}

.move {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.move-energy {
  margin-right: 0.5rem;
}

.move-info {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}

.move-defect {
  font-style: italic;
  font-size: 0.9em;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
}

.move-defect :deep(b) {
  font-weight: bold;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 1rem;
}

.weakness, .retreat-cost {
  display: flex;
  align-items: center;
}

.card-number {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 0.9em;
}

.rarity-image {
  height: 20px;
}

.back-button {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #45a049;
}

hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 1rem 0;
  width: 100%;
}

@media (max-width: 768px) {
  .card-content {
    flex-direction: column;
  }
  
  .card-image-container, .card-info {
    width: 100%;
  }
}

/* 新增 ability 相關樣式 */
.ability {
  margin-bottom: 1rem;
}

.ability h3 {
  font-size: 1.1em;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  color: red;
  font-weight: bold;  /* 添加這行來使文字變粗 */
}

.ability-icon {
  width: 100px;
  height: auto;
  margin-right: 0.5rem;
}

.ability p {
  font-style: italic;
  font-size: 0.9em;
  color: inherit;  /* 使用父元素的文字顏色 */
  text-decoration: none;  /* 移除下劃線 */
}

.ability p :deep(b), .move-defect :deep(b) {
  font-weight: bold;
}

/* ... 其他樣式保持不變 ... */
</style>