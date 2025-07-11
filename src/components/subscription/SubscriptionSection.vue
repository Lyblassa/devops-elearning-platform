<template>
  <section class="w-full py-20 px-6 bg-black text-white">
    <div class="max-w-7xl mx-auto text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Choisis ton plan d’abonnement</h2>
      <p class="text-white/70 max-w-2xl mx-auto">
        Accède à nos contenus selon tes besoins. Tous nos plans sont sans engagement.
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-offset="800"
    data-aos-once="true"
    >

    <SubscriptionCard
        title="Basic"
        :price="10"
        :discounted="true"
        color="from-blue-500 to-indigo-500"
        :features="[
          'Accès illimité à tous les cours vidéo',
          'Mises à jour régulières des contenus',
          'Adapté aux mobiles et tablettes',
          'Sans engagement, annulation à tout moment'
        ]"
      />

      <SubscriptionCard
        title="Standard"
        :price="25"
        :discounted="false"
        color="from-purple-500 to-pink-500"
        :features="[
          'Tout le contenu Basic inclus',
          'Accès aux labs pratiques avec VSCode intégré',
          'Assistance IA pour t’aider à progresser',
          'Contenus exclusifs mis à jour en avant-première'
        ]"
      />

      <SubscriptionCard
        title="Premium"
        :price="40"
        :discounted="false"
        highlight
        color="from-yellow-400 to-yellow-600"
        :features="[
          'Tout le contenu Standard inclus',
          'Sessions individuelles avec un mentor expert',
          'Support technique prioritaire 24/7',
          'Accès anticipé aux nouveautés & masterclasses'
        ]"
      />
    </div>
  </section>
</template>

<script setup>
import SubscriptionCard from './SubscriptionCard.vue'
</script>

<style scoped>
@import 'aos/dist/aos.css';
</style>
