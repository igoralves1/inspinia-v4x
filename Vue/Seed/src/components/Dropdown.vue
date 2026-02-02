<template>
  <component :is="is ?? 'div'" ref="dropdown" class="dropdown" v-bind="$attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Dropdown } from 'bootstrap'

type DropDownPropType = {
  is?: string
}

defineProps<DropDownPropType>()

const dropdown = ref()

onMounted(() => {
  if (dropdown.value && typeof window !== 'undefined' && document.readyState !== 'loading') {
    Dropdown.getOrCreateInstance(dropdown.value)
  }
})
</script>
