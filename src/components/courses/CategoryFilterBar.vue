<template>
  <div class="flex flex-wrap justify-center gap-3 mb-10">
    <button
      v-for="cat in boutons"
      :key="cat.slug"
      @click="goTo(cat.slug)"
      :class="[
        'px-4 py-2 rounded-full text-sm transition',
        isActive(cat.slug)
          ? 'bg-white text-black'
          : 'bg-white/10 text-white hover:bg-white/20',
      ]"
    >
      {{ cat.nom }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { categories, type Categorie } from '../../data/categories'


const route = useRoute()
const router = useRouter()

type FiltreCategorie = { nom: string; slug: string }

const boutons: FiltreCategorie[] = [
  { nom: 'All fields', slug: 'cours' },
  ...categories.map((cat: Categorie) => ({
    nom: cat.nom,
    slug: cat.slug
  }))
]

const goTo = (slug: string) => {
  router.push(slug === 'cours' ? '/cours' : `/${slug}`)
}

const isActive = (slug: string) => {
  return (
    (slug === 'cours' && route.path === '/cours') ||
    route.params.categorieSlug === slug
  )
}
</script>

