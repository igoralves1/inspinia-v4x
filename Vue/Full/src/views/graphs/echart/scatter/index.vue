<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Scatter Echart" subtitle="Charts" />
            <BRow>
                <BCol xl="6">
                    <UICard title="Scatter Chart">
                        <CustomEChart :extensions="[ScatterChart, CanvasRenderer,TooltipComponent,LegendComponent,TitleComponent,MarkLineComponent]" :getOptions="getScatterChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Bubble Chart">
                        <CustomEChart :extensions="[ScatterChart, CanvasRenderer]" :getOptions="getBubbleChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Quartet Scatter Chart">
                        <CustomEChart :extensions="[ScatterChart, CanvasRenderer]" :getOptions="getQuartetScatterChart"
                            :style="{ height: '600px' }" />
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Single Axis Scatter Chart">
                        <CustomEChart :extensions="[ScatterChart, CanvasRenderer]"
                            :getOptions="getSingleAxisScatterChart" :style="{ height: '450px' }" />
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

import { LineChart, ScatterChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import {
    getScatterChart,
    getBubbleChart,
    getQuartetScatterChart,
    getSingleAxisScatterChart,
} from './data'
import MainLayout from '@/layouts/MainLayout.vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { LegendComponent, MarkLineComponent, TitleComponent, TooltipComponent } from 'echarts/components'

usePageMeta('Echart Scatter Chart')
</script>
