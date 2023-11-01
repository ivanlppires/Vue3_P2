// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Layout.vue'),
    redirect: '/add',
    children: [
      {
      path: 'add',
      name: 'Cadastrar',
      component: () => import('@/views/Add.vue')
      },
      {
        path: 'list',
        name: 'Listar',
        component: () => import('@/views/List.vue')
      },
      {
        path: 'edit/:id',
        name: 'Editar',
        component: () => import('@/views/Edit.vue')
      },
      {
        path: 'report',
        name: 'Relatório',
        component: () => import('@/views/Report.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
