<template>
  <section class="overflow-hidden bg-black py-10">
    <div class="parallax-container">
      <!-- Ligne 1 -->
      <motion.div
        class="scroller"
        :style="{ x: x1 }"
      >
        <span v-for="i in 4" :key="i">{{ text1 }} — </span>
      </motion.div>

      <!-- Ligne 2 -->
      <motion.div
        class="scroller reverse"
        :style="{ x: x2 }"
      >
        <span v-for="i in 4" :key="i">{{ text2 }} — </span>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useMotionValue, animate } from '@motionone/vue'

const text1 = ref('Cours premium')
const text2 = ref('Mentors premium')

// Valeurs animées
const x1 = useMotionValue('0%')
const x2 = useMotionValue('0%')

let frame

function loopScroll() {
  const speed1 = 0.2
  const speed2 = -0.15

  const currentX1 = parseFloat(x1.get())
  const currentX2 = parseFloat(x2.get())

  x1.set((currentX1 + speed1) % 100 + '%')
  x2.set((currentX2 + speed2) % 100 + '%')

  frame = requestAnimationFrame(loopScroll)
}

onMounted(() => {
  loopScroll()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
})
</script>

<style scoped>
.parallax-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.scroller {
  white-space: nowrap;
  font-size: 8vw;
  font-weight: bold;
  color: #333;
  display: flex;
  gap: 2rem;
  will-change: transform;
}

.reverse {
  direction: rtl;
}
</style>
