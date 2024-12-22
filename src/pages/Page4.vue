<template>

    <!-- Main Content Section -->
    <div class="p-6 flex items-center gap-4 my-[200px]">
  <!-- Icon -->
  <div class="text-gray-500 text-5xl">
    <i class="fa-solid fa-code"></i>
  </div>
  <!-- Heading -->
  <h1 class="text-4xl font-bold text-black">ซอฟต์แวร์</h1>
</div>



  <div class="flex flex-col rounded-none" role="main">
    <!-- Navigation / Menu Bar -->
    <nav
      class="flex flex-col p-5 md:p-6 lg:p-[10%] w-full rounded-lg text-black text-opacity-90 max-md:mt-10 max-md:max-w-full"
      role="navigation"
    >
      <div
        class="flex flex-col justify-center p-px rounded-lg border border-solid border-neutral-500 border-opacity-40 max-md:max-w-full bg-white"
      >
        <div
          class="flex flex-col w-full bg-white rounded-lg shadow-2xl mix-blend-multiply max-md:max-w-full"
        >
          <!-- Top bar: "Software" label, etc. -->
          <div
            class="flex flex-wrap gap-5 justify-between w-full whitespace-nowrap max-md:max-w-full"
          >
            <div
              class="flex pr-2 pl-1 text-xs leading-none rounded-none min-h-[32px]"
            >
              <div class="flex gap-4 items-center pr-2 pl-3 h-full">
                <div class="gap-2 self-stretch pb-0.5 my-auto min-h-[32px]">
                  Software
                </div>
              </div>
            </div>
            <div
              class="flex overflow-hidden gap-3 sm:gap-6 px-5 py-3 text-xs leading-relaxed text-center rounded-none"
            >
              <div class="my-auto">
                <img src="../assets/section1/minimize.svg" alt="" />
              </div>
              <div>
                <img src="../assets/section1/rectangle.svg" alt="" />
              </div>
              <div>
                <img src="../assets/section1/ChromeClose.svg" alt="" />
              </div>
            </div>
          </div>

          <!-- Menu Buttons -->
          <div
            class="flex items-start self-start mt-1 text-xs md:text-sm leading-none text-center whitespace-nowrap"
            role="menubar"
          >
            <div class="flex flex-col justify-center p-1.5 min-h-[40px]">
              <button
                class="self-stretch px-3 pt-1 pb-1.5 rounded border border-solid bg-white bg-opacity-0 border-white border-opacity-0 hover:bg-gray-100 transition"
                role="menuitem"
                tabindex="0"
              >
                File
              </button>
            </div>
            <div class="flex flex-col justify-center p-1.5 min-h-[40px]">
              <button
                class="self-stretch px-3 pt-1 pb-1.5 rounded border border-solid bg-white bg-opacity-0 border-white border-opacity-0 hover:bg-gray-100 transition"
                role="menuitem"
                tabindex="0"
              >
                Edit
              </button>
            </div>
            <div class="flex flex-col justify-center p-1.5 min-h-[40px]">
              <button
                class="self-stretch px-3 pt-1 pb-1.5 rounded border border-solid bg-white bg-opacity-0 border-white border-opacity-0 hover:bg-gray-100 transition"
                role="menuitem"
                tabindex="0"
              >
                Format
              </button>
            </div>
            <div class="flex flex-col justify-center p-1.5 min-h-[40px]">
              <button
                class="self-stretch px-3 pt-1 pb-1.5 rounded border border-solid bg-white bg-opacity-0 border-white border-opacity-0 hover:bg-gray-100 transition"
                role="menuitem"
                tabindex="0"
              >
                View
              </button>
            </div>
            <div class="flex flex-col justify-center p-1.5 min-h-[40px]">
              <button
                class="self-stretch px-3 pt-1 pb-1.5 rounded border border-solid bg-white bg-opacity-0 border-white border-opacity-0 hover:bg-gray-100 transition"
                role="menuitem"
                tabindex="0"
              >
                Help
              </button>
            </div>
          </div>

          <!-- Main Content Container -->
          <main
            class="flex flex-col justify-center py-px mt-1 text-xs md:text-sm text-center text-black rounded-none border border-solid border-black border-opacity-10 max-md:max-w-full"
          >
            <div
              class="flex flex-col justify-center px-4 md:px-8 lg:px-16 py-4 md:py-6 w-full rounded-none bg-white bg-opacity-50 max-md:max-w-full"
            >
              <!-- Articles Wrapper: make it flexible & wrap on small screens -->
              <div
                class="flex flex-wrap gap-6 justify-center items-start h-auto"
              >
                <!-- Article #1 -->
                <article
                  class="flex flex-col px-1 pb-10 md:pb-16 my-auto w-full md:w-[508px] min-w-[650px] max-w-full"
                >
                  <img
                    loading="lazy"
                    src="../assets/section1/adobe.svg"
                    class="object-contain self-center w-full max-w-md aspect-[1.21] mb-4"
                    alt="Application Software illustration"
                  />
                  <div class="mt-6 md:mt-10 lg:mt-16 max-md:max-w-full">
                    <h2
                      class="text-xl md:text-2xl lg:text-3xl font-bold text-blue-500"
                    >
                      โปรแกรมประยุกต์ (Application Software)
                    </h2>
                    <p
                      class="mt-2 text-base md:text-lg lg:text-xl md:leading-7 lg:leading-9"
                    >
                      ซอฟต์แวร์ที่ถูกพัฒนาขึ้นเพื่อช่วยผู้ใช้งานในการทำงานเฉพาะด้าน
                    </p>
                    <p
                      class="mt-2 text-base md:text-lg lg:text-xl md:leading-7 lg:leading-9"
                    >
                      หรือแก้ปัญหาที่เฉพาะเจาะจง
                      โปรแกรมประยุกต์มักมีอินเทอร์เฟซที่ออกแบบมาให้ใช้งานง่าย
                      และเน้นการตอบสนองความต้องการของผู้ใช้งานโดยตรง เช่น
                      การจัดการเอกสาร การตัดต่อวิดีโอ หรือการทำบัญชี
                    </p>
                  </div>
                </article>

                <!-- Article #2 -->
                <article
                  class="flex flex-col px-1.5 pb-10 md:pb-14 my-auto w-full md:w-[426px] min-w-[650px] max-w-full"
                >
                  <img
                    loading="lazy"
                    src="../assets/section1/window_os.svg"
                    class="object-contain self-center w-full max-w-sm aspect-[0.94] mb-4"
                    alt="Operating System illustration"
                  />
                  <div class="mt-6 md:mt-10 lg:mt-16 max-md:max-w-full">
                    <h2
                      class="text-xl md:text-2xl lg:text-3xl font-bold text-blue-500"
                    >
                      ระบบปฏิบัติการ (Operating System)
                    </h2>
                    <p
                      class="mt-2 text-base md:text-lg lg:text-xl md:leading-7 lg:leading-9"
                    >
                      ซอฟต์แวร์ที่ทำหน้าที่เป็นตัวกลางระหว่างฮาร์ดแวร์และซอฟต์แวร์
                    </p>
                    <p
                      class="mt-2 text-base md:text-lg lg:text-xl md:leading-7 lg:leading-9"
                    >
                      อื่น ๆ รวมถึงผู้ใช้งาน
                      ระบบปฏิบัติการช่วยจัดการทรัพยากรของคอมพิวเตอร์ เช่น
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
