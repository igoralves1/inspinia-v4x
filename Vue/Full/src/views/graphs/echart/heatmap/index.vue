<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Heatmap Echart" subtitle="Charts" />

            <BRow>
                <BCol xl="6">
                    <UICard title="Basic Heatmap Chart">
                        <CustomEChart :extensions="[HeatmapChart, CanvasRenderer]"
                            :getOptions="getBasicBasicHeatmapChart" :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Heatmap Chart">
                        <CustomEChart :extensions="[HeatmapChart, CanvasRenderer]" :getOptions="getHeatmapChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Heatmap - 20K Data Chart">
                        <CustomEChart :extensions="[HeatmapChart, CanvasRenderer]" :getOptions="getHeatmapDataChart"
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

import { CanvasRenderer } from 'echarts/renderers'
import { HeatmapChart } from 'echarts/charts'

import {
    getBasicBasicHeatmapChart,
    getHeatmapChart,
    getHeatmapDataChart,
} from './data'
import MainLayout from '@/layouts/MainLayout.vue'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta('Echart Heatmap Chart')
</script>
