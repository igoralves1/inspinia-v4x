<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Ploar Area Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Basic Polar Area Chart">
                        <CustomApexChart :get-options='getBasicPolarAreaChart' :series='getBasicPolarAreaChart().series'
                            type="polarArea" :height='380' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Monochrome Polar Area">
                        <CustomApexChart :get-options='getMonochromePolarAreaChart'
                            :series='getMonochromePolarAreaChart().series' type="polarArea" :height='380' />
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
import { getBasicPolarAreaChart, getMonochromePolarAreaChart } from './data';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Apex Polar Area Charts')
</script>

<style scoped></style>