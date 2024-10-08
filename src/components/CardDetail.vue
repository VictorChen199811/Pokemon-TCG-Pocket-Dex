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
        <div class="card-series-pack">
          <div class="card-series" v-if="card.packs">
            <span>系列：</span>
            <img :src="getSeriesImage(card.packs)" :alt="card.packs" class="series-image">
          </div>
          <div class="card-pack" v-if="card.pack && card.pack.length">
            <span>卡包：</span>
            <div class="pack-images">
              <img v-for="pack in card.pack" :key="pack" :src="`/img/packs/${pack}.png`" :alt="pack" class="pack-image">
            </div>
          </div>
        </div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { cards } from '../data/cards'

export default defineComponent({
  name: 'CardDetail',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  setup() {
    const totalCards = cards.length

    const formatAbilityText = (text: string) => {
      const boldWords = ['睡眠', 'HP', '中毒', '麻痺', '燒傷', '混亂'];
      return boldWords.reduce((acc, word) => {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        return acc.replace(regex, `<b>${word}</b>`);
      }, text);
    };

    const getSeriesImage = (series: string) => {
      return series === 'A' ? '/img/packs/GeneticApex.png' : `/img/packs/${series}.png`;
    }

    return { totalCards, formatAbilityText, getSeriesImage }
  }
})
</script>

<style scoped>
.card-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-color);
}

.card-content {
  display: flex;
  width: 100%;
  max-width: 800px;
  background-color: #333333; /* 深灰色背景 */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.3); /* 黃色陰影 */
  position: relative;
}

.card-image-container {
  flex: 1;
  padding: 1rem;
  background-color: #222222; /* 更深的灰色背景 */
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
  color: var(--primary-color);
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
  color: var(--text-color);
}

.move-defect :deep(b) {
  font-weight: bold;
  color: var(--primary-color);
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

hr {
  border: none;
  border-top: 1px solid var(--primary-color);
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

.ability {
  margin-bottom: 1rem;
}

.ability h3 {
  font-size: 1.1em;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  color: var(--primary-color);
  font-weight: bold;
}

.ability-icon {
  width: 100px;
  height: auto;
  margin-right: 0.5rem;
}

.ability p {
  font-style: italic;
  font-size: 0.9em;
  color: var(--text-color);
  text-decoration: none;
}

.ability p :deep(b), .move-defect :deep(b) {
  font-weight: bold;
  color: var(--primary-color);
}

.card-series-pack {
  display: flex;
  flex-direction: column;
  gap: 15px;  /* 增加間距 */
  margin-bottom: 1.5rem;  /* 增加底部間距 */
}

.card-series, .card-pack {
  display: flex;
  align-items: center;
}

.series-image, .pack-image {
  width: 60px;  /* 原來的 30px 的三倍 */
  height: auto;
  margin-left: 10px;  /* 增加左邊距 */
}

.pack-images {
  display: flex;
  gap: 15px;  /* 增加圖片之間的間距 */
  margin-left: 10px;
  flex-wrap: wrap;  /* 允許圖片換行 */
}

/* 為了確保文字對齊，可以添加以下樣式 */
.card-series span, .card-pack span {
  min-width: 50px;  /* 確保文字有足夠的空間 */
}

/* 對於小屏幕設備，我們可能需要調整佈局 */
@media (max-width: 768px) {
  .card-series-pack {
    flex-direction: column;
  }

  .series-image, .pack-image {
    width: 60px;  /* 在小屏幕上稍微縮小一點 */
  }
}

</style>