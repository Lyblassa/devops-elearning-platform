<template>
  <div class="min-h-screen bg-cover bg-center px-4 pt-40 space-y-10" style="background-image: url('/images/planviolet.png')">

    <CoursesHeader titre="Tous nos cours" />
    <CategoryFilterBar />


    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
      <CourseCard
        v-for="course in cours"
        :key="course.id"
        v-bind="course"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CoursesHeader from '../components/courses/CoursesHeader.vue'
import CategoryFilterBar from '../components/courses/CategoryFilterBar.vue'
import CourseCard from '../components/courses/CourseCard.vue'
import { cours } from '../data/courses'
</script>
