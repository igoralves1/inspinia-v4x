<template>
    <BContainer>
        <BRow class="mt-3">
            <BCol xs="12">
                <Dropzone />

                <FilePond />
            </BCol>
        </BRow>

    </BContainer>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import Dropzone from './components/Dropzone.vue';
import FilePond from './components/FilePond.vue';

usePageTitle('File Uploader')
</script>

<style scoped></style>