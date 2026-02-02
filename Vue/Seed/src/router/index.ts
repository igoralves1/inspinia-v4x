import { createRouter, createWebHistory } from 'vue-router'
import { allRoutes } from '@/router/routes.ts'
import { appTitle } from '@/helpers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allRoutes,
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title ? to.meta.title + ' | ' + appTitle : appTitle
  if (title) {
    document.title = title.toString()
  }
  next()
})

export default router
