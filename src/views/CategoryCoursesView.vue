<template>
  <div class="min-h-screen bg-cover bg-center px-4 pt-40 space-y-10" style="background-image: url('/images/planviolet.png')">


    <!-- Logo en haut à gauche -->



    <CoursesHeader :titre="titreCategorie" />
    <CategoryFilterBar />


    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
      <CourseCard
        v-for="course in coursFiltres"
        :key="course.id"
        v-bind="course"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CoursesHeader from '../components/courses/CoursesHeader.vue'
import CategoryFilterBar from '../components/courses/CategoryFilterBar.vue'
import CourseCard from '../components/courses/CourseCard.vue'
import { cours } from '../data/courses'
import { categories } from '../data/categories'

const route = useRoute()
const slug = computed(() => route.params.categorieSlug)

const titreCategorie = computed(() => {
  const cat = categories.find(c => c.slug === slug.value)
  return cat ? cat.nom : 'Unknown Category'
})

const coursFiltres = computed(() =>
  cours.filter(c => c.categorieSlug === slug.value)
)
</script>
