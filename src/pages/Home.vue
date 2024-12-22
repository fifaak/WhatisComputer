<template>
    <!-- Outer container to center everything and provide top margin -->
    <main
  class="

    flex flex-col
    items-center
    justify-center
    gap-20
    h-full
    mt-[40px]
    w-full
    px-4
    sm:px-6
    lg:px-8
    mx-auto
    md:flex-row
  "
>
      <!-- Left column (text & button) -->
      <div
        class="
          flex
          flex-col
          items-center         /* Center horizontally on mobile... */
          md:items-center      /* ...and remain centered on desktop */
          text-center
          max-w-lg
        "
      >
        <img
          loading="lazy"
          src="../assets/crma_logo.png"
          alt="Computer concept illustration"
          class="
            object-contain
            max-w-full
            w-[200px]
            md:w-[240px]
            lg:w-[272px]
            mx-auto
          "
        />
  
        <h1
  class="
    mt-6
    text-3xl      /* smaller on mobile */
    sm:text-4xl
    md:text-5xl
    lg:text-6xl   /* largest only on bigger screens */
    font-black
    text-slate-800
    whitespace-nowrap
  "
>
  "คอมพิวเตอร์" คืออะไร
</h1>
  
        <p class="mt-3 text-blue-500 max-w-md">
          ค้นพบโลกของคอมพิวเตอร์ที่เปลี่ยนแปลงชีวิตเราในทุกๆ ด้าน
        </p>
  
        <button
          class="
            flex gap-2 items-center
            px-7 py-3
            mt-7
            text-white
            rounded-md
            bg-slate-800
          "
          @click="startExploring"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/167f8969fc9e4702b2c941ecb34dd7f8/3c810940c4306b6a1f1f38e00e4e8509f4abef6113fa1c57f61a9fcaa26d4898?apiKey=167f8969fc9e4702b2c941ecb34dd7f8&"
            alt=""
            class="w-4 h-4"
          />
          <span>เริ่มหาคำตอบ</span>
        </button>
      </div>
  
      <!-- Right column (3D computer image) -->
      <div
        class="
          flex
          justify-center
          items-center
          w-full
          md:w-auto
          max-w-md
        "
      >
        <img
          class="
            w-[90%]
            md:w-full
            drop-shadow-custom
            object-contain
            h-auto
          "
          src="../assets/computer_home.svg"
          alt="3D Computer"
        />
      </div>
    </main>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const startExploring = () => {
    router.push('/content')
  }
  </script>
  
  <style scoped>
  /* Optional styles here */
  </style>