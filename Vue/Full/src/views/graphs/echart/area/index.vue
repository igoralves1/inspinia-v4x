<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Area Echart" subtitle="Charts" />

            <BRow>
                <BCol xl="6">
                    <UICard title="Area Chart">
                        <CustomEChart :extensions="[LineChart, CanvasRenderer, TooltipComponent, GridComponent,LegendComponent]"
                            :getOptions="getAreaChart" style="height: 300px" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Stacked Area Chart">
                        <CustomEChart :extensions="[LineChart, CanvasRenderer]" :getOptions="getStackedAreaChart"
                            style="height: 300px" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Area with Marker">
                        <CustomEChart :extensions="[LineChart, CanvasRenderer, MarkPointComponent, MarkLineComponent]"
                            :getOptions="getAreawithMarkerChart" style="height: 300px" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <DynamicAreaChart />
                </BCol>

                <BCol xl="6">
                    <UICard title="Step Area">
                        <CustomEChart :extensions="[LineChart, CanvasRenderer]" :getOptions="getStepAreaChart"
                            style="height: 300px" />
                    </UICard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
// components
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import CustomEChart from '@/components/CustomEChart.vue'
import DynamicAreaChart from './components/DynamicAreaChart.vue'
import UICard from '@/components/UICard.vue'


import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import { getAreaChart, getAreawithMarkerChart, getStackedAreaChart, getStepAreaChart } from './data'

import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import { GridComponent, LegendComponent, MarkLineComponent, MarkPointComponent, TooltipComponent } from 'echarts/components'
import MainLayout from '@/layouts/MainLayout.vue'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta('Echart Area Chart')
</script>