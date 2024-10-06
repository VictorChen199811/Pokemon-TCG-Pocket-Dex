<template>
    <div class="deck-building">
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2>牌組構築</h2>
            <div class="deck-actions">
                <button @click="clearDeck" class="clear-deck-button">清空牌組</button>
                <div class="export-buttons">
                    <!-- PC 版本的按钮 -->
                    <button @click="showNameInput" class="export-button pc-button">分享牌組</button>
                    <!-- 手机版本的按钮 -->
                    <button @click="shareDeck" class="export-button mobile-button">分享牌組</button>
                </div>
            </div>
        </div>
        <!-- 10*2 的牌組區域 -->
        <div class="deck-container" ref="deckContainer">
            <div v-if="deckName" class="deck-name">{{ deckName }}</div>
            <div :class="['deck-area', { 'mobile-layout': isMobile }]">
                <div v-for="(card, index) in deck" :key="index" class="card-slot" @click="removeFromDeck(index)">
                    <picture>
                        <source :srcset="card.imageUrl" type="image/webp">
                        <img :src="card.imageUrl.replace('.webp', '.jpg')" :alt="card.name" class="card-image">
                    </picture>
                </div>
                <div v-for="i in 20 - deck.length" :key="i + deck.length" class="card-slot empty"></div>
            </div>
        </div>

        <!-- 轻量级过滤组件 -->
        <div class="light-filter-component">
            <div class="filter-toggle" @click="toggleFilter">
                <img src="/img/material-symbols-light--keyboard-arrow-down-rounded.png"
                    :class="{ 'rotate': isFilterVisible }" alt="Toggle filter" class="toggle-icon">
            </div>
            <div v-if="isFilterVisible" class="filter-content">
                <div class="filter-grid">
                    <label>搜索</label>
                    <input type="text" v-model="searchTerm" placeholder="請輸入寶可夢名稱" @input="filterCards">
                    <label>屬性</label>
                    <div class="type-icons">
                        <img v-for="type in types" :key="type" :src="type" @click="toggleType(type)"
                            :class="{ active: selectedTypes.includes(type) }">
                    </div>
                </div>
            </div>
        </div>
        <!-- 所有卡牌圖片區域 -->
        <div class="card-gallery">
            <div v-for="card in filteredCards" :key="card.id" 
                 class="gallery-card" 
                 @click="addToDeck(card)"
                 :class="{ 
                   disabled: !canAddCard(card),
                   selected: isCardSelected(card)
                 }">
                <picture>
                    <source :srcset="card.imageUrl" type="image/webp">
                    <img :src="card.imageUrl.replace('.webp', '.jpg')" :alt="card.name" class="card-image">
                </picture>
                <div v-if="isCardSelected(card)" class="card-count">
                    {{ getCardCount(card) }}
                </div>
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

        <!-- 添加回到顶部的按钮 -->
        <button @click="scrollToTop" class="scroll-to-top" v-show="showScrollTop">UP</button>

        <!-- Loading 遮罩 -->
        <div v-if="isLoading" class="loading-overlay">
            <div class="loading-spinner"></div>
            <p>正在生成牌組圖片，請稍候...</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted } from 'vue'
import { cards } from '@/data/cards'
import type { Card } from '@/data/cards'

