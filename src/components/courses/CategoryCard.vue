<template>
  <div
    class="relative group category-glow p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-[1.03]
 animate-fade-slide"
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

/*effet lumiere*/
.category-glow {
  position: relative;
  z-index: 0;
  overflow: visible;
}

.category-glow::before {
  content: "";
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  border-radius: 1.5rem;
  background: radial-gradient(circle, var(--glow-color) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  filter: blur(30px);
  z-index: -1;
  transform: scale(0.95);
}

.category-glow:hover::before {
  opacity: 0.8;
  transform: scale(1);
}

</style>
