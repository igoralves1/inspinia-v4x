<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Pie Echart" subtitle="Charts" />
            <BRow>
                <BCol xl="6">
                    <UICard title="Basic Pie Chart">
                        <CustomEChart :extensions="[PieChart, CanvasRenderer,LegendComponent,TooltipComponent,TitleComponent]" :getOptions="getBasicPieChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Doughnut Pie Chart">
                        <CustomEChart :extensions="[PieChart, CanvasRenderer]" :getOptions="getDoughnutPieChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Doughnut Rounded Pie Chart">
                        <CustomEChart :extensions="[PieChart, CanvasRenderer]" :getOptions="getDoughnutRoundedPieChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Multiple Pie Chart">
                        <CustomEChart :extensions="[PieChart, CanvasRenderer]" :getOptions="getMultiplePieChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Pie Label Align Chart">
                        <CustomEChart :extensions="[PieChart, CanvasRenderer]" :getOptions="getPieLabelAlignChart"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Nightingale Map">
                        <CustomEChart :extensions="[PieChart, CanvasRenderer]" :getOptions="getNightingaleMap"
                            :style="{ height: '300px' }" />
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Pie Edge Align Chart">
                        <CustomEChart :extensions="[PieChart, CanvasRenderer]" :getOptions="getPieEdgeAlignChart"
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

import { PieChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import {
    getBasicPieChart,
    getDoughnutPieChart,
    getDoughnutRoundedPieChart,
    getMultiplePieChart,
    getPieLabelAlignChart,
    getPieEdgeAlignChart,
    getNightingaleMap,
} from './data'
import MainLayout from '@/layouts/MainLayout.vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components'

usePageMeta('EChart Pie Chart')
</script>
