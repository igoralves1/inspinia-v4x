<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Bar Echart" subtitle="Charts" />
            <BRow>
                <BCol xl="6">
                    <UICard title="Basic Bar Chart">
                        <CustomEChart :extensions="[BarChart, CanvasRenderer]" :getOptions="getBasicBarChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Two Bar Chart">
                        <CustomEChart :extensions="[BarChart, CanvasRenderer]" :getOptions="getTwoBarChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Progress Bar Chart">
                        <CustomEChart :extensions="[BarChart, CanvasRenderer]" :getOptions="getProgressBarChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Horizontal Bar Chart">
                        <CustomEChart :extensions="[BarChart, CanvasRenderer]" :getOptions="getHorizontalBarChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Negative Chart">
                        <CustomEChart :extensions="[BarChart, CanvasRenderer]" :getOptions="getNegativeBarChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Bar Chart with Series">
                        <CustomEChart :extensions="[BarChart, CanvasRenderer]" :getOptions="getBarChartWithSeries"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Stacked Bar">
                        <CustomEChart :extensions="[BarChart, CanvasRenderer]" :getOptions="getStackedBar"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Horizontal Stacked Bar">
                        <CustomEChart :extensions="[BarChart, CanvasRenderer]" :getOptions="getHorizontalStackedBarChar"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Bar Race Chart">
                        <RaceChart />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Bar Gradient Chart">
                        <CustomEChart :extensions="[BarChart, CanvasRenderer]" :getOptions="getGradientChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Mixed Bar Chart">
                        <CustomEChart :extensions="[BarChart, CanvasRenderer]" :getOptions="getMixedBarChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Timeline Bar Chart">
                        <CustomEChart :extensions="[BarChart, CanvasRenderer]" :getOptions="getTimelineBarChart"
                            :style="{ height: '500px' }" />
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
import RaceChart from './components/RaceChart.vue'

import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import {
    getBarChartWithSeries,
    getBasicBarChart,
    getGradientChart,
    getHorizontalBarChart,
    getHorizontalStackedBarChar,
    getMixedBarChart,
    getNegativeBarChart,
    getProgressBarChart,
    getStackedBar,
    getTimelineBarChart,
    getTwoBarChart,
} from './data'
import { usePageMeta } from '@/composables/usePageMeta'
import MainLayout from '@/layouts/MainLayout.vue'

usePageMeta('Echart Bar Chart')
</script>
