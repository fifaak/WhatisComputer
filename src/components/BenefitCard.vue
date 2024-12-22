<template>
  <div
    class="grow shrink self-stretch my-4 rounded-lg min-w-[240px] w-full max-w-md transform transition-transform duration-300 hover:scale-105"
    tabindex="0"
    role="article"
  >
    <div class="flex flex-row sm:flex-col gap-5">
      <!-- Icon Section -->
      <div class="flex flex-col sm:w-full">
        <div class="flex shrink-0 mx-auto bg-blue-500 rounded-full h-24 w-24 flex items-center justify-center">
          <img 
            :src="icon" 
            :alt="title" 
            class="w-12 h-12 object-contain filter invert" 
            loading="lazy" 
          />
        </div>
      </div>
      
      <!-- Title Section -->
      <div class="flex flex-col sm:w-full">
        <div
          class="flex flex-col justify-center  p-4 my-auto text-xl sm:text-2xl font-semibold text-white-500 text-center"
        >
          <div
            class="flex overflow-hidden relative flex-col px-4 py-3 sm:px-6 sm:py-4  fill-white stroke-[1px]  w-full text-white"
          >
            {{ title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
/* Optional: Add any additional styles if needed */
</style>