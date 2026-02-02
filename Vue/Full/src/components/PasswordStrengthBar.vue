<template>
  <div class="password-bar my-2">
    <div
      v-for="(_, i) in strengthBars"
      :key="i"
      :class="['strong-bar', i < strength ? `bar-active-${strength}` : '']"
    />
  </div>
  <p class="text-muted fs-xs mb-0">Use 8+ characters with letters, numbers & symbols.</p>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  password: {
    type: String,
    default: '',
  },
})

const strength = ref(0)
const strengthBars = Array(4).fill(0)

watch(
  () => props.password,
  (val) => {
    strength.value = calculatePasswordStrength(val)
  },
  { immediate: true },
)

function calculatePasswordStrength(password: string) {
  let score = 0
  if (password.length >= 8) score++
  if (/[A-Z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[\W_]/.test(password)) score++
  return score
}
</script>
