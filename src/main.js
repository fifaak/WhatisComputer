// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Make sure this CSS file includes the Tailwind directives:
import './style.css'  // or './main.css'

createApp(App)
  .use(router)
  .mount('#app')