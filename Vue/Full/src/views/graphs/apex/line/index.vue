<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Line Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Simple line chart">
                        <CustomApexChart :get-options='getHeatmapSingleSeriesChart'
                            :series='getHeatmapSingleSeriesChart().series' type="line" :height='380' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Line with Data Labels">
                        <CustomApexChart :get-options='getLineChart' :series='getLineChart().series' type="line"
                            :height='380' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Zoomable Timeseries">
                        <CustomApexChart :get-options='getZoomableTimeseriesChart'
                            :series='getZoomableTimeseriesChart().series' type="area" :height='360' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Syncing charts">
                        <CustomApexChart :get-options='getSyncingCharts2' :series='getSyncingCharts2().series'
                            type="line" :height='200' />
                        <CustomApexChart :get-options='getSyncingCharts' :series='getSyncingCharts().series' type="line"
                            :height='160' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Missing / Null values">
                        <CustomApexChart :get-options='getMissingLineChart' :series='getMissingLineChart().series'
                            type="line" :height='380' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Dashed Line Chart">
                        <CustomApexChart :get-options='getDashedLineChart' :series='getDashedLineChart().series'
                            type="line" :height='380' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Stepline Chart">
                        <CustomApexChart :get-options='getSteplineChart' :series='getSteplineChart().series' type="line"
                            :height='360' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Brush Chart">
                        <CustomApexChart :get-options='getBrushChart' :series='getBrushChart().series' type="line"
                            :height='230' />
                        <CustomApexChart :get-options='getBrushChart2' :series='getBrushChart2().series' type="area"
                            :height='130' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Realtime Chart">
                        <RealTimeChart />
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
import { getBrushChart, getBrushChart2, getDashedLineChart, getHeatmapSingleSeriesChart, getLineChart, getMissingLineChart, getSteplineChart, getSyncingCharts, getSyncingCharts2, getZoomableTimeseriesChart } from './data';
import RealTimeChart from './components/RealTimeChart.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Apex Line Charts')
</script>

<style scoped></style>