<template>
  <div id="categories" class="w-full max-w-7xl mx-auto px-4 py-12">
    <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-10">Nos catégories</h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr"
    >
      <CategoryCard
        v-for="(cat, index) in categories"
        :key="cat.id"
        :title="cat.nom"
        :nbCours="cat.nbCours"
        :image="cat.image"
        :glowColor="cat.glowColor"
      />
    </div>
  </div>
</template>

<script setup>
import CategoryCard from './CategoryCard.vue'

//  MOCK temporaire (sera remplacé par API plus tard)
const categories = [
  { id: 1, nom: "DevOps", nbCours: 12, image: "cours1.svg", glowColor: "#00ffff" },
  { id: 2, nom: "Git & GitHub", nbCours: 8, image: "cours2.svg", glowColor: "#ff66cc" },
  { id: 3, nom: "CI/CD", nbCours: 10, image: "cours3.svg", glowColor: "#ffa500" },
  { id: 4, nom: "Docker", nbCours: 14, image: "cours4.svg", glowColor: "#00ccff" },
  { id: 5, nom: "Kubernetes", nbCours: 9, image: "cours5.svg", glowColor: "#cc99ff" },
  { id: 6, nom: "Terraform", nbCours: 7, image: "cours6.svg", glowColor: "#99ffcc" },
  { id: 7, nom: "Monitoring", nbCours: 6, image: "cours7.svg", glowColor: "#ffcc00" },
  { id: 8, nom: "Cloud", nbCours: 13, image: "cours8.svg", glowColor: "#33cccc" },
  { id: 9, nom: "Sécurité", nbCours: 11, image: "cours9.svg", glowColor: "#ff4444" },
]
</script>
