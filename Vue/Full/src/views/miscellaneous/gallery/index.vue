<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Gallery" subTitle="Miscellaneous" />
            <BRow>
                <BCol xs="12">
                    <BCard no-body>
                        <BCardHeader class="flex-wrap justify-content-between w-100 gap-3">

                            <div class="flex-grow-1">
                                <div class="app-search">
                                    <input type="search" class="form-control topbar-search" name="search"
                                        placeholder="Search ...">
                                    <Icon icon="lucide:search" class="app-search-icon text-muted" />
                                </div>
                            </div>

                            <div class="d-flex flex-wrap gap-1 filter-buttons">
                                <button v-for="(category, idx) in categories" :key="idx"
                                    class="btn btn-sm btn-ghost-primary"
                                    :class="{ active: selectedCategory === category }"
                                    @click="selectedCategory = category">{{ category }}</button>
                            </div>
                        </BCardHeader>

                        <BCardBody>
                            <BRow>
                                <MasonryWall :items="filteredItems" :ssr-columns="1" :column-width="310" :gap="10">
                                    <template #default="{ item, index }">
                                        <BCol>
                                            <BCard no-body class="border-0 mb-0">
                                                <div
                                                    class="badge text-bg-dark badge-label position-absolute top-0 start-0 m-3 z-1">
                                                    beautiful</div>

                                                <img class="card-img rounded-2" :src="item.image"
                                                    :alt="`Image ${index + 1}`" @click="showLightbox(index)" />


                                            </BCard>
                                        </BCol>
                                    </template>
                                </MasonryWall>

                                <VueEasyLightbox :visible="visible" :imgs="filteredItems.map(i => i.image)"
                                    :index="index" @hide="visible = false" />

                            </BRow>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import { Icon } from '@iconify/vue';
import { computed, ref } from 'vue';
import { usePageMeta } from '@/composables/usePageMeta';
import VueEasyLightbox from 'vue-easy-lightbox'

import img1 from '@/assets/images/gallery/1.jpg'
import img10 from '@/assets/images/gallery/10.jpg'
import img11 from '@/assets/images/gallery/11.jpg'
import img12 from '@/assets/images/gallery/12.jpg'
import img14 from '@/assets/images/gallery/14.jpg'
import img2 from '@/assets/images/gallery/2.jpg'
import img3 from '@/assets/images/gallery/3.jpg'
import img4 from '@/assets/images/gallery/4.jpg'
import img5 from '@/assets/images/gallery/5.jpg'
import img6 from '@/assets/images/gallery/6.jpg'
import img7 from '@/assets/images/gallery/7.jpg'
import img8 from '@/assets/images/gallery/8.jpg'
import img9 from '@/assets/images/gallery/9.jpg'
import MainLayout from '@/layouts/MainLayout.vue';
import MasonryWall from '@yeger/vue-masonry-wall';

const slides = [
    { image: img1, category: 'beautiful' },
    { image: img2, category: 'nature' },
    { image: img3, category: 'beautiful' },
    { image: img4, category: 'nature' },
    { image: img5, category: 'travel' },
    { image: img6, category: 'nature' },
    { image: img7, category: 'city' },
    { image: img8, category: 'city' },
    { image: img9, category: 'travel' },
    { image: img10, category: 'beautiful' },
    { image: img11, category: 'nature' },
    { image: img12, category: 'city' },
    { image: img14, category: 'travel' },
]

const selectedCategory = ref('All')

const filteredItems = computed(() =>
    selectedCategory.value === 'All'
        ? slides
        : slides.filter(item => item.category === selectedCategory.value)
)

const categories = ['All', 'beautiful', 'nature', 'travel', 'city']


const visible = ref(false)
const index = ref(0)

const showLightbox = (i: number) => {
    index.value = i
    visible.value = true
}

usePageMeta('Gallery')
</script>

<style scoped></style>