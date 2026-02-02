<template>
  <div class="page-title-head d-flex align-items-center">
    <div class="flex-grow-1">
      <h4 class="fs-sm text-uppercase fw-bold m-0">{{ title }}</h4>
    </div>

    <div class="text-end">
      <ol class="breadcrumb m-0 py-0">
        <li class="breadcrumb-item">
          <RouterLink to="/">Inspinia</RouterLink>
          <Icon icon="tabler:chevron-right" class="breadcrumb-arrow ms-1" />
        </li>
        <li v-if="subtitle" class="breadcrumb-item">
          <RouterLink :to="subtitleUrl ?? '#'">{{ subtitle }}</RouterLink>
          <Icon icon="tabler:chevron-right" class="breadcrumb-arrow ms-1" />
        </li>
        <li class="breadcrumb-item active">{{ title }}</li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

type PropsType = {
  title: string
  subtitle?: string
  subtitleUrl?: string
}

defineProps<PropsType>()
</script>
