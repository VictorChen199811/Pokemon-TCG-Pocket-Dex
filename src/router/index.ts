import { createRouter, createWebHistory } from 'vue-router'
import CardList from '../components/CardList.vue'
import CardDetail from '../components/CardDetail.vue'
import DeckBuilding from '../components/DeckBuilding.vue'

const routes = [
  {
    path: '/',
    redirect: '/cards'
  },
  {
    path: '/cards',
    name: 'CardList',
    component: CardList
  },
  {
    path: '/card/:id',
    name: 'CardDetail',
    component: CardDetail
  },
  {
    path: '/deck-building',  // 確保這裡的路徑是 '/deck-building'
    name: 'DeckBuilding',
    component: DeckBuilding
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
