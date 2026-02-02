<template>
    <BCard no-body class="h-100 bg-light bg-opacity-30 rounded-4"
        :class="plan.isPopular ? 'border-success border-2' : 'border-light'">
        <BCardBody class="px-lg-4 p-5 pb-2 text-center">
            <div class="text-center">
                <h3 class="fw-bold mb-1">{{ plan.name }}</h3>
                <p class="text-muted mb-0">{{ plan.description }}</p>
            </div>

            <div class="my-4">
                <h1 class="display-6 fw-bold mb-0">
                    {{ currency }}{{ plan.price }}
                </h1>
                <small class="d-block text-muted fs-base fw-medium">{{ plan.paymentType }}</small>
                <small class="d-block text-muted fw-medium">{{ plan.text }}</small>
            </div>

            <ul class="list-unstyled text-start fs-sm fw-medium mb-0">
                <li v-for="(feature, idx) in plan.features" :key="idx" class="mb-2 d-flex align-items-center gap-1">
                    <Icon :icon="feature.icon" :class="`text-${feature.variant} me-2 fs-5`" />
                    {{ feature.name }}
                </li>
            </ul>
        </BCardBody>

        <BCardFooter class="bg-transparent border-0 px-5 pb-4">
            <BButton :variant="plan.isPopular ? 'primary' : 'dark'" class="w-100 py-2 fw-semibold rounded-pill">
                {{ plan.buttonText }}
            </BButton>
        </BCardFooter>

        <span v-if="plan.isPopular"
            class="position-absolute fs-xs top-0 start-50 translate-middle-x badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mt-3">
            Popular Choice
        </span>
    </BCard>
</template>


<script setup lang="ts">
import { BCard, BCardBody, BCardFooter, BButton } from 'bootstrap-vue-next'
import type { PricingPlanType } from '../data';
import { Icon } from '@iconify/vue';


defineProps<{
    plan: PricingPlanType
    currency: string
}>()
</script>
