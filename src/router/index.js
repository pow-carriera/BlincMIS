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
      path: '/index',
      component: () => import('../views/index.vue')
    },
    {
      path: '/request',
      component: () => import('../views/requests.vue')
    },
    {
      path: '/attendance',
      component: () => import('../views/attendance.vue')
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
    },
    {
      path: '/calendar',
      component: () => import('../views/calendar.vue')
    },
  ]
})

export default router
