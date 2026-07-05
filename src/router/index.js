import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'
import UserDetail from '../views/UserDetail.vue'
import CreateUser from '../views/CreateUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UserList
    },
    {
      path: '/user/:id', 
      name: 'userDetail',
      component: UserDetail
    },
    {
      path: '/create',
      name: 'create',
      component: CreateUser
    }
  ]
})

export default router