import { createRouter, createWebHashHistory } from 'vue-router'

import EditarCategoria from '..components/categorias/EditarCategoria.vue';
import NewCategoria from '..components/categorias/NewCategoria.vue';
import HomeView from '../views/HomeView.vue';
import Categorias from '../views/Categorias.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: Categorias
  },

  {
    path: '/editar-categoria/:id',
    name: 'EditarCategoria',
    component: EditarCategoria 
  },

  {
    path: '/add-categoria',
    name: 'NewCategoria',
    component: NewCategoria
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
