<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-6">
      <div class="text-center">
        <img src="/images/user.svg" alt="User Icon" class="mx-auto h-12 w-12" />
      </div>

      <SocialAuthButtons />

      <div class="relative flex items-center my-4">
        <div class="flex-grow border-t border-gray-200"></div>
        <span class="mx-2 text-sm text-gray-400">OU CONTINUEZ AVEC</span>
        <div class="flex-grow border-t border-gray-200"></div>
      </div>

      <div class="relative bg-gray-100 rounded-md overflow-hidden">
        <!-- Curseur qui glisse -->
        <div
          class="absolute top-[10%] left-0 w-1/2 h-4/5 bg-white rounded-md shadow transition-all duration-300"
          :class="activeTab === 'register' ? 'translate-x-full' : 'translate-x-0'"
        ></div>


        <!-- Boutons Connexion / Inscription -->
        <div class="grid grid-cols-2 relative z-10 text-center">
          <button
            @click="activeTab = 'login'"
            class="py-2 font-semibold z-10"
          >
            Connexion
          </button>
          <button
            @click="activeTab = 'register'"
            class="py-2 font-semibold z-10"
          >
            Inscription
          </button>
        </div>
      </div>


      <div v-if="activeTab === 'login'">
        <LoginForm />
      </div>
      <div v-else>
        <RegisterForm />
      </div>

      <p class="text-xs text-center text-gray-500 mt-6">
        En vous connectant, vous acceptez nos <a href="#" class="text-blue-600 underline">conditions d’utilisation</a>
        et notre <a href="#" class="text-blue-600 underline">politique de confidentialité</a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginForm from '../components/auth/LoginForm.vue'
import RegisterForm from '../components/auth/RegisterForm.vue'
import SocialAuthButtons from '../components/auth/SocialAuthButtons.vue'

const activeTab = ref<'login' | 'register'>('login')
</script>
