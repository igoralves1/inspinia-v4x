<template>
  <div
    class="card h-100 bg-light bg-opacity-10 rounded-3"
    :class="plan.isPopular ? 'border-dashed border' : 'border-light'"
  >
    <div class="card-body px-lg-4 p-5 pb-2 text-center">
      <div class="text-center">
        <h3 class="fw-bold mb-1">{{ plan.name }}</h3>
        <p class="text-muted mb-0">{{ plan.description }}</p>
      </div>

      <div class="my-4">
        <h1 class="display-6 fw-bold mb-0">${{ plan.price }}</h1>
        <small class="d-block text-muted fs-base fw-medium">One-time payment</small>
        <small class="d-block text-muted fw-medium">{{ plan.highlight }}</small>
      </div>

      <ul class="list-unstyled text-start fs-sm fw-medium mb-0">
        <li v-for="(feature, index) in plan.features" :key="index" class="mb-2">
          <Icon
            :icon="feature.included ? 'tabler-check' : 'tabler-x'"
            class="me-2 fs-5"
            :class="feature.included ? 'text-success' : 'text-danger'"
          />
          {{ feature.text }}
        </li>
      </ul>
    </div>

    <div class="card-footer bg-transparent border-0 px-5 pb-4">
      <a
        href="javascript:void(0)"
        class="btn w-100 py-2 fw-semibold rounded-pill"
        :class="plan.btnClass"
      >
        Buy {{ plan.name }}
      </a>
    </div>

    <span
      v-if="plan.isPopular"
      class="position-absolute top-0 start-50 translate-middle-x badge bg-primary-subtle text-primary rounded-pill px-3 py-1 mt-3"
    >
      Best Value
    </span>
  </div>
</template>

<script setup lang="ts">
import type { PricingPlanType } from '@/views/landing/components/types'
import { Icon } from '@iconify/vue'

defineProps<{
  plan: PricingPlanType
}>()
</script>
