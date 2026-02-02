<template>
  <div class="sidenav-menu">
    <!-- Brand Logo -->
    <Link href="/" class="logo">
      <span class="logo logo-light">
        <span class="logo-lg"><img :src="logo" alt="logo" /></span>
        <span class="logo-sm"><img :src="logoSm" alt="small logo" /></span>
      </span>

      <span class="logo logo-dark">
        <span class="logo-lg"><img :src="logoDark" alt="dark logo" /></span>
        <span class="logo-sm"><img :src="logoSm" alt="small logo" /></span>
      </span>
    </Link>

    <!-- Sidebar Hover Menu Toggle Button -->
    <button class="button-on-hover" @click="toggleSidebar">
      <Icon icon="tabler:menu-4" class="fs-22 align-middle" />
    </button>

    <!-- Full Sidebar Menu Close Button -->
    <button class="button-close-offcanvas" @click="toggleMobileMenu">
      <Icon icon="tabler:x" class="align-middle" />
    </button>

    <simplebar id="sidenav" class="scrollbar" data-simplebar>
      <UserProfile />

      <AppMenu />
    </simplebar>
  </div>
</template>

<script setup lang="ts">
import simplebar from 'simplebar-vue'
import { Icon } from '@iconify/vue'
import UserProfile from '@/layouts/components/sidenav/components/UserProfile.vue'
import AppMenu from '@/layouts/components/sidenav/components/AppMenu.vue'
import { useLayout } from '@/stores/layout.ts'

import logo from '@/images/logo.png'
import logoSm from '@/images/logo-sm.png'
import logoDark from '@/images/logo-black.png'
import { Link } from '@inertiajs/vue3'

const { layout, setSideNavSize, toggleMobileMenu } = useLayout()

const toggleSidebar = () => {
  setSideNavSize(layout.sidenav.size === 'on-hover-active' ? 'on-hover' : 'on-hover-active')
}
</script>
