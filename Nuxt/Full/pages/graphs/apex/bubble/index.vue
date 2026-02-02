<template>
    <BContainer fluid>
        <PageBreadcrumb title="Bubble Apexchart" subtitle="Charts" />
        <BRow>
            <BCol xl='6'>
                <UICard title="Simple Bubble Charts">
                    <CustomApexChart :get-options='getSimpleBubbleChart' :series='getSimpleBubbleChart().series'
                        type="bubble" :height='350' />
                </UICard>
            </BCol>
            <BCol xl='6'>
            <UICard title="3D Bubble Charts">
                <CustomApexChart :get-options='getThreedBubbleChart' :series='getThreedBubbleChart().series'
                    type="bubble" :height='350' />
            </UICard>
            </BCol>

            <BCol xl='6'>
            <UICard title="Bubble Charts">
                <CustomApexChart :get-options='getThreeBubbleChart' :series='getThreeBubbleChart().series' type="bubble"
                    :height='350' />
            </UICard>
            </BCol>
        </BRow>
    </BContainer>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import CustomApexChart from '~/components/CustomApexChart.vue';
import PageBreadcrumb from '~/components/PageBreadcrumb.vue';
import UICard from '~/components/UICard.vue';
import { getSimpleBubbleChart, getThreeBubbleChart, getThreedBubbleChart } from './data';


usePageTitle('Apex Bubble Charts')
</script>

<style scoped></style>