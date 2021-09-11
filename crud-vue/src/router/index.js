import { createRouter, createWebHashHistory } from 'vue-router'
import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'
import Listar from '../components/Listar.vue'

const routes = [
  
  {
    path: '/',
    name: 'Listar',
    component: Listar
  },

  {
    path: '/crear',
    name: 'Crear',
    component: Crear
  },

  {
    path: '/editar/:id',
    name: 'Editar',
    component: Editar
  },

  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
