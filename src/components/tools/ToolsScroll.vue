<template>
  <div class="w-full bg-transparent py-16 overflow-hidden">
    <h2 class="text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
      De nombreux outils à maîtriser
    </h2>

    <div
      class="relative group"
      @mouseenter="pauseScroll"
      @mouseleave="resumeScroll"
    >
      <!-- Scrollable Container -->
      <div
        ref="scrollContainer"
        class="flex items-center gap-10 overflow-x-auto scrollbar-hide px-4 py-2"
      >
        <template v-for="i in 2">
          <img
            v-for="(logo, index) in logos"
            :key="`logo-${i}-${index}`"
            :src="`/images/${logo}`"
            alt="logo"
            class="h-10 sm:h-11 md:h-12 w-auto flex-shrink-0 opacity-80 hover:opacity-100 transition duration-300"
          />
        </template>
      </div>

      <!-- Left arrow -->
      <div
        class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer z-10"
        @click="scrollLeft"
      >
        <span class="text-white text-xl">&larr;</span>
      </div>

      <!-- Right arrow -->
      <div
        class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer z-10"
        @click="scrollRight"
      >
        <span class="text-white text-xl">&rarr;</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const logos = [
  'ansible-svgrepo-com.svg',
  'docker-svgrepo-com.svg',
  'kubernetes-svgrepo-com.svg',
  'jenkins-svgrepo-com.svg',
  'gitlab-svgrepo-com.svg',
  'terraform-icon-svgrepo-com.svg',
  'vault-svgrepo-com.svg',
  'github-color-svgrepo-com.svg',
  'prometheus-svgrepo-com.svg',
  'grafana-svgrepo-com.svg',
  'azure-svgrepo-com.svg',
  'aws-svgrepo-com.svg',
  'gcp-svgrepo-com.svg'
]

const scrollContainer = ref(null)
let interval = null

const startAutoScroll = () => {
  interval = setInterval(() => {
    const sc = scrollContainer.value
    if (!sc) return

    if (sc.scrollLeft >= sc.scrollWidth / 2) {
      sc.scrollLeft = 0
    } else {
      sc.scrollLeft += 1
    }
  }, 20)
}

const pauseScroll = () => {
  clearInterval(interval)
}

const resumeScroll = () => {
  startAutoScroll()
}

const scrollLeft = () => {
  scrollContainer.value.scrollBy({ left: -150, behavior: 'smooth' })
}

const scrollRight = () => {
  scrollContainer.value.scrollBy({ left: 150, behavior: 'smooth' })
}

onMounted(() => {
  startAutoScroll()
})

onBeforeUnmount(() => {
  clearInterval(interval)
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
