<template>
  <div class="w-full bg-white/5 border border-blue-500 rounded-2xl shadow-md backdrop-blur-sm p-6 text-white text-[15px]">
    <!-- Prix -->
    <div class="mb-6">
      <p class="text-sm text-white/70 mb-1">Prix du cours</p>
      <div class="flex items-baseline gap-3">
        <p class="text-2xl text-white font-bold">{{ prixFinal }} $</p>
      </div>
    </div>

    <!-- Infos du cours -->
    <ul class="space-y-4 text-white/90">
      <li class="flex items-center gap-3">
        <img src="/images/pay/lesson.png" class="w-5 h-5 object-contain" />
        {{ nbLecons }} leçons
      </li>
      <li class="flex items-center gap-3">
        <img src="/images/pay/hour.png" class="w-5 h-5 object-contain" />
        {{ duree }} heures
      </li>
      <li class="flex items-center gap-3">
        <img src="/images/pay/level.png" class="w-5 h-5 object-contain" />
        Niveau : {{ niveau }}
      </li>
      <li class="flex items-center gap-3">
        <img src="/images/pay/infinite.png" class="w-5 h-5 object-contain" />
        Paiement unique, accès à vie
      </li>
    </ul>

    <!-- Bouton Payer -->
    <button
      class="mt-8 w-full py-3 bg-gradient-to-r from-gray-100 to-gray-300 text-black font-semibold rounded-full shadow hover:scale-[1.02] transition"
    >
      Payer {{ prixFinal }} $
    </button>

    <!-- Méthodes de paiement -->
    <p class="mt-6 text-xs text-white/60 text-center">
      Paiement sécurisé via TLS
    </p>
    <div class="mt-2 flex justify-center items-center gap-3">
      <img src="/images/pay/paypal.png" class="w-[26px] h-[19px] object-contain" />
      <img src="/images/pay/mastercard.png" class="w-[26px] h-[19px] object-contain" />
      <img src="/images/pay/visa.png" class="w-[26px] h-[19px] object-contain" />
      <img src="/images/pay/googlepay.png" class="w-[26px] h-[19px] object-contain" />
    </div>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  prixFinal: number
  nbLecons: number
  duree: string
  niveau: string
}>()
</script>
