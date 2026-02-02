<template>
  <header class="app-topbar">
    <div class="container-fluid topbar-menu">
      <div class="d-flex align-items-center gap-2">

        <div class="logo-topbar">
          <NuxtLink to="/" class="logo-light">
            <span class="logo-lg">
              <NuxtImg src="/images/logo.png" alt="logo"/>
            </span>
            <span class="logo-sm">
              <NuxtImg src="/images/logo-sm.png" alt="small logo"/>
            </span>
          </NuxtLink>

          <NuxtLink to="/" class="logo-dark">
            <span class="logo-lg">
              <NuxtImg src="/images/logo-black.png" alt="dark logo"/>
            </span>
            <span class="logo-sm">
              <NuxtImg src="/images/logo-sm.png" alt="small logo"/>
            </span>
          </NuxtLink>
        </div>

        <!-- Sidebar Menu Toggle Button -->
        <button class="sidenav-toggle-button btn btn-primary btn-icon" @click="toggleSideNav">
          <Icon name="tabler:menu-4" class="fs-22"/>
        </button>

        <!-- Search -->
        <div class="app-search d-none d-xl-flex">
          <BFormInput
              type="search" class="topbar-search" name="search"
              placeholder="Search for something..."/>
          <Icon name="lucide:search" size="18" class="app-search-icon text-muted"/>
        </div>

        <MegaMenu/>
      </div>

      <div class="d-flex align-items-center gap-2">

        <LanguageDropdown/>

        <MessageDropdown/>

        <NotificationDropdown/>

        <CustomizerToggler/>

        <ThemeToggler/>

        <UserProfile/>

      </div>

    </div>
  </header>
</template>

<script setup lang="ts">
import MegaMenu from "~/layouts/components/topbar/components/MegaMenu.vue";
import LanguageDropdown from "~/layouts/components/topbar/components/LanguageDropdown.vue";
import MessageDropdown from "~/layouts/components/topbar/components/MessageDropdown.vue";
import NotificationDropdown from "~/layouts/components/topbar/components/NotificationDropdown.vue";
import CustomizerToggler from "~/layouts/components/topbar/components/CustomizerToggler.vue";
import ThemeToggler from "~/layouts/components/topbar/components/ThemeToggler.vue";
import UserProfile from "~/layouts/components/topbar/components/UserProfile.vue";

const {layout, setSideNavSize, toggleMobileMenu} = useLayout()

const toggleSideNav = () => {
  const html = document.documentElement;
  const currentSize = html.getAttribute('data-sidenav-size');

  if (currentSize === 'offcanvas') {
    toggleMobileMenu()
  } else if (layout.sidenav.size === 'compact') {
    setSideNavSize(currentSize === 'compact' ? 'condensed' : 'compact', false);
  } else {
    setSideNavSize(currentSize === 'condensed' ? 'default' : 'condensed');
  }
}
</script>