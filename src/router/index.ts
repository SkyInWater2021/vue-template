import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/main' },
    {
      path: '/main',
      component: () => import('@/views/HomeView.vue'),
    },
  ],
})

export default router
