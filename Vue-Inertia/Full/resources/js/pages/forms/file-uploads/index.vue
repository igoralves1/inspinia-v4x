<template>
    <MainLayout>
        
        <BContainer fluid>
            <PageBreadcrumb title="File Uploader" subtitle="Forms" />
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

import MainLayout from '@/layouts/MainLayout.vue';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';


</script>

<style scoped></style>