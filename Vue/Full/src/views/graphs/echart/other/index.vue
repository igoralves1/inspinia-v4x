<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Other Echart" subtitle="Charts" />

            <BRow>
                <BCol xl="6">
                    <UICard title="Pictorialbar Dotted Chart">
                        <CustomEChart :extensions="[PictorialBarChart, CanvasRenderer]"
                            :getOptions="getPictorialbarDottedChart" :style="{ height: '400px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Basic Sunburst Chart">
                        <CustomEChart :extensions="[SunburstChart, CanvasRenderer]" :getOptions="getBasicSunburstChart"
                            :style="{ height: '400px' }" />
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Nested Pie Chart">
                        <CustomEChart :extensions="[SunburstChart, CanvasRenderer]" :getOptions="getNestedPieChart"
                            :style="{ height: '600px' }" />
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
import { PictorialBarChart, SunburstChart } from 'echarts/charts'

import {
    getPictorialbarDottedChart,
    getBasicSunburstChart,
    getNestedPieChart,
} from './data'
import MainLayout from '@/layouts/MainLayout.vue'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta('Echart Other Chart')
</script>
