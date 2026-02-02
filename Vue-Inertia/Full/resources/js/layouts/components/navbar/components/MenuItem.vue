<template>
  <Link
    v-if="menuLevel > 1"
    :href="item.url ?? '#'"
    :class="`${linkClass} ${item.isDisabled ? 'disabled' : ''}`"
  >
    <span v-if="item.icon" class="menu-icon"><Icon :icon="item.icon" /></span>
    <span class="menu-text">{{ item.label }}</span>
    <span v-if="item.badge" :class="`badge text-bg-${item.badge.variant} opacity-50`">{{
      item.badge.text
    }}</span>
  </Link>

  <li v-else :class="`${wrapperClass} ${isActive ? 'active' : ''}`">
    <Link :href="item.url ?? '#'" :class="`${linkClass} ${item.isDisabled ? 'disabled' : ''}`">
      <span v-if="item.icon" class="menu-icon"><Icon :icon="item.icon" /></span>
      <span class="menu-text">{{ item.label }}</span>
      <span v-if="item.badge" :class="`badge text-bg-${item.badge.variant} opacity-50`">{{
        item.badge.text
      }}</span>
    </Link>
  </li>
</template>

<script setup lang="ts">
import type { MenuItemType } from '@/types/layout'
import { Icon } from '@iconify/vue'
import { Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue'

type PropsType = {
  item: MenuItemType
  linkClass?: string
  wrapperClass?: string
  level?: number
}

const props = defineProps<PropsType>()

const menuLevel = props.level ?? 1

const page = usePage()
const pathname = computed(() => page.url)

const isActive = props.item.url && pathname.value.endsWith(props.item.url)
</script>
