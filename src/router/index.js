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
    },
    {
      path: '/recipe/:food',
      name: 'recipe',
      component: () => import('../views/RecipeView.vue'),
      props: true,
      meta: { title: 'RecFinder - Recipe' }
    },
    {
      path: '/category/:category',
      name: 'category result',
      component: () => import('../views/CategoryResultView.vue'),
      props: true,
      meta: { title: 'RecFinder'},
      beforeEnter: (to, from, next) => {
        const category = to.params.category;
        document.title = `RecFinder - ${category} Category`;
        next();
      },
    },
    {
      path: '/:catchAll(.*)',
      name: 'Not Found',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: 'RecFinder - Not Found' }
    }
  ]
})

export default router
