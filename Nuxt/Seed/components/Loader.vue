<template>
  <div
      v-if="loading"
      class="position-fixed top-0 start-0 d-flex justify-content-center align-items-center bg-white"
      :style="{ height: '100%', width: '100vw', zIndex: 9999 }">
    <BSpinner variant="primary"/>
  </div>
</template>

<script setup lang="ts">
const loading = ref(true)

onNuxtReady(() => {
  loading.value = false
})
</script>