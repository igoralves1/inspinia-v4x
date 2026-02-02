<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Gauge Echart" subtitle="Charts" />

            <BRow>
                <BCol xl="6">
                    <UICard title="Basic Gauge Chart">
                        <BCardBody>
                            <CustomEChart :extensions="[GaugeChart, CanvasRenderer]" :getOptions="getGaugeChart"
                                :style="{ height: '260px' }" />
                        </BCardBody>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Speed Stage Gauge Chart">
                        <CustomEChart :extensions="[GaugeChart, CanvasRenderer]" :getOptions="getSpeedStageGaugeChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Ring Gauge Chart">
                        <CustomEChart :extensions="[GaugeChart, CanvasRenderer]" :getOptions="getRingGaugeChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Temperature Chart">
                        <TemperatureChart />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Multi Ring Gauge Chart">
                        <CustomEChart :extensions="[GaugeChart, CanvasRenderer]" :getOptions="getMultiRingGaugeChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Multi Gauge Chart">
                        <MultiGaugeChart />
                    </UICard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow, BCardBody } from 'bootstrap-vue-next'
import UICard from '@/components/UICard.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import CustomEChart from '@/components/CustomEChart.vue'
import TemperatureChart from './components/TemperatureChart.vue'
import MultiGaugeChart from './components/MultiGaugeChart.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { usePageMeta } from '@/composables/usePageMeta'

import { CanvasRenderer } from 'echarts/renderers'
import { GaugeChart } from 'echarts/charts'

import {
    getGaugeChart,
    getMultiRingGaugeChart,
    getRingGaugeChart,
    getSpeedStageGaugeChart,
} from './data'

usePageMeta('Echart Gauge Chart')
</script>
