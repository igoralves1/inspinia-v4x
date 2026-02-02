<template>
    <BCard no-body class="h-100 mb-2">
        <BBadge :class="product.discount <= 20 ? 'text-bg-danger' : 'text-bg-success'"
            class="badge-label fs-base rounded position-absolute top-0 start-0 m-3">
            {{ product.discount }}% OFF
        </BBadge>

        <BCardBody>
            <div class="bg-light-subtle p-3 mb-3 border border-light rounded">
                <img :src="product.image" :alt="product.alt" class="img-fluid" />
            </div>

            <h6  class="card-title fs-sm lh-base mb-2">
                <RouterLink to="" class="link-reset">
                    {{ product.title }}
                </RouterLink>
            </h6>

            <div>
                <Rating :rating="product.rating" class="d-inline-flex align-items-center gap-1" />
                <span class="ms-1">
                    <RouterLink to="/reviews" class="link-reset fw-semibold">
                        ({{ product.reviews }})
                    </RouterLink>
                </span>
            </div>
        </BCardBody>

        <BCardFooter class="bg-transparent d-flex justify-content-between">
            <div class="d-flex justify-content-start align-items-center gap-2">
                <h4 class="text-success d-flex align-items-center gap-2 mb-0">
                    <span class="text-muted text-decoration-line-through">{{product.originalPrice}}</span>
                    {{ product.discountedPrice }}
                </h4>
            </div>
            <BButton size="sm" variant="primary" class="btn-icon">
                <Icon icon="tabler:basket" class="fs-lg" />
            </BButton>
        </BCardFooter>
    </BCard>
</template>

<script setup lang="ts">
import { BBadge, BButton, BCard, BCardBody, BCardFooter } from 'bootstrap-vue-next';
import type { ProductType } from '../data';
import Rating from '@/components/Rating.vue';
import { Icon } from '@iconify/vue';

defineProps<{
    product: ProductType
}>()
</script>

<style scoped></style>