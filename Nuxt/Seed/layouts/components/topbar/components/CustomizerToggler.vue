<template>
  <div class="topbar-item d-none d-sm-flex">
    <button @click="customizer.toggleCustomizer" class="topbar-link" type="button">
      <Icon name="lucide:settings" class="fs-xxl"/>
    </button>
  </div>
</template>

<script setup lang="ts">
const {customizer} = useLayout()
</script>