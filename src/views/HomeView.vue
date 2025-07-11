<template>
  <div
    class="min-h-screen w-full bg-cover bg-center text-white"
    :style="{ backgroundImage: `url('/images/planviolet1.png')` }"
  >
    <!-- Top bar avec logo absolument positionné -->
    <div class="relative w-full flex justify-end items-start px-6 pt-6">
      <!-- Logo en haut à gauche avec espace -->
      <img
        src="/images/logo3.svg"
        alt="Logo"
        class="absolute top-5 left-6 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px] object-contain"
      />

      <!-- Connexion / Inscription bouton -->
      <button
        @click="goToAuth"
        class="text-white text-sm bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full transition duration-300"
      >
        Connexion / Inscription
      </button>
    </div>

    <!-- Contenu centré (remonté avec mt-0) -->
    <div
      class="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto mt-20 sm:mt-24 md:mt-28 lg:mt-30 xl:mt-32 animate-fade-in px-4"
    >
      <!-- Badge Nouveautés -->
      <img
        src="/images/nouveautes.svg"
        alt="Nouveautes"
        class="w-auto h-8 md:h-10 animate-zoom-bounce transition duration-300 hover:backdrop-blur-md hover:brightness-125 cursor-pointer"
      />

      <!-- Titre principal -->
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center animate-zoom-in"
      >
        Forme-toi aux<br />
        compétences les plus demandées
      </h1>



      <!-- Sous-titre -->
      <p
        class="text-sm sm:text-base md:text-lg font-light font-['Questrial'] text-white/70"
      >
        Premium courses from Premium specialists of Top companies.
      </p>

      <!-- Bouton Explorer -->
      <button
        @click="goToCourses"
        class="bg-gradient-to-b from-white/80 to-white text-black px-8 py-4 rounded-full font-semibold text-base flex items-center gap-3 shadow-lg hover:scale-105 transition"
      >
        Explore courses
        <span class="text-2xl">&rarr;</span>
      </button>

      <!-- Avatars étudiants -->
      <div class="flex flex-col items-center gap-2 mt-6">
        <div class="flex -space-x-3">
          <div
            v-for="n in 4"
            :key="n"
            class="w-10 h-10 rounded-full bg-white/20 border border-white"
          ></div>
        </div>
        <p class="text-xs text-white/80">Over 1500+ students</p>
      </div>
    </div>
  </div>

  <!-- Anneau flottant -->
  <div class="mt-10 flex justify-center">
    <img
      src="/images/anneau.svg"
      alt="anneau"
      class="w-[450px] md:w-[600px] lg:w-[1000px] animate-appear-breathe"
    />

  </div>

  <!-- SECTION DES OUTILS DEVOPS -->
  <div class="my-20">
    <ToolsScroll />
  </div>

  <!-- SECTION DES CATÉGORIES DE COURS -->
  <div class="my-20">
    <CategoriesSection />
  </div>

  <!-- SECTION DES MENTORS -->
  <div class="my-20">
    <MentorsSection />
  </div>

  <!-- SECTION DE CERTIFICATIONS -->
  <div class="my-20">
    <CertificationSection />
  </div>

  <!-- SECTION DE PARALLAX SROLLER -->
  <div class="my-20">
    <ParallaxScroller />
  </div>

  <!-- SECTION STATISTIQUES -->
  <div class="my-20">
    <StatistiquesSection />
  </div>









</template>

<script setup>
import { useRouter } from 'vue-router'
import CategoriesSection from '../components/categories/CategoriesSection.vue'
import ToolsScroll from '../components/tools/ToolsScroll.vue'
import MentorsSection from '../components/mentors/MentorsSection.vue'
import CertificationSection from '../components/certification/CertificationSection.vue'
import ParallaxScroller from '../components/ParallaxScroller.vue'
import StatistiquesSection from '../components/StatistiquesSection.vue'







const router = useRouter()
const goToAuth = () => {
 router.push('/auth')
}

const goToCourses = () => {
  router.push('/cours')
}


</script>

<style scoped>
@keyframes fade-in {
 0% {
   opacity: 0;
   transform: translateY(10px);
 }
 100% {
   opacity: 1;
   transform: translateY(0);
 }
}

@keyframes zoom-in {
 0% {
   transform: scale(0.95);
   opacity: 0;
 }
 100% {
   transform: scale(1);
   opacity: 1;
 }
}

@keyframes zoom-bounce {
 0% {
   transform: scale(0.5);
   opacity: 0;
 }
 60% {
   transform: scale(1.1);
   opacity: 1;
 }
 100% {
   transform: scale(1);
 }
}

.animate-fade-in {
 animation: fade-in 0.8s ease-out;
}

.animate-zoom-in {
 animation: zoom-in 1s ease-out 0.2s both;
}

.animate-zoom-bounce {
 animation: zoom-bounce 1s ease-out 0.3s both;
}

/*animation anneau*/
@keyframes appear-breathe {
 0% {
   opacity: 0;
   transform: scale(0.7) translateY(30px);
 }
 30% {
   opacity: 1;
   transform: scale(1.1) translateY(-5px);
 }
 100% {
   transform: scale(1) translateY(0);
 }
}

.animate-appear-breathe {
 animation: appear-breathe 2s ease-out forwards,
 breathe-loop 3s ease-in-out 2s infinite;
}

@keyframes breathe-loop {
 0%, 100% {
   transform: translateY(0);
 }
 50% {
   transform: translateY(-10px);
 }
}

</style>
