<template>
  <ul class="side-nav">
    <template v-for="(item, idx) in menuItems">
      <li v-if="item.isTitle" :key="item.key" class="side-nav-title">{{ item.label }}</li>
      <template v-else>
        <MenuItemWithChildren
          v-if="item.children"
          :key="item.key"
          :item="item"
          :open-menu-key="openMenuKey"
          :set-open-menu-key="setOpenMenuKey"
        />
        <MenuItem v-else :key="idx" :item="item" />
      </template>
    </template>
  </ul>
</template>

<script setup lang="ts">
import MenuItemWithChildren from '@/layouts/components/sidenav/components/MenuItemWithChildren.vue'
import MenuItem from '@/layouts/components/sidenav/components/MenuItem.vue'
import { menuItems } from '@/layouts/components/data'
import { scrollToElement } from '@/helpers/layout'
import { onMounted, ref } from 'vue'

const openMenuKey = ref<string | null>(null)

const setOpenMenuKey = (key: string | null) => {
  openMenuKey.value = key
}

const scrollToActiveLink = () => {
  const activeItem: HTMLAnchorElement | null = document.querySelector('.side-nav-link.active')
  if (activeItem) {
    const simpleBarContent = document.querySelector('#sidenav .simplebar-content-wrapper')
    if (simpleBarContent) {
      const containerRect = simpleBarContent.getBoundingClientRect()
      const itemRect = activeItem.getBoundingClientRect()

      const offset = itemRect.top - containerRect.top - window.innerHeight * 0.4

      scrollToElement(simpleBarContent, simpleBarContent.scrollTop + offset, 500)
    }
  }
}

onMounted(() => {
  setTimeout(() => scrollToActiveLink(), 100)
})
</script>
