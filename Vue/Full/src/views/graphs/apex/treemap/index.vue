<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Treemap Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Basic Treemap">
                        <CustomApexChart :get-options='getBasicTreemapChart' :series='getBasicTreemapChart().series'
                            type="treemap" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Treemap Multiple Series">
                        <CustomApexChart :get-options='getTreemapMultipleChart'
                            :series='getTreemapMultipleChart().series' type="treemap" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Distributed Treemap">
                        <CustomApexChart :get-options='getDistributedTreemapChart'
                            :series='getDistributedTreemapChart().series' type="treemap" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Color Range Treemaps">
                        <CustomApexChart :get-options='getColorRangeTreemapChart'
                            :series='getColorRangeTreemapChart().series' type="treemap" :height='350' />
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
import { getBasicTreemapChart, getColorRangeTreemapChart, getDistributedTreemapChart, getTreemapMultipleChart } from './data';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Treemap ApexCharts')
</script>

<style scoped></style>