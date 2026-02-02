<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="RadialBar Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Basic RadialBar Chart">
                        <CustomApexChart :get-options='getBasicRadialBarChart' :series='getBasicRadialBarChart().series'
                            type="radialBar" :height='320' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Multiple RadialBars">
                        <CustomApexChart :get-options='getMultipleRadialBarChart'
                            :series='getMultipleRadialBarChart().series' type="radialBar" :height='320' />
                    </UICard>
                </BCol>
            </BRow>
            <BRow>
                <BCol xl='6'>
                    <UICard title="Circle Chart - Custom Angle">
                        <CustomApexChart :get-options='getCircleAngleChart' :series='getCircleAngleChart().series'
                            type="radialBar" :height='380' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Circle Chart with Image">
                        <CustomApexChart :get-options='getImageRadialBarChart' :series='getImageRadialBarChart().series'
                            type="radialBar" :height='360' />
                    </UICard>
                </BCol>
            </BRow>
            <BRow>
                <BCol xl='6'>
                    <UICard title="Stroked Circular Guage">
                        <CustomApexChart :get-options='getStrokedGuageRadialChart'
                            :series='getStrokedGuageRadialChart().series' type="radialBar" :height='380' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Gradient Circular Chart">
                        <CustomApexChart :get-options='getGuageCircularRadialChart'
                            :series='getGuageCircularRadialChart().series' type="radialBar" :height='330' />
                    </UICard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import CustomApexChart from '@/components/CustomApexChart.vue';
import { getBasicRadialBarChart, getCircleAngleChart, getGuageCircularRadialChart, getImageRadialBarChart, getMultipleRadialBarChart, getSemiCircleGuageRadialChart, getStrokedGuageRadialChart } from './data';
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Radialbar ApexCharts')
</script>

<style scoped></style>