<template>
  <main
    class="
      flex flex-col
      items-center
      justify-center
      text-center
      px-4
      py-[40px]
      w-full
    "
    role="main"
    aria-labelledby="main-heading"
  >
    <!-- Container for Page1 Content -->
    <div
      class="
        flex
        flex-col-reverse
        md:flex-row
        gap-10
        items-center
        justify-center
        w-full
        max-w-screen-xl
      "
    >
      <!-- Text Section -->
      <div
        class="
          flex flex-col
          text-center
          md:text-left
          items-center
          md:items-start
          w-full
          md:w-[50%]
          px-4
        "
      >
        <h1
          id="main-heading"
          class="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-black
            text-blue-500
            leading-tight
          "
        >
          คอมพิวเตอร์คืออะไร?
        </h1>
        <p
          class="
            mt-4
            text-lg
            sm:text-xl
            md:text-2xl
            font-extralight
            leading-7
            text-neutral-500
          "
        >
          <span class="font-medium text-neutral-500">
            คืออุปกรณ์อิเล็กทรอนิกส์ที่ใช้ในการประมวลผลข้อมูล
            สามารถทำงานตามคำสั่งที่กำหนดไว้ล่วงหน้า (โปรแกรม)
            โดยสามารถทำงานได้หลากหลาย เช่น การคำนวณทางคณิตศาสตร์
            การจัดเก็บและเรียกข้อมูล การสื่อสาร และการสร้างเนื้อหา
          </span>
        </p>
      </div>

      <!-- Image Section -->
      <div
        class="
          flex
          justify-center
          items-center
          w-full
          md:w-[50%]
          h-auto
        "
        role="presentation"
      >
        <img
          src="../assets/section1/computer_content.svg"
          alt="Computer illustration"
          class="
            w-[90%]
            sm:w-[70%]
            md:w-[100%]
            lg:max-w-lg
            drop-shadow-custom-yellow
          "
        />
      </div>
    </div>


  </main>
</template>

<script>
export default {  
  name: 'Page1',
}
</script>