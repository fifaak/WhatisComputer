<template>
  <div
    class="flex flex-col md:flex-row space-y-4 md:space-y-0 gap-2"
    tabindex="0"
    role="article"
  >
    <img
      :src="logo"
      :alt="`${name} logo`"
      class="w-24 h-24 object-contain rounded-md"
    />
    <div class="flex-1 ml-[20px]">
      <h3 class="text-2xl font-bold text-slate-800 mb-2 text-white">{{ name }}</h3>
      <p class="text-xl  mb-2 text-white">
        <span class="font-semibold text-white">ผลิตภัณฑ์:</span> {{ products }}
      </p>
      <p class="text-lg  text-white">
        <span class="font-semibold text-white">จุดเด่น:</span> {{ highlight }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  logo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  products: {
    type: String,
    required: true
  },
  highlight: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
/* Optional: Add any additional styles if needed */
</style>