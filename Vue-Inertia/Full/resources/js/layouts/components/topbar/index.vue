<template>
  <header class="app-topbar">
    <div class="container-fluid topbar-menu">
      <div class="d-flex align-items-center gap-2">
        <div class="logo-topbar">
          <Link href="/" class="logo-light">
            <span class="logo-lg">
              <img :src="logo" alt="logo" />
            </span>
            <span class="logo-sm">
              <img :src="logoSm" alt="small logo" />
            </span>
          </Link>

          <Link href="/" class="logo-dark">
            <span class="logo-lg">
              <img :src="logoDark" alt="dark logo" />
            </span>
            <span class="logo-sm">
              <img :src="logoSm" alt="small logo" />
            </span>
          </Link>
        </div>

        <!-- Sidebar Menu Toggle Button -->
        <button class="sidenav-toggle-button btn btn-primary btn-icon" @click="toggleSideNav">
          <Icon icon="tabler:menu-4" class="fs-22" />
        </button>

        <!-- Search -->
        <div class="app-search d-none d-xl-flex">
          <BFormInput
            type="search"
            class="topbar-search"
            name="search"
            placeholder="Search for something..."
          />
          <Icon icon="lucide:search" size="18" class="app-search-icon text-muted" />
        </div>

        <MegaMenu />
      </div>

      <div class="d-flex align-items-center gap-2">
        <LanguageDropdown />

        <MessageDropdown />

        <NotificationDropdown />

        <CustomizerToggler />

        <ThemeToggler />

        <UserProfile />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import MegaMenu from '@/layouts/components/topbar/components/MegaMenu.vue'
import LanguageDropdown from '@/layouts/components/topbar/components/LanguageDropdown.vue'
import MessageDropdown from '@/layouts/components/topbar/components/MessageDropdown.vue'
import NotificationDropdown from '@/layouts/components/topbar/components/NotificationDropdown.vue'
import CustomizerToggler from '@/layouts/components/topbar/components/CustomizerToggler.vue'
import ThemeToggler from '@/layouts/components/topbar/components/ThemeToggler.vue'
import UserProfile from '@/layouts/components/topbar/components/UserProfile.vue'
import { useLayout } from '@/stores/layout.ts'
import { Icon } from '@iconify/vue'

import logo from '@/images/logo.png'
import logoSm from '@/images/logo-sm.png'
import logoDark from '@/images/logo-black.png'
import { onMounted } from 'vue'
import { Link } from '@inertiajs/vue3'

const { layout, setSideNavSize, toggleMobileMenu,init } = useLayout()

const toggleSideNav = () => {
  const html = document.documentElement
  const currentSize = html.getAttribute('data-sidenav-size')

  if (currentSize === 'offcanvas') {
    toggleMobileMenu()
  } else if (layout.sidenav.size === 'compact') {
    setSideNavSize(currentSize === 'compact' ? 'condensed' : 'compact', false)
  } else {
    setSideNavSize(currentSize === 'condensed' ? 'default' : 'condensed')
  }
}

onMounted(() => {
    init();
});
</script>
