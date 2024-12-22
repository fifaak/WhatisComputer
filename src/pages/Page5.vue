<template>
  <!-- Outer container: stack on small screens, side-by-side on md+ -->
       <!-- Main Content Section -->
       <div class="p-6 flex items-center gap-4 my-[200px]">
  <!-- Icon -->
  <div class="text-gray-500 text-5xl">
    <i class="fa-solid fa-users"></i>
  </div>
  <!-- Heading -->
  <h1 class="text-4xl font-bold text-black">บุคลากร</h1>
</div>

  <div
    class="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 justify-center items-start text-black p-4 md:p-6 lg:p-8"
    role="main"
  >
    <!-- Image on the left (or top on small screens) -->
    <div class="flex justify-center w-full md:w-auto">
      <img
        src="../assets/section1/person.svg"
        alt=""
      />
    </div>

    <!-- Text + List container -->
    <div
      class="flex flex-col self-stretch my-auto w-full md:w-[700px] lg:w-[800px] min-w-[240px]"
    >
      <!-- Heading Section -->
      <div class="flex flex-col items-start px-2 md:px-4 max-md:max-w-full">
        <h1 class="text-4xl md:text-5xl font-bold">บุคลากร</h1>
        <div
          class="text-3xl md:text-5xl lg:text-6xl font-black text-blue-500 max-md:max-w-full mt-1"
          role="heading"
          aria-level="2"
        >
          ด้านคอมพิวเตอร์
        </div>
        <div
          class="self-stretch mt-3 text-base md:text-lg lg:text-xl leading-6 md:leading-7 lg:leading-8"
        >
          หมายถึงกลุ่มคนที่มีบทบาทสำคัญในการใช้งาน พัฒนา
          และดูแลคอมพิวเตอร์หรือระบบคอมพิวเตอร์
          เพื่อให้สามารถทำงานได้อย่างมีประสิทธิภาพ
          บุคลากรเกี่ยวข้องกับคอมพิวเตอร์ในหลากหลายมิติ
          ตั้งแต่การออกแบบฮาร์ดแวร์และซอฟต์แวร์
          ไปจนถึงการจัดการข้อมูลและการสนับสนุนการใช้งาน
        </div>
      </div>

      <!-- List of Roles -->
      <div
        class="flex flex-wrap gap-6  mt-8 md:mt-10 text-base  lg:text-xl font-light text-center mx-auto " 
        role="list"
      >
        <!-- Role #1 -->
        <div
          class="flex flex-col mx-auto px-4 pb-6 w-[140px] max-md:px-3"
          role="listitem"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/167f8969fc9e4702b2c941ecb34dd7f8/acbb3ef66c38ed7c3dadb2b8ac0c53482c1afc57e1c8cf9b82253830bc1c26d4?apiKey=167f8969fc9e4702b2c941ecb34dd7f8&"
            class="object-contain aspect-square w-[90px] md:w-[121px]"
            alt="ผู้ใช้งานทั่วไป"
          />
          <div class="mt-4 md:mt-5">ผู้ใช้งานทั่วไป</div>
        </div>

        <!-- Role #2 -->
        <div
          class="flex flex-col mx-auto px-4 pb-6 w-[140px] max-md:px-3"
          role="listitem"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/167f8969fc9e4702b2c941ecb34dd7f8/c001bde77b2f97b3c80a6288c46b9ea190dadc45d99796d6badba70cf7837099?apiKey=167f8969fc9e4702b2c941ecb34dd7f8&"
            class="object-contain aspect-square w-[90px] md:w-[121px]"
            alt="บุคลากรด้านเทคนิค"
          />
          <div class="mt-4 md:mt-5">บุคลากรด้านเทคนิค</div>
        </div>

        <!-- Role #3 -->
        <div
          class="flex flex-col mx-auto px-4 pb-6 w-[140px] max-md:px-3"
          role="listitem"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/167f8969fc9e4702b2c941ecb34dd7f8/131704652398d2177b8811763ea0b726142851da74ebd0250ab5e0209c3b8623?apiKey=167f8969fc9e4702b2c941ecb34dd7f8&"
            class="object-contain aspect-square w-[90px] md:w-[121px]"
            alt="บุคลากรด้านการดูแลระบบ"
          />
          <div class="mt-4 md:mt-5">บุคลากรด้านการดูแลระบบ</div>
        </div>

        <!-- Role #4 -->
        <div
          class="flex flex-col mx-auto px-4 pb-6 w-[140px] max-md:px-3"
          role="listitem"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/167f8969fc9e4702b2c941ecb34dd7f8/d1030f1a84caf19fe4bd07f9bff2f65819643f13b8b466a2b9932d1ce57626a5?apiKey=167f8969fc9e4702b2c941ecb34dd7f8&"
            class="object-contain aspect-square w-[90px] md:w-[121px]"
            alt="ผู้บริหารและผู้วางแผน"
          />
          <div class="mt-4 md:mt-5">ผู้บริหาร<br />และผู้วางแผน</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page5",
};
</script>

<style scoped>
/* Additional fine-tuning styles can go here. */
</style>
