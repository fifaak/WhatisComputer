<template>
    <div
      class="flex overflow-hidden flex-col mt-24 w-full bg-white rounded-xl border border-solid border-zinc-200 max-md:mt-10 max-md:max-w-full"
      tabindex="0"
      role="article"
    >
      <div class="flex flex-col self-center max-w-full rounded-none w-[461px]">
        <img
          :src="image"
          :alt="title"
          class="object-contain w-full rounded-md aspect-[1.34] max-md:max-w-full"
          loading="lazy"
        />
      </div>
      <div
        class="flex flex-col justify-center p-6 w-full max-md:px-5 max-md:max-w-full"
      >
        <div class="flex flex-col w-full">
          <h3
            class="text-2xl font-semibold tracking-tighter leading-none text-slate-800"
          >
            {{ title }}
          </h3>
          <p class="mt-4 text-xl leading-5 text-slate-500">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  })
  </script>