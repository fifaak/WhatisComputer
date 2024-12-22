<template>
  <!-- A container for your overall layout -->
  <div class="relative min-h-screen">
    
    <!-- The background is placed first so it's behind other elements -->
    <Background />
    
    <!-- NavBar at the top -->
    <NavBar />
    
    <!-- Route View for pages -->
    <router-view />
    
    <!-- Footer at the bottom -->
    <Footer />
  </div>
</template>

<script setup>
import Background from './components/Background.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* If you need global or layout-wide styles, put them here */
</style>