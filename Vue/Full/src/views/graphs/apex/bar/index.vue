<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Bar Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Basic Bar Chart">
                        <CustomApexChart :get-options='getBasicBarChart' :series='getBasicBarChart().series' type="bar"
                            :height='350' />
                    </UICard>
                </BCol>

                <BCol xl='6'>
                    <UICard title="Grouped Bar Chart">
                        <CustomApexChart :get-options='getGroupedBarChart' :series='getGroupedBarChart().series'
                            type="bar" :height='350' />
                    </UICard>
                </BCol>

                <BCol xl='6'>
                    <UICard title="Stacked Bar Chart">
                        <CustomApexChart :get-options='getFullStackedBarChart' :series='getFullStackedBarChart().series'
                            type="bar" :height='350' />
                    </UICard>
                </BCol>

                <BCol xl='6'>
                    <UICard title="100% Stacked Bar Chart">
                        <CustomApexChart :get-options='getStackedBarChart' :series='getStackedBarChart().series'
                            type="bar" :height='350' />
                    </UICard>
                </BCol>

                <BCol xl='6'>
                    <UICard title="Grouped Stacked Bars">
                        <CustomApexChart :get-options='getGroupedStackedBarChart'
                            :series='getGroupedStackedBarChart().series' type="bar" :height='350' />
                    </UICard>
                </BCol>

                <BCol xl='6'>
                    <UICard title="Bar with Negative Values">
                        <CustomApexChart :get-options='getNegativeBarChart' :series='getNegativeBarChart().series'
                            type="bar" :height='350' />
                    </UICard>
                </BCol>

                <BCol xl='6'>
                    <UICard title="Reversed Bar Chart">
                        <CustomApexChart :get-options='getReversedBarChart' :series='getReversedBarChart().series'
                            type="bar" :height='350' />
                    </UICard>
                </BCol>

                <BCol xl='6'>
                    <UICard title="Bar with Image Fill">
                        <CustomApexChart :get-options='getImageFillBarChart' :series='getImageFillBarChart().series'
                            type="bar" :height='350' />
                    </UICard>
                </BCol>

                <BCol xl='6'>
                    <UICard title="Custom DataLabels Bar">
                        <CustomApexChart :get-options='getCustomDataLabelsBarChart'
                            :series='getCustomDataLabelsBarChart().series' type="bar" :height='350' />
                    </UICard>
                </BCol>

                <BCol xl='6'>
                    <UICard title="Patterned Bar Chart">
                        <CustomApexChart :get-options='getPatternedBarChart' :series='getPatternedBarChart().series'
                            type="bar" :height='350' />
                    </UICard>
                </BCol>

                <BCol xl='6'>
                    <UICard title="Bar with Markers">
                        <CustomApexChart :get-options='getMarkersBarChart' :series='getMarkersBarChart().series'
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
import UICard from '@/components/UICard.vue';
import { getBasicBarChart, getCustomDataLabelsBarChart, getFullStackedBarChart, getGroupedBarChart, getGroupedStackedBarChart, getImageFillBarChart, getMarkersBarChart, getNegativeBarChart, getPatternedBarChart, getReversedBarChart, getStackedBarChart } from './data';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Apex Bar Charts')
</script>

<style scoped></style>