<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Pickers" subtitle="Forms" />
        </BContainer>

        <BContainer>
            <BRow>
                <BCol lg="12">

                    <Flatpickers />

                    <ColorPickers />
                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import ColorPickers from './components/ColorPickers.vue';
import Flatpickers from './components/Flatpickers.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Pickers')
</script>

<style scoped></style>