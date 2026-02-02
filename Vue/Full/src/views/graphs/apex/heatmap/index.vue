<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Heatmap Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Heatmap - Single Series">
                        <CustomApexChart :get-options='getHeatmapSingleSeriesChart'
                            :series='getHeatmapSingleSeriesChart().series' type="heatmap" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Multiple Series">
                        <CustomApexChart :get-options='getMultipleSeries' :series='getMultipleSeries().series'
                            type="heatmap" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Heatmap - Color Range">
                        <CustomApexChart :get-options='getHeatmapColorRange' :series='getHeatmapColorRange().series'
                            type="heatmap" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Heatmap - Range without Shades">
                        <CustomApexChart :get-options='getRangeWithoutShades' :series='getRangeWithoutShades().series'
                            type="heatmap" :height='350' />
                    </UICard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import CustomApexChart from '@/components/CustomApexChart.vue';
import UICard from '@/components/UICard.vue';
import { getHeatmapColorRange, getHeatmapSingleSeriesChart, getMultipleSeries, getRangeWithoutShades } from './data';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Apex Heatmap Charts')
</script>

<style scoped></style>