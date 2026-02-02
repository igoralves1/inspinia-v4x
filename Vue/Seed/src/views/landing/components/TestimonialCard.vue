<template>
  <div class="card border-light rounded-4 p-3 card-h-100">
    <div class="card-body pb-0 text-center">
      <div class="avatar avatar-xl mx-auto mb-3">
        <img :src="testimonial.avatar" :alt="testimonial.name" class="img-fluid rounded-circle" />
      </div>
      <Rating :rating="testimonial.rating" size="18" class="gap-1 fs-lg mb-3" />
      <h4 class="mb-2 fs-md">{{ testimonial.title }}</h4>
      <p class="text-muted mb-3 fst-italic fs-sm">"{{ testimonial.description }}"</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Rating from '@/components/Rating.vue'
import type { TestimonialType } from '@/views/landing/components/types'

defineProps<{
  testimonial: TestimonialType
}>()
</script>
