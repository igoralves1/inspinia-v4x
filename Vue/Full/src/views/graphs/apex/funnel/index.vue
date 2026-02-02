<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Funnel Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Basic Funnel">
                        <CustomApexChart :get-options='getBasicFunnelChart' :series='getBasicFunnelChart().series'
                            type="bar" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Pyramid Funnel">
                        <CustomApexChart :get-options='getPyramidFunnelChart' :series='getPyramidFunnelChart().series'
                            type="bar" :height='350' />
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
import { getBasicFunnelChart, getPyramidFunnelChart } from './data';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Apex Funnel Charts')
</script>

<style scoped></style>