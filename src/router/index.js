import { createRouter, createWebHistory } from 'vue-router';
import {ref} from "vue";
import Home from '../views/Home.vue'
import About from "@/views/About.vue";
import Categories from "@/views/Categories.vue";
import Contact from "@/views/Contact.vue";
import Schedule from "@/views/Schedule.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { transition: 'slide-right' },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule,
    },
  ]
})

export default router


