<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Area Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl="6">
                    <UICard title="Basic Area Chart">
                        <CustomApexChart :get-options='getBasicAreaChart' :series='getBasicAreaChart().series'
                            type="area" :height='380' />
                    </UICard>
                </BCol>
                <BCol xl="6">
                    <UICard title="Spline Area">
                        <CustomApexChart :get-options='getSplineAreaChart' :series='getSplineAreaChart().series'
                            type="area" :height='380' />
                    </UICard>
                </BCol>
            </BRow>
            <BRow>
                <BCol xl="6">
                    <DatetimeChart />
                </BCol>
                <BCol xl="6">
                    <UICard title="Area with Negative Values">
                        <CustomApexChart :get-options='getAreawithNegativeChart'
                            :series='getAreawithNegativeChart().series' type="area" :height='380' />
                    </UICard>
                </BCol>
            </BRow>
            <BRow>
                <BCol xl="6">
                    <UICard title="Stacked Area">

                        <CustomApexChart :get-options='getStackedAreaChart' :series='getStackedAreaChart().series'
                            type="area" :height='422' />
                    </UICard>
                </BCol>
                <BCol xl="6">
                    <UICard title="Irregular TimeSeries">
                        <CustomApexChart :get-options='getAreaTimeSeriesChart' :series='getAreaTimeSeriesChart().series'
                            type="area" :height='380' />
                    </UICard>
                </BCol>
            </BRow>
            <BRow>
                <BCol xl="6">
                    <UICard title="Area Chart with Null values">
                        <CustomApexChart :get-options='getAreaChartWithNullValues'
                            :series='getAreaChartWithNullValues().series' type="area" :height='380' />
                    </UICard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { getAreaChartWithNullValues, getAreaTimeSeriesChart, getAreawithNegativeChart, getBasicAreaChart, getSplineAreaChart, getStackedAreaChart } from './data';
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import CustomApexChart from '@/components/CustomApexChart.vue';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import DatetimeChart from './components/DatetimeChart.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Apex Area charts')
</script>

<style scoped></style>