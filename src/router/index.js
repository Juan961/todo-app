import { createRouter, createWebHistory } from 'vue-router'


import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Tasks from '../views/Tasks.vue'
import Error from '../views/Error.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
    meta: { requiresAuth: true }
  },
  {
    path: '/:catchAll(.*)',
    name : 'Error',
    component : Error
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router