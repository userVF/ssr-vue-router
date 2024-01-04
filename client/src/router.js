import {
  createRouter as _createRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router'

import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },  
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  }
]

const history = import.meta.env.SSR
  ? createMemoryHistory()
  : createWebHistory()

const createRouter = () => _createRouter({
  history,
  routes,
})

export { createRouter }
