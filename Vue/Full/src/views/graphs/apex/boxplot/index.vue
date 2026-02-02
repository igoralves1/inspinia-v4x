<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Boxplot Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Basic Boxplot">
                        <CustomApexChart :get-options='getBasicBoxplotChart' :series='getBasicBoxplotChart().series'
                            type="boxPlot" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Scatter Boxplot">
                        <CustomApexChart :get-options='getScatterBoxplotChart' :series='getScatterBoxplotChart().series'
                            type="boxPlot" :height='350' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Horizontal BoxPlot">
                        <CustomApexChart :get-options='getHorizontalBoxplotChart'
                            :series='getHorizontalBoxplotChart().series' type="boxPlot" :height='350' />
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
import { getBasicBoxplotChart, getHorizontalBoxplotChart, getScatterBoxplotChart } from './data';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Boxplot Apex Charts')
</script>

<style scoped></style>