<template>
  <Link href="/" class="logo-dark">
    <img :src="logoDark" alt="dark logo" height="32" />
  </Link>
  <Link href="/" class="logo-light">
    <img :src="logo" alt="logo" height="32" />
  </Link>
</template>

<script lang="ts" setup>
import logo from '@/images/logo.png'
import logoDark from '@/images/logo-black.png'
import { Link } from '@inertiajs/vue3';
</script>
