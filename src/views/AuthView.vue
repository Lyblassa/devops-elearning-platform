<template>
  <div class="min-h-screen bg-black flex items-center justify-center px-4 pt-28">
    <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

      <!-- IMAGE -->
      <div class="w-full flex justify-center md:justify-start md:order-first">
        <img
          src="/images/authimage.svg"
          alt="DevOps Illustration"
          class="w-60 sm:w-72 md:w-80 lg:w-[320px] h-auto object-contain"
        />
      </div>

      <!-- FORMULAIRE -->
      <div class="w-full bg-gray-900 rounded-2xl shadow-xl px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 space-y-3 flex flex-col justify-center max-w-md mx-auto">
        <div class="text-center">
          <img src="/images/account.svg" alt="User Icon" class="mx-auto h-14 w-14 sm:h-16 sm:w-16" />
        </div>

        <SocialAuthButtons />

        <div class="relative flex items-center my-2">
          <div class="flex-grow border-t border-gray-600"></div>
          <span class="mx-2 text-xs sm:text-sm text-gray-400">OU CONTINUEZ AVEC</span>
          <div class="flex-grow border-t border-gray-600"></div>
        </div>

        <!-- Onglets -->
        <div class="relative bg-gray-800 rounded-md overflow-hidden h-10">
          <div
            class="absolute top-1 left-0 w-1/2 h-8 bg-gray-900 rounded-md shadow transition-all duration-300"
            :class="activeTab === 'register' ? 'translate-x-full' : 'translate-x-0'"
          ></div>
          <div class="grid grid-cols-2 relative z-10 text-center text-sm font-medium">
            <button @click="activeTab = 'login'" class="py-1 z-10 text-white">Connexion</button>
            <button @click="activeTab = 'register'" class="py-1 z-10 text-white">Inscription</button>
          </div>
        </div>

        <!-- Formulaires -->
        <div v-if="activeTab === 'login'">
          <LoginForm />
        </div>
        <div v-else>
          <RegisterForm />
        </div>

        <p class="text-[11px] text-center text-gray-400 mt-2 leading-tight">
          En vous connectant, vous acceptez nos
          <a href="#" class="text-blue-400 underline">conditions d’utilisation</a> et notre
          <a href="#" class="text-blue-400 underline">politique de confidentialité</a>.
        </p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginForm from '../components/auth/LoginForm.vue'
import RegisterForm from '../components/auth/RegisterForm.vue'
import SocialAuthButtons from '../components/auth/SocialAuthButtons.vue'
import { onMounted } from 'vue'
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
import { auth } from '@/firebase'
import { API_URL } from '../utils/config'


const activeTab = ref<'login' | 'register'>('login')

onMounted(async () => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    const email = window.localStorage.getItem('emailForSignIn')
    const username = window.localStorage.getItem('pendingUsername')
    if (!email) {
      alert('Email non trouvé dans le navigateur. Veuillez recommencer.')
      return
    }

    try {
      const result = await signInWithEmailLink(auth, email, window.location.href)
      const token = await result.user.getIdToken()

      //  envoi au backend
      const response = await fetch(`${API_URL}/api/auth/firebase-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ idToken: token, username })
      })

      const data = await response.json()
      console.log("Réponse backend :", data)
      alert(`Bienvenue ${data.nom} !`)

      // Nettoyage
      window.localStorage.removeItem('emailForSignIn')
      window.localStorage.removeItem('pendingUsername') // ← à ajouter ici !
    } catch (error) {
      console.error('Erreur de connexion avec le lien :', error)
      alert('Le lien est invalide ou expiré.')
    }
  }
})

</script>
