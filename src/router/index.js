import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/request',
      component: () => import('../views/requests.vue')
    },
    {
      path: '/history',
      component: () => import('../views/historya.vue')
    },
    {
      path: '/login',
      component: () => import('../views/index.vue')
    },
    {
      path: '/employees',
      component: () => import('../views/employees.vue')
    },
    {
      path: '/attendance',
      component: () => import('../views/attendance.vue')
    },
    {
      path: '/profile',
      component: () => import('../views/profile.vue')
    }
  ]
})

export default router
