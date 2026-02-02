<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Other Plugins" subtitle="Forms" />
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

import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>