import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import PathNotFound from '../views/NotFound.vue'

const router = createRouter({

  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },

    // {
    // path: '/about',
    // name: 'about',
    // component: () => import('../views/AboutView.vue')
    // }

    {
      path: '/:pathMatch(.*)*',
      component: PathNotFound
    },
  ]
})

export default router
