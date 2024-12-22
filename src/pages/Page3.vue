<!-- File: src/pages/Page3.vue -->
<template>
    <!-- Outer container: centers content, adds padding top/bottom -->
    <div class="container mx-auto px-4 py-10">
      
      <!-- Heading Section (Hardware) -->
      <div class="flex items-center gap-4 mb-8">
        <img
          class="w-14 h-14"
          src="https://via.placeholder.com/57x57"
          alt="icon"
        />
        <h1 class="text-3xl font-semibold text-gray-900">
          ฮาร์ดแวร์
        </h1>
      </div>
  
      <!-- Mainboard Section (stack on mobile, side-by-side on md+) -->
      <div class="flex flex-col md:flex-row gap-6 mb-12">
        <!-- Image on the left (or top on mobile) -->
        <img
          class="w-full md:w-[40%] h-auto rounded "
          src="../assets/mainboard.svg"
          alt="Mainboard"
        />
        <!-- Text block on the right (or below on mobile) -->
        <div
          class="
            flex flex-col justify-center
            bg-blue-500 text-white
            p-6
            rounded
            shadow
            md:w-[60%]
          "
        >
          <h2 class="text-3xl font-bold mb-2">
            เมนบอร์ด (Mainboard)
          </h2>
          <p class="text-lg">
            เป็นแผงวงจรกลางเพื่อควบคุมการทำงานของชิ้นส่วนต่างๆ
          </p>
        </div>
      </div>
  
      <!-- Four-Card Section (CPU, I/O, RAM, Storage) -->
      <!-- grid-cols-1 for mobile, 2 for sm, 3 for md, 4 for lg -->
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-8
        "
      >
        <!-- Card 1: CPU -->
        <div class="bg-white border border-blue-500 rounded-lg shadow p-6 text-center">
          <img
            class="mx-auto mb-4"
            src="../assets/CPU.svg"
            alt="CPU"
          />
          <h3 class="text-blue-500 text-2xl font-bold mb-2">
            หน่วยประมวลผลกลาง (CPU)
          </h3>
          <p class="text-gray-600 text-base mb-1">
            สมองของคอมพิวเตอร์
          </p>
          <p class="text-gray-600 text-base">
            ทำหน้าที่ประมวลผลคำสั่งและควบคุมการทำงานของระบบทั้งหมด
          </p>
        </div>
  
        <!-- Card 2: I/O Devices -->
        <div class="bg-white border border-blue-500 rounded-lg shadow p-6 text-center">
          <img
            class="mx-auto mb-4"
            src="../assets/3d_comp.svg"
            alt="I/O Devices"
          />
          <h3 class="text-blue-500 text-2xl font-bold mb-2">
            อุปกรณ์อินพุตและเอาต์พุต (I/O Devices)
          </h3>
          <p class="text-gray-600 text-base">
            เช่น คีย์บอร์ด เมาส์ จอภาพ และเครื่องพิมพ์
          </p>
        </div>
  
        <!-- Card 3: RAM -->
        <div class="bg-white border border-blue-500 rounded-lg shadow p-6 text-center">
          <img
            class="mx-auto mb-4"
            src="../assets/ram.svg"
            alt="RAM"
          />
          <h3 class="text-blue-500 text-2xl font-bold mb-2">
            หน่วยความจำหลัก (RAM)
          </h3>
          <p class="text-gray-600 text-base">
            หน่วยความจำชั่วคราวที่ใช้เก็บข้อมูลและคำสั่งที่กำลังถูกใช้งาน
          </p>
        </div>
  
        <!-- Card 4: Storage -->
        <div class="bg-white border border-blue-500 rounded-lg shadow p-6 text-center">
          <img
            class="mx-auto mb-4"
            src="../assets/SSD.svg"
            alt="Storage"
          />
          <h3 class="text-blue-500 text-2xl font-bold mb-2">
            อุปกรณ์จัดเก็บข้อมูล (Storage)
          </h3>
          <p class="text-gray-600 text-base">
            หน่วยความจำถาวรสำหรับเก็บข้อมูลและโปรแกรม
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Page3',
  }
  </script>
  
  <style scoped>
  /* Your component-specific styles (if needed) */
  </style>