<template>
  <NuxtLink v-if="menuLevel > 1" :to="item.url" :class="`${linkClass} ${item.isDisabled ? 'disabled' : ''}`">
    <span v-if="item.icon" class="menu-icon"><Icon :name="item.icon"/></span>
    <span class="menu-text">{{ item.label }}</span>
    <span v-if="item.badge" :class="`badge text-bg-${item.badge.variant} opacity-50`">{{ item.badge.text }}</span>
  </NuxtLink>

  <li v-else :class="`${wrapperClass} ${isActive ? 'active' : ''}`">
    <NuxtLink :to="item.url" :class="`${linkClass} ${item.isDisabled ? 'disabled' : ''}`">
      <span v-if="item.icon" class="menu-icon"><Icon :name="item.icon"/></span>
      <span class="menu-text">{{ item.label }}</span>
      <span v-if="item.badge" :class="`badge text-bg-${item.badge.variant} opacity-50`">{{ item.badge.text }}</span>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import type {MenuItemType} from "~/types/layout";

type PropsType = {
  item: MenuItemType;
  linkClass?: string;
  wrapperClass?: string;
  level?: number;
}

const props = defineProps<PropsType>()

const menuLevel = props.level ?? 1

const route = useRoute();
const pathname = computed(() => route.path);

const isActive = props.item.url && pathname.value.endsWith(props.item.url);
</script>