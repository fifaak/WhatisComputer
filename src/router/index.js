// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Content from '../pages/WhatIsComputer.vue' // If you have a Content.vue

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/content',
    name: 'Content',
    component: Content
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router