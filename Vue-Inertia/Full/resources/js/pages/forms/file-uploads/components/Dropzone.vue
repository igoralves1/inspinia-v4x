<template>
    <UICard title="Dropzone" body-class="p-0">
        <BCardBody>
            <p class="text-muted mb-2">
                DropzoneJS is an open source library that provides drag’n’drop file uploads with image
                previews.
            </p>

            <a class="btn btn-link p-0 fw-semibold" href="https://www.dropzone.dev/" target="_blank">
                Dropzone on View Official Website
                <Icon icon="tabler:chevron-right" class="ms-1" />
            </a>
        </BCardBody>

        <BCardBody class="pt-0">
            <FileUploader />
        </BCardBody>
    </UICard>
</template>

<script setup lang="ts">
import { BCardBody } from 'bootstrap-vue-next';
import FileUploader from '@/components/FileUploader.vue';
import UICard from '@/components/UICard.vue';
import { Icon } from '@iconify/vue';

</script>

<style scoped></style>