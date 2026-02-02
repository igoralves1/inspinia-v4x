<template>
  <li v-if="item.url" class="side-nav-item" :class="{'active':isActive}">
    <NuxtLink :to="item.url" class="side-nav-link"
              :class="{'disabled':item.isDisabled,'special-menu':item.isSpecial,'active':isActive}">
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
}

const props = defineProps<PropsType>()

const route = useRoute();
const pathname = computed(() => route.path);

const isActive = computed(() => {
  return props.item.url && pathname.value.endsWith(props.item.url);
});
</script>