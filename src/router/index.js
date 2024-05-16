import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/anotacoes',
    name: 'anotacoes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NotesView.vue')
  },
  {
    path: '/',
    name: 'noter',
    component : () => import('../views/NoterView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
