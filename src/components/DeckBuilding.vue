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
                    <img :src="card.imageUrl" :alt="card.name" class="card-image">
                </div>
                <div v-for="i in (isMobile ? 20 : 20) - deck.length" :key="i + deck.length" class="card-slot empty"></div>
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
                <img :src="card.imageUrl" :alt="card.name" class="card-image">
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
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted } from 'vue'
import { cards } from '@/data/cards'
import type { Card } from '@/data/cards'
import { toJpeg } from 'html-to-image'

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

        const exportAsJPG = async () => {
            if (deckContainer.value) {
                showNameInputBox.value = false
                try {
                    // 等待所有图片加载完成
                    await Promise.all(Array.from(deckContainer.value.querySelectorAll('img')).map(img => {
                        if (img.complete) return Promise.resolve();
                        return new Promise(resolve => {
                            img.onload = img.onerror = resolve;
                        });
                    }));

                    const dataUrl = await toJpeg(deckContainer.value, {
                        quality: 0.95,
                        backgroundColor: 'white',
                        width: deckContainer.value.offsetWidth,
                        height: deckContainer.value.offsetHeight,
                        style: {
                            transform: 'scale(1)',
                            transformOrigin: 'top left'
                        }
                    });

                    // 创建一个新的 Image 对象来加载生成的图片
                    const img = new Image();
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        if (ctx) {
                            const borderWidth = 10;  // 边框宽度
                            canvas.width = img.width + borderWidth * 2;
                            canvas.height = img.height + borderWidth * 2;

                            // 绘制白色边框
                            ctx.fillStyle = 'white';
                            ctx.fillRect(0, 0, canvas.width, canvas.height);

                            // 在边框内绘制原始图像
                            ctx.drawImage(img, borderWidth, borderWidth);

                            // 添加水印文字
                            ctx.font = 'bold 24px Arial';
                            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
                            const text = 'pokemon-tcg-pocket-dex.com';
                            const textWidth = ctx.measureText(text).width;
                            ctx.fillText(text, canvas.width - textWidth - 20, canvas.height - 20);

                            // 再次绘制文字，但稍微偏移，创建阴影效果
                            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                            ctx.fillText(text, canvas.width - textWidth - 22, canvas.height - 22);

                            // 使用 Blob 和 URL.createObjectURL 来创建下载链接
                            canvas.toBlob(blob => {
                                if (blob) {
                                    const url = URL.createObjectURL(blob);
                                    const link = document.createElement('a');
                                    link.download = `${deckName.value || 'deck'}.jpg`;
                                    link.href = url;
                                    
                                    // 对于 Safari，我们使用 window.open 来打开图片
                                    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                                        window.open(url, '_blank');
                                    } else {
                                        link.click();
                                    }
                                    
                                    setTimeout(() => {
                                        URL.revokeObjectURL(url);
                                    }, 100);
                                }
                            }, 'image/jpeg', 0.95);
                        }
                    };
                    img.src = dataUrl;
                } catch (error) {
                    console.error('导出失败:', error);
                    alert('导出失败，请稍后再试。');
                }
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

        const shareDeck = async () => {
            if (deckContainer.value) {
                try {
                    // 等待所有圖片加載完成
                    await Promise.all(Array.from(deckContainer.value.querySelectorAll('img')).map(img => {
                        if (img.complete) return Promise.resolve();
                        return new Promise(resolve => {
                            img.onload = img.onerror = resolve;
                        });
                    }));

                    // 使用 html-to-image 直接生成圖片
                    const dataUrl = await toJpeg(deckContainer.value, {
                        quality: 0.95,
                        backgroundColor: undefined,
                        width: deckContainer.value.offsetWidth,
                        height: deckContainer.value.offsetHeight,
                        style: {
                            transform: 'scale(1)',
                            transformOrigin: 'top left'
                        }
                    });

                    // 創建一個新的 canvas 來添加邊框和水印
                    const img = new Image();
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        if (ctx) {
                            const borderWidth = 10;  // 邊框寬度
                            canvas.width = img.width + borderWidth * 2;
                            canvas.height = img.height + borderWidth * 2;

                            // 繪製白色邊框
                            ctx.fillStyle = 'white';
                            ctx.fillRect(0, 0, canvas.width, canvas.height);

                            // 在邊框內繪製原始圖像
                            ctx.drawImage(img, borderWidth, borderWidth);

                            // 添加水印文字
                            ctx.font = 'bold 24px Arial';
                            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
                            const text = 'pokemon-tcg-pocket-dex.com';
                            const textWidth = ctx.measureText(text).width;
                            ctx.fillText(text, canvas.width - textWidth - 20, canvas.height - 20);

                            // 再次繪製文字，但稍微偏移，創建陰影效果
                            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                            ctx.fillText(text, canvas.width - textWidth - 22, canvas.height - 22);

                            const finalDataUrl = canvas.toDataURL('image/jpeg', 0.9);
                            const blob = dataURLtoBlob(finalDataUrl);
                            const file = new File([blob], 'deck.jpg', { type: 'image/jpeg' });

                            if (navigator.share) {
                                navigator.share({
                                    files: [file],
                                    title: deckName.value || '我的牌組',
                                    text: '查看我的寶可夢卡牌牌組！'
                                }).catch(console.error);
                            } else {
                                const link = document.createElement('a');
                                link.href = URL.createObjectURL(blob);
                                link.download = `${deckName.value || 'deck'}.jpg`;
                                link.click();
                            }
                        }
                    };
                    img.src = dataUrl;
                } catch (error) {
                    console.error('分享失敗:', error);
                    alert('分享失敗，請稍後再試。');
                }
            }
        };

        // 輔助函數：將 Data URL 轉換為 Blob
        const dataURLtoBlob = (dataURL: string) => {
            const arr = dataURL.split(',');
            const mime = arr[0].match(/:(.*?);/)![1];
            const bstr = atob(arr[1]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        };

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
    justify-content: center; /* 添加这行 */
    max-width: 1200px; /* 添加这行，可以根据需要调整 */
    margin: 0 auto; /* 添加这行 */
}

.gallery-card {
    position: relative;
    width: 100px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
}

.gallery-card:hover {
    transform: scale(1.05);
}

.gallery-card.selected {
    box-shadow: 0 0 10px 3px #4CAF50;
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
</style>