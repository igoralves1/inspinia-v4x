<template>
  <VerticalLayout v-if="layout.orientation === 'vertical'">
    <slot />
  </VerticalLayout>

  <HorizontalLayout v-if="layout.orientation === 'horizontal'">
    <slot />
  </HorizontalLayout>
</template>

<script setup lang="ts">
import VerticalLayout from '@/layouts/VerticalLayout.vue'
import HorizontalLayout from '@/layouts/HorizontalLayout.vue'
import { useLayout } from '@/stores/layout.ts'

const { layout } = useLayout()
</script>
