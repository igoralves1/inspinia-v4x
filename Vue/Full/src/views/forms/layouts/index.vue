<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Layouts" subTitle="Forms" />
        </BContainer>

        <BContainer>
            <BRow>
                <BCol lg="12">

                    <BasicForm />

                    <FormWithModal />

                    <BasicExample />

                    <HorizontalForm />

                    <LabelSizing />

                    <InlineForm />

                    <RowForm />

                    <FormWithFloatingLabels />

                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>


<script setup lang="ts">
import { BContainer, BFormFloatingLabel } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import BasicForm from './components/BasicForm.vue';
import FormWithModal from './components/FormWithModal.vue';
import BasicExample from './components/BasicExample.vue';
import HorizontalForm from './components/HorizontalForm.vue';
import LabelSizing from './components/LabelSizing.vue';
import InlineForm from './components/InlineForm.vue';
import RowForm from './components/RowForm.vue';
import FormWithFloatingLabels from './components/FormWithFloatingLabels.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

usePageMeta('Form Layouts')
</script>

<style scoped></style>