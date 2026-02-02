<template>
  <RouterLink
    v-if="menuLevel > 1"
    :to="item.url ?? '#'"
    :class="`${linkClass} ${item.isDisabled ? 'disabled' : ''}`"
  >
    <span v-if="item.icon" class="menu-icon"><Icon :icon="item.icon" /></span>
    <span class="menu-text">{{ item.label }}</span>
    <span v-if="item.badge" :class="`badge text-bg-${item.badge.variant} opacity-50`">{{
      item.badge.text
    }}</span>
  </RouterLink>

  <li v-else :class="`${wrapperClass} ${isActive ? 'active' : ''}`">
    <RouterLink :to="item.url ?? '#'" :class="`${linkClass} ${item.isDisabled ? 'disabled' : ''}`">
      <span v-if="item.icon" class="menu-icon"><Icon :icon="item.icon" /></span>
      <span class="menu-text">{{ item.label }}</span>
      <span v-if="item.badge" :class="`badge text-bg-${item.badge.variant} opacity-50`">{{
        item.badge.text
      }}</span>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import type { MenuItemType } from '@/types/layout'
import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

type PropsType = {
  item: MenuItemType
  linkClass?: string
  wrapperClass?: string
  level?: number
}

const props = defineProps<PropsType>()

const menuLevel = props.level ?? 1

const route = useRoute()
const pathname = computed(() => route.path)

const isActive = props.item.url && pathname.value.endsWith(props.item.url)
</script>
