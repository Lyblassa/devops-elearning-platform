<template>
  <div>
    <!-- Entête avec fond -->
    <div class="relative h-[840px] w-full bg-cover bg-center" style="background-image: url('/images/fondcours.png')">
      <!-- ✅ Superposition gradient pour réduire l'opacité visuelle -->
      <div class="absolute inset-0 bg-cover bg-center opacity-60" style="background-image: url('/images/gradientfond.png')"></div>

      <!-- Logo en haut à gauche -->
      <div class="absolute top-6 left-6 z-50">
        <router-link to="/">
          <img src="/images/logo2.svg" alt="Logo" class="h-24 sm:h-32 md:h-40 w-auto" />
        </router-link>
      </div>

      <!-- Bouton en haut à droite -->
      <div class="absolute top-8 right-8">
        <router-link
          to="/cours"
          class="bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition"
        >
          Explorer les cours
        </router-link>
      </div>

      <!-- Titre et slogan -->
      <div class="flex items-center justify-center h-full relative z-10">
        <div class="text-center text-white max-w-3xl px-4">
          <h1 class="text-4xl md:text-6xl font-bold">{{ currentCours?.titre }}</h1>
          <p class="mt-4 text-xl text-white/80">{{ currentCours?.slogan }}</p>
        </div>
      </div>
    </div>

    <!-- Corps de la page -->
    <div class="relative max-w-7xl mx-auto px-4 lg:px-8 py-16">
      <!-- Boîte sticky (effet parallax) -->
      <div class="lg:absolute lg:right-0 lg:top-[200px]">
        <div class="w-[393px] h-[499px] bg-white/5 border border-white/10 rounded-2xl shadow-md backdrop-blur-sm sticky top-20 hidden lg:block">
          <!-- Contenu à venir -->
        </div>
      </div>

      <!-- Contenu principal -->
      <div class="lg:pr-[420px] space-y-20">
        <!-- À propos du cours -->
        <section>
          <h2 class="text-3xl font-bold text-white mb-4">À propos du cours</h2>
          <p class="text-white/70 leading-relaxed">{{ currentCours?.description }}</p>
        </section>

        <!-- Exigences techniques -->
        <section v-if="coursDetail?.exigences?.length">
          <h2 class="text-3xl font-bold text-white mb-4">Exigences techniques</h2>
          <ul class="list-disc pl-6 text-white/70">
            <li v-for="(item, index) in coursDetail.exigences" :key="index">{{ item }}</li>
          </ul>
        </section>

        <!-- Mentor -->
        <section v-if="coursDetail?.mentor">
          <div class="flex flex-col lg:flex-row items-start gap-10">
            <img
              :src="coursDetail.mentor.image"
              alt="Mentor"
              class="w-[440px] h-[440px] object-cover rounded-xl shadow-lg"
            />
            <div>
              <h2 class="text-3xl font-bold text-white mb-2">{{ coursDetail.mentor.nom }}</h2>
              <p class="text-white/70 leading-relaxed">{{ coursDetail.mentor.description }}</p>
            </div>
          </div>
        </section>

        <!-- Avantages -->
        <section v-if="coursDetail?.avantages?.length">
          <h2 class="text-3xl font-bold text-white mb-6">Avantages</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              v-for="(adv, i) in coursDetail.avantages"
              :key="i"
              class="bg-white/5 border border-white/10 rounded-xl p-6 text-white/80"
            >
              {{ adv }}
            </div>
          </div>
        </section>

        <!--  Nouveau rendu du syllabus -->
        <section v-if="coursDetail?.lecons?.length">
          <h2 class="text-3xl font-bold text-white mb-6">Syllabus du cours</h2>
          <div class="bg-white/5 rounded-2xl overflow-hidden divide-y divide-white/10">
            <div
              v-for="(lecon, index) in coursDetail.lecons"
              :key="lecon.id"
              class="flex items-center gap-6 px-6 py-5"
            >
              <div class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white font-bold">
                {{ index + 1 }}
              </div>
              <div>
                <p class="text-white font-semibold">Leçon {{ index + 1 }}</p>
                <p class="text-white/70 text-sm">{{ lecon.titre }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Autres cours -->
        <section v-if="autreCours">
          <h2 class="text-3xl font-bold text-white mb-6">Autres cours</h2>
          <CourseCard v-bind="autreCours" />
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { cours as coursList } from '../data/courses'
import { coursDetails } from '../data/coursDetails'
import CourseCard from '../components/courses/CourseCard.vue'

const route = useRoute()

const coursSlug = computed(() => route.params.coursSlug as string)

const currentCours = computed(() => {
  return coursList.find(c =>
    c.titre.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') === coursSlug.value
  )
})

const coursDetail = computed(() =>
  coursDetails.find(c => c.slug === coursSlug.value)
)

const autreCours = computed(() => {
  const autres = coursList.filter(c => c.id !== currentCours.value?.id)
  return autres[Math.floor(Math.random() * autres.length)]
})
</script>

<style scoped>

</style>
