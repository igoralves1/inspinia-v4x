<template>
  <div class="topbar-item d-none d-sm-flex">
    <button @click="customizer.toggleCustomizer" class="topbar-link" type="button">
      <Icon icon="lucide:settings" class="fs-xxl" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useLayout } from '@/stores/layout.ts'
const { customizer } = useLayout()
</script>
