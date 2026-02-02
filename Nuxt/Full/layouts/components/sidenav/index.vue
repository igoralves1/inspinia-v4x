<template>
  <div class="sidenav-menu">

    <!-- Brand Logo -->
    <NuxtLink to="/" class="logo">
        <span class="logo logo-light">
            <span class="logo-lg"><NuxtImg src="/images/logo.png" alt="logo"/></span>
            <span class="logo-sm"><NuxtImg src="/images/logo-sm.png" alt="small logo"/></span>
        </span>

      <span class="logo logo-dark">
            <span class="logo-lg"><NuxtImg src="/images/logo-black.png" alt="dark logo"/></span>
            <span class="logo-sm"><NuxtImg src="/images/logo-sm.png" alt="small logo"/></span>
        </span>
    </NuxtLink>

    <!-- Sidebar Hover Menu Toggle Button -->
    <button class="button-on-hover" @click="toggleSidebar">
      <Icon name="tabler:menu-4" class="fs-22 align-middle"/>
    </button>

    <!-- Full Sidebar Menu Close Button -->
    <button class="button-close-offcanvas" @click="toggleMobileMenu">
      <Icon name="tabler:x" class="align-middle"/>
    </button>

    <simplebar id="sidenav" class="scrollbar" data-simplebar>

      <UserProfile/>

      <AppMenu/>

    </simplebar>
  </div>
</template>

<script setup lang="ts">
import simplebar from 'simplebar-vue';
import UserProfile from "~/layouts/components/sidenav/components/UserProfile.vue";
import AppMenu from "~/layouts/components/sidenav/components/AppMenu.vue";

const {layout, setSideNavSize, toggleMobileMenu} = useLayout();

const toggleSidebar = () => {
  setSideNavSize(layout.sidenav.size === 'on-hover-active' ? 'on-hover' : 'on-hover-active')
}
</script>