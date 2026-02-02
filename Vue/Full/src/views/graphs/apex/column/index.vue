<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Column Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Basic Column Charts">
                        <CustomApexChart :get-options='getBasicColumnChart' :series='getBasicColumnChart().series'
                            type="bar" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Column Chart with Datalabels">
                        <CustomApexChart :get-options='getChartWithDataTabels' :series='getChartWithDataTabels().series'
                            type="bar" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Stacked Column Charts">
                        <CustomApexChart :get-options='getStackedColumnChart' :series='getStackedColumnChart().series'
                            type="bar" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="100% Stacked Column Chart">
                        <CustomApexChart :get-options='getFullStackedColumnChart'
                            :series='getFullStackedColumnChart().series' type="bar" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Grouped Stacked Columns Chart">
                        <CustomApexChart :get-options='getGroupedStackedColumnChart'
                            :series='getGroupedStackedColumnChart().series' type="bar" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Dumbbell Chart">
                        <CustomApexChart :get-options='getDumbbellChart' :series='getDumbbellChart().series'
                            type="rangeBar" :height='350' />
                    </UICard>
                </BCol>

                <BCol xl='6'>
                    <UICard title="Column with Markers">
                        <CustomApexChart :get-options='getColumnWithMarkersChart'
                            :series='getColumnWithMarkersChart().series' type="bar" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Column with Group Label">
                        <CustomApexChart :get-options='getColumnWithGroupLabelChart'
                            :series='getColumnWithGroupLabelChart().series' type="bar" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Column Chart with rotated labels & Annotations">
                        <CustomApexChart :get-options='getRotateLabelColumn' :series='getRotateLabelColumn().series'
                            type="bar" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Column Chart with negative values">
                        <CustomApexChart :get-options='getNegativeValueColumnChart'
                            :series='getNegativeValueColumnChart().series' type="bar" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Distributed Column Charts">
                        <CustomApexChart :get-options='getDistributedColumnCharts'
                            :series='getDistributedColumnCharts().series' type="bar" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Range Column Charts">
                        <CustomApexChart :get-options='getRangeColumnCharts' :series='getRangeColumnCharts().series'
                            type="bar" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='12'>
                    <DynamicLoadedChart />
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import CustomApexChart from '@/components/CustomApexChart.vue';
import UICard from '@/components/UICard.vue';
import { getBasicColumnChart, getChartWithDataTabels, getColumnWithGroupLabelChart, getColumnWithMarkersChart, getDistributedColumnCharts, getDumbbellChart, getFullStackedColumnChart, getGroupedStackedColumnChart, getNegativeValueColumnChart, getRangeColumnCharts, getRotateLabelColumn, getStackedColumnChart } from './data';
import DynamicLoadedChart from './components/DynamicLoadedChart.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Apex Column Charts')
</script>

<style scoped></style>