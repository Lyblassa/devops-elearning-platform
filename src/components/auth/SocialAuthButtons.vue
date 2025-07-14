<template>
  <div class="space-y-3">
    <button
      @click="handleGoogleAuth"
      class="w-full flex items-center justify-center gap-2 h-11 border border-gray-600 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition">
      <img src="/images/google.svg" class="h-5 w-5" />
      <span>Continuer avec Google</span>
    </button>

  </div>
</template>

<script setup lang="ts">

import { signInWithGoogle } from '../../_services/authServices' // adapte le chemin
const handleGoogleAuth = async () => {
await signInWithGoogle()
}

</script>
