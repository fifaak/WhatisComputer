<template>
    <div class="w-[40%] overflow-x-auto py-8 px-4 ml-auto" style="border: 2px solid black;">
      <!-- A single row of cards -->
      <div class="flex flex-nowrap space-x-6 pl-20 w-[100%]">
        <!-- Loop through the cards array and render each "card" -->
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="
            relative
            w-[600px]
            h-[500px]         /* Fixed height */
            bg-white
            border border-gray-200
            rounded-lg
            shadow
            p-6
            pb-8
            overflow-hidden   /* Hide any overflow if content is taller than 500px */
          "
        >
          <!-- Image container (overlaps the card) -->
          <div
            class="
              absolute
              -top-16
              left-1/2
              transform -translate-x-1/2
            "
          >
            <img
              :src="card.image"
              :alt="card.title"
              class="w-50 h-50 object-cover drop-shadow-lg"
            />
          </div>
  
          <!-- Card content -->
          <div class="mt-24 text-center">
            <h3 class="text-xl font-bold text-blue-600">{{ card.title }}</h3>
            <p class="text-gray-600 text-sm mt-2">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>



  <script>
  import CPU from '../assets/CPU.svg';
  import ComputerContent from '../assets/computer_content.svg';
  import Ram from '../assets/ram.svg';
  import Ssd from '../assets/SSD.svg';
  
  export default {
    name: 'Page3',
    data() {
      return {
        cards: [
          {
            title: 'หน่วยประมวลผลกลาง (CPU)',
            description: 'สมองของคอมพิวเตอร์ ที่ทำหน้าที่ประมวลผลและควบคุมการทำงานทั้งหมด',
            image: CPU, // Use the imported reference
          },
          {
            title: 'อุปกรณ์อินพุตและเอาต์พุต (I/O Devices)',
            description: 'เช่น คีย์บอร์ด เมาส์ จอภาพ และเครื่องพิมพ์',
            image: ComputerContent,
          },
          {
            title: 'หน่วยความจำหลัก (RAM)',
            description: 'ใช้เก็บข้อมูลและคำสั่งที่กำลังถูกใช้งาน',
            image: Ram,
          },
          {
            title: 'อุปกรณ์จัดเก็บข้อมูล (Storage)',
            description: 'สำหรับเก็บข้อมูลและโปรแกรมใช้งาน',
            image: Ssd,
          },
        ],
      };
    },
  };
  </script>