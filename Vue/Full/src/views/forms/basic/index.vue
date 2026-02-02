<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Basic Elements" subtitle="Forms" />

            <BContainer>
                <BRow>
                    <BCol xl='12'>
                        <InputTextFieldType />

                        <InputType />

                        <InputGroups />

                        <FloatingLabels />

                        <InputSizes />

                        <ChecksRadiosSwitches />
                    </BCol>
                </BRow>
            </BContainer>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import InputTextFieldType from './components/InputTextFieldType.vue';
import InputType from './components/InputType.vue';
import InputGroups from './components/InputGroups.vue';
import FloatingLabels from './components/FloatingLabels.vue';
import InputSizes from './components/InputSizes.vue';
import ChecksRadiosSwitches from './components/ChecksRadiosSwitches.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Basic Elements')
</script>

<style scoped></style>