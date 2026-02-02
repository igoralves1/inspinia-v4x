<template>
  <ul class="navbar-nav">
    <template v-for="(item, idx) in horizontalMenuItems">
      <MenuItemWithChildren
        v-if="item.children"
        :key="item.key"
        :item="item"
        wrapper-class="nav-item"
        toggler-class="nav-link"
      />
      <MenuItem v-else :key="idx" :item="item" link-class="nav-link" wrapper-class="nav-item" />
    </template>
  </ul>
</template>

<script setup lang="ts">
import MenuItemWithChildren from '@/layouts/components/navbar/components/MenuItemWithChildren.vue'
import MenuItem from '@/layouts/components/navbar/components/MenuItem.vue'
import { horizontalMenuItems } from '@/layouts/components/data'
</script>
