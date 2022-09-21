import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import ToDoList from '../views/ToDoList.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todoList',
    name: 'ToDoList',
    component: ToDoList,
    props: true
  },
  // catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundPage',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
