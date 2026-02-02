<template>
    <BContainer fluid>
        <PageBreadcrumb title="Slope Apexchart" subtitle="Charts" />
        <BRow>
            <BCol xl='6'>
                <UICard title="Basic Slope">
                    <CustomApexChart :get-options='getBasicSlopeChart' :series='getBasicSlopeChart().series' type="line"
                        :height='350' />
                </UICard>
            </BCol>
            <BCol xl='6'>
                <UICard title="Multi Slope">
                    <CustomApexChart :get-options='getMultiSlopeChart' :series='getMultiSlopeChart().series' type="line"
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
import { getBasicSlopeChart, getMultiSlopeChart } from './data';

usePageTitle('Slope ApexCharts')
</script>

<style scoped></style>