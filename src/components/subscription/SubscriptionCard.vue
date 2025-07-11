<template>
  <div
    class="relative p-1 rounded-3xl shadow-lg hover:scale-[1.015] transition-transform duration-300"
    :class="highlight ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : `bg-gradient-to-br ${color}`"
    data-aos="zoom-in"
    data-aos-duration="800"
  >
    <div class="bg-black rounded-3xl p-6 flex flex-col h-full">
      <!-- Titre du plan -->
      <h3 class="text-2xl md:text-3xl font-bold mb-2">{{ title }}</h3>

      <!-- Prix -->
      <div class="text-4xl md:text-5xl font-bold mb-4">
        <template v-if="discounted">
          <span class="line-through text-white/50 text-2xl mr-2">${{ price }}/mois</span>
          <span class="text-green-400">Gratuit</span>
        </template>
        <template v-else>
          ${{ price }}<span class="text-sm text-white/60">/mois</span>
        </template>
      </div>

      <!-- Liste des avantages -->
      <ul class="flex-1 space-y-3 text-white/90 font-medium mb-6 text-left">
        <li v-for="(feature, i) in parsedFeatures" :key="i" class="flex items-start gap-2">
          <span class="text-green-400 text-lg">&#10003;</span>
          <span>{{ feature }}</span>
        </li>
      </ul>

      <!-- Bouton -->
      <button
        class="bg-white text-black hover:bg-white/90 font-bold py-3 rounded-full transition duration-300"
      >
        S'abonner
      </button>
    </div>


    <!-- Animation glow lumineuse fluide -->
    <div
      class="absolute inset-0 rounded-3xl pointer-events-none z-0"
    >
      <div
        class="w-full h-full rounded-3xl animate-border-glow"
        :class="highlight ? 'bg-yellow-500/10' : 'bg-white/10'"
      ></div>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  price: Number,
  features: Array,
  discounted: Boolean,
  highlight: Boolean,
  color: {
    type: String,
    default: 'from-blue-500 to-blue-700'
  }
})

const parsedFeatures = props.features

</script>

<style scoped>
@keyframes border-glow {
  0%, 100% {
    box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 30px 10px rgba(255, 255, 255, 0.3);
  }
}

.animate-border-glow {
  animation: border-glow 3s infinite ease-in-out;
  border-radius: 1.5rem; /* correspond à rounded-3xl */
}

</style>
