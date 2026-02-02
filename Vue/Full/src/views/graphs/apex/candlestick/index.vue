<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Candlestick Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Simple Candlestick Charts">
                        <CustomApexChart :get-options='getCandlestickChart' :series='getCandlestickChart().series'
                            type="candlestick" :height='350' />
                    </UICard>
                </BCol>

                <BCol xl='6'>
                    <UICard title="Combo Candlestick Charts">
                        <CustomApexChart :get-options='getComboCandlestickCharts'
                            :series='getComboCandlestickCharts().series' type="candlestick" :height='220' />
                        <CustomApexChart :get-options='getComboBarCandlestickChart'
                            :series='getComboBarCandlestickChart().series' type="bar" :height='130' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Category X-Axis">
                        <CustomApexChart :get-options='getXaxisCandlestickChart'
                            :series='getXaxisCandlestickChart().series' type="candlestick" :height='380' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Candlestick with Line">
                        <CustomApexChart :get-options='getCandlestickwithLineChart'
                            :series='getCandlestickwithLineChart().series' type="candlestick" :height='380' />
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
import { getCandlestickChart, getCandlestickwithLineChart, getComboBarCandlestickChart, getComboCandlestickCharts, getXaxisCandlestickChart } from './data';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Apex Candlestick Charts')
</script>

<style scoped></style>