<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Timeline Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Basic Timeline">
                        <CustomApexChart :get-options='getTimelineChart' :series='getTimelineChart().series'
                            type="rangeBar" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Distributed Timeline">
                        <CustomApexChart :get-options='getDistributedTimelineChart'
                            :series='getDistributedTimelineChart().series' type="rangeBar" :height='350' />
                    </UICard>
                </BCol>
            </BRow>
            <BRow>
                <BCol xl='6'>
                    <UICard title="Multi Series Timeline">
                        <CustomApexChart :get-options='getMultiSeriesTimelineChart'
                            :series='getMultiSeriesTimelineChart().series' type="rangeBar" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Advanced Timeline">
                        <CustomApexChart :get-options='getAdvanceTimelineChart'
                            :series='getAdvanceTimelineChart().series' type="rangeBar" :height='350' />
                    </UICard>
                </BCol>
            </BRow>
            <BCol xl='6'>
                <UICard title="Multiple Series - Group Rows">
                    <CustomApexChart :get-options='getGroupRowTimelineChart' :series='getGroupRowTimelineChart().series'
                        type="rangeBar" :height='350' />
                </UICard>
            </BCol>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import CustomApexChart from '@/components/CustomApexChart.vue';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import { getAdvanceTimelineChart, getDistributedTimelineChart, getGroupRowTimelineChart, getMultiSeriesTimelineChart, getTimelineChart } from './data';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Timeline ApexCharts')
</script>

<style scoped></style>