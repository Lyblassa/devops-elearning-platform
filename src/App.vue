<template>
  <div class="flex flex-col min-h-screen">
    <router-view class="flex-grow" />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import FooterSection from './components/FooterSection.vue'
</script>
