<template>
  <div class="">

    <!-- Main Content Section -->
    <div class="p-6 flex items-center gap-4 my-[200px]">
  <!-- Icon -->
  <div class="text-gray-500 text-5xl">
    <i class="fa-solid fa-computer"></i>
  </div>
  <!-- Heading -->
  <h1 class="text-4xl font-bold text-black">ฮาร์ดแวร์</h1>
</div>
    <div class="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-4 md:px-8 lg:px-16">
  <!-- Image Section -->
  <div class="relative w-full md:w-1/2 lg:w-1/4 md:pr8">
    <img
      src="../assets/section2/mainboard.svg"
      alt="Mainboard Illustration"
      class="w-full h-auto object-contain"
    />
  </div>

  <!-- Content Section -->
  <div class="flex flex-col text-xl leading-8 rounded-3xl max-w-[988px] text-neutral-700 bg-blue-500 p-6 md:p-12 lg:p-16 shadow-lg">
    <h2 class="text-2xl md:text-3xl font-bold text-white">เมนบอร์ด (Mainboard)</h2>
    <p class="text-zinc-100 mt-4">
      เป็นแผงวงจรกลางเพื่อควบคุมการทำงานของชิ้นส่วนต่างๆ
    </p>
  </div>
</div>




    <div class="flex flex-wrap justify-center gap-20">
      <!-- Loop through the cards array and render each "card" -->
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow p-6 pb-8 overflow-visible transform hover:scale-105 transition-transform duration-300"
      >
        <!-- Image container (overlaps the card) -->
        <div class="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
          <img
            :src="card.image"
            :alt="`Image representing ${card.title}`"
            class="w-[80%] h-[80%] sm:w-32 sm:-32 md:w-40 md:h-40  drop-shadow-lg "
            loading="lazy"
          />
        </div>

        <!-- Card content -->
        <div class="mt-16 sm:mt-20 text-center">
          <h3 class="text-lg sm:text-xl font-bold text-blue-600">{{ card.title }}</h3>
          <p class="text-gray-600 text-xs sm:text-sm mt-2">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CPU from "../assets/section1/CPU.svg";
import ComputerContent from "../assets/section1/computer_content.svg";
import Ram from "../assets/section1/ram.svg";
import Ssd from "../assets/section1/SSD.svg";

export default {
  name: "Page3",
  data() {
    return {
      cards: [
        {
          title: "หน่วยประมวลผลกลาง (CPU)",
          description:
            "สมองของคอมพิวเตอร์ ที่ทำหน้าที่ประมวลผลและควบคุมการทำงานทั้งหมด",
          image: CPU, // Use the imported reference
        },
        {
          title: "อุปกรณ์อินพุตและเอาต์พุต (I/O Devices)",
          description: "เช่น คีย์บอร์ด เมาส์ จอภาพ และเครื่องพิมพ์",
          image: ComputerContent,
        },
        {
          title: "หน่วยความจำหลัก (RAM)",
          description: "ใช้เก็บข้อมูลและคำสั่งที่กำลังถูกใช้งาน",
          image: Ram,
        },
        {
          title: "อุปกรณ์จัดเก็บข้อมูล (Storage)",
          description: "สำหรับเก็บข้อมูลและโปรแกรมใช้งาน",
          image: Ssd,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Optional: Add any additional custom styles here */
</style>