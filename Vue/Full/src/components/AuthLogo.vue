<template>
  <RouterLink to="/" class="logo-dark">
    <img :src="logoDark" alt="dark logo" height="32" />
  </RouterLink>
  <RouterLink to="/" class="logo-light">
    <img :src="logo" alt="logo" height="32" />
  </RouterLink>
</template>

<script lang="ts" setup>
import logo from '@/assets/images/logo.png'
import logoDark from '@/assets/images/logo-black.png'
</script>
