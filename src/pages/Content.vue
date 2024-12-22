<!-- AllPages.vue -->
<template>
    <div>
      <!-- Option A: Render them all in a row (or stacked) -->
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
  
      <!-- Option B: If you only want one displayed at a time,
           you could do something like:
      <component :is="currentPage" />
      -->
    </div>
  </template>
  
  <script>
  import Page1 from '../pages/Page1.vue'
  import Page2 from '../pages/Page2.vue'
  import Page3 from '../pages/Page3.vue'
  import Page4 from '../pages/Page4.vue'
  import Page5 from '../pages/Page5.vue'
  import Page6 from '../pages/Page6.vue'
  import Page7 from '../pages/Page7.vue'
  
  export default {
    name: 'Content',
    components: {
      Page1,
      Page2,
      Page3,
      Page4,
      Page5,
      Page6,
      Page7
    },
    data() {
      return {
        currentPage: 'Content'
      }
    }
  }
  </script>