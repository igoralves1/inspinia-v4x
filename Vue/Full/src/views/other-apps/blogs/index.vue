<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Blogs" subtitle="Apps" />
            <BRow class="mb-3">
                <MasonryWall :items="blogs" :ssr-columns="1" :column-width="384" :gap="20">
                    <template #default="{ item, index }">
                        <BCol xl="3" md="6" class="w-100">
                            <article>
                                <BlogCard :blog="item" />
                            </article>
                        </BCol>
                    </template>
                </MasonryWall>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import { blogs } from './data';
import BlogCard from './components/BlogCard.vue';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MasonryWall from '@yeger/vue-masonry-wall'

usePageMeta('Blogs')
</script>

<style scoped></style>