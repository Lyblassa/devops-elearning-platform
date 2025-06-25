<template>
  <section ref="sectionRef" class="w-full bg-black text-white px-4 py-16">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
      <!-- IMAGE -->
      <div
        class="w-full lg:w-1/2 flex items-start justify-center"
        data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1200"
        data-aos-offset="250"
      >
        <img
          src="/images/becomedevops.png"
          alt="Digistar"
          class="rounded-2xl object-cover w-full h-auto aspect-video lg:h-full lg:aspect-auto object-top"
        />
      </div>

      <!-- TEXTE + STATS -->
      <div class="w-full lg:w-1/2 flex flex-col gap-10 justify-start">
        <!-- Intro -->
        <div
          class="bg-white/10 backdrop-blur-md rounded-xl p-8"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="900"
        >

          <p class="text-white/80 font-questrial text-lg md:text-xl text-center lg:text-left">
            BecomeDevOps is a center where modern professions such as programming,
            design and marketing are taught. A place, with the help of modern
            professions, improving human life and strengthens confidence in the
            future.
          </p>
        </div>

        <!-- Statistiques -->
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="bg-white/10 backdrop-blur-md rounded-xl p-6"
          :data-aos="'fade-left'"
          :data-aos-delay="(index + 2) * 200"
          data-aos-duration="800"
        >
          <h3 class="text-3xl md:text-5xl font-bold font-satoshi mb-2">
            {{ stat.value }}
          </h3>
          <p class="text-white/80 font-questrial text-base md:text-lg">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const sectionRef = ref(null)

const stats = [
  {
    value: '12 years',
    label: 'Have been teaching students from 50+ countries across the world.',
  },
  {
    value: '20 000+',
    label: 'Students have graduated so far.',
  },
  {
    value: '75.8%',
    label:
      'Graduates have found demanding professions and have been building their career.',
  },
  {
    value: '24/7',
    label: 'Support group is ready to help you if you have questions.',
  },
]

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
    mirror: false,
    offset: 120
  })
})
</script>
