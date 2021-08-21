import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/ofertas',
    name: 'Ofertas',
    component: () => import('../components/Ofertas.vue')
  },
  {
    path: '/publicar',
    name: 'Publicar',
    component: () => import('../components/Publicar.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../components/Contacto.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/', '/ofertas', '/publicar', '/contacto']
  const authRequired = publicPages.reduce( (authReq, page) => { 
    return authReq && !to.path.includes(page)
  }, true)
  const tryingToLogin = to.path === '/login';
  const tryingToRegister = to.path === '/register';
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn)
    return next('/login')

  if (tryingToLogin && loggedIn)
    return next('/')

  if (tryingToRegister && loggedIn)
    return next('/')

  next()
})

export default router
