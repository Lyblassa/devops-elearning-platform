<template>
  <form class="space-y-6" @submit.prevent="onSubmit">
    <!-- Nom complet -->
    <div>
      <label for="username" class="block text-sm font-medium text-gray-300">Nom complet</label>
      <div class="relative mt-1">
        <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5.121 17.804A13.937 13.937 0 0112 15c2.42 0 4.675.717 6.879 1.946M15 11a3 3 0 10-6 0 3 3 0 006 0z" />
          </svg>
        </span>
        <input
          id="username"
          v-model="form.username"
          type="text"
          required
          placeholder="Votre nom complet"
          class="w-full pl-10 pr-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>

    <!-- Email -->
    <div>
      <label for="email" class="block text-sm font-medium text-gray-300">Adresse email</label>
      <div class="relative mt-1">
        <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4z" />
            <path d="M4 8l8 5 8-5" />
          </svg>
        </span>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          placeholder="votre@email.com"
          class="w-full pl-10 pr-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>


    <!-- Info vérif -->
    <div class="text-sm text-gray-400">
      Un lien de vérification vous sera envoyé après l’inscription.
    </div>

    <!-- CGU -->
    <div class="flex items-start">
      <input id="terms" type="checkbox" class="h-4 w-4 mt-1 text-indigo-600 border-gray-600 bg-gray-900 rounded focus:ring-indigo-500" />
      <label for="terms" class="ml-2 text-sm text-gray-400">
        J'accepte les
        <a href="#" class="text-blue-400 hover:underline">conditions d'utilisation</a>
        et la
        <a href="#" class="text-blue-400 hover:underline">politique de confidentialité</a>.
      </label>
    </div>

    <!-- Bouton -->
    <div>
      <button type="submit" class="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
        Créer mon compte
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
import { auth } from '@/firebase'

const form = reactive({
  username: '',
  email: ''
})

// Config pour le lien magique
const actionCodeSettings = {
  url: 'http://localhost:5173/auth', // ← remplace par ton domaine final plus tard
  handleCodeInApp: true
}

const onSubmit = async () => {
  try {
    await sendSignInLinkToEmail(auth, form.email, actionCodeSettings)
    // Stocke l'email dans le localStorage pour plus tard
    window.localStorage.setItem('emailForSignIn', form.email)
    alert('Un lien de connexion a été envoyé à votre email.')
  } catch (error) {
    console.error('Erreur d’envoi du lien magique :', error)
    alert('Erreur lors de l’envoi. Vérifiez l’email.')
  }
}

</script>
