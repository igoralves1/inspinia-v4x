<template>
    <MainLayout>
    <div class="container-fluid">
        <PageBreadcrumb title="Masonry" subTitle="Miscellaneous" />

        <BRow class="mb-3">
            <MasonryWall :items="masonryItems" :ssr-columns="1" :column-width="384" :gap="20">
                <template #default="{ item, index }">
                    <BCol xl="3" md="6" class="w-100">
                        <article>
                            <MasonryCard :item="item" />
                        </article>
                    </BCol>
                </template>
            </MasonryWall>
        </BRow>

    </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import MasonryCard from './components/MasonryCard.vue';
import { masonryItems } from './data';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MasonryWall from '@yeger/vue-masonry-wall';

usePageMeta('Masonry')
</script>

<style scoped></style>