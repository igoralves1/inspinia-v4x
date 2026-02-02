<template>
  <Vertical v-if="layout.orientation === 'vertical'">
    <slot/>
  </Vertical>

  <Horizontal v-if="layout.orientation === 'horizontal'">
    <slot/>
  </Horizontal>
</template>

<script setup lang="ts">
import Vertical from "~/layouts/vertical.vue";
import Horizontal from "~/layouts/horizontal.vue";

const {layout} = useLayout()
</script>