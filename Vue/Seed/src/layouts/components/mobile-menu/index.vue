<template>
  <BOffcanvas
    v-model="layout.isMobileMenuOpen"
    no-header
    width="235px"
    class="p-0 bg-transparent"
    body-class="p-0"
  >
    <Sidenav />
  </BOffcanvas>
</template>

<script setup lang="ts">
import Sidenav from '@/layouts/components/sidenav/index.vue'
import { useLayout } from '@/stores/layout.ts'

const { layout } = useLayout()
</script>
