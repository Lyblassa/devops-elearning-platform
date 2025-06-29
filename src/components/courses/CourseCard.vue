<template>
  <router-link
    :to="`/cours/${slugGenere}`"
    class="flex flex-col sm:flex-row bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-md transition-transform hover:scale-[1.01]"
  >
    <!-- Image -->
    <div
      class="bg-black/20 flex items-center justify-center w-full sm:w-[220px] h-[300px]"
    >
      <span class="text-white/30 text-sm">Image 220×300</span>
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col justify-between w-full">
      <div>
        <!-- Nom de catégorie -->
        <p class="uppercase text-sm font-semibold mb-2" :style="{ color: colorCategorie }">
          {{ categorieNom }}
        </p>

        <!-- Titre du cours -->
        <h3 class="text-xl md:text-2xl font-bold text-white mb-2">{{ titre }}</h3>

        <!-- Description -->
        <p class="text-white/70 text-sm mb-4">{{ description }}</p>
      </div>

      <!-- Badges -->
      <div class="flex gap-3 text-xs text-white/80">
        <span class="bg-white/10 px-3 py-1 rounded-full">
          {{ nbLecons }} lessons
        </span>
        <span class="bg-white/10 px-3 py-1 rounded-full">
          {{ duree_heures }} hours, {{ duree_minutes }} mins
        </span>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { categories } from '../../data/categories'

// Props typées
const { titre, description, nbLecons, duree_heures, duree_minutes, categorieSlug } =
  defineProps<{
    titre: string
    description: string
    nbLecons: number
    duree_heures: number
    duree_minutes: number
    categorieSlug: string
  }>()

// Cherche la catégorie correspondante
const categorie = computed(() =>
  categories.find(cat => cat.slug === categorieSlug)
)

// Nom et couleur dynamique de la catégorie
const categorieNom = computed(() => categorie.value?.nom ?? 'Unknown')
const colorCategorie = computed(() => categorie.value?.glowColor ?? '#fff')

// Génère le slug du titre
const slugGenere = computed(() =>
  titre.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
)


</script>
