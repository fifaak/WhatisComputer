<template>
  <nav class="fixed top-0 left-0 w-full z-50 p-2.5">
    <div class="relative rounded-xl border border-neutral-200 min-h-[56px] overflow-hidden">
      <!-- Blur layer -->
      <div
        class="
          absolute inset-0
          bg-white/90
          backdrop-blur-md
          pointer-events-none
        "
      ></div>

      <!-- Nav content -->
      <div
        class="
          relative z-10
          flex justify-between items-center
          px-8 py-5 w-full
        "
      >
        <div class="flex gap-6 items-center w-64 min-w-[240px]">
          <router-link
            to="/"
            class="
              text-sm
              font-medium
              text-slate-500
            "
            :class="$route.path === '/' ? 'font-bold text-slate-800' : ''"
          >
            หน้าหลัก
          </router-link>

          <router-link
            to="/content"
            class="
              text-sm
              font-medium
              text-slate-500
            "
            :class="$route.path === '/content' ? 'font-bold text-slate-800' : ''"
          >
            เนื้อหา
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>