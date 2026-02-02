<template>
  <BCard v-if="isVisible" no-body v-bind="$attrs">
    <BCardHeader
      class="justify-content-between align-items-center"
      :class="[headerClass, { 'border-0': isCollapsed }]"
    >
      <h5 class="card-title mb-0" :class="titleClass">{{ title }}</h5>

      <div v-if="isCollapsable || isReloadable || isCloseable" class="card-action">
        <button v-if="isCollapsable" class="card-action-item border-0" @click="collpase">
          <Icon :icon="isCollapsed ? 'tabler:chevron-down' : 'tabler:chevron-up'" size="16" />
        </button>
        <button v-if="isReloadable" class="card-action-item border-0" @click="reload">
          <Icon icon="tabler:refresh" size="16" />
        </button>
        <button v-if="isCloseable" class="card-action-item border-0" @click="close">
          <Icon icon="tabler:x" size="16" />
        </button>
      </div>
      <slot v-else name="card-header-actions" />
    </BCardHeader>

    <BCollapse :show="!isCollapsed">
      <BCardBody :class="bodyClass">
        <slot />
      </BCardBody>

      <BCardFooter v-if="$slots['card-footer']" :class="footerClass">
        <slot name="card-footer" />
      </BCardFooter>
    </BCollapse>

    <div v-if="isReloading" class="card-overlay d-flex">
      <div class="spinner-border text-primary" />
    </div>
  </BCard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

type PropsType = {
  title: string
  titleClass?: string
  headerClass?: string
  bodyClass?: string
  footerClass?: string
  isCollapsable?: boolean
  isReloadable?: boolean
  isCloseable?: boolean
}

defineProps<PropsType>()

const isCollapsed = ref<boolean>(false)
const isReloading = ref<boolean>(false)
const isVisible = ref<boolean>(true)

const collpase = () => {
  isCollapsed.value = !isCollapsed.value
}

const reload = () => {
  isReloading.value = true
  setTimeout(() => (isReloading.value = false), 1500) // fake reload
}

const close = () => {
  isVisible.value = false
}
</script>
