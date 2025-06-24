<template>
  <div class="w-full bg-transparent py-16 overflow-hidden">
    <h2 class="text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
      Nos mentors
    </h2>

    <div
      class="relative group"
      @mouseenter="pauseScroll"
      @mouseleave="resumeScroll"
    >
      <!-- Brouillard gauche -->
      <div class="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <!-- Brouillard droit -->
      <div class="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <!-- Conteneur scrollable -->
      <div
        ref="scrollContainer"
        class="flex items-start gap-6 overflow-x-auto scrollbar-hide px-6 py-4"
      >
        <template v-for="i in 2">
          <div
            v-for="(mentor, index) in mentors"
            :key="`mentor-${i}-${index}`"
            class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex-shrink-0 w-[200px] sm:w-[220px] md:w-[240px] overflow-hidden text-white transition hover:scale-105 hover:shadow-[0_0_20px_3px_var(--glow-color)]"

          >
            <!-- Image vide -->
            <div class="bg-white/10 w-full aspect-square flex items-center justify-center text-white text-sm">
              Image
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold">{{ mentor.name }}</h3>
              <p class="text-sm text-gray-300 mt-1">{{ mentor.description }}</p>
            </div>
          </div>
        </template>
      </div>

      <!-- Flèche gauche -->
      <div
        class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer z-20"
        @click="scrollLeft"
      >
        <span class="text-white text-xl">&larr;</span>
      </div>

      <!-- Flèche droite -->
      <div
        class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer z-20"
        @click="scrollRight"
      >
        <span class="text-white text-xl">&rarr;</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrollContainer = ref(null)
let animationFrame = null

const mentors = [
  { name: 'Nom Mentor', description: 'Brève description ici' },
  { name: 'Nom Mentor', description: 'Brève description ici' },
  { name: 'Nom Mentor', description: 'Brève description ici' },
  { name: 'Nom Mentor', description: 'Brève description ici' },
  { name: 'Nom Mentor', description: 'Brève description ici' },
  { name: 'Nom Mentor', description: 'Brève description ici' },
]

const scroll = () => {
  const sc = scrollContainer.value
  if (!sc) return

  if (sc.scrollLeft >= sc.scrollWidth / 2) {
    sc.scrollLeft = 0
  } else {
    sc.scrollLeft += 0.5
  }

  animationFrame = requestAnimationFrame(scroll)
}

const startAutoScroll = () => {
  if (!animationFrame) {
    animationFrame = requestAnimationFrame(scroll)
  }
}

const pauseScroll = () => {
  cancelAnimationFrame(animationFrame)
  animationFrame = null
}

const resumeScroll = () => {
  startAutoScroll()
}

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
}

onMounted(() => {
  startAutoScroll()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
