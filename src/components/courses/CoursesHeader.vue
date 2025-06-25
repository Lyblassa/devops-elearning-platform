<template>
  <div class="text-center mb-8">
    <h1 class="text-4xl font-bold text-white">{{ titre }}</h1>
    <p class="text-white/70 mt-2">
      All courses are recorded by top-talent specialists and they'll answer to your questions on Discord during the course
    </p>
  </div>
</template>

<script setup>
defineProps({
  titre: String,
})
</script>
