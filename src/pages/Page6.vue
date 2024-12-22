<template>
  <!-- Outer container: stacks vertically on small screens, side-by-side on md+ -->
  <div
    class="flex flex-col md:flex-row items-center justify-center gap-5 p-10 md:p-6 lg:p-8 text-black w-full"
  >
    <!-- Text container -->
    <div
      class="flex flex-col items-start w-full md:w-[700px] min-w-[240px] my-auto"
    >
      <h1 class="text-4xl md:text-5xl font-bold">ข้อมูล</h1>
      <div
        class="text-3xl md:text-5xl lg:text-6xl font-black text-blue-500 mt-1"
        role="heading"
        aria-level="2"
      >
        สำหรับคอมพิวเตอร์
      </div>
      <div
        class="mt-3.5 text-base md:text-lg lg:text-xl leading-6 md:leading-7 lg:leading-8"
        role="article"
      >
        หมายถึงข้อเท็จจริงหรือรายละเอียดที่สามารถรวบรวม วิเคราะห์
        และแปลงให้เป็นสารสนเทศ (Information) ที่มีความหมายและสามารถนำไปใช้งานได้
        ข้อมูลมีความสำคัญอย่างมากในยุคปัจจุบัน
        เนื่องจากเป็นพื้นฐานของการตัดสินใจ การวางแผน และการพัฒนาในหลายด้าน เช่น
        ธุรกิจ การศึกษา และวิทยาศาสตร์
      </div>
    </div>

    <!-- Image -->
    <div class="w-full md:w-[600px] lg:w-[640px] min-w-[240px] my-auto">
      <img
        loading="lazy"
        src="../assets/section1/dbsvg.png"
        alt="Computer information visualization"
        class="object-contain w-full h-auto aspect-[1.08] rounded-none"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Page6",
};
</script>

<style scoped>

</style>
