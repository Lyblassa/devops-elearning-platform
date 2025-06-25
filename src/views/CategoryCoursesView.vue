<template>
  <div class="min-h-screen bg-cover bg-center px-4 pt-12" style="background-image: url('/images/planviolet.png')">
    <CoursesHeader :titre="titreCategorie" />
    <CategoryFilterBar />
    <!-- Affichage des cours filtrés viendra ici -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CoursesHeader from '../components/courses/CoursesHeader.vue'
import CategoryFilterBar from '../components/courses/CategoryFilterBar.vue'
import { categories } from '../data/categories'

const route = useRoute()

const titreCategorie = computed(() => {
  const slug = route.params.categorieSlug
  const cat = categories.find(c => c.slug === slug)
  return cat ? cat.nom : 'Unknown Category'
})
</script>
