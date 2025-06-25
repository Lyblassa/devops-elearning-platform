<template>
  <footer class="bg-black text-white pt-16 pb-6 px-4">

    <div class="w-full max-w-none mx-auto grid grid-cols-1 md:grid-cols-4 md:gap-x-2 md:gap-y-0 gap-y-2">


    <!-- Boîte 1 : Logo + Description élargie -->
      <div class="md:col-span-1 bg-neutral-900 p-6 rounded-2xl h-full flex flex-col">
        <img src="/images/logo2.svg" alt="Logo becomeDevops" class="h-[150px] w-auto mb-4 shrink-0" />
        <p class="text-sm text-white/80 leading-relaxed mb-4">
          Entièrement autofinancé, nous ne sommes pas motivés par l'argent, mais par la passion de transmettre.
          Notre approche est 100 % pratique, sans PowerPoint, pour former des développeurs DevOps immédiatement opérationnels.
        </p>
        <p class="text-sm text-white/50 mt-auto">
          Adresse : 123 Rue du Cloud, Montréal, QC, Canada
        </p>
      </div>

      <!-- Boîte 2 : Domaines -->
      <div class="bg-neutral-900 p-6 rounded-2xl h-full">
        <h3 class="text-lg font-semibold mb-3">Domaines</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-blue-400 text-white/80 transition">DevOps</a></li>
          <li><a href="#" class="hover:text-blue-400 text-white/80 transition">Cloud</a></li>
          <li><a href="#" class="hover:text-blue-400 text-white/80 transition">Sécurité</a></li>
          <li><a href="#" class="hover:text-blue-400 text-white/80 transition">CI/CD</a></li>
          <li><a href="#" class="hover:text-blue-400 text-white/80 transition">Conteneurisation</a></li>
        </ul>
      </div>

      <!-- Boîte 3 : Réseaux sociaux -->
      <div class="bg-neutral-900 p-6 rounded-2xl h-full">
        <h3 class="text-lg font-semibold mb-3">Réseaux sociaux</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-blue-400 text-white/80 transition">Instagram</a></li>
          <li><a href="#" class="hover:text-blue-400 text-white/80 transition">X (anciennement Twitter)</a></li>
          <li><a href="#" class="hover:text-blue-400 text-white/80 transition">LinkedIn</a></li>
        </ul>
      </div>

      <!-- Boîte 4 : Légal -->
      <div class="bg-neutral-900 p-6 rounded-2xl h-full">
        <h3 class="text-lg font-semibold mb-3">Légal</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-blue-400 text-white/80 transition">Politique de confidentialité</a></li>
          <li><a href="#" class="hover:text-blue-400 text-white/80 transition">Conditions d'utilisation</a></li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>

</style>
