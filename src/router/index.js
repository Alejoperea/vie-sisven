import { createRouter, createWebHashHistory } from 'vue-router'

import EditarCategoria from '../components/Categoria/EditarCategoria.vue';
import NewCategoria from '../components/Categoria/NewCategoria.vue';

import EditarPaymode from '../components/Paymode/EditarPaymode.vue';
import NewPaymode from '../components/Paymode/NewPaymode.vue';

import EditarCustomer from '../components/Customer/EditarCustomer.vue';
import NewCustomer from '../components/Customer/NewCustomer.vue';

import HomeView from '../views/HomeView.vue';
import Categoria from '../views/Categorias.vue';
import Paymode from '../views/Paymodes.vue';
import Customer from '../views/Customers.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: Categoria
  },

  {
    path: '/categorias/editar/:id',
    name: 'EditarCategoria',
    component: EditarCategoria 
  },

  {
    path: '/categorias/nueva',
    name: 'NewCategoria',
    component: NewCategoria
  },

  {
    path: '/paymodes',
    name: 'paymodes',
    component: Paymode
  },

  {
    path: '/paymodes/editar/:id',
    name: 'EditarPaymode',
    component: EditarPaymode 
  },

  {
    path: '/paymodes/nueva',
    name: 'NewPaymode',
    component: NewPaymode
  },

  {
    path: '/customers',
    name: 'customers',
    component: Customer
  },

  {
    path: '/customers/editar/:id',
    name: 'EditarCustomer',
    component: EditarCustomer
  },

  {
    path: '/customers/nueva',
    name: 'NewCustomer',
    component: NewCustomer
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
