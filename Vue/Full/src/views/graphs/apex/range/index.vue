<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Range Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Basic Range Area">
                        <CustomApexChart :get-options='getBasicRangeArea' :series='getBasicRangeArea().series'
                            type="rangeArea" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Range Area With Line">
                        <CustomApexChart :get-options='getComboRangeArea' :series='getComboRangeArea().series'
                            type="rangeArea" :height='350' />
                    </UICard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import CustomApexChart from '@/components/CustomApexChart.vue';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import { getBasicRangeArea, getComboRangeArea } from './data';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Range ApexCharts')
</script>

<style scoped></style>