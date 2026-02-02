<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Wizard" subTitle="Forms" />

            <BRow class="justify-content-center">
                <BCol xxl="9">
                    <BasicWizard />
                    <WizardWithProgress />
                    <VerticalWizard />
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';

import BasicWizard from './components/BasicWizard.vue';
import WizardWithProgress from './components/WizardWithProgress.vue';
import VerticalWizard from './components/VerticalWizard.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

usePageMeta('Wizard')
</script>

<style scoped></style>