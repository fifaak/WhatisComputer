<template>
  <!-- Outer container must be relative so the overlay can position absolutely -->
  <div class="relative min-h-screen">
    
    <!-- Background (last layer) -->
    <div class="absolute inset-0 " style="background-color: rgb(220, 233, 255,0.1); z-index: -20;"></div>
    <!--
      Explanation:
      - `absolute inset-0`: Fills entire parent
      - `bg-black bg-opacity-50`: Black color at 50% opacity
      - `-z-10`: Places this layer behind the main content
    -->

    <!-- NavBar at the top -->
    <NavBar />

    <!-- Route View for pages -->
    <router-view />

    <!-- Footer at the bottom -->
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Global or layout-wide styles if needed */
</style>