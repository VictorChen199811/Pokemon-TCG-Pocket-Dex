export interface Card {
    id: number;
    name: string;
    imageUrl: string;
    type: string;
    rarity: string;
    packs: string;
    hp?: number;
    ability?: Ability;
    move_1: MoveData;
    move_2?: MoveData;
    weakness?: Weakness;
    retreat_cost?: number;
}

interface Weakness {
    type: string;
    multiplier: number;
}

interface MoveData {
    move_name: string;
    damage?: number;
    move_defect?: string;
    move_energy?: Array<string>;
}

interface Ability {
    name: string,
    defect: string,
}

export const cards: Card[] = [
    {
        id: 1,
        name: '妙蛙種子',
        imageUrl: '/img/GeneticApex/1.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '藤鞭', damage: 40, move_energy: ['grass', 'colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 2,
        name: '妙蛙草',
        imageUrl: '/img/GeneticApex/2.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {move_name: '飛葉快刀', damage: 60, move_energy: ['grass', 'colorless', 'colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 3,
        name: '妙蛙花',
        imageUrl: '/img/GeneticApex/3.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 160,
        move_1: {
            move_name: '超級吸取',
            damage: 80,
            move_defect: '將這隻寶可夢恢復30HP。',
            move_energy: ['grass', 'grass', 'colorless', 'colorless']
        },
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 4,
        name: '妙蛙花EX',
        imageUrl: '/img/GeneticApex/4.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond4.png',
        packs: '',
        hp: 190,
        move_1: {move_name: '飛葉快刀', damage: 60, move_energy: ['grass', 'colorless', 'colorless']},
        move_2: {
            move_name: '巨型綻放',
            damage: 100,
            move_defect: '將這隻寶可夢恢復30HP。',
            move_energy: ['grass', 'grass', 'colorless', 'colorless']
        },
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 5,
        name: '綠毛蟲',
        imageUrl: '/img/GeneticApex/5.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 50,
        move_1: {
            move_name: '尋找朋友',
            move_defect: '從自己的牌庫隨機將一張草系寶可夢加入手牌。',
            move_energy: ['colorless']
        },
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 6,
        name: '鐵甲蛹',
        imageUrl: '/img/GeneticApex/6.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '蟲咬', damage: 30, move_energy: ['colorless', 'colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 7,
        name: '巴大蝶',
        imageUrl: '/img/GeneticApex/7.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 120,
        ability: {name: '粉療', defect: '在自己的回合時，可以使用1次。將自己的所有寶可夢恢復20HP。'},
        move_1: {move_name: '起風', damage: 60, move_energy: ['grass', 'colorless', 'colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 8,
        name: '獨角蟲',
        imageUrl: '/img/GeneticApex/8.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 50,
        move_1: {move_name: '刺刺痛痛', damage: 20, move_energy: ['grass']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 9,
        name: '鐵殼蛹',
        imageUrl: '/img/GeneticApex/9.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '蟲咬', damage: 30, move_energy: ['grass']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 10,
        name: '大針蜂',
        imageUrl: '/img/GeneticApex/10.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 120,
        move_1: {move_name: '銳利刺針', damage: 70, move_energy: ['grass']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 11,
        name: '走路草',
        imageUrl: '/img/GeneticApex/11.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '衝撞', damage: 20, move_energy: ['grass']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 12,
        name: '臭臭花',
        imageUrl: '/img/GeneticApex/12.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '口水', damage: 60, move_energy: ['grass', 'colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 13,
        name: '霸王花',
        imageUrl: '/img/GeneticApex/13.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 140,
        move_1: {
            move_name: '芳香催眠',
            damage: 80,
            move_defect: '將對手的戰鬥寶可夢<b>睡眠</b>。',
            move_energy: ['grass', 'grass', 'colorless']
        },
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 14,
        name: '派拉斯',
        imageUrl: '/img/GeneticApex/14.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '抓', damage: 30, move_energy: ['grass', 'colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 15,
        name: '派拉斯特',
        imageUrl: '/img/GeneticApex/15.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 120,
        move_1: {move_name: '劈開', damage: 80, move_energy: ['grass', 'grass', 'colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 16,
        name: '毛球',
        imageUrl: '/img/GeneticApex/16.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '撞擊', damage: 20, move_energy: ['grass']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 17,
        name: '摩魯蛾',
        imageUrl: '/img/GeneticApex/17.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {
            move_name: '毒粉',
            damage: 30,
            move_defect: '將對手的戰鬥寶可夢<b>中毒</b>。',
            move_energy: ['grass', 'colorless', 'colorless']
        },
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 18,
        name: '喇叭芽',
        imageUrl: '/img/GeneticApex/18.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '藤鞭', damage: 20, move_energy: ['grass']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 19,
        name: '口呆花',
        imageUrl: '/img/GeneticApex/19.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {move_name: '飛葉快刀', damage: 40, move_energy: ['grass', 'colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 20,
        name: '大食花',
        imageUrl: '/img/GeneticApex/20.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 140,
        ability: {
            name: '芳香陷阱',
            defect: '若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。選擇對手的備戰區的1隻<b>基礎</b>寶可夢，與戰鬥寶可夢交換。'
        },
        move_1: {move_name: '藤鞭', damage: 60, move_energy: ['grass', 'colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 21,
        name: '蛋蛋',
        imageUrl: '/img/GeneticApex/21.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 50,
        move_1: {move_name: '種子炸彈', damage: 60, move_energy: ['grass']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 22,
        name: '椰蛋樹',
        imageUrl: '/img/GeneticApex/22.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 130,
        move_1: {
            move_name: '踩踏',
            damage: 30,
            move_defect: '擲1次硬幣若為正面，則增加30點傷害。',
            move_energy: ['grass']
        },
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 23,
        name: '椰蛋樹EX',
        imageUrl: '/img/GeneticApex/23.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond4.png',
        packs: '',
        hp: 160,
        move_1: {
            move_name: '熱帶揮擊',
            damage: 40,
            move_defect: '擲1次硬幣若為正面，則增加40點傷害。',
            move_energy: ['grass']
        },
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 24,
        name: '蔓藤怪',
        imageUrl: '/img/GeneticApex/24.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '吸取', damage: 40, move_energy: ['grass', 'colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 25,
        name: '飛天螳螂',
        imageUrl: '/img/GeneticApex/25.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '尖銳鐮', damage: 30, move_energy: ['grass']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 26,
        name: '凱羅斯',
        imageUrl: '/img/GeneticApex/26.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {
            move_name: '雙重角擊',
            damage: 50,
            move_defect: '擲2次硬幣，造成正面出現次數 × 50點傷害。',
            move_energy: ['grass', 'grass']
        },
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 27,
        name: '木綿球',
        imageUrl: '/img/GeneticApex/27.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 50,
        move_1: {move_name: '附著', damage: 10, move_energy: ['colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 28,
        name: '風妖精',
        imageUrl: '/img/GeneticApex/28.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '滾動衝撞', damage: 40, move_energy: ['colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 29,
        name: '百合根娃娃',
        imageUrl: '/img/GeneticApex/29.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '吸取一下', damage: 10, move_defect: '將這隻寶可夢恢復10HP。', move_energy: ['grass']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 30,
        name: '裙兒小姐',
        imageUrl: '/img/GeneticApex/30.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 100,
        move_1: {
            move_name: '綠葉供給',
            damage: 60,
            move_defect: '從自己的能量去抽出一個草能量，附於備戰區的草系寶可夢身上。',
            move_energy: ['grass', 'grass']
        },
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 31,
        name: '坐騎小羊',
        imageUrl: '/img/GeneticApex/31.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {
            move_name: '偷襲',
            damage: 60,
            move_defect: '擲1次硬幣若為反面，則這個招式失敗。',
            move_energy: ['colorless']
        },
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 32,
        name: '坐騎山羊',
        imageUrl: '/img/GeneticApex/32.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 120,
        move_1: {move_name: '飛葉快刀', damage: 70, move_energy: ['grass', 'colorless', 'colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 2
    },

    {
        id: 33,
        name: '小火龍',
        imageUrl: '/img/GeneticApex/33.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {
            move_name: '火花',
            move_defect: '將這隻寶可夢身上的一個火能量丟棄。',
            damage: 30,
            move_energy: ['fire']
        },
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 34,
        name: '火恐龍',
        imageUrl: '/img/GeneticApex/34.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {move_name: '火之爪', damage: 90, move_energy: ['fire', 'colorless', 'colorless']},
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 35,
        name: '噴火龍',
        imageUrl: '/img/GeneticApex/35.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 150,
        move_1: {
            move_name: '火焰漩渦',
            damage: 60,
            move_defect: '將這隻寶可夢身上的2個火能量丟棄。',
            move_energy: ['fire', 'fire', 'colorless', 'colorless']
        },
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 36,
        name: '噴火龍EX',
        imageUrl: '/img/GeneticApex/36.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond4.png',
        packs: '',
        hp: 180,
        move_1: {move_name: '劈開', damage: 60, move_energy: ['fire', 'colorless', 'colorless']},
        move_2: {
            move_name: '紅蓮風暴',
            damage: 200,
            move_defect: '將這隻寶可夢身上的兩個火能量丟棄。',
            move_energy: ['fire', 'fire', 'colorless', 'colorless']
        },
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 37,
        name: '六尾',
        imageUrl: '/img/GeneticApex/37.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 50,
        move_1: {
            move_name: '搖尾巴',
            damage: 60,
            move_defect: '擲1次硬幣若為正面，則在下一個對手的回合，收到這個招式的寶可夢無法使用招式。',
            move_energy: ['colorless']
        },
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 38,
        name: '九尾',
        imageUrl: '/img/GeneticApex/38.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {
            move_name: '噴射火焰',
            damage: 90,
            move_defect: '將這隻寶可夢身上的1個火能量丟棄。',
            move_energy: ['fire', 'fire']
        },
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 39,
        name: '卡蒂狗',
        imageUrl: '/img/GeneticApex/39.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '咬住', damage: 60, move_energy: ['colorless', 'colorless']},
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 40,
        name: '風速狗',
        imageUrl: '/img/GeneticApex/40.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 130,
        move_1: {
            move_name: '熱力衝撞',
            damage: 100,
            move_defect: '這隻寶可夢也收到20點傷害。',
            move_energy: ['fire', 'fire', 'colorless']
        },
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 41,
        name: '風速狗EX',
        imageUrl: '/img/GeneticApex/41.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond4.png',
        packs: '',
        hp: 150,
        move_1: {
            move_name: '猛火衝刺',
            damage: 120,
            move_defect: '這隻寶可夢也收到20點傷害。',
            move_energy: ['fire', 'fire', 'colorless']
        },
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 42,
        name: '小火馬',
        imageUrl: '/img/GeneticApex/42.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '火焰', damage: 20, move_energy: ['fire']},
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 43,
        name: '烈焰馬',
        imageUrl: '/img/GeneticApex/43.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 100,
        move_1: {move_name: '火之鬃', damage: 40, move_energy: ['fire']},
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 44,
        name: '鴨嘴火龍',
        imageUrl: '/img/GeneticApex/44.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '熔岩拳', damage: 60, move_energy: ['fire', 'fire']},
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 45,
        name: '火伊布',
        imageUrl: '/img/GeneticApex/45.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 120,
        move_1: {
            move_name: '噴射火焰',
            damage: 110,
            move_defect: '將這隻寶可夢身上的1個火能量丟棄。',
            move_energy: ['fire', 'colorless', 'colorless']
        },
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 46,
        name: '火焰鳥',
        imageUrl: '/img/GeneticApex/46.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 100,
        move_1: {
            move_name: '神鳥猛擊',
            damage: 130,
            move_defect: '擲1次硬幣若為反面，則這個招式失敗。',
            move_energy: ['fire', 'colorless', 'colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 47,
        name: '火焰鳥EX',
        imageUrl: '/img/GeneticApex/47.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond4.png',
        packs: '',
        hp: 140,
        move_1: {
            move_name: '烈火之舞',
            move_defect: '擲3次硬幣，從自己的能量去抽出與正面出現的次數相同數量的火能量，以任意方式附於備戰區的火系寶可夢身上。',
            move_energy: ['fire']
        },
        move_2: {move_name: '高溫爆破', damage: 70, move_energy: ['fire', 'colorless', 'colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 48,
        name: '熔蟻獸',
        imageUrl: '/img/GeneticApex/48.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '烈焰', damage: 30, move_energy: ['fire']},
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 49,
        name: '夜盜火蜥',
        imageUrl: '/img/GeneticApex/49.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '抓', damage: 20, move_energy: ['fire']},
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 50,
        name: '焰后蜥',
        imageUrl: '/img/GeneticApex/50.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 90,
        move_1: {move_name: '火之爪', damage: 60, move_energy: ['fire', 'colorless']},
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 51,
        name: '焰火蚣',
        imageUrl: '/img/GeneticApex/51.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '咬', damage: 60, move_energy: ['colorless']},
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 52,
        name: '焚焰蚣',
        imageUrl: '/img/GeneticApex/52.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 130,
        move_1: {move_name: '大字爆炎', damage: 130, move_energy: ['fire', 'colorless', 'colorless', 'colorless']},
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 53,
        name: '傑尼龜',
        imageUrl: '/img/GeneticApex/53.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '水槍', damage: 20, move_energy: ['water']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 54,
        name: '卡咪龜',
        imageUrl: '/img/GeneticApex/54.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '飛濺', damage: 40, move_energy: ['water', 'colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 55,
        name: '水箭龜',
        imageUrl: '/img/GeneticApex/55.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 150,
        move_1: {
            move_name: '水砲',
            damage: 80,
            move_defect: '若額外附有2個水能量，增加60點傷害。',
            move_energy: ['water', 'water', 'colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 56,
        name: '水箭龜EX',
        imageUrl: '/img/GeneticApex/56.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond4.png',
        packs: '',
        hp: 180,
        move_1: {move_name: '衝浪', damage: 40, move_energy: ['water', 'colorless']},
        move_2: {
            move_name: '水箭炮',
            damage: 100,
            move_defect: '若額外附有2個水能量，則增加60點傷害',
            move_energy: ['water', 'water', 'colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 57,
        name: '可達鴨',
        imageUrl: '/img/GeneticApex/57.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {
            move_name: '頭痛',
            damage: 10,
            move_defect: '在下個對手的回合，對手無法從手牌使出支援者卡。',
            move_energy: ['colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 58,
        name: '哥達鴨',
        imageUrl: '/img/GeneticApex/58.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {move_name: '水之刀鋒', damage: 70, move_energy: ['water', 'water']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 59,
        name: '蚊香蝌蚪',
        imageUrl: '/img/GeneticApex/59.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '鰭快刀', damage: 10, move_energy: ['colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 60,
        name: '蚊香君',
        imageUrl: '/img/GeneticApex/60.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {move_name: '拳骨', damage: 40, move_energy: ['colorless', 'colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 61,
        name: '蚊香泳士',
        imageUrl: '/img/GeneticApex/61.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 150,
        ability: {name: '反擊', defect: '這隻寶可夢在戰鬥場受到對手的寶可夢招式的上海市，使用招式的寶可夢受到20點傷害。'},
        move_1: {move_name: '百萬噸重拳', damage: 80, move_energy: ['water', 'colorless', 'colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 62,
        name: '瑪瑙水母',
        imageUrl: '/img/GeneticApex/62.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '重摑', damage: 20, move_energy: ['water']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 63,
        name: '毒刺水母',
        imageUrl: '/img/GeneticApex/63.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 110,
        move_1: {
            move_name: '毒之觸手',
            damage: 50,
            move_defect: '將對手的戰鬥寶可夢<a>中毒</a>',
            move_energy: ['water', 'colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 64,
        name: '小海獅',
        imageUrl: '/img/GeneticApex/64.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '頭鎚', damage: 30, move_energy: ['colorless', 'colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 65,
        name: '白海獅',
        imageUrl: '/img/GeneticApex/65.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 120,
        move_1: {move_name: '衝浪', damage: 90, move_energy: ['water', 'water', 'water']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 66,
        name: '大舌貝',
        imageUrl: '/img/GeneticApex/66.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '舌擊', damage: 20, move_energy: ['water']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 67,
        name: '刺甲貝',
        imageUrl: '/img/GeneticApex/67.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 120,
        ability: {name: '硬殼盔甲', defect: '這隻寶可夢受到的招式傷害-10點。'},
        move_1: {move_name: '衝浪', damage: 70, move_energy: ['water', 'water', 'colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 68,
        name: '大鉗蟹',
        imageUrl: '/img/GeneticApex/68.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '夾住', damage: 40, move_energy: ['water', 'colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 69,
        name: '巨鉗蟹',
        imageUrl: '/img/GeneticApex/69.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 120,
        move_1: {
            move_name: '必殺蟹鉗',
            damage: 80,
            move_defect: '擲2次硬幣，若全部為正面，則增加80點傷害。',
            move_energy: ['water', 'water', 'colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 70,
        name: '墨海馬',
        imageUrl: '/img/GeneticApex/70.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '水槍', damage: 20, move_energy: ['water']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 71,
        name: '海刺龍',
        imageUrl: '/img/GeneticApex/71.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 70,
        move_1: {
            move_name: '水箭',
            move_defect: '對手的1隻寶可夢受到50點傷害',
            move_energy: ['water', 'water', 'water']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 72,
        name: '角金魚',
        imageUrl: '/img/GeneticApex/72.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '活蹦亂跳', damage: 10, move_energy: ['colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 73,
        name: '金魚王',
        imageUrl: '/img/GeneticApex/73.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 100,
        move_1: {
            move_name: '角刺',
            damage: 80,
            move_defect: '擲1次硬幣若為反面，則這個招式失敗',
            move_energy: ['water']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 74,
        name: '海星星',
        imageUrl: '/img/GeneticApex/74.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 50,
        move_1: {move_name: '掌擊', damage: 20, move_energy: ['water']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 75,
        name: '寶石海星',
        imageUrl: '/img/GeneticApex/75.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {move_name: '飛濺', damage: 40, move_energy: ['water']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 0
    },
    {
        id: 76,
        name: '寶石海星EX',
        imageUrl: '/img/GeneticApex/76.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond4.png',
        packs: '',
        hp: 130,
        move_1: {move_name: '水泡濺射', damage: 90, move_energy: ['water', 'water']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 0
    },
    {
        id: 77,
        name: '鯉魚王',
        imageUrl: '/img/GeneticApex/77.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 30,
        move_1: {move_name: '躍起', damage: 10, move_energy: ['colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 78,
        name: '暴鯉龍',
        imageUrl: '/img/GeneticApex/78.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 150,
        move_1: {
            move_name: '破壞死光',
            damage: 100,
            move_defect: '將對手的戰鬥寶可夢身上的隨機1個能量丟棄。',
            move_energy: ['water', 'water', 'water', 'water']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 4
    },
    {
        id: 79,
        name: '拉普拉斯',
        imageUrl: '/img/GeneticApex/79.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 100,
        move_1: {
            move_name: '水炮',
            damage: 20,
            move_defect: '若額外附有3個水能量，則增加70傷害。',
            move_energy: ['water']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 80,
        name: '水伊布',
        imageUrl: '/img/GeneticApex/80.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 130,
        move_1: {
            move_name: '泡沫吸取',
            damage: 60,
            move_defect: '將這隻寶可夢恢復30HP',
            move_energy: ['water', 'colorless', 'colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 81,
        name: '菊石獸',
        imageUrl: '/img/GeneticApex/81.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {move_name: '水槍', damage: 40, move_energy: ['water']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 82,
        name: '多刺菊石獸',
        imageUrl: '/img/GeneticApex/82.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 140,
        move_1: {
            move_name: '古代潮旋',
            damage: 70,
            move_defect: '在下個對手的回合，受到這個招式的寶可夢無法使用招式。',
            move_energy: ['water', 'colorless', 'colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 83,
        name: '急凍鳥',
        imageUrl: '/img/GeneticApex/83.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 100,
        move_1: {
            move_name: '冰凍光束',
            damage: 60,
            move_defect: '擲1次硬幣若為正面，則將對手的戰鬥寶可夢<b>麻痹</b>。',
            move_energy: ['water', 'water', 'colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 84,
        name: '急凍鳥EX',
        imageUrl: '/img/GeneticApex/84.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond4.png',
        packs: '',
        hp: 140,
        move_1: {move_name: '冰之翼', damage: 40, move_energy: ['water', 'colorless']},
        move_2: {
            move_name: '暴風雪',
            damage: 80,
            move_defect: '對手的所有備戰寶可夢也受到10點傷害。',
            move_energy: ['water', 'water', 'water']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 85,
        name: '鴨寶寶',
        imageUrl: '/img/GeneticApex/85.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 50,
        move_1: {move_name: '羽擊', damage: 30, move_energy: ['colorless', 'colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 86,
        name: '舞天鵝',
        imageUrl: '/img/GeneticApex/86.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {move_name: '翅膀攻擊', damage: 70, move_energy: ['colorless', 'colorless', 'colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 87,
        name: '呱呱泡蛙',
        imageUrl: '/img/GeneticApex/87.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '活蹦亂跳', damage: 10, move_energy: ['colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 88,
        name: '呱頭蛙',
        imageUrl: '/img/GeneticApex/88.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '水漂', damage: 60, move_energy: ['colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 89,
        name: '甲賀忍蛙',
        imageUrl: '/img/GeneticApex/89.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 120,
        ability: {name: '飛水手裡劍', defect: '在自己的回合時，可使用1次。對手的1隻寶可夢受到20點傷害。'},
        move_1: {move_name: '霞斬', damage: 60, move_energy: ['water', 'colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 90,
        name: '拳海參',
        imageUrl: '/img/GeneticApex/90.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '潑水', damage: 30, move_energy: ['water']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 91,
        name: '磨牙彩皮魚',
        imageUrl: '/img/GeneticApex/91.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {
            move_name: '攻擊傷口',
            damage: 10,
            move_defect: '若對手的戰鬥寶可夢有受到傷害，則增加60點傷害。',
            move_energy: ['water', 'colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 92,
        name: '雪吞蟲',
        imageUrl: '/img/GeneticApex/92.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 50,
        move_1: {move_name: '衝撞', damage: 10, move_energy: ['colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 93,
        name: '雪絨蛾',
        imageUrl: '/img/GeneticApex/93.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 90,
        move_1: {
            move_name: '細雪',
            damage: 40,
            move_defect: '將對手的戰鬥寶可夢<a>睡眠</a>。',
            move_energy: ['grass', 'colorless', 'colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 94,
        name: '皮卡丘',
        imageUrl: '/img/GeneticApex/94.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '咬', damage: 60, move_energy: ['electric']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 95,
        name: '雷丘',
        imageUrl: '/img/GeneticApex/95.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 100,
        move_1: {
            move_name: '十萬伏特',
            damage: 140,
            move_defect: '將這隻寶可夢身上的能量全部丟棄。',
            move_energy: ['electric', 'electric', 'electric']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 96,
        name: '皮卡丘EX',
        imageUrl: '/img/GeneticApex/96.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond4.png',
        packs: '',
        hp: 120,
        move_1: {
            move_name: '電氣陣',
            damage: 30,
            move_defect: '造成自己的備戰區雷系寶可夢數量×30點傷害。',
            move_energy: ['electric', 'electric']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 97,
        name: '小磁怪',
        imageUrl: '/img/GeneticApex/97.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '光彈', damage: 20, move_energy: ['electric']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 98,
        name: '三合一磁怪',
        imageUrl: '/img/GeneticApex/98.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '迴轉攻擊', damage: 60, move_energy: ['electric', 'colorless', 'colorless', 'colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 99,
        name: '霹靂電球',
        imageUrl: '/img/GeneticApex/99.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '撞擊', damage: 20, move_energy: ['electric']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 100,
        name: '頑皮雷彈',
        imageUrl: '/img/GeneticApex/100.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '電球', damage: 60, move_energy: ['electric', 'electric']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 0
    },
    {
        id: 101,
        name: '電擊獸',
        imageUrl: '/img/GeneticApex/101.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {
            move_name: '電擊拳',
            damage: 40,
            move_defect: '擲1次硬幣若為正面，則增加40點傷害。若為反面，則這隻寶可夢也受到20點傷害',
            move_energy: ['electric', 'electric']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 102,
        name: '雷伊布',
        imageUrl: '/img/GeneticApex/102.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 90,
        move_1: {
            move_name: '飛彈針',
            damage: 40,
            move_defect: '擲4次硬幣，造成正面出現的次數×40點傷害。',
            move_energy: ['electric', 'colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 103,
        name: '閃電鳥',
        imageUrl: '/img/GeneticApex/103.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 100,
        move_1: {
            move_name: '落雷',
            damage: 100,
            move_defect: '自己的一隻備戰寶可夢也受到30點傷害',
            move_energy: ['electric', 'electric', 'colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 104,
        name: '閃電鳥EX',
        imageUrl: '/img/GeneticApex/104.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond4.png',
        packs: '',
        hp: 130,
        move_1: {move_name: '啄', damage: 20, move_energy: ['electric']},
        move_2: {
            move_name: '颶風雷電',
            damage: 50,
            move_defect: '擲4次硬幣，造成正面出現的次數×50點傷害。',
            move_energy: ['grass', 'grass', 'colorless', 'colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 105,
        name: '斑斑馬',
        imageUrl: '/img/GeneticApex/105.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '電氣踢', damage: 20, move_energy: ['electric']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 106,
        name: '雷電斑馬',
        imageUrl: '/img/GeneticApex/106.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {move_name: '雷電箭', move_defect: '對手的1隻寶可夢受到30點傷害', move_energy: ['electric']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 107,
        name: '麻麻小魚',
        imageUrl: '/img/GeneticApex/107.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 30,
        move_1: {move_name: '小電氣', damage: 30, move_energy: ['electric']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 108,
        name: '麻麻鰻',
        imageUrl: '/img/GeneticApex/108.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '伏特頭擊', damage: 40, move_energy: ['electric']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 109,
        name: '麻麻鰻魚王',
        imageUrl: '/img/GeneticApex/109.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 140,
        move_1: {
            move_name: '雷電牙',
            damage: 60,
            move_defect: '擲1次硬幣若為正面，則對手的戰鬥寶可夢麻痹。',
            move_energy: ['electric', 'electric', 'colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 110,
        name: '傘電蜥',
        imageUrl: '/img/GeneticApex/110.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '擺尾拍擊', damage: 60, move_energy: ['electric']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 111,
        name: '光電傘蜥',
        imageUrl: '/img/GeneticApex/111.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 90,
        move_1: {
            move_name: '電光一閃',
            damage: 40,
            move_defect: '擲1次硬幣若為正面，則增加40點傷害。',
            move_energy: ['colorless', 'colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 112,
        name: '啪嚓海膽',
        imageUrl: '/img/GeneticApex/112.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 70,
        move_1: {
            move_name: '電擊',
            damage: 30,
            move_defect: '擲1次硬幣若為正面，則對手的戰鬥寶可夢<a>麻痹</a>。',
            move_energy: ['electric', 'electric']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 113,
        name: '皮皮',
        imageUrl: '/img/GeneticApex/113.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '巴掌', damage: 20, move_energy: ['psychic']},
        weakness: {type: 'metal', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 114,
        name: '皮克西',
        imageUrl: '/img/GeneticApex/114.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 100,
        move_1: {move_name: '魔法射擊', damage: 40, move_energy: ['psychic']},
        weakness: {type: 'metal', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 115,
        name: '凱西',
        imageUrl: '/img/GeneticApex/115.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '瞬間移動', move_energy: ['colorless']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 116,
        name: '勇基拉',
        imageUrl: '/img/GeneticApex/116.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '超能力', damage: 60, move_energy: ['psychic', 'colorless', 'colorless']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 117,
        name: '胡地',
        imageUrl: '/img/GeneticApex/117.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 130,
        move_1: {
            move_name: '精神強念',
            damage: 60,
            move_defect: '增加對手的戰鬥寶可夢身上的能量的數量×30點傷害',
            move_energy: ['psychic', 'colorless', 'colorless']
        },
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 118,
        name: '呆呆獸',
        imageUrl: '/img/GeneticApex/118.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '擺尾拍擊', damage: 60, move_energy: ['psychic', 'colorless']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 119,
        name: '呆殼獸',
        imageUrl: '/img/GeneticApex/119.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 130,
        move_1: {move_name: '超念力', damage: 80, move_energy: ['psychic', 'psychic', 'colorless']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 120,
        name: '鬼斯',
        imageUrl: '/img/GeneticApex/120.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '瓦斯包圍', damage: 20, move_energy: ['psychic']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 121,
        name: '鬼斯通',
        imageUrl: '/img/GeneticApex/121.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '鬼火', damage: 30, move_energy: ['psychic']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 122,
        name: '耿鬼',
        imageUrl: '/img/GeneticApex/122.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 130,
        move_1: {
            move_name: '找麻煩',
            damage: 50,
            move_defect: '在下個對手的回合，對手無法從手牌使出支援者卡。',
            move_energy: ['psychic']
        },
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 123,
        name: '耿鬼EX',
        imageUrl: '/img/GeneticApex/123.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond4.png',
        packs: '',
        hp: 170,
        ability: {name: '影子咒縛', defect: '只要這隻寶可夢在戰鬥場上，對手無法從手牌使出支援者卡。'},
        move_1: {move_name: '陰森射擊', damage: 100, move_energy: ['psychic', 'psychic', 'psychic']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 124,
        name: '催眠貘',
        imageUrl: '/img/GeneticApex/124.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '囈語', damage: 30, move_energy: ['psychic', 'colorless']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 125,
        name: '引夢貘人',
        imageUrl: '/img/GeneticApex/125.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 100,
        ability: {name: '引夢擺錘', defect: '在自己的回合時，可使用一次，擲1次硬幣若為正面，則將對手的戰鬥寶可夢睡眠。'},
        move_1: {move_name: '精神拳', damage: 50, move_energy: ['psychic', 'colorless', 'colorless']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 126,
        name: '魔牆人偶',
        imageUrl: '/img/GeneticApex/126.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {
            move_name: '屏障攻擊',
            damage: 30,
            move_defect: '在下個對手的回合，這隻寶可夢受到招式的傷害-20點。',
            move_energy: ['psychic', 'colorless']
        },
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 127,
        name: '迷唇姐',
        imageUrl: '/img/GeneticApex/127.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 80,
        move_1: {
            move_name: '精神強念',
            damage: 30,
            move_defect: '增加對手的戰鬥寶可夢身上的能量的數量×20點傷害。',
            move_energy: ['psychic', 'colorless']
        },
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 128,
        name: '超夢',
        imageUrl: '/img/GeneticApex/128.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 120,
        move_1: {
            move_name: '力量爆破',
            damage: 120,
            move_defect: '將這隻寶可夢身上的2個超能力能量丟棄。',
            move_energy: ['psychic', 'psychic', 'colorless', 'colorless']
        },
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 129,
        name: '超夢EX',
        imageUrl: '/img/GeneticApex/129.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond4.png',
        packs: '',
        hp: 150,
        move_1: {move_name: '念動彈', damage: 50, move_energy: ['psychic', 'colorless']},
        move_2: {
            move_name: '精神衝鋒',
            damage: 100,
            move_defect: '將這隻寶可夢身上的2個超能力能量丟棄。',
            move_energy: ['psychic', 'psychic', 'colorless', 'colorless']
        },
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 130,
        name: '拉魯拉斯',
        imageUrl: '/img/GeneticApex/130.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '衝撞', damage: 10, move_energy: ['colorless']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 131,
        name: '奇魯莉安',
        imageUrl: '/img/GeneticApex/131.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '掌擊', damage: 30, move_energy: ['psychic', 'colorless']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 132,
        name: '沙奈朵',
        imageUrl: '/img/GeneticApex/132.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 110,
        ability: {
            name: '移形換影',
            defect: '在自己的回合時，可使用1次。從自己的能量區抽出超能力能量，附於戰鬥場的超能力系寶可夢身上。'
        },
        move_1: {move_name: '精神射擊', damage: 60, move_energy: ['psychic', 'psychic', 'colorless']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 133,
        name: '滾滾蝙蝠',
        imageUrl: '/img/GeneticApex/133.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '咬', damage: 10, move_energy: ['colorless']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 134,
        name: '心蝙蝠',
        imageUrl: '/img/GeneticApex/134.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 90,
        move_1: {move_name: '愛心印章', damage: 60, move_energy: ['psychic', 'colorless']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 135,
        name: '泥偶小人',
        imageUrl: '/img/GeneticApex/135.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 90,
        move_1: {move_name: '百萬噸重拳', damage: 50, move_energy: ['psychic', 'colorless', 'colorless']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 136,
        name: '泥偶巨人',
        imageUrl: '/img/GeneticApex/136.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 140,
        move_1: {
            move_name: '雙重金勾臂',
            damage: 100,
            move_defect: '擲2次硬幣，造成正面出現的次數×100點傷害。',
            move_energy: ['psychic', 'psychic', 'colorless', 'colorless']
        },
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 4
    },

    {
        id: 137,
        name: '穿山鼠',
        imageUrl: '/img/GeneticApex/137.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '抓', damage: 60, move_energy: ['fighting']},
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 138,
        name: '穿山王',
        imageUrl: '/img/GeneticApex/138.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 100,
        move_1: {move_name: '劈開', damage: 60, move_energy: ['fighting', 'fighting']},
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 139,
        name: '地鼠',
        imageUrl: '/img/GeneticApex/139.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 50,
        move_1: {move_name: '擲泥', damage: 20, move_energy: ['fighting']},
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 140,
        name: '三地鼠',
        imageUrl: '/img/GeneticApex/140.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 70,
        move_1: {
            move_name: '挖洞',
            damage: 60,
            move_defect: '擲1次硬幣若為正面，則在下個對手的對手，這隻寶可夢不會受到招式的傷害與效果的影響',
            move_energy: ['fighting']
        },
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 141,
        name: '猴怪',
        imageUrl: '/img/GeneticApex/141.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '踢倒', damage: 20, move_energy: ['fighting']},
        weakness: {type: 'psychic', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 142,
        name: '火爆猴',
        imageUrl: '/img/GeneticApex/142.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {
            move_name: '還擊',
            damage: 60,
            move_defect: '若這隻寶可夢有受到傷害，則增加60點傷害。',
            move_energy: ['fighting', 'fighting']
        },
        weakness: {type: 'psychic', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 143,
        name: '腕力',
        imageUrl: '/img/GeneticApex/143.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '拳骨', damage: 20, move_energy: ['fighting']},
        weakness: {type: 'psychic', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 144,
        name: '豪力',
        imageUrl: '/img/GeneticApex/144.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 100,
        move_1: {move_name: '怪力', damage: 50, move_energy: ['fighting', 'fighting']},
        weakness: {type: 'psychic', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 145,
        name: '怪力',
        imageUrl: '/img/GeneticApex/145.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 150,
        move_1: {move_name: '地球上投', damage: 100, move_energy: ['fighting', 'fighting', 'fighting']},
        weakness: {type: 'psychic', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 146,
        name: '怪力EX',
        imageUrl: '/img/GeneticApex/146.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond4.png',
        packs: '',
        hp: 180,
        move_1: {move_name: '百萬噸重拳', damage: 120, move_energy: ['fighting', 'fighting', 'fighting']},
        weakness: {type: 'psychic', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 147,
        name: '小拳石',
        imageUrl: '/img/GeneticApex/147.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '撞擊', damage: 20, move_energy: ['fighting']},
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 148,
        name: '隆隆石',
        imageUrl: '/img/GeneticApex/148.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 100,
        move_1: {move_name: '滾動', damage: 70, move_energy: ['fighting', 'colorless', 'colorless']},
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 149,
        name: '隆隆岩',
        imageUrl: '/img/GeneticApex/149.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 160,
        move_1: {
            move_name: '捨身衝撞',
            damage: 60,
            move_defect: '這隻寶可夢也受到50點傷害。',
            move_energy: ['fighting', 'colorless', 'colorless', 'colorless']
        },
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 4
    },
    {
        id: 150,
        name: '大岩蛇',
        imageUrl: '/img/GeneticApex/150.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 110,
        move_1: {move_name: '大地粉碎', damage: 70, move_energy: ['fighting', 'fighting', 'fighting']},
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 4
    },
    {
        id: 151,
        name: '卡拉卡拉',
        imageUrl: '/img/GeneticApex/151.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {
            move_name: '叫聲',
            move_defect: '在下個對手的回合，受到這個招式的寶可夢使用招式的傷害-20點',
            move_energy: ['colorless']
        },
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 152,
        name: '嘎啦嘎啦',
        imageUrl: '/img/GeneticApex/152.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 100,
        move_1: {move_name: '骨頭打擊', damage: 40, move_energy: ['fighting']},
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 153,
        name: '嘎啦嘎啦EX',
        imageUrl: '/img/GeneticApex/153.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond4.png',
        packs: '',
        hp: 140,
        move_1: {
            move_name: '骨頭迴力鏢',
            damage: 60,
            move_defect: '擲2次硬幣，造成正面出現的次數×80點傷害。',
            move_energy: ['fighting', 'fighting']
        },
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 154,
        name: '飛腿郎',
        imageUrl: '/img/GeneticApex/154.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 80,
        move_1: {
            move_name: '伸腿踢',
            move_defect: '對手的1隻備戰寶可夢受到30點傷害。',
            move_energy: ['fighting']
        },
        weakness: {type: 'psychic', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 155,
        name: '快拳郎',
        imageUrl: '/img/GeneticApex/155.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '拳', damage: 30, move_energy: ['fighting']},
        weakness: {type: 'psychic', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 156,
        name: '獨角犀牛',
        imageUrl: '/img/GeneticApex/156.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '撞擊', damage: 60, move_energy: ['fighting', 'fighting', 'colorless']},
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 157,
        name: '鐵甲犀獸',
        imageUrl: '/img/GeneticApex/157.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 120,
        move_1: {move_name: '角鑽', damage: 100, move_energy: ['fighting', 'fighting', 'fighting', 'colorless']},
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 4
    },
    {
        id: 158,
        name: '化石盔',
        imageUrl: '/img/GeneticApex/158.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {move_name: '甲殼攻擊', damage: 40, move_energy: ['fighting']},
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 159,
        name: '鐮刀盔',
        imageUrl: '/img/GeneticApex/159.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 140,
        move_1: {
            move_name: '吸血',
            damage: 50,
            move_defect: '將這隻寶可夢恢復對對手的戰鬥寶可夢造成的傷害相同數值的HP。',
            move_energy: ['fighting']
        },
        weakness: {type: 'psychic', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 160,
        name: '功夫鼬',
        imageUrl: '/img/GeneticApex/160.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '拍擊', damage: 20, move_energy: ['colorless']},
        weakness: {type: 'psychic', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 161,
        name: '師父鼬',
        imageUrl: '/img/GeneticApex/161.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '迴轉踢', damage: 40, move_energy: ['colorless']},
        weakness: {type: 'psychic', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 162,
        name: '拳拳蛸',
        imageUrl: '/img/GeneticApex/162.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '拳骨', damage: 30, move_energy: ['fighting', 'colorless']},
        weakness: {type: 'psychic', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 163,
        name: '八爪武師',
        imageUrl: '/img/GeneticApex/163.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 130,
        move_1: {
            move_name: '揍飛',
            damage: 70,
            move_defect: '將對手的戰鬥寶可夢與備戰寶可夢呼喚。「由對手選擇放置於戰鬥場的寶可夢。」',
            move_energy: ['fighting', 'fighting', 'colorless']
        },
        weakness: {type: 'psychic', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 164,
        name: '阿柏蛇',
        imageUrl: '/img/GeneticApex/164.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '咬住', damage: 20, move_energy: ['darkness']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 165,
        name: '阿柏怪',
        imageUrl: '/img/GeneticApex/165.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 100,
        move_1: {
            move_name: '窮追不捨',
            damage: 60,
            move_defect: '在下個對手的回合，受到這個招式的寶可夢無法<b>撤退</b>。',
            move_energy: ['darkness', 'colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 166,
        name: '尼多蘭',
        imageUrl: '/img/GeneticApex/166.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {
            move_name: '呼朋引伴',
            move_defect: '從自己的牌庫隨機將1張「尼多郎」放置於備戰區。',
            move_energy: ['darkness']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 167,
        name: '尼多娜',
        imageUrl: '/img/GeneticApex/167.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '咬住', damage: 30, move_energy: ['darkness']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 168,
        name: '尼多后',
        imageUrl: '/img/GeneticApex/168.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 140,
        move_1: {
            move_name: '甜蜜攻擊',
            damage: 80,
            move_defect: '增加自己的備戰區的「尼多王」的數量×50點傷害',
            move_energy: ['darkness', 'darkness', 'colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 169,
        name: '尼多郎',
        imageUrl: '/img/GeneticApex/169.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '啄', damage: 20, move_energy: ['darkness']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 170,
        name: '尼多力諾',
        imageUrl: '/img/GeneticApex/170.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {move_name: '角撞', damage: 60, move_energy: ['darkness', 'colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 171,
        name: '尼多王',
        imageUrl: '/img/GeneticApex/171.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 150,
        move_1: {move_name: '毒角', damage: 90, move_energy: ['darkness', 'darkness', 'colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 172,
        name: '超音蝠',
        imageUrl: '/img/GeneticApex/172.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 50,
        move_1: {move_name: '滑翔', damage: 10, move_energy: ['colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 173,
        name: '大嘴蝠',
        imageUrl: '/img/GeneticApex/173.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '翅膀攻擊', damage: 40, move_energy: ['colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 174,
        name: '臭泥',
        imageUrl: '/img/GeneticApex/174.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {
            move_name: '毒瓦斯',
            damage: 10,
            move_defect: '將對手的戰鬥寶可夢<b>中毒</b>',
            move_energy: ['darkness']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 175,
        name: '臭臭泥',
        imageUrl: '/img/GeneticApex/175.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 130,
        move_1: {
            move_name: '毒液衝擊',
            damage: 70,
            move_defect: '若對手的戰鬥寶可夢<b>中毒</b>，則增加50點傷害。',
            move_energy: ['darkness', 'darkness', 'colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 176,
        name: '瓦斯彈',
        imageUrl: '/img/GeneticApex/176.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '瓦斯包圍', damage: 20, move_energy: ['darkness']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 177,
        name: '雙彈瓦斯',
        imageUrl: '/img/GeneticApex/177.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 110,
        ability: {
            name: '瓦斯漏氣',
            defect: '若這隻寶可夢在戰鬥上，則在自己的回合時可使用1次。將對手的戰鬥寶可夢<b>中毒</b>。'
        },
        move_1: {move_name: '撞擊', damage: 30, move_energy: ['darkness']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 178,
        name: '大嘴娃',
        imageUrl: '/img/GeneticApex/178.jpg',
        type: '/img/type/metal.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {
            move_name: '咬碎',
            damage: 20,
            move_defect: '擲1次硬幣若為正面，則將對手的戰鬥寶可夢身上的隨機1個能量丟棄。',
            move_energy: ['metal']
        },
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 179,
        name: '鋼刀小兵',
        imageUrl: '/img/GeneticApex/179.jpg',
        type: '/img/type/metal.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 50,
        move_1: {move_name: '突刺', damage: 30, move_energy: ['metal']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 180,
        name: '劈斬司令',
        imageUrl: '/img/GeneticApex/180.jpg',
        type: '/img/type/metal.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {move_name: '金屬爪', damage: 70, move_energy: ['metal', 'metal']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 181,
        name: '美錄坦',
        imageUrl: '/img/GeneticApex/181.jpg',
        type: '/img/type/metal.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {
            move_name: '聚積',
            move_defect: '從自己的能量區抽出1個鋼能量，附於這隻寶可夢身上。',
            move_energy: ['metal']
        },
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 182,
        name: '美錄梅塔',
        imageUrl: '/img/GeneticApex/182.jpg',
        type: '/img/type/metal.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 130,
        ability: {name: '堅硬膜', defect: '這隻寶可夢受到招式的傷害-20點。'},
        move_1: {move_name: '重磅衝擊', damage: 120, move_energy: ['metal', 'metal', 'metal', 'colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 3
    },

    {
        id: 183,
        name: '迷你龍',
        imageUrl: '/img/GeneticApex/183.jpg',
        type: '/img/type/dragon.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '衝撞', damage: 60, move_energy: ['water', 'electric']},
        retreat_cost: 1
    },
    {
        id: 184,
        name: '哈克龍',
        imageUrl: '/img/GeneticApex/184.jpg',
        type: '/img/type/dragon.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 100,
        move_1: {move_name: '尾擊', damage: 80, move_energy: ['water', 'electric', 'colorless']},
        retreat_cost: 1
    },
    {
        id: 185,
        name: '快龍',
        imageUrl: '/img/GeneticApex/185.jpg',
        type: '/img/type/dragon.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 160,
        move_1: {
            move_name: '流星群',
            move_defect: '對手的寶可夢會隨機被選擇4次，被選擇的所有寶可夢受到選擇次數×50點的傷害。',
            move_energy: ['water', 'electric', 'colorless', 'colorless']
        },
        retreat_cost: 3
    },
    {
        id: 186,
        name: '波波',
        imageUrl: '/img/GeneticApex/186.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '起風', damage: 10, move_energy: ['colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 187,
        name: '比比鳥',
        imageUrl: '/img/GeneticApex/187.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '起風', damage: 30, move_energy: ['colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 188,
        name: '大比鳥',
        imageUrl: '/img/GeneticApex/188.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 130,
        ability: {
            name: '驅離',
            defect: '在自己的回合時，可使用1次。將對手的戰鬥寶可夢與備戰寶可夢互換。「由對手選擇放置於戰鬥場的寶可夢」。'
        },
        move_1: {move_name: '翅膀攻擊', damage: 70, move_energy: ['colorless', 'colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 189,
        name: '小拉達',
        imageUrl: '/img/GeneticApex/189.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 40,
        move_1: {move_name: '咬', damage: 20, move_energy: ['colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 190,
        name: '拉達',
        imageUrl: '/img/GeneticApex/190.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '咬住', damage: 40, move_energy: ['colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 191,
        name: '烈雀',
        imageUrl: '/img/GeneticApex/191.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '啄', damage: 20, move_energy: ['colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 192,
        name: '大嘴雀',
        imageUrl: '/img/GeneticApex/192.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 100,
        move_1: {
            move_name: '直衝鑽',
            damage: 60,
            move_defect: '擲1次硬幣若為正面，則將對手的戰鬥寶可夢身上的隨機1個能量丟棄。',
            move_energy: ['colorless', 'colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 193,
        name: '胖丁',
        imageUrl: '/img/GeneticApex/193.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '拍擊', damage: 30, move_energy: ['colorless', 'colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 194,
        name: '胖可丁',
        imageUrl: '/img/GeneticApex/194.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 100,
        move_1: {move_name: '巨聲', damage: 60, move_energy: ['colorless', 'colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 195,
        name: '胖可丁EX',
        imageUrl: '/img/GeneticApex/195.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond4.png',
        packs: '',
        hp: 140,
        move_1: {
            move_name: '催眠曲',
            damage: 80,
            move_defect: '將對手的戰鬥寶可夢<b>睡眠</b>。',
            move_energy: ['colorless', 'colorless', 'colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 196,
        name: '喵喵',
        imageUrl: '/img/GeneticApex/196.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '聚寶功', damage: 10, move_defect: '從自己的牌庫抽出1張牌。', move_energy: ['colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 197,
        name: '喵老大',
        imageUrl: '/img/GeneticApex/197.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {
            move_name: '暗影爪',
            damage: 40,
            move_defect: '擲1次硬幣若為正面，則從對手的手牌隨機抽出1張丟棄。',
            move_energy: ['colorless', 'colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 198,
        name: '大蔥鴨',
        imageUrl: '/img/GeneticApex/198.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '蔥擊', damage: 40, move_energy: ['colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 199,
        name: '嘟嘟',
        imageUrl: '/img/GeneticApex/199.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '啄', damage: 20, move_energy: ['colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 200,
        name: '嘟嘟利',
        imageUrl: '/img/GeneticApex/200.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '啄鑽', damage: 40, move_energy: ['colorless']},
        weakness: {type: 'electric', multiplier: 20},
    },
    {
        id: 201,
        name: '大舌頭',
        imageUrl: '/img/GeneticApex/201.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {
            move_name: '連環舔舔',
            damage: 60,
            move_defect: '擲硬幣直到出現反面，造成正面出現次數的×60點傷害。',
            move_energy: ['colorless', 'colorless', 'colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 202,
        name: '吉利蛋',
        imageUrl: '/img/GeneticApex/202.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 120,
        move_1: {move_name: '重摑', damage: 60, move_energy: ['colorless', 'colorless', 'colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 203,
        name: '袋龍',
        imageUrl: '/img/GeneticApex/203.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 100,
        move_1: {
            move_name: '迷魂拳',
            damage: 30,
            move_defect: '擲2次硬幣，造成正面出現次數×30點傷害。',
            move_energy: ['grass', 'colorless', 'colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 204,
        name: '肯泰羅',
        imageUrl: '/img/GeneticApex/204.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 100,
        move_1: {move_name: '角撞', damage: 50, move_energy: ['colorless', 'colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 205,
        name: '百變怪',
        imageUrl: '/img/GeneticApex/205.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 70,
        move_1: {
            move_name: '任意複製',
            damage: 60,
            move_defect: '選擇對手的場上寶可夢持有的1個招式，作為這個招式使用。若所選招式所需的能量沒有附於這隻寶可夢身上，則這個招式失敗。',
            move_energy: ['colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 206,
        name: '伊布',
        imageUrl: '/img/GeneticApex/206.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '撞擊', damage: 20, move_energy: ['colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 207,
        name: '伊布',
        imageUrl: '/img/GeneticApex/207.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '撞擊', damage: 20, move_energy: ['colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 208,
        name: '伊布',
        imageUrl: '/img/GeneticApex/208.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '撞擊', damage: 20, move_energy: ['colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 209,
        name: '多邊獸',
        imageUrl: '/img/GeneticApex/209.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 50,
        ability: {name: '資料掃描', defect: '在自己的回合時，可使用1次。從自己的牌庫上方抽出1張，查看後回復原狀'},
        move_1: {move_name: '稜角化', damage: 20, move_energy: ['colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 210,
        name: '化石翼龍',
        imageUrl: '/img/GeneticApex/210.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 100,
        move_1: {
            move_name: '原始振翅',
            move_defect: '擲1次硬幣若為正面，則將對手的戰鬥寶可夢放回牌庫。',
            move_energy: ['colorless', 'colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 211,
        name: '卡比獸',
        imageUrl: '/img/GeneticApex/211.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond3.png',
        packs: '',
        hp: 150,
        move_1: {move_name: '滾動', damage: 70, move_energy: ['colorless', 'colorless', 'colorless', 'colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 4
    },
    {
        id: 212,
        name: '泡沫栗鼠',
        imageUrl: '/img/GeneticApex/212.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '尾擊', damage: 20, move_energy: ['colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 213,
        name: '奇諾栗鼠',
        imageUrl: '/img/GeneticApex/213.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond2.png',
        packs: '',
        hp: 90,
        move_1: {
            move_name: '友情之環',
            damage: 30,
            move_defect: '造成自己的備戰寶可夢數量×30點傷害。',
            move_energy: ['colorless', 'colorless', 'colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 214,
        name: '毛辮羊',
        imageUrl: '/img/GeneticApex/214.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '撞擊', damage: 30, move_energy: ['colorless', 'colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 215,
        name: '毛毛角羊',
        imageUrl: '/img/GeneticApex/215.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 120,
        move_1: {move_name: '滾動衝撞', damage: 80, move_energy: ['colorless', 'colorless', 'colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 216,
        name: '貝殼化石',
        imageUrl: '/img/GeneticApex/216.jpg',
        type: '',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 40,
        move_1: {move_name: '這張卡可作為HP40的普通屬性的<b>基礎</b>寶可夢放置於場上。若在自己的回合中，則可將廠商的這張卡丟棄。這張卡無法<b>撤退</b>。'}
    },
    {
        id: 217,
        name: '甲殼化石',
        imageUrl: '/img/GeneticApex/217.jpg',
        type: '',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 40,
        move_1: {move_name: '這張卡可作為HP40的普通屬性的<b>基礎</b>寶可夢放置於場上。若在自己的回合中，則可將廠商的這張卡丟棄。這張卡無法<b>撤退</b>。'}
    },
    {
        id: 218,
        name: '秘密琥珀',
        imageUrl: '/img/GeneticApex/218.jpg',
        type: '',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        hp: 40,
        move_1: {move_name: '這張卡可作為HP40的普通屬性的<b>基礎</b>寶可夢放置於場上。若在自己的回合中，則可將廠商的這張卡丟棄。這張卡無法<b>撤退</b>。'}
    },
    {
        id: 219,
        name: '莉佳',
        imageUrl: '/img/GeneticApex/219.jpg',
        type: '',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        move_1: {move_name: '將自己的1隻草系寶可夢恢復50HP。'},
    },
    {
        id: 220,
        name: '小霞',
        imageUrl: '/img/GeneticApex/220.jpg',
        type: '',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        move_1: {move_name: '選擇1隻自己的水系寶可夢。擲硬幣直到出現反面，從自己的能量區抽出與正面出現的次數相同的數量的水能量，附於那隻寶可夢身上。'},
    },
    {
        id: 221,
        name: '夏伯',
        imageUrl: '/img/GeneticApex/221.jpg',
        type: '',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        move_1: {move_name: '在這個回合，自己的「九尾」「烈焰馬」「鴨嘴火獸」使用的招式，對對手的戰鬥寶可夢造成的傷害+30點。'}
    },
    {
        id: 222,
        name: '阿桔',
        imageUrl: '/img/GeneticApex/222.jpg',
        type: '',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        move_1: {move_name: '將自己的戰鬥場的「臭臭泥」「雙彈瓦斯」放回手牌。'}
    },
    {
        id: 223,
        name: '阪木',
        imageUrl: '/img/GeneticApex/223.jpg',
        type: '',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        move_1: {move_name: '在這個回合，自己的寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害+10點。'},
    },
    {
        id: 224,
        name: '小剛',
        imageUrl: '/img/GeneticApex/224.jpg',
        type: '',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        move_1: {move_name: '從自己的能量區抽出一個格鬥能量，附於「隆隆岩」或「大岩蛇」身上。'}
    },
    {
        id: 225,
        name: '娜姿',
        imageUrl: '/img/GeneticApex/225.jpg',
        type: '',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        move_1: {move_name: '將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]'},
    },
    {
        id: 226,
        name: '馬志士',
        imageUrl: '/img/GeneticApex/226.jpg',
        type: '',
        rarity: '/img/grade/diamond1.png',
        packs: '',
        move_1: {move_name: '將所有備戰寶可夢的所有雷能量改附於自己的戰鬥場的「雷丘」「頑皮雷彈」「電擊獸」身上。'},
    },
    {
        id: 227,
        name: '妙蛙種子',
        imageUrl: '/img/GeneticApex/227.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '藤鞭', damage: 40, move_energy: ['grass', 'colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 228,
        name: '臭臭花',
        imageUrl: '/img/GeneticApex/228.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '口水', damage: 60, move_energy: ['grass', 'colorless']},
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 229,
        name: '凱羅斯',
        imageUrl: '/img/GeneticApex/229.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 90,
        move_1: {
            move_name: '雙重角擊',
            damage: 50,
            move_defect: '擲2次硬幣，造成正面出現次數 × 50點傷害。',
            move_energy: ['grass', 'grass']
        },
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 230,
        name: '小火龍',
        imageUrl: '/img/GeneticApex/230.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 60,
        move_1: {
            move_name: '火花',
            move_defect: '將這隻寶可夢身上的一個火能量丟棄。',
            damage: 30,
            move_energy: ['fire']
        },
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 231,
        name: '烈焰馬',
        imageUrl: '/img/GeneticApex/231.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 100,
        move_1: {move_name: '火之鬃', damage: 40, move_energy: ['fire']},
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 232,
        name: '傑尼龜',
        imageUrl: '/img/GeneticApex/232.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '水槍', damage: 20, move_energy: ['water']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 233,
        name: '暴鯉龍',
        imageUrl: '/img/GeneticApex/233.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 150,
        move_1: {
            move_name: '破壞死光',
            damage: 100,
            move_defect: '將對手的戰鬥寶可夢身上的隨機1個能量丟棄。',
            move_energy: ['water', 'water', 'water', 'water']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 4
    },
    {
        id: 234,
        name: '拉普拉斯',
        imageUrl: '/img/GeneticApex/234.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 100,
        move_1: {
            move_name: '水炮',
            damage: 20,
            move_defect: '若額外附有3個水能量，則增加70傷害。',
            move_energy: ['water']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 235,
        name: '頑皮雷彈',
        imageUrl: '/img/GeneticApex/235.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 80,
        move_1: {move_name: '電球', damage: 60, move_energy: ['electric', 'electric']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 0
    },
    {
        id: 236,
        name: '胡地',
        imageUrl: '/img/GeneticApex/236.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 130,
        move_1: {
            move_name: '精神強念',
            damage: 60,
            move_defect: '增加對手的戰鬥寶可夢身上的能量的數量×30點傷害',
            move_energy: ['psychic', 'colorless', 'colorless']
        },
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 237,
        name: '呆呆獸',
        imageUrl: '/img/GeneticApex/237.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '擺尾拍擊', damage: 60, move_energy: ['psychic', 'colorless']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 238,
        name: '地鼠',
        imageUrl: '/img/GeneticApex/238.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 50,
        move_1: {move_name: '擲泥', damage: 20, move_energy: ['fighting']},
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 239,
        name: '卡拉卡拉',
        imageUrl: '/img/GeneticApex/239.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 60,
        move_1: {
            move_name: '叫聲',
            move_defect: '在下個對手的回合，受到這個招式的寶可夢使用招式的傷害-20點',
            move_energy: ['colorless']
        },
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 240,
        name: '尼多后',
        imageUrl: '/img/GeneticApex/240.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 140,
        move_1: {
            move_name: '甜蜜攻擊',
            damage: 80,
            move_defect: '增加自己的備戰區的「尼多王」的數量×50點傷害',
            move_energy: ['darkness', 'darkness', 'colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 241,
        name: '尼多王',
        imageUrl: '/img/GeneticApex/241.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 150,
        move_1: {move_name: '毒角', damage: 90, move_energy: ['darkness', 'darkness', 'colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 242,
        name: '大嘴蝠',
        imageUrl: '/img/GeneticApex/242.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 70,
        move_1: {move_name: '翅膀攻擊', damage: 40, move_energy: ['colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 243,
        name: '雙彈瓦斯',
        imageUrl: '/img/GeneticApex/243.jpg',
        type: '/img/type/darkness.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 110,
        ability: {
            name: '瓦斯漏氣',
            defect: '若這隻寶可夢在戰鬥上，則在自己的回合時可使用1次。將對手的戰鬥寶可夢<b>中毒</b>。'
        },
        move_1: {move_name: '撞擊', damage: 30, move_energy: ['darkness']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 244,
        name: '快龍',
        imageUrl: '/img/GeneticApex/244.jpg',
        type: '/img/type/dragon.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 160,
        move_1: {
            move_name: '流星群',
            move_defect: '對手的寶可夢會隨機被選擇4次，被選擇的所有寶可夢受到選擇次數×50點的傷害。',
            move_energy: ['water', 'electric', 'colorless', 'colorless']
        },
        retreat_cost: 3
    },
    {
        id: 245,
        name: '大比鳥',
        imageUrl: '/img/GeneticApex/245.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 130,
        ability: {
            name: '驅離',
            defect: '在自己的回合時，可使用1次。將對手的戰鬥寶可夢與備戰寶可夢互換。「由對手選擇放置於戰鬥場的寶可夢」。'
        },
        move_1: {move_name: '翅膀攻擊', damage: 70, move_energy: ['colorless', 'colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 246,
        name: '喵喵',
        imageUrl: '/img/GeneticApex/246.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '聚寶功', damage: 10, move_defect: '從自己的牌庫抽出1張牌。', move_energy: ['colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 247,
        name: '百變怪',
        imageUrl: '/img/GeneticApex/247.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 70,
        move_1: {
            move_name: '任意複製',
            damage: 60,
            move_defect: '選擇對手的場上寶可夢持有的1個招式，作為這個招式使用。若所選招式所需的能量沒有附於這隻寶可夢身上，則這個招式失敗。',
            move_energy: ['colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 248,
        name: '伊布',
        imageUrl: '/img/GeneticApex/248.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '撞擊', damage: 20, move_energy: ['colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 249,
        name: '多邊獸',
        imageUrl: '/img/GeneticApex/249.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 50,
        ability: {name: '資料掃描', defect: '在自己的回合時，可使用1次。從自己的牌庫上方抽出1張，查看後回復原狀'},
        move_1: {move_name: '稜角化', damage: 20, move_energy: ['colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 250,
        name: '卡比獸',
        imageUrl: '/img/GeneticApex/250.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/star1.png',
        packs: '',
        hp: 150,
        move_1: {move_name: '滾動', damage: 70, move_energy: ['colorless', 'colorless', 'colorless', 'colorless']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 4
    },
    {
        id: 251,
        name: '妙蛙花EX',
        imageUrl: '/img/GeneticApex/251.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 190,
        move_1: {move_name: '飛葉快刀', damage: 60, move_energy: ['grass', 'colorless', 'colorless']},
        move_2: {
            move_name: '巨型綻放',
            damage: 100,
            move_defect: '將這隻寶可夢恢復30HP。',
            move_energy: ['grass', 'grass', 'colorless', 'colorless']
        },
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 252,
        name: '椰蛋樹EX',
        imageUrl: '/img/GeneticApex/252.jpg',
        type: '/img/type/grass.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 160,
        move_1: {
            move_name: '熱帶揮擊',
            damage: 40,
            move_defect: '擲1次硬幣若為正面，則增加40點傷害。',
            move_energy: ['grass']
        },
        weakness: {type: 'fire', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 253,
        name: '噴火龍EX',
        imageUrl: '/img/GeneticApex/253.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 180,
        move_1: {move_name: '劈開', damage: 60, move_energy: ['fire', 'colorless', 'colorless']},
        move_2: {
            move_name: '紅蓮風暴',
            damage: 200,
            move_defect: '將這隻寶可夢身上的兩個火能量丟棄。',
            move_energy: ['fire', 'fire', 'colorless', 'colorless']
        },
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 254,
        name: '風速狗EX',
        imageUrl: '/img/GeneticApex/254.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 150,
        move_1: {
            move_name: '猛火衝刺',
            damage: 120,
            move_defect: '這隻寶可夢也收到20點傷害。',
            move_energy: ['fire', 'fire', 'colorless']
        },
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 255,
        name: '火焰鳥EX',
        imageUrl: '/img/GeneticApex/255.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 140,
        move_1: {
            move_name: '烈火之舞',
            move_defect: '擲3次硬幣，從自己的能量去抽出與正面出現的次數相同數量的火能量，以任意方式附於備戰區的火系寶可夢身上。',
            move_energy: ['fire']
        },
        move_2: {move_name: '高溫爆破', damage: 70, move_energy: ['fire', 'colorless', 'colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 256,
        name: '水箭龜EX',
        imageUrl: '/img/GeneticApex/256.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 180,
        move_1: {move_name: '衝浪', damage: 40, move_energy: ['water', 'colorless']},
        move_2: {
            move_name: '水箭炮',
            damage: 100,
            move_defect: '若額外附有2個水能量，則增加60點傷害',
            move_energy: ['water', 'water', 'colorless']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 257,
        name: '寶石海星EX',
        imageUrl: '/img/GeneticApex/257.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 130,
        move_1: {move_name: '水泡濺射', damage: 90, move_energy: ['water', 'water']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 0
    },
    {
        id: 258,
        name: '急凍鳥EX',
        imageUrl: '/img/GeneticApex/258.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 140,
        move_1: {move_name: '冰之翼', damage: 40, move_energy: ['water', 'colorless']},
        move_2: {
            move_name: '暴風雪',
            damage: 80,
            move_defect: '對手的所有備戰寶可夢也受到10點傷害。',
            move_energy: ['water', 'water', 'water']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 259,
        name: '皮卡丘EX',
        imageUrl: '/img/GeneticApex/259.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 120,
        move_1: {
            move_name: '電氣陣',
            damage: 30,
            move_defect: '造成自己的備戰區雷系寶可夢數量×30點傷害。',
            move_energy: ['electric', 'electric']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 260,
        name: '閃電鳥EX',
        imageUrl: '/img/GeneticApex/260.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 130,
        move_1: {move_name: '啄', damage: 20, move_energy: ['electric']},
        move_2: {
            move_name: '颶風雷電',
            damage: 50,
            move_defect: '擲4次硬幣，造成正面出現的次數×50點傷害。',
            move_energy: ['electric', 'electric', 'electric']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 261,
        name: '耿鬼EX',
        imageUrl: '/img/GeneticApex/261.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 170,
        ability: {name: '影子咒縛', defect: '只要這隻寶可夢在戰鬥場上，對手無法從手牌使出支援者卡。'},
        move_1: {move_name: '陰森射擊', damage: 100, move_energy: ['psychic', 'psychic', 'psychic']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 262,
        name: '超夢EX',
        imageUrl: '/img/GeneticApex/262.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 150,
        move_1: {move_name: '念動彈', damage: 50, move_energy: ['psychic', 'colorless']},
        move_2: {
            move_name: '精神衝鋒',
            damage: 100,
            move_defect: '將這隻寶可夢身上的2個超能力能量丟棄。',
            move_energy: ['psychic', 'psychic', 'colorless', 'colorless']
        },
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 263,
        name: '怪力EX',
        imageUrl: '/img/GeneticApex/263.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 180,
        move_1: {move_name: '百萬噸重拳', damage: 120, move_energy: ['fighting', 'fighting', 'fighting']},
        weakness: {type: 'psychic', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 264,
        name: '嘎啦嘎啦EX',
        imageUrl: '/img/GeneticApex/264.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 140,
        move_1: {
            move_name: '骨頭迴力鏢',
            damage: 60,
            move_defect: '擲2次硬幣，造成正面出現的次數×80點傷害。',
            move_energy: ['fighting', 'fighting']
        },
        weakness: {type: 'grass', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 265,
        name: '胖可丁EX',
        imageUrl: '/img/GeneticApex/265.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 140,
        move_1: {
            move_name: '催眠曲',
            damage: 80,
            move_defect: '將對手的戰鬥寶可夢<b>睡眠</b>。',
            move_energy: ['colorless', 'colorless', 'colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 266,
        name: '莉佳',
        imageUrl: '/img/GeneticApex/266.jpg',
        type: '',
        rarity: '/img/grade/star2.png',
        packs: '',
        move_1: {move_name: '將自己的1隻草系寶可夢恢復50HP。'},
    },
    {
        id: 267,
        name: '小霞',
        imageUrl: '/img/GeneticApex/267.jpg',
        type: '',
        rarity: '/img/grade/star2.png',
        packs: '',
        move_1: {move_name: '選擇1隻自己的水系寶可夢。擲硬幣直到出現反面，從自己的能量區抽出與正面出現的次數相同的數量的水能量，附於那隻寶可夢身上。'},
    },
    {
        id: 268,
        name: '夏伯',
        imageUrl: '/img/GeneticApex/268.jpg',
        type: '',
        rarity: '/img/grade/star2.png',
        packs: '',
        move_1: {move_name: '在這個回合，自己的「九尾」「烈焰馬」「鴨嘴火獸」使用的招式，對對手的戰鬥寶可夢造成的傷害+30點。'}
    },
    {
        id: 269,
        name: '阿桔',
        imageUrl: '/img/GeneticApex/269.jpg',
        type: '',
        rarity: '/img/grade/star2.png',
        packs: '',
        move_1: {move_name: '將自己的戰鬥場的「臭臭泥」「雙彈瓦斯」放回手牌。'}
    },
    {
        id: 270,
        name: '阪木',
        imageUrl: '/img/GeneticApex/270.jpg',
        type: '',
        rarity: '/img/grade/star2.png',
        packs: '',
        move_1: {move_name: '在這個回合，自己的寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害+10點。'},
    },
    {
        id: 271,
        name: '小剛',
        imageUrl: '/img/GeneticApex/271.jpg',
        type: '',
        rarity: '/img/grade/star2.png',
        packs: '',
        move_1: {move_name: '從自己的能量區抽出一個格鬥能量，附於「隆隆岩」或「大岩蛇」身上。'}
    },
    {
        id: 272,
        name: '娜姿',
        imageUrl: '/img/GeneticApex/272.jpg',
        type: '',
        rarity: '/img/grade/star2.png',
        packs: '',
        move_1: {move_name: '將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]'},
    },
    {
        id: 273,
        name: '馬志士',
        imageUrl: '/img/GeneticApex/273.jpg',
        type: '',
        rarity: '/img/grade/star2.png',
        packs: '',
        move_1: {move_name: '將所有備戰寶可夢的所有雷能量改附於自己的戰鬥場的「雷丘」「頑皮雷彈」「電擊獸」身上。'}
    },
    {
        id: 274,
        name: '火焰鳥EX',
        imageUrl: '/img/GeneticApex/274.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 140,
        move_1: {
            move_name: '烈火之舞',
            move_defect: '擲3次硬幣，從自己的能量去抽出與正面出現的次數相同數量的火能量，以任意方式附於備戰區的火系寶可夢身上。',
            move_energy: ['fire']
        },
        move_2: {move_name: '高溫爆破', damage: 70, move_energy: ['fire', 'colorless', 'colorless']},
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 275,
        name: '急凍鳥EX',
        imageUrl: '/img/GeneticApex/275.jpg',
        type: '/img/type/water.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 140,
        move_1: {move_name: '冰之翼', damage: 40, move_energy: ['water', 'colorless']},
        move_2: {
            move_name: '暴風雪',
            damage: 80,
            move_defect: '對手的所有備戰寶可夢也受到10點傷害。',
            move_energy: ['water', 'water', 'water']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 276,
        name: '閃電鳥EX',
        imageUrl: '/img/GeneticApex/276.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 130,
        move_1: {move_name: '啄', damage: 20, move_energy: ['electric']},
        move_2: {
            move_name: '颶風雷電',
            damage: 50,
            move_defect: '擲4次硬幣，造成正面出現的次數×50點傷害。',
            move_energy: ['electric', 'electric', 'electric']
        },
        weakness: {type: 'electric', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 277,
        name: '耿鬼EX',
        imageUrl: '/img/GeneticApex/277.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 170,
        ability: {name: '影子咒縛', defect: '只要這隻寶可夢在戰鬥場上，對手無法從手牌使出支援者卡。'},
        move_1: {move_name: '陰森射擊', damage: 100, move_energy: ['psychic', 'psychic', 'psychic']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 278,
        name: '怪力EX',
        imageUrl: '/img/GeneticApex/278.jpg',
        type: '/img/type/fighting.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 180,
        move_1: {move_name: '百萬噸重拳', damage: 120, move_energy: ['fighting', 'fighting', 'fighting']},
        weakness: {type: 'psychic', multiplier: 20},
        retreat_cost: 3
    },
    {
        id: 279,
        name: '胖可丁EX',
        imageUrl: '/img/GeneticApex/279.jpg',
        type: '/img/type/colorless.png',
        rarity: '/img/grade/star2.png',
        packs: '',
        hp: 140,
        move_1: {
            move_name: '催眠曲',
            damage: 80,
            move_defect: '將對手的戰鬥寶可夢<b>睡眠</b>。',
            move_energy: ['colorless', 'colorless', 'colorless']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 280,
        name: '噴火龍EX',
        imageUrl: '/img/GeneticApex/280.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/star3.png',
        packs: '',
        hp: 180,
        move_1: {move_name: '劈開', damage: 60, move_energy: ['fire', 'colorless', 'colorless']},
        move_2: {
            move_name: '紅蓮風暴',
            damage: 200,
            move_defect: '將這隻寶可夢身上的兩個火能量丟棄。',
            move_energy: ['fire', 'fire', 'colorless', 'colorless']
        },
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 281,
        name: '皮卡丘EX',
        imageUrl: '/img/GeneticApex/281.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/star3.png',
        packs: '',
        hp: 120,
        move_1: {
            move_name: '電氣陣',
            damage: 30,
            move_defect: '造成自己的備戰區雷系寶可夢數量×30點傷害。',
            move_energy: ['electric', 'electric']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 282,
        name: '超夢EX',
        imageUrl: '/img/GeneticApex/282.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/star3.png',
        packs: '',
        hp: 150,
        move_1: {move_name: '念動彈', damage: 50, move_energy: ['psychic', 'colorless']},
        move_2: {
            move_name: '精神衝鋒',
            damage: 100,
            move_defect: '將這隻寶可夢身上的2個超能力能量丟棄。',
            move_energy: ['psychic', 'psychic', 'colorless', 'colorless']
        },
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 283,
        name: '夢幻',
        imageUrl: '/img/GeneticApex/283.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/star3.png',
        packs: '',
        hp: 60,
        move_1: {move_name: '對手公開手牌', move_energy: ['psychic']},
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 284,
        name: '噴火龍EX',
        imageUrl: '/img/GeneticApex/284.jpg',
        type: '/img/type/fire.png',
        rarity: '/img/grade/crown.png',
        packs: '',
        hp: 180,
        move_1: {move_name: '劈開', damage: 60, move_energy: ['fire', 'colorless', 'colorless']},
        move_2: {
            move_name: '紅蓮風暴',
            damage: 200,
            move_defect: '將這隻寶可夢身上的兩個火能量丟棄。',
            move_energy: ['fire', 'fire', 'colorless', 'colorless']
        },
        weakness: {type: 'water', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 285,
        name: '皮卡丘EX',
        imageUrl: '/img/GeneticApex/285.jpg',
        type: '/img/type/electric.png',
        rarity: '/img/grade/crown.png',
        packs: '',
        hp: 120,
        move_1: {
            move_name: '電氣陣',
            damage: 30,
            move_defect: '造成自己的備戰區雷系寶可夢數量×30點傷害。',
            move_energy: ['electric', 'electric']
        },
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
    {
        id: 286,
        name: '超夢EX',
        imageUrl: '/img/GeneticApex/286.jpg',
        type: '/img/type/psychic.png',
        rarity: '/img/grade/crown.png',
        packs: '',
        hp: 150,
        move_1: {move_name: '念動彈', damage: 50, move_energy: ['psychic', 'colorless']},
        move_2: {
            move_name: '精神衝鋒',
            damage: 100,
            move_defect: '將這隻寶可夢身上的2個超能力能量丟棄。',
            move_energy: ['psychic', 'psychic', 'colorless', 'colorless']
        },
        weakness: {type: 'darkness', multiplier: 20},
        retreat_cost: 2
    },
    {
        id: 90001,
        name: '傷藥',
        imageUrl: '/img/PROMO-A/1.jpg',
        type: '',
        rarity: '/img/grade/promo-a.png',
        packs: '',
        move_1: {move_name: '將自己的1隻寶可夢恢復20HP'},
    },
    {
        id: 90002,
        name: '速度強化',
        imageUrl: '/img/PROMO-A/2.jpg',
        type: '',
        rarity: '/img/grade/promo-a.png',
        packs: '',
        move_1: {move_name: '在這個回合，自己的戰鬥寶可夢撤退所需的能量減少1個'},
    },
    {
        id: 90003,
        name: '窺手鏡',
        imageUrl: '/img/PROMO-A/3.jpg',
        type: '',
        rarity: '/img/grade/promo-a.png',
        packs: '',
        move_1: {move_name: '查看對手所有手牌的正面'},
    },
    {
        id: 90004,
        name: '寶可夢圖鑑',
        imageUrl: '/img/PROMO-A/4.jpg',
        type: '',
        rarity: '/img/grade/promo-a.png',
        packs: '',
        move_1: {move_name: '查看自己的牌庫上方3張卡，回復原樣'},
    },
    {
        id: 90005,
        name: '精靈球',
        imageUrl: '/img/PROMO-A/5.jpg',
        type: '',
        rarity: '/img/grade/promo-a.png',
        packs: '',
        move_1: {move_name: '從自己的牌庫隨機抽出一張基礎'},
    },
    {
        id: 90006,
        name: '紅牌',
        imageUrl: '/img/PROMO-A/6.jpg',
        type: '',
        rarity: '/img/grade/promo-a.png',
        packs: '',
        move_1: {move_name: '將對手的手牌全部放回牌庫。對手從牌庫抽出三3張牌'},
    },
    {
        id: 90007,
        name: '大木博士',
        imageUrl: '/img/PROMO-A/7.jpg',
        type: '',
        rarity: '/img/grade/promo-a.png',
        packs: '',
        move_1: {move_name: '從自己的牌庫抽出2張卡'},
    },
    {
        id: 90009,
        name: '皮卡丘',
        imageUrl: '/img/PROMO-A/9.jpg',
        type: '/img/type/electric.png',
        hp: 60,
        rarity: '/img/grade/promo-a.png',
        packs: '',
        move_1: {move_name: '咬', damage: 20, move_energy: ['electric']},
        weakness: {type: 'fighting', multiplier: 20},
        retreat_cost: 1
    },
];