<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Scatter Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Scatter (XY) Chart">
                        <CustomApexChart :get-options='getBasicScatter' :series='getBasicScatter().series'
                            type="scatter" :height='380' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Scatter Chart - Datetime">
                        <CustomApexChart :get-options='getDateTimeScatterChart'
                            :series='getDateTimeScatterChart().series' type="scatter" :height='380' />
                    </UICard>
                </BCol>
            </BRow>
            <BRow>
                <BCol xl='6'>
                    <UICard title="Scatter - Images">
                        <CustomApexChart :get-options='getImageScatterChart' :series='getImageScatterChart().series'
                            type="scatter" :height='380' />
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
import { getBasicScatter, getDateTimeScatterChart, getImageScatterChart } from './data';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

usePageMeta('Scatter ApexCharts')
</script>

<style scoped></style>