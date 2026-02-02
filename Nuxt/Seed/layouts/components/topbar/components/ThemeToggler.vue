<template>
  <div class="topbar-item d-none d-sm-flex">
    <button class="topbar-link" type="button" @click="toggleTheme">
      <Icon v-if="layout.theme === 'light'" name="lucide:moon" class="fs-xxl mode-light-moon"/>
      <Icon v-else name="lucide:sun" class="fs-xxl mode-light-sun"/>
    </button>
  </div>
</template>

<script setup lang="ts">
import {useLayout} from "~/stores/layout";

const {layout, setTheme} = useLayout()

const toggleTheme = () => {
  if (layout.theme === "dark") {
    return setTheme("light");
  }
  return setTheme("dark");
}
</script>