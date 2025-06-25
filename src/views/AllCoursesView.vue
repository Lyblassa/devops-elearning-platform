<template>
  <div class="min-h-screen bg-cover bg-center px-4 pt-40 space-y-10" style="background-image: url('/images/planviolet.png')">

    <!-- Logo en haut à gauche -->
    <div class="absolute top-6 left-6 z-50">
      <router-link to="/">
        <img src="/images/logo2.svg" alt="Logo" class="h-24 sm:h-32 md:h-40 w-auto" />
      </router-link>
    </div>

    <CoursesHeader titre="All Courses" />
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
