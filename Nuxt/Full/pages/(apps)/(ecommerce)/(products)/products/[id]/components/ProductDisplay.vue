<template>
  <BCard no-body class="card-top-sticky border-0">
    <BCardBody class="p-0">
      <BCarousel
        id="product-carousel"
        v-model="activeSlide"
        fade
        class="bg-light bg-opacity-25 border border-light border-dashed rounded-3"
      >
        <BCarouselSlide
          v-for="(img, idx) in images"
          :key="idx"
          :img-src="img"
          class="text-center bg-transparent"
        />
      </BCarousel>

      <div
        class="carousel-indicators  m-0 mt-3 d-lg-flex d-none position-static h-100 rounded gap-2"
      >
        <button
          v-for="(img, idx) in images"
          :key="'thumb-' + idx"
          type="button"
          @click="activeSlide = idx"
          :class="[
            'h-auto rounded bg-light-subtle border',
            { active: activeSlide === idx },
          ]"
          style="width: auto !important;"
        >
          <NuxtImg :src="img" class="d-block avatar-xl" alt="indicator-img" />
        </button>
      </div>

      <div class="text-center my-3">
        <BButton variant="light" class="me-1">
          <Icon name="tabler:pencil" class="fs-lg me-1" /> Edit
        </BButton>
        <BButton variant="danger">
          <Icon name="tabler:circle-dashed-x" class="fs-lg me-1" /> Delisting
        </BButton>
      </div>
    </BCardBody>
  </BCard>
</template>

<script setup lang="ts">
import {
  BCard,
  BCardBody,
  BCarousel,
  BCarouselSlide,
  BButton,
} from "bootstrap-vue-next";
import { ref } from "vue";

const images = [
  "/images/products/single-1.png",
  "/images/products/single-2.png",
  "/images/products/single-3.png",
  "/images/products/single-4.png",
];

const activeSlide = ref(0); 
</script>
