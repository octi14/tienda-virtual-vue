import { createWebHistory, createRouter } from "vue-router"
import HelloWorld from '../components/HelloWorld.vue'
import Ofertas from '../components/Ofertas.vue'
import Publicar from '../components/Publicar.vue'
import Explorar from '../components/Explorar.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/explorar',
    name: 'Explorar',
    component: Explorar
  },
  {
    path: '/ofertas',
    name: 'Ofertas',
    component: Ofertas
  },
  {
    path: '/publicar',
    name: 'Publicar',
    component: Publicar
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
