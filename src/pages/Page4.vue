<template>
  <!-- Main Content Section -->
  <div class="p-6 flex flex-col items-center gap-4 my-20 md:my-40">
    <!-- Icon -->
    <div class="text-gray-500 text-5xl">
      <i class="fa-solid fa-code"></i>
    </div>
    <!-- Heading -->
    <h1 class="text-3xl md:text-4xl font-bold text-black">ซอฟต์แวร์</h1>
  </div>

  <div class="flex flex-col px-4 md:px-6 lg:px-16" role="main">
    <!-- Navigation / Menu Bar -->
    <nav
      class="flex flex-col p-4 md:p-6 lg:p-8 w-full rounded-lg text-black text-opacity-90  "
      role="navigation"
    >
      <div class="flex flex-col justify-center p-px rounded-lg border border-solid border-neutral-500 border-opacity-40 bg-white">
        <div class="flex flex-col w-full bg-white rounded-lg shadow-2xl">
          <!-- Top bar: "Software" label, etc. -->
          <div class="flex flex-wrap items-center justify-between gap-4 p-2">
            <div class="flex items-center text-xs leading-none min-h-[32px]">
              <span class="px-3 py-1 text-sm font-semibold">Software</span>
            </div>
            <div class="flex items-center gap-3">
              <img src="../assets/section1/minimize.svg" alt="Minimize" class="w-4 h-4" />
              <img src="../assets/section1/rectangle.svg" alt="Maximize" class="w-4 h-4" />
              <img src="../assets/section1/ChromeClose.svg" alt="Close" class="w-4 h-4" />
            </div>
          </div>

          <!-- Menu Buttons -->
          <div class="flex flex-wrap gap-2 md:gap-4 p-2" role="menubar">
            <button
              class="px-3 py-1 rounded hover:bg-gray-100 transition text-sm"
              role="menuitem"
              tabindex="0"
            >
              File
            </button>
            <button
              class="px-3 py-1 rounded hover:bg-gray-100 transition text-sm"
              role="menuitem"
              tabindex="0"
            >
              Edit
            </button>
            <button
              class="px-3 py-1 rounded hover:bg-gray-100 transition text-sm"
              role="menuitem"
              tabindex="0"
            >
              Format
            </button>
            <button
              class="px-3 py-1 rounded hover:bg-gray-100 transition text-sm"
              role="menuitem"
              tabindex="0"
            >
              View
            </button>
            <button
              class="px-3 py-1 rounded hover:bg-gray-100 transition text-sm"
              role="menuitem"
              tabindex="0"
            >
              Help
            </button>
          </div>

          <!-- Main Content Container -->
          <main class="py-2 mt-2 border-t border-black border-opacity-10 max-w-[1200px] mx-auto">
            <div class="bg-white bg-opacity-50 p-4 md:p-8 rounded">
              <!-- Articles Wrapper -->
              <div class="flex flex-col md:flex-row gap-6 justify-center items-start">
                <!-- Article #1 -->
                <article class="flex flex-col w-full md:w-1/2">
                  <img
                    loading="lazy"
                    src="../assets/section1/adobe.svg"
                    class="object-contain w-full h-auto mb-4"
                    alt="Application Software illustration"
                  />
                  <div>
                    <h2 class="text-xl md:text-2xl font-bold text-blue-500">
                      โปรแกรมประยุกต์ (Application Software)
                    </h2>
                    <p class="mt-2 text-base md:text-lg">
                      ซอฟต์แวร์ที่ถูกพัฒนาขึ้นเพื่อช่วยผู้ใช้งานในการทำงานเฉพาะด้าน
                    </p>
                    <p class="mt-2 text-base md:text-lg">
                      หรือแก้ปัญหาที่เฉพาะเจาะจง โปรแกรมประยุกต์มักมีอินเทอร์เฟซที่ออกแบบมาให้ใช้งานง่าย
                      และเน้นการตอบสนองความต้องการของผู้ใช้งานโดยตรง เช่น
                      การจัดการเอกสาร การตัดต่อวิดีโอ หรือการทำบัญชี
                    </p>
                  </div>
                </article>

                <!-- Article #2 -->
                <article class="flex flex-col w-full md:w-1/2">
                  <img
                    loading="lazy"
                    src="../assets/section1/window_os.svg"
                    class="object-contain w-full h-auto mb-4"
                    alt="Operating System illustration"
                  />
                  <div>
                    <h2 class="text-xl md:text-2xl font-bold text-blue-500">
                      ระบบปฏิบัติการ (Operating System)
                    </h2>
                    <p class="mt-2 text-base md:text-lg">
                      ซอฟต์แวร์ที่ทำหน้าที่เป็นตัวกลางระหว่างฮาร์ดแวร์และซอฟต์แวร์
                    </p>
                    <p class="mt-2 text-base md:text-lg">
                      อื่น ๆ รวมถึงผู้ใช้งาน ระบบปฏิบัติการช่วยจัดการทรัพยากรของคอมพิวเตอร์ เช่น
                      หน่วยความจำ พื้นที่จัดเก็บข้อมูล และการประมวลผล
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </main>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Page4",
};
</script>

<style scoped>
/* Customize further if needed */
</style>