<template>
  <header class="topnav">
    <nav class="navbar navbar-expand-lg">
      <BContainer fluid>
        <div class="navbar-collapse">
          <AppMenu />
        </div>
      </BContainer>
    </nav>
  </header>
</template>

<script setup lang="ts">
import AppMenu from '@/layouts/components/navbar/components/AppMenu.vue'
</script>
