import { createRouter, createWebHistory  } from "vue-router";

import Home from '@/views/Home';
// import Todos from './views/Todos';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/todos',
      component: () => import('./views/Todos')
    }
  ]
})