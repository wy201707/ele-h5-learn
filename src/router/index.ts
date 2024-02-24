import { createRouter, createWebHistory } from 'vue-router'
import TabView from '../view/tabs/TabView.vue'
import HomeView from '../view/home/HomeView.vue'
import MeView from '../view/me/MeView.vue'
import OrderView from '../view/order/OrderView.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
    // name: 'Home',
    // component: HomeView
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: TabView,
    children: [
      { path: '/home', name: 'home', component: HomeView },
      { path: '/order', name: 'order', component: OrderView },
      { path: '/me', name: 'me', component: MeView }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
