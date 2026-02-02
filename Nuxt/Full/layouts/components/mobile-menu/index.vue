<template>
  <ClientOnly>
    <BOffcanvas v-model="layout.isMobileMenuOpen" no-header width="235px" class="p-0 bg-transparent" body-class="p-0">
      <Sidenav/>
    </BOffcanvas>
  </ClientOnly>
</template>

<script setup lang="ts">
import Sidenav from "~/layouts/components/sidenav/index.vue";

const {layout} = useLayout()
</script>