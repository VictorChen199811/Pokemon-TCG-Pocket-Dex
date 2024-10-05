<template>
    <div class="deck-building">
        <h2>牌組構築</h2>

        <!-- 10*2 的牌組區域 -->
        <div class="deck-container" ref="deckContainer">
            <div v-if="deckName" class="deck-name">{{ deckName }}</div>
            <div class="deck-area">
                <div v-for="(card, index) in deck" :key="index" class="card-slot" @click="removeFromDeck(index)">
                    <img :src="card.imageUrl" :alt="card.name" class="card-image">
                </div>
                <div v-for="i in 20 - deck.length" :key="i + deck.length" class="card-slot empty"></div>
            </div>
        </div>

        <!-- 輸出為 JPG 的按鈕 -->
        <button @click="showNameInput" class="export-button">輸出為 JPG</button>

        <!-- 所有卡牌圖片區域 -->
        <div class="card-gallery">
            <div v-for="card in cards" :key="card.id" class="gallery-card" @click="addToDeck(card)"
                :class="{ disabled: !canAddCard(card) }">
                <img :src="card.imageUrl" :alt="card.name" class="card-image">
            </div>
        </div>

        <!-- 模態框 -->
        <div v-if="showNameInputBox" class="modal">
            <div class="modal-content">
                <h3>輸入牌組名稱</h3>
                <input v-model="deckName" placeholder="輸入牌組名稱" @keyup.enter="exportAsJPG">
                <div class="modal-buttons">
                    <button @click="exportAsJPG">確認</button>
                    <button @click="cancelNameInput">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { cards } from '@/data/cards'
import type { Card } from '@/data/cards'
import html2canvas from 'html2canvas'

export default defineComponent({
    name: 'DeckBuilding',
    setup() {
        const deck = ref<Card[]>([])
        const deckContainer = ref<HTMLElement | null>(null)
        const deckName = ref('')
        const showNameInputBox = ref(false)

        const cardCounts = computed(() => {
            const counts: { [key: string]: number } = {}
            deck.value.forEach(card => {
                counts[card.name] = (counts[card.name] || 0) + 1
            })
            return counts
        })

        const canAddCard = (card: Card) => {
            return (cardCounts.value[card.name] || 0) < 2 && deck.value.length < 20
        }

        const addToDeck = (card: Card) => {
            if (canAddCard(card)) {
                const insertIndex = deck.value.findIndex(c => c.id > card.id)
                if (insertIndex === -1) {
                    deck.value.push(card)
                } else {
                    deck.value.splice(insertIndex, 0, card)
                }
            }
        }

        const removeFromDeck = (index: number) => {
            deck.value.splice(index, 1)
        }

        const showNameInput = () => {
            showNameInputBox.value = true
        }

        const cancelNameInput = () => {
            showNameInputBox.value = false
        }

        const exportAsJPG = () => {
            if (deckContainer.value) {
                showNameInputBox.value = false
                html2canvas(deckContainer.value, {
                    backgroundColor: null,
                    scale: 2
                }).then(canvas => {
                    // 創建一個新的 canvas 來繪製邊框和水印
                    const borderedCanvas = document.createElement('canvas')
                    const borderedCtx = borderedCanvas.getContext('2d')
                    if (borderedCtx) {
                        const borderWidth = 10  // 邊框寬度
                        borderedCanvas.width = canvas.width + borderWidth * 2
                        borderedCanvas.height = canvas.height + borderWidth * 2

                        // 繪製白色邊框
                        borderedCtx.fillStyle = 'white'
                        borderedCtx.fillRect(0, 0, borderedCanvas.width, borderedCanvas.height)

                        // 在邊框內繪製原始圖像
                        borderedCtx.drawImage(canvas, borderWidth, borderWidth)

                        // 添加水印文字
                        borderedCtx.font = 'bold 24px Arial'
                        borderedCtx.fillStyle = 'rgba(0, 0, 0, 0.5)'  // 使用半透明黑色
                        const text = 'pokemon-tcg-pocket-dex.com'
                        const textWidth = borderedCtx.measureText(text).width
                        borderedCtx.fillText(text, borderedCanvas.width - textWidth - 20, borderedCanvas.height - 20)

                        // 再次繪製文字，但稍微偏移，創建陰影效果
                        borderedCtx.fillStyle = 'rgba(255, 255, 255, 0.8)'
                        borderedCtx.fillText(text, borderedCanvas.width - textWidth - 22, borderedCanvas.height - 22)

                        const link = document.createElement('a')
                        link.download = `${deckName.value || 'deck'}.jpg`
                        link.href = borderedCanvas.toDataURL('image/jpeg', 0.9)  // 使用較高的質量設置
                        link.click()
                    }
                })
            }
        }

        return {
            cards,
            deck,
            deckContainer,
            deckName,
            showNameInputBox,
            addToDeck,
            removeFromDeck,
            canAddCard,
            showNameInput,
            cancelNameInput,
            exportAsJPG
        }
    }
})
</script>

<style scoped>
.deck-building {
    padding: 20px;
}

.deck-container {
    position: relative;
    margin-bottom: 20px;
    border: 2px solid #ccc;
    background-image: url('/img/JpgDecoration/decoration.png');
    background-size: cover;
    background-position: center;
}

.deck-name {
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-bottom: 2px solid #ccc;
}

.deck-area {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
}

.card-slot {
    aspect-ratio: 2.5 / 3.5;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.card-slot.empty {
    cursor: default;
}

.card-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.gallery-card {
    width: 100px;
    cursor: pointer;
}

.gallery-card.disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.card-image {
    width: 100%;
    height: auto;
    object-fit: contain;
}

.export-button {
    margin-bottom: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.export-button:hover {
    background-color: #45a049;
}

.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    width: 300px;
    border-radius: 5px;
}

.modal-content h3 {
    margin-top: 0;
}

.modal-content input {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
}

.modal-buttons {
    display: flex;
    justify-content: flex-end;
}

.modal-buttons button {
    margin-left: 10px;
    padding: 5px 10px;
}
</style>