export default defineComponent({
    name: 'DeckBuilding',
    setup() {
        const deck = ref<Card[]>([])
        const deckContainer = ref<HTMLElement | null>(null)
        const deckName = ref('')
        const showNameInputBox = ref(false)
        const searchTerm = ref('')
        const selectedTypes = ref<string[]>([])
        const isFilterVisible = ref(true)  // 新增：控制过滤器显示状态
        const isMobile = ref(false)
        const showScrollTop = ref(false)
        const isLoading = ref(false)

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

        const filteredCards = computed(() => {
            return cards.filter(card => {
                const nameMatch = card.name.toLowerCase().includes(searchTerm.value.toLowerCase())
                const typeMatch = selectedTypes.value.length === 0 || selectedTypes.value.includes(card.type)
                return nameMatch && typeMatch
            })
        })

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

        const exportDeckAsImage = async () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                console.error('無法創建 canvas context');
                return null;
            }

            const scale = 2; // 增加畫布的縮放比例
            const cardWidth = 100 * scale;
            const cardHeight = 140 * scale;
            const padding = 10 * scale;
            const columns = isMobile.value ? 4 : 10;
            const rows = isMobile.value ? 5 : 2;

            const borderWidth = 2 * scale;
            const outerPadding = 20 * scale;

            canvas.width = columns * cardWidth + (columns + 1) * padding + 2 * outerPadding + 2 * borderWidth;
            canvas.height = rows * cardHeight + (rows + 1) * padding + 2 * outerPadding + 2 * borderWidth;

            // 設置 canvas 的縮放
            ctx.scale(scale, scale);

            // 繪製外框
            ctx.fillStyle = '#ccc';
            ctx.fillRect(0, 0, canvas.width / scale, canvas.height / scale);

            // 繪製背景圖片
            const bgImage = new Image();
            bgImage.src = '/img/JpgDecoration/decoration.png';
            await new Promise((resolve) => {
                bgImage.onload = resolve;
            });
            const bgAspectRatio = bgImage.width / bgImage.height;
            const canvasAspectRatio = canvas.width / canvas.height;
            let drawWidth, drawHeight, drawX, drawY;

            if (bgAspectRatio > canvasAspectRatio) {
                drawHeight = canvas.height / scale;
                drawWidth = drawHeight * bgAspectRatio;
                drawX = (canvas.width / scale - drawWidth) / 2;
                drawY = 0;
            } else {
                drawWidth = canvas.width / scale;
                drawHeight = drawWidth / bgAspectRatio;
                drawX = 0;
                drawY = (canvas.height / scale - drawHeight) / 2;
            }

            ctx.drawImage(bgImage, drawX, drawY, drawWidth, drawHeight);

            // 繪製牌組名稱
            if (deckName.value) {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
                ctx.fillRect(borderWidth / scale, borderWidth / scale, (canvas.width - 2 * borderWidth) / scale, 40);
                ctx.font = 'bold 24px Arial';
                ctx.fillStyle = 'white';
                ctx.fillText(deckName.value, borderWidth / scale + 10, borderWidth / scale + 30);
            }

            // 繪製卡片或空白格子
            for (let i = 0; i < 20; i++) {
                const x = (i % columns) * (cardWidth / scale + padding / scale) + outerPadding / scale + borderWidth / scale;
                const y = Math.floor(i / columns) * (cardHeight / scale + padding / scale) + outerPadding / scale + borderWidth / scale + (deckName.value ? 40 : 0);

                if (i < deck.value.length) {
                    const card = deck.value[i];
                    const img = new Image();
                    img.src = card.imageUrl;
                    await new Promise((resolve) => {
                        img.onload = resolve;
                    });
                    // 縮小卡片 10%
                    const scaledCardWidth = cardWidth * 0.9 / scale;
                    const scaledCardHeight = cardHeight * 0.9 / scale;
                    const offsetX = (cardWidth / scale - scaledCardWidth) / 2;
                    const offsetY = (cardHeight / scale - scaledCardHeight) / 2;
                    ctx.drawImage(img, x + offsetX, y + offsetY, scaledCardWidth, scaledCardHeight);
                } else {
                    // 繪製空白格子
                    ctx.fillStyle = '#f0f0f0';
                    ctx.fillRect(x, y, cardWidth / scale, cardHeight / scale);
                    ctx.strokeStyle = '#ddd';
                    ctx.strokeRect(x, y, cardWidth / scale, cardHeight / scale);
                }
            }

            // 添加水印
            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            const text = 'pokemon-tcg-pocket-dex.com';
            const textWidth = ctx.measureText(text).width;
            ctx.fillText(text, (canvas.width - textWidth * scale - 20 * scale) / scale, (canvas.height - 20 * scale) / scale);

            return canvas;
        };

        const exportAsJPG = async () => {
            showNameInputBox.value = false;
            isLoading.value = true; // 顯示 loading 遮罩
            try {
                const canvas = await exportDeckAsImage();
                if (canvas) {
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
                    const link = document.createElement('a');
                    link.download = `${deckName.value || 'deck'}.jpg`;
                    link.href = dataUrl;
                    link.click();
                } else {
                    throw new Error('無法生成圖片');
                }
            } catch (error) {
                console.error('導出失敗:', error);
                alert('導出失敗，請稍後再試。');
            } finally {
                isLoading.value = false; // 隱藏 loading 遮罩
            }
        };

        const shareDeck = async () => {
            isLoading.value = true; // 顯示 loading 遮罩
            try {
                const canvas = await exportDeckAsImage();
                if (canvas) {
                    canvas.toBlob(async (blob) => {
                        if (blob) {
                            const file = new File([blob], 'deck.jpg', { type: 'image/jpeg' });
                            if (navigator.share) {
                                try {
                                    await navigator.share({
                                        files: [file],
                                        title: deckName.value || '我的牌組',
                                        text: '查看我的寶可夢卡牌牌組！'
                                    });
                                } catch (error) {
                                    console.error('分享失敗:', error);
                                    alert('分享失敗，請稍後再試。');
                                }
                            } else {
                                const url = URL.createObjectURL(blob);
                                const link = document.createElement('a');
                                link.href = url;
                                link.download = `${deckName.value || 'deck'}.jpg`;
                                link.click();
                                setTimeout(() => URL.revokeObjectURL(url), 100);
                            }
                        }
                    }, 'image/jpeg', 0.95);
                } else {
                    throw new Error('無法生成圖片');
                }
            } catch (error) {
                console.error('生成圖片失敗:', error);
                alert('生成圖片失敗，請稍後再試。');
            } finally {
                isLoading.value = false; // 隱藏 loading 遮罩
            }
        };

        const toggleType = (type: string) => {
            const index = selectedTypes.value.indexOf(type)
            if (index === -1) {
                selectedTypes.value.push(type)
            } else {
                selectedTypes.value.splice(index, 1)
            }
        }

        const filterCards = () => {
            // 这个函数可以为空，因为我们使用了计算性 filteredCards
        }

        const toggleFilter = () => {
            isFilterVisible.value = !isFilterVisible.value
        }

        const isCardSelected = (card: Card) => {
            return deck.value.some(c => c.id === card.id);
        };

        const getCardCount = (card: Card) => {
            return deck.value.filter(c => c.id === card.id).length;
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        const toggleScrollTopButton = () => {
            showScrollTop.value = window.pageYOffset > 300
        }

        const clearDeck = () => {
            if (confirm('確定要清空牌組嗎？')) {
                deck.value = [];
            }
        }

        onMounted(() => {
            const checkMobile = () => {
                isMobile.value = window.innerWidth <= 768
            }
            checkMobile()
            window.addEventListener('resize', checkMobile)
            window.addEventListener('scroll', toggleScrollTopButton)
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', toggleScrollTopButton)
        })

        return {
            cards,
            deck,
            deckContainer,
            deckName,
            showNameInputBox,
            searchTerm,
            selectedTypes,
            types,
            filteredCards,
            addToDeck,
            removeFromDeck,
            canAddCard,
            showNameInput,
            cancelNameInput,
            exportAsJPG,
            toggleType,
            filterCards,
            isFilterVisible,
            toggleFilter,
            shareDeck,
            isMobile,
            isCardSelected,
            getCardCount,
            showScrollTop,
            scrollToTop,
            clearDeck,
            isLoading,
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

.deck-area.mobile-layout {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
}

.card-slot {
    aspect-ratio: 2.5 / 3.5;
    background-color: #333333; /* 深灰色背景 */
    border: 1px solid var(--primary-color); /* 黃色邊框 */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
}

.card-slot img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.card-slot.empty {
    background-color: #222222; /* 更深的灰色背景 */
    border: 1px dashed var(--primary-color);
}

.card-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center; /* 添加这行 */
    max-width: 1200px; /* 添加这行，可以根据需要调整 */
    margin: 0 auto; /* 添加这行 */
}

.gallery-card {
    position: relative;
    width: 100px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    background-color: #333333; /* 深灰色背景 */
    border: 1px solid var(--primary-color); /* 黃色邊框 */
}

.gallery-card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px var(--primary-color);
}

.gallery-card.selected {
    box-shadow: 0 0 10px 3px var(--secondary-color);
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

.export-buttons {
    display: flex;
    gap: 10px;
}

.export-button {
    margin-bottom: 10px;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: orange; /* 将按钮颜色统一设置为橘色 */
}

.export-button:hover {
    opacity: 0.9;
}

.pc-button {
    display: inline-block;
}

.mobile-button {
    display: none;
}

@media (max-width: 768px) {
    .pc-button {
        display: none;
    }
    .mobile-button {
        display: inline-block;
    }
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

/* 添加轻量级过滤组件的样式 */
.light-filter-component {
    background-color: #1e2124;
    color: white;
    padding: 5px;
    border-radius: 8px;
    margin-bottom: 20px;
}

.filter-toggle {
    cursor: pointer;
    background-color: #1e2124; /* 保持与 light-filter-component 相同的背景色 */
    border-radius: 20px;
    width: 100%;
    height: 10px; /* 增加高度以容纳图标 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.toggle-icon {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
    /* 移除背景色和边框半径 */
}

.toggle-icon.rotate {
    transform: rotate(180deg);
}

.filter-content {
    margin-top: 10px;
}

.filter-grid {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 15px;
    align-items: center;
}

.filter-grid label {
    font-weight: bold;
    text-align: center;
}

.filter-grid input {
    padding: 8px;
    background-color: #2c2f33;
    color: white;
    border: none;
    border-radius: 4px;
    width: 100%; 
    justify-self: start; 
}

.type-icons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding-bottom: 10px;
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

.card-count {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: orange;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    transition: opacity 0.3s, transform 0.3s;
    z-index: 1000;
}

.scroll-to-top:hover {
    transform: scale(1.1);
}

.deck-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.clear-deck-button {
    margin-bottom: 10px;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #dc3545;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.clear-deck-button:hover {
    background-color: #c82333;
}

.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loading-spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.loading-overlay p {
    color: white;
    margin-top: 10px;
}
</style>