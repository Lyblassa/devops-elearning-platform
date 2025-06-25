<template>
  <div class="w-full bg-black py-16 px-4">
    <div
      class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-6 sm:px-12 py-10"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <!-- Texte à gauche -->
      <div
        class="flex-1 text-center lg:text-left z-10"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <h2 class="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-snug">
          Préparez-vous aux certifications <br />
          les plus reconnues mondialement
        </h2>
        <button
          @click="goToCourses"
          class="mt-4 px-6 py-3 bg-white text-black rounded-full text-sm sm:text-base font-semibold hover:bg-gray-200 transition duration-300"
        >
          Explorer les cours →
        </button>
      </div>

      <!-- Image des certificats -->
      <div
        class="flex-1 relative w-full max-w-[587px]"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <!-- Lueur jaune -->
        <img
          src="/images/lueur.png"
          alt="Lueur"
          class="absolute -top-10 left-0 w-full h-auto z-0 pointer-events-none select-none"
          style="mix-blend-mode: screen;"
        />
        <!-- Image des certificats -->
        <img
          src="/images/certif.png"
          alt="Certificat"
          class="relative z-10 w-full h-auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRouter } from 'vue-router'


const router = useRouter()
const goToCourses = () => {
  router.push('/cours')
}


onMounted(() => {
  AOS.init({ once: true })
})
</script>
