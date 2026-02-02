<template>
  <div class="wrapper">
    <Topbar/>

    <MobileMenu v-if="layout.sidenav.size === 'offcanvas'"/>
    <Sidenav v-else/>

    <div class="content-page">
      <slot/>
      <Footer/>
    </div>

    <Customizer/>
  </div>
</template>

<script setup lang="ts">
import Topbar from '@/layouts/components/topbar/index.vue'
import Sidenav from '@/layouts/components/sidenav/index.vue'
import MobileMenu from '@/layouts/components/mobile-menu/index.vue'
import Customizer from '@/layouts/components/customizer/index.vue'
import Footer from '@/layouts/components/footer/index.vue'
import {useLayout} from '@/stores/layout'
import {onMounted} from 'vue'

const {layout, setSideNavSize} = useLayout()

onMounted(() => {
  const resize = () => {
    if (window.innerWidth <= 768) {
      setSideNavSize('offcanvas')
    } else if (window.innerWidth <= 1140 && layout.sidenav.size !== 'offcanvas') {
      setSideNavSize(layout.sidenav.size === 'on-hover' ? 'condensed' : 'condensed')
    } else {
      setSideNavSize('default')
    }
  }

  resize()
  window.addEventListener('resize', resize)
})
</script>
