<template>
  <div class="min-h-screen bg-cover bg-center px-4 pt-12" style="background-image: url('/images/planviolet.png')">
    <CoursesHeader titre="All Courses" />
    <CategoryFilterBar />
    <!-- Affichage des cours viendra ici -->
  </div>
</template>

<script setup>
import CoursesHeader from '../components/courses/CoursesHeader.vue'
import CategoryFilterBar from '../components/courses/CategoryFilterBar.vue'
</script>
