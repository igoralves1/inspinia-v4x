<template>
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
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import { blogs } from './data';
import BlogCard from './components/BlogCard.vue';
import PageBreadcrumb from '~/components/PageBreadcrumb.vue';

usePageTitle('Blogs')
</script>

<style scoped></style>