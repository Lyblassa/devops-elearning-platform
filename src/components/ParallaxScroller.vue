<!-- components/ParallaxScroller.vue -->
<template>
  <section class="overflow-hidden bg-black">
    <div class="relative w-full whitespace-nowrap overflow-hidden">
      <motion.div
        v-for="(line, index) in lines"
        :key="index"
        class="parallax-line"
        :style="{ transform: `translateX(${linePositions[index]}%)` }"
      >
        <span
          v-for="i in repeatCount"
          :key="i"
          class="parallax-text"
        >
          {{ line.text }}
        </span>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { motion, useAnimationFrame } from 'motion-v'

defineOptions({ components: { motion } })

const lines = [
  { text: 'PREMIUM COURSES — PREMIUM MENTORS —', speed: -0.04 },
  { text: 'PREMIUM MENTORS — PREMIUM COURSES —', speed: 0.04 }
]

const repeatCount = 30
const linePositions = ref(lines.map((_, i) => (i % 2 === 0 ? 0 : -50)))
let lastScrollY = window.scrollY
let inertia = 4 // 💡 boost initial

useAnimationFrame(() => {
  const scrollDelta = window.scrollY - lastScrollY
  lastScrollY = window.scrollY

  inertia += scrollDelta * 0.08
  inertia *= 0.9

  lines.forEach((line, index) => {
    linePositions.value[index] += line.speed * inertia
    if (linePositions.value[index] < -100) linePositions.value[index] += 100
    if (linePositions.value[index] > 100) linePositions.value[index] -= 100
  })
})
</script>

<style scoped>
.parallax-line {
  display: flex;
  will-change: transform;
  white-space: nowrap;
  line-height: 1;

  margin: 0;
  padding: 0;
  height: 7.5rem;
}

.parallax-text {
  font-family: 'Satoshi', sans-serif;
  font-size: 7.5rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: #333;
  white-space: nowrap;
  margin-right: 4rem;
  line-height: 1;
}

</style>
