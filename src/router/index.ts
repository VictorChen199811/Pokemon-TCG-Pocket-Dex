import { createRouter, createWebHistory } from 'vue-router'
import CardList from '../components/CardList.vue'
import CardDetail from '../components/CardDetail.vue'
import DeckBuilding from '../components/DeckBuilding.vue'
import Login from '../components/Login.vue'
import SetPassword from '../components/SetPassword.vue'
import UserProfile from '../components/UserProfile.vue'  // 添加這行
import DeckList from '../components/DeckList.vue'
import CreateDeck from '../components/CreateDeck.vue'
import DeckDetail from '../components/DeckDetail.vue'

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
    path: '/deck-building',  
    name: 'DeckBuilding',
    component: DeckBuilding
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/set-password',
    name: 'SetPassword',
    component: SetPassword
  },
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/decks',
    name: 'DeckList',
    component: DeckList
  },
  {
    path: '/create-deck',
    name: 'CreateDeck',
    component: CreateDeck
  },
  {
    path: '/deck/:id',
    name: 'DeckDetail',
    component: DeckDetail
  },
  {
    path: '/edit-deck/:id',
    name: 'EditDeck',
    component: CreateDeck
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
