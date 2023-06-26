import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FooterView from '../views/FooterView.vue'
import headerView from '../views/HeaderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/footer',
      name: 'footer',
      component: FooterView
    },
    {
      path: '/header',
      name: 'header',
      component: headerView
    }
  ]
})

export default router
