<template>
  <div class="w-full max-w-md space-y-6">
    <h2 class="text-xl font-semibold text-white text-center">Vérification de votre compte</h2>
    <p class="text-sm text-gray-400 text-center">Entrez le code à 6 chiffres envoyé à votre adresse e-mail.</p>

    <div class="grid grid-cols-6 gap-2">
      <input v-for="i in 6" :key="i" type="text" maxlength="1" inputmode="numeric"
             class="text-center text-lg w-12 h-12 border border-gray-600 bg-gray-800 text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
    </div>

    <div class="flex justify-between items-center">
      <button @click="onBack" class="text-sm text-gray-400 hover:underline">Retour</button>
      <button @click="onSubmit" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
        Valider le code
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  onSubmit: () => void,
  onBack: () => void
}>()
</script>
