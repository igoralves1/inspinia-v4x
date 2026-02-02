<template>
  <MainLayout>
    <BContainer fluid>
      <PageBreadcrumb title="Horizontal" />
    </BContainer>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'
import { onBeforeUnmount, onMounted } from 'vue'
import { useLayout } from '@/stores/layout.ts'

const { setOrientation, reset } = useLayout()

usePageMeta('Horizontal Layout')

onMounted(() => {
  setOrientation('horizontal')
})

onBeforeUnmount(() => {
  reset()
})
</script>
