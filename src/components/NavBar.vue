<template>
    <nav
      class="fixed top-0 left-0 w-full z-50 flex flex-col justify-center self-center p-2.5 bg-white"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        class="flex justify-between items-center px-8 py-5 w-full rounded-xl border border-solid bg-opacity-90 border-neutral-200 min-h-[56px]"
      >
        <div class="flex gap-6 justify-center items-center self-stretch my-auto w-64 min-w-[240px]">
          
          <!-- หน้าหลัก -->
          <router-link
            to="/"
            class="
              flex justify-center items-center
              self-stretch my-auto
              text-sm
              whitespace-nowrap
              rounded
              font-medium
              text-slate-500
            "
            :class="$route.path === '/' ? 'font-bold text-slate-800' : ''"
            aria-current="page"
          >
            หน้าหลัก
          </router-link>
  
          <!-- เนื้อหา -->
          <router-link
            to="/content"
            class="
              flex gap-2 justify-center items-center
              self-stretch my-auto
              text-sm
              whitespace-nowrap
              rounded
              font-medium
              text-slate-500
            "
            :class="$route.path === '/content' ? 'font-bold text-slate-800' : ''"
          >
            เนื้อหา
          </router-link>
          
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  // No script logic needed for this approach.
  </script>
  
  <style scoped>
  /* Optional navbar styles */
  </style>