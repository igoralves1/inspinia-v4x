<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Mixed Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Line & Column Chart">
                        <CustomApexChart :get-options='getLineColumnChart' :series='getLineColumnChart().series'
                            type="line" :height='380' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Multiple Y-Axis Chart">
                        <CustomApexChart :get-options='getMultipleYaxisMixedChart'
                            :series='getMultipleYaxisMixedChart().series' type="line" :height='380' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Line & Area Chart">
                        <CustomApexChart :get-options='getLineAreaChart' :series='getLineAreaChart().series' type="line"
                            :height='380' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Line, Column & Area Chart">
                        <CustomApexChart :get-options='getAllMixedChart' :series='getAllMixedChart().series' type="line"
                            :height='380' />
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
import { getAllMixedChart, getLineAreaChart, getLineColumnChart, getMultipleYaxisMixedChart } from './data';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Apex Mixed Charts')
</script>

<style scoped></style>