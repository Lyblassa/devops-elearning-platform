<template>
  <!-- Barre de navigation fixe en haut avec flou et disparition complète -->
  <transition name="slide-fade">
    <header
      v-show="showNav"
      class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 shadow-sm"
    >
      <nav class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
        <!-- Menu hamburger (mobile uniquement) -->
        <div class="block sm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/">
            <img
            src="/images/logo4.png"
            alt="Logo"
            class="w-[130px] md:w-[160px] object-contain"
            />
          </router-link>
        </div>

        <!-- Barre de recherche (desktop uniquement) -->
        <div class="hidden lg:flex flex-1 justify-center px-4">
          <div class="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Rechercher un cours"
              class="w-full py-2 pl-10 pr-4 rounded-full bg-white/10 text-white placeholder-white/70 backdrop-blur-md border border-white/20"
            />
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <!-- Icônes à droite -->
        <div class="flex items-center gap-6">
          <!-- Mon apprentissage (desktop uniquement) -->
          <div class="hidden lg:flex flex-col items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
              <path d="M480-160q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740v484q51-32 107-48t113-16q36 0 70.5 6t69.5 18v-480q15 5 29.5 10.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Zm80-200v-380l200-200v400L560-360Zm-160 65v-396q-33-14-68.5-21.5T260-720q-37 0-72 7t-68 21v397q35-13 69.5-19t70.5-6q36 0 70.5 6t69.5 19Zm0 0v-396 396Z"/>
            </svg>
            <span class="text-xs text-white/80">Mon apprentissage</span>
          </div>

          <!-- Connexion / Bonjour -->
          <router-link to="/auth" class="flex flex-col items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9.001 9.001 0 0112 15a9.001 9.001 0 016.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-xs text-white/80">
              {{ isLoggedIn ? 'Bonjour ' + username : 'Se connecter' }}
            </span>
          </router-link>
        </div>
      </nav>
    </header>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showNav = ref(true)
let lastScroll = 0
const isLoggedIn = ref(false)
const username = ref('Coco')

const handleScroll = () => {
  const currentScroll = window.scrollY
  showNav.value = currentScroll < lastScroll || currentScroll < 10
  lastScroll = currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
