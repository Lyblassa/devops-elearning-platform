<script setup lang="ts">
import CategoryCard from './CategoryCard.vue'
import { categories } from '../../data/categories'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToCategory = (slug: string) => {
  router.push(`/${slug}`)
}
</script>

<template>
  <div id="categories" class="w-full max-w-7xl mx-auto px-4 py-12">
    <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-10">
      Nos catégories
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
      <CategoryCard
        v-for="cat in categories"
        :key="cat.id"
        :title="cat.nom"
        :nbCours="cat.nbCours"
        :image="cat.image"
        :glowColor="cat.glowColor"
        @click="goToCategory(cat.slug)"
      />
    </div>
  </div>
</template>
