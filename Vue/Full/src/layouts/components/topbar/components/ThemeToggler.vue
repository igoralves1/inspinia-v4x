<template>
  <div class="topbar-item d-none d-sm-flex">
    <button class="topbar-link" type="button" @click="toggleTheme">
      <Icon v-if="layout.theme === 'light'" icon="lucide:moon" class="fs-xxl mode-light-moon" />
      <Icon v-else icon="lucide:sun" class="fs-xxl mode-light-sun" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useLayout } from '@/stores/layout'
import { Icon } from '@iconify/vue'

const { layout, setTheme } = useLayout()

const toggleTheme = () => {
  if (layout.theme === 'dark') {
    return setTheme('light')
  }
  return setTheme('dark')
}
</script>
