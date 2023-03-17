// Composables
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Chat from '@/views/Chat.vue'
import sendPage from '@/views/sendPage.vue'
const routes = [
  // {
  //   path: '/',
   
  //   name: 'Home',
  //   component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    
  // },
  {
    path:"/",
    name:'sendPage',
    component:sendPage
  },
  {
    path:"/chat",
    name:'chatPage',
    component:Chat
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
