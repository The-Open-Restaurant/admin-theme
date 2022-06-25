import { createRouter, createWebHistory } from 'vue-router'

// Dynamic routes allocation
const loadComponent = (view: string) => {
  return () => import(`../views/${view}.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadComponent('HomeView'),
    },
    {
      // All routes need to be above NotFound route
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: loadComponent('NotFound'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  // const auth = useAuth()
  // if (to.name === 'myaccount' && !auth.isAuthenticated) next({ name: 'signin' })
  next()
})

export default router
