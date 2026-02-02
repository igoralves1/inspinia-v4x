<template>
    <BCard no-body class="card-top-sticky border-0">
        <BCardBody class="p-0">
            <BCarousel id="product-carousel" v-model="activeSlide" fade
                class="bg-light bg-opacity-25 border border-light border-dashed rounded-3">
                <BCarouselSlide v-for="(img, idx) in images" :key="idx" :img-src="img"
                    class="text-center bg-transparent" />
            </BCarousel>

            <div class="carousel-indicators  m-0 mt-3 d-lg-flex d-none position-static h-100 rounded gap-2">
                <button v-for="(img, idx) in images" :key="'thumb-' + idx" type="button" @click="activeSlide = idx"
                    :class="[
                        'h-auto rounded bg-light-subtle border',
                        { active: activeSlide === idx },
                    ]" style="width: auto !important;">
                    <img :src="img" class="d-block avatar-xl" alt="indicator-img" />
                </button>
            </div>

            <div class="text-center my-3">
                <BButton variant="light" class="me-1">
                    <Icon icon="tabler:pencil" class="fs-lg me-1" /> Edit
                </BButton>
                <BButton variant="danger">
                    <Icon icon="tabler:circle-dashed-x" class="fs-lg me-1" /> Delisting
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

import product1 from '@/assets/images/products/single-1.png'
import product2 from '@/assets/images/products/single-2.png'
import product3 from '@/assets/images/products/single-3.png'
import product4 from '@/assets/images/products/single-4.png'
import { Icon } from "@iconify/vue";

const images = [
    product1,
    product2,
    product3,
    product4,
];

const activeSlide = ref(0); 
</script>
