<template>
    <BOffcanvas body-class="p-0" no-header v-model="localShow" responsive="lg" size="lg" placement="start" tabindex="-1"
        id="productFillterOffcanvas">
        <BCard no-body class="h-100 w-100" data-simplebar>
            <BCardBody class="p-0 w-100">
                <div class="p-3 border-bottom border-dashed">
                    <div class="app-search">
                        <input type="search" class="form-control" placeholder="Search product name..." />
                        <Icon icon="lucide:search" class="app-search-icon text-muted" />
                    </div>
                </div>

                <div class="p-3 border-bottom border-dashed">
                    <div class="d-flex mb-2 justify-content-between align-items-center">
                        <h5 class="mb-0">Category:</h5>
                        <BButton variant="link" size="sm" class="px-0 fw-semibold">View All</BButton>
                    </div>

                    <div v-for="(category, idx) in categories" :key="idx"
                        class="d-flex align-items-center gap-2 text-muted py-1">
                        <BFormCheckbox v-model="selectedCategories" :value="category.id" class="flex-grow-1">
                            {{ category.name }}
                        </BFormCheckbox>
                        <div v-if="category.count" class="flex-shrink-0">
                            <BBadge variant="light">{{ category.count }}</BBadge>
                        </div>
                    </div>
                </div>

                <div class="p-3 border-bottom border-dashed">
                    <div class="d-flex mb-2 justify-content-between align-items-center">
                        <h5 class="mb-0">Brands:</h5>
                        <BButton variant="link" size="sm" class="px-0 fw-semibold">View All</BButton>
                    </div>

                    <div v-for="(brand, idx) in brands" :key="idx"
                        class="d-flex align-items-center gap-2 text-muted py-1">
                        <BFormCheckbox v-model="selectedBrands" :value="brand.id" class="flex-grow-1">
                            {{ brand.name }}
                        </BFormCheckbox>
                        <div v-if="brand.count" class="flex-shrink-0">
                            <BBadge variant="light">{{ brand.count }}</BBadge>
                        </div>
                    </div>
                </div>

                <div class="p-3 border-bottom border-dashed">
                    <h5 class="mb-3">Price:</h5>
                    <VueSlider v-model="range" tooltip="none" :min="1" :max="9999" style="height: 4px;" />
                    <div class="d-flex gap-2 align-items-center mt-3">
                        <BFormInput v-model="range[0]" type="number" size="sm" class="text-center" />
                        <span class="fw-semibold text-muted">to</span>
                        <BFormInput v-model="range[1]" type="number" size="sm" class="text-center" />
                    </div>
                </div>

                <div class="p-3">
                    <div class="d-flex mb-3 justify-content-between align-items-center">
                        <h5 class="mb-0">Ratings:</h5>
                    </div>

                    <div v-for="rate in ratings" :key="rate.id" class="form-check py-1 px-0">
                        <span class="d-flex align-items-center justify-content-between  ">
                            <BFormCheckbox v-model="selectedRatings" :value="rate.id" class="d-block">
                                <span class="flex-grow-1 d-inline-flex align-items-center">
                                    <Icon icon="tabler:star-filled" v-for="(i, idx) in 5" :key="idx"
                                        :class="i <= rate.stars ? 'text-warning' : 'text-muted'" />
                                    <span class="text-muted ms-1">{{ rate.label }}</span>
                                </span>
                            </BFormCheckbox>
                            <span class="flex-shrink-0">
                                <BBadge variant="light">{{ rate.count }}</BBadge>
                            </span>
                        </span>
                    </div>
                </div>
            </BCardBody>
        </BCard>
    </BOffcanvas>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { BCard, BCardBody, BFormCheckbox, BFormInput, BOffcanvas } from 'bootstrap-vue-next';

import { ref, watch } from "vue";
import VueSlider from 'vue-3-slider-component';

const selectedCategories = ref<string[]>([]);
const selectedBrands = ref<string[]>([]);
const selectedRatings = ref<string[]>([]);


const props = defineProps<{ show: boolean }>()
const emit = defineEmits<{ (e: 'update:show', value: boolean): void }>()
const localShow = ref(props.show)
// Watch for parent changes
watch(() => props.show, (val: any) => {
    localShow.value = val
})

// Emit changes to parent
watch(localShow, (val: any) => {
    emit('update:show', val)
})

const range = ref([1000, 2500])


// Categories
const categories = ref([
    { id: "electronics", name: "Electronics", count: 8 },
    { id: "computers", name: "Computers", count: 5 },
    { id: "home-office", name: "Home & Office", count: 6 },
    { id: "accessories", name: "Accessories", count: null },
    { id: "gaming", name: "Gaming", count: 9 },
    { id: "mobile", name: "Mobile Phones", count: 12 },
    { id: "appliances", name: "Appliances", count: null },
]);

// Brands
const brands = ref([
    { id: "apple", name: "Apple", count: 14 },
    { id: "samsung", name: "Samsung", count: 20 },
    { id: "sony", name: "Sony", count: null },
    { id: "dell", name: "Dell", count: 7 },
    { id: "hp", name: "HP", count: null },
]);

// Ratings
const ratings = ref([
    { id: "5-star", stars: 5, label: "5 Stars & Up", count: 120 },
    { id: "4-star", stars: 4, label: "4 Stars & Up", count: 210 },
    { id: "3-star", stars: 3, label: "3 Stars & Up", count: 325 },
    { id: "2-star", stars: 2, label: "2 Stars & Up", count: 145 },
    { id: "1-star", stars: 1, label: "1 Star & Up", count: 58 },
]);

</script>

<style scoped></style>