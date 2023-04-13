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
			path: '/history',
			component: () => import('../views/historya.vue')
		},
		{
			path: '/signup',
			component: () => import('../views/register.vue')
		},



  ]
})

export default router
