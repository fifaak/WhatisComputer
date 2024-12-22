<template>
    <!-- Badge Section -->
    <!-- "mx-auto" centers your content horizontally, while "px-4" adds horizontal padding -->
    <div class="container mx-auto px-4 py-60 ">
      <!-- Heading -->
      <h1
        class="
          text-center text-blue-500 font-bold
          text-2xl sm:text-3xl md:text-4xl
          mb-8
        "
      >
        องค์ประกอบหลักของคอมพิวเตอร์
      </h1>
      
      <!-- Responsive Grid:
           1 col on smallest screens,
           2 cols on sm,
           3 cols on md,
           4 cols on lg and above
        -->
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-8
          items-center
          justify-center
        "
        role="list"
      >
        <!-- Badge 1: Hardware -->
        <div
          class="
            flex flex-col items-center justify-center
            rounded-lg
            shadow-lg
            border border-blue-500
            p-6
            bg-white
            transition-transform
            hover:scale-105
            hover:shadow-xl
          "
          role="listitem"
          tabindex="0"
        >
          <div class="text-blue-500 text-5xl mb-4">
            <i class="fa-solid fa-computer"></i>
          </div>
          <h2 class="text-xl font-semibold text-stone-900">ฮาร์ดแวร์</h2>
        </div>
  
        <!-- Badge 2: Software -->
        <div
          class="
            flex flex-col items-center justify-center
            rounded-lg
            shadow-lg
            border border-blue-500
            p-6
            bg-white
            transition-transform
            hover:scale-105
            hover:shadow-xl
          "
          role="listitem"
          tabindex="0"
        >
          <div class="text-blue-500 text-5xl mb-4">
            <i class="fa-solid fa-code"></i>
          </div>
          <h2 class="text-xl font-semibold text-stone-900">ซอฟต์แวร์</h2>
        </div>
  
        <!-- Badge 3: Personnel -->
        <div
          class="
            flex flex-col items-center justify-center
            rounded-lg
            shadow-lg
            border border-blue-500
            p-6
            bg-white
            transition-transform
            hover:scale-105
            hover:shadow-xl
          "
          role="listitem"
          tabindex="0"
        >
          <div class="text-blue-500 text-5xl mb-4">
            <i class="fa-solid fa-users"></i>
          </div>
          <h2 class="text-xl font-semibold text-stone-900">บุคลากร</h2>
        </div>
  
        <!-- Badge 4: Data -->
        <div
          class="
            flex flex-col items-center justify-center
            rounded-lg
            shadow-lg
            border border-blue-500
            p-6
            bg-white
            transition-transform
            hover:scale-105
            hover:shadow-xl
          "
          role="listitem"
          tabindex="0"
        >
          <div class="text-blue-500 text-5xl mb-4">
            <i class="fa-solid fa-database"></i>
          </div>
          <h2 class="text-xl font-semibold text-stone-900">ข้อมูล</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Page2'
  }
  </script>