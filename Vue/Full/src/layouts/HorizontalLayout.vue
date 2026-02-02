<template>
  <div class="wrapper">
    <Topbar />

    <MobileMenu v-if="layout.sidenav.size === 'offcanvas'" />
    <Navbar v-else />

    <div class="content-page">
      <slot />
      <Footer />
    </div>

    <Customizer />
  </div>
</template>

<script setup lang="ts">
import Topbar from '@/layouts/components/topbar/index.vue'
import Navbar from '@/layouts/components/navbar/index.vue'
import MobileMenu from '@/layouts/components/mobile-menu/index.vue'
import Customizer from '@/layouts/components/customizer/index.vue'
import Footer from '@/layouts/components/footer/index.vue'
import { toggleAttribute } from '@/helpers/layout'
import { useLayout } from '@/stores/layout.ts'
import { onBeforeUnmount, onMounted } from 'vue'

const { layout, setSideNavSize } = useLayout()

onMounted(() => {
  toggleAttribute('data-layout', 'topnav')

  const resize = () => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 991) {
        setSideNavSize('offcanvas')
      } else {
        setSideNavSize('default')
      }
    })
  }

  resize()
  window.addEventListener('resize', resize)
})

onBeforeUnmount(() => {
  toggleAttribute('data-layout', '')
})
</script>
