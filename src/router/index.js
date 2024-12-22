// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Content from '../pages/Content.vue'
import Page1 from '../pages/Page1.vue'
import Page2 from '../pages/Page2.vue'
import Page3 from '../pages/Page3.vue'
import Page4 from '../pages/Page4.vue'
import Page5 from '../pages/Page5.vue'
import Page6 from '../pages/Page6.vue'
import Page7 from '../pages/Page7.vue'

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
  },
  {
    path: '/page1',
    name: 'Page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/page3',
    name: 'Page3',
    component: Page3
  },
  {
    path: '/page4',
    name: 'Page4',
    component: Page4
  },
  {
    path: '/page5',
    name: 'Page5',
    component: Page5
  },
  {
    path: '/page6',
    name: 'Page6',
    component: Page6
  },
  {
    path: '/page7',
    name: 'Page7',
    component: Page7
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router