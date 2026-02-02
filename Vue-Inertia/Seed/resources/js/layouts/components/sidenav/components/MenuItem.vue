<template>
  <li v-if="item.url" class="side-nav-item" :class="{ active: isActive }">
    <Link
      :href="item.url"
      class="side-nav-link"
      :class="{ disabled: item.isDisabled, 'special-menu': item.isSpecial, active: isActive }"
    >
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
}

const props = defineProps<PropsType>()

const page = usePage()
const pathname = computed(() => page.url)

const isActive = computed(() => {
  return props.item.url && pathname.value.endsWith(props.item.url)
})
</script>
