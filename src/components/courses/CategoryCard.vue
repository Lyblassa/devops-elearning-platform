<template>
  <div
    class="relative group p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_3px] hover:shadow-[var(--glow-color)] animate-fade-slide"
    :style="{ '--glow-color': glowColor }"
  >

  <!-- Flèche qui s'affiche au survol -->
    <div
      class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <span class="text-white text-2xl">➜</span>
    </div>

    <!-- Image -->
    <div class="flex justify-center mb-4">
      <img :src="`/images/${image}`" alt="logo cours" class="w-28 h-28 object-contain" />
    </div>

    <!-- Titre -->
    <h3 class="text-lg font-semibold text-white text-center">{{ title }}</h3>

    <!-- Nombre de cours -->
    <p class="text-sm text-white/60 text-center">{{ nbCours }} cours</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,        // ex: "DevOps"
  nbCours: Number,      // ex: 12
  image: String,        // ex: "cours1.svg"
  glowColor: String     // ex: "#00ffff"
})
</script>

<style scoped>
@keyframes fade-slide {
0% {
opacity: 0;
transform: translateY(20px);
}
100% {
opacity: 1;
transform: translateY(0);
}
}

.animate-fade-slide {
animation: fade-slide 0.8s ease-out both;
}

</style>
