<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Other Plugins" subTitle="Forms" />
        </BContainer>

        <BContainer>
            <BRow>
                <BCol xs="12">
                    <FormInputMasks />

                    <Typeaheads />

                    <InputTouchspin />
                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import FormInputMasks from './components/FormInputMasks.vue';
import Typeaheads from './components/Typeaheads.vue';
import InputTouchspin from './components/InputTouchspin.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

usePageMeta('Other Plugins')
</script>

<style scoped></style>