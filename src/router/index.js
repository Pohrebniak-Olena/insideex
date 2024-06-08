import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import PathNotFound from '../views/NotFound.vue'

const router = createRouter({

  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/wallet',
      name: 'Wallet',
      component: () => import('../views/WalletView.vue')
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('../views/Account.vue')
    },
    {
      path: '/transactions',
      name: 'TransHistory',
      component: () => import('../views/TransHistory.vue')
    },
    {
      path: '/transactions-qac',
      name: 'TransHistoryQAC',
      component: () => import('../views/TransHistoryQAC.vue')
    },
    {
      path: '/terminals',
      name: 'Terminals',
      component: () => import('../views/Terminals.vue')
    },
    {
      path: '/cards',
      name: 'Cards',
      component: () => import('../views/Cards.vue')
    },
    {
      path: '/active-trans',
      name: 'ActiveTrans',
      component: () => import('../views/ActiveTrans.vue')
    },

    {
      path: '/:pathMatch(.*)*',
      component: PathNotFound
    },
  ]
})

export default router
