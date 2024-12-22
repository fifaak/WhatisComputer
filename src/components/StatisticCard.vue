<template>
  <div
    class="flex flex-col p-6 bg-white rounded-xl border border-zinc-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
    tabindex="0"
    role="article"
  >
    <!-- Icon Section -->
    <div class="flex items-center mb-4">
      <i :class="icon" class="text-blue-500 text-4xl mr-4"></i>
      <h3 class="text-2xl font-semibold text-slate-800">{{ title }}</h3>
    </div>
    
    <!-- Content Section -->
    <p class="text-lg text-slate-600 " >
      {{ content }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false,
    default: 'fas fa-chart-line' // Default icon
  }
});
</script>

<style scoped>
/* Optional: Add any additional styles if needed */
</style>