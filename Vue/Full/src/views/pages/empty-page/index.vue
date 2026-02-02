<template>
    <MainLayout>
        <PageBreadcrumb title="Empty Page" />
    </MainLayout>
</template>

<script setup lang="ts">
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

usePageMeta('Starter Page')
</script>

<style scoped></style>