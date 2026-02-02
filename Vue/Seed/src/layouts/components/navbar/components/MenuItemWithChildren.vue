<template>
  <Dropdown
    :is="menuLevel > 1 ? 'div' : 'li'"
    :class="`${menuLevel > 1 ? 'dropend' : 'dropdown'} ${wrapperClass} ${isActive ? 'active' : ''}`"
  >
    <a
      :class="`dropdown-toggle drop-arrow-none ${togglerClass} ${isActive ? 'active' : ''}`"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span v-if="item.icon" class="menu-icon"><Icon :icon="item.icon"/></span>
      <span class="menu-text">{{ item.label }}</span>
      <span v-if="item.badge" :class="`badge bg-${item.badge.variant}`">{{ item.badge.text }}</span>
      <span v-else class="menu-arrow"><Icon icon="tabler:chevron-down"/></span>
    </a>

    <div class="dropdown-menu" aria-labelledby="topnav-apps">
      <template v-for="(child, idx) in item.children">
        <MenuItemWithChildren
          v-if="child.children"
          :key="child.key"
          :item="child"
          toggler-class="dropdown-item"
          :level="menuLevel + 1"
        />
        <MenuItem
          v-else
          :key="idx"
          :item="child"
          link-class="dropdown-item"
          :level="menuLevel + 1"
        />
      </template>
    </div>
  </Dropdown>
</template>

<script setup lang="ts">
import {Icon} from '@iconify/vue'
import type {MenuItemType} from '@/types/layout'
import MenuItemWithChildren from '@/layouts/components/navbar/components/MenuItemWithChildren.vue'
import MenuItem from '@/layouts/components/navbar/components/MenuItem.vue'
import Dropdown from '@/components/Dropdown.vue'
import {useRoute} from 'vue-router'
import {computed} from 'vue'

type PropsType = {
  item: MenuItemType
  wrapperClass?: string
  togglerClass?: string
  level?: number
}

const props = defineProps<PropsType>()

const menuLevel = props.level ?? 1

const route = useRoute()
const pathname = computed(() => route.path)

const isActive = computed(() => {
  const isChildActive = (children: MenuItemType[]): boolean =>
    children.some(
      (child) =>
        (child.url && pathname.value.includes(child.url)) ||
        (child.children && isChildActive(child.children)),
    )
  return isChildActive(props.item.children || [])
})
</script>
