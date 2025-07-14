<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <router-view class="flex-grow" />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import FooterSection from './components/FooterSection.vue'
import NavBar from './components/NavBar.vue'
</script>
