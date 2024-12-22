<template>
    <main
      class="flex flex-wrap gap-24 justify-center items-center mt-16 w-full text-xl font-semibold min-h-[639px] max-md:mt-10 max-md:max-w-full"
    >
      <div
        class="flex flex-col items-center self-stretch px-1.5 my-auto rounded-none min-w-[240px] w-[602px] max-md:max-w-full"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/167f8969fc9e4702b2c941ecb34dd7f8/6cf8dc6dc400002ba0c95ef3b96bdddb83680d4d5c07f1dc8e910d0f944bdeed?apiKey=167f8969fc9e4702b2c941ecb34dd7f8&"
          alt="Computer concept illustration"
          class="object-contain max-w-full aspect-[0.95] w-[272px]"
        />
        <h1
          class="self-stretch mt-2.5 text-6xl font-black text-center text-slate-800 max-md:max-w-full max-md:text-4xl"
        >
          "คอมพิวเตอร์" คืออะไร
        </h1>
        <p class="text-center text-blue-500 max-md:max-w-full">
          ค้นพบโลกของคอมพิวเตอร์ที่เปลี่ยนแปลงชีวิตเราในทุกๆ ด้าน
        </p>
        <button
          class="flex gap-2 justify-center items-center px-9 mt-7 text-white whitespace-nowrap rounded-md bg-slate-800 min-h-[51px] max-md:px-5"
          @click="startExploring"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/167f8969fc9e4702b2c941ecb34dd7f8/3c810940c4306b6a1f1f38e00e4e8509f4abef6113fa1c57f61a9fcaa26d4898?apiKey=167f8969fc9e4702b2c941ecb34dd7f8&"
            alt=""
            class="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
          />
          <span class="self-stretch my-auto">เริ่มหาคำตอบ</span>
        </button>
      </div>
      <div
        class="flex shrink-0 self-stretch my-auto h-[636px] min-w-[240px] w-[636px]"
        role="presentation"
      >
    
    </div>
    </main>
  </template>
  
  <script setup>
  const startExploring = () => {
    // Handle exploration start logic
  }
  </script>
  
  <style scoped>
  /* Page-specific styles if needed */
  </style>