import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'RecFinder' }
    },
    {
      path: '/categories',
      name: 'category',
      component: () => import('../views/CategoryView.vue'),
      meta: { title: 'RecFinder - Categories' }
    }
  ]
})

export default router
