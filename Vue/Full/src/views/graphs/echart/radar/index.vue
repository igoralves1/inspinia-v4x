<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Radar Echart" subtitle="Charts" />

            <BRow>
                <BCol xl="6">
                    <UICard title="Basic Radar Chart">
                        <CustomEChart :extensions="[RadarChart, CanvasRenderer]" :getOptions="getBasicBasicRadarChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Proportion of Browsers">
                        <CustomEChart :extensions="[RadarChart, CanvasRenderer]"
                            :getOptions="getProportionofBrowsersChart" :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Customized Radar Chart">
                        <CustomEChart :extensions="[RadarChart, CanvasRenderer]" :getOptions="getCustomizedRadarChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Multiple Radar Chart">
                        <CustomEChart :extensions="[RadarChart, CanvasRenderer]" :getOptions="getMultipleRadarChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'
import UICard from '@/components/UICard.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import CustomEChart from '@/components/CustomEChart.vue'

import { RadarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import {
    getBasicBasicRadarChart,
    getCustomizedRadarChart,
    getMultipleRadarChart,
    getProportionofBrowsersChart,
} from './data'
import MainLayout from '@/layouts/MainLayout.vue'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta('Echart Radar Chart')
</script>
