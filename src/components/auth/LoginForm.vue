<template>
  <form class="space-y-6" @submit.prevent="onSubmit">
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

    <!-- Mot de passe -->
    <!-- <div>
      <label for="password" class="block text-sm font-medium text-gray-300">Mot de passe</label>
      <div class="relative mt-1">
        <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 15v2m0-6v2m0-6a4 4 0 014 4v4H8v-4a4 4 0 014-4z" />
          </svg>
        </span>
        <input
          :type="showPassword ? 'text' : 'password'"
          id="password"
          v-model="form.password"
          required
          placeholder="••••••••"
          class="w-full pl-10 pr-10 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button type="button" @click="showPassword = !showPassword" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
          <svg v-if="showPassword" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.969 9.969 0 013.342-7.478m1.636 1.636A9.96 9.96 0 0121 9c0 5.523-4.477 10-10 10a9.96 9.96 0 01-7.478-3.342" />
            <path d="M4 4l16 16" />
          </svg>
          <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>
    </div>-->

    <!-- Options -->
    <div class="flex items-center justify-between">
      <label class="flex items-center text-sm text-gray-400">
        <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 bg-gray-900 rounded mr-2" />
        Se souvenir de moi
      </label>
      <!-- <a href="#" class="text-sm text-blue-400 hover:underline">Mot de passe oublié ?</a> -->
    </div>

    <!-- Info vérif -->
    <div class="text-sm text-gray-400">
      Un lien de vérification vous sera envoyé après la connexion.
    </div>


    <!-- Bouton -->
    <div>
      <button type="submit" class="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
        Se connecter
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

interface LoginForm {
  email: string
  password: string
}

const form = reactive<LoginForm>({
  email: '',
  password: ''
})

const showPassword = ref(false)

const onSubmit = () => {
  console.log('Connexion envoyée :', form)
}
</script>
