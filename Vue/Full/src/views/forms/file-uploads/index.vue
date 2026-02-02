<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="File Uploader" subTitle="Forms" />
        </BContainer>
        <BContainer>
            <BRow class="mt-3">
                <BCol xs="12">
                    <Dropzone />

                    <FilePond />
                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import Dropzone from './components/Dropzone.vue';
import FilePond from './components/FilePond.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

usePageMeta('File Uploader')
</script>

<style scoped></style>