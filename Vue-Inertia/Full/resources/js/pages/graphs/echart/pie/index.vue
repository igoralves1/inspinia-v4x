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
import CustomEChart from '@/components/CustomEChart.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import UICard from '@/components/UICard.vue'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'

import { PieChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import MainLayout from '@/layouts/MainLayout.vue'
import { Head } from '@inertiajs/vue3'
import { LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components'
import {
    getBasicPieChart,
    getDoughnutPieChart,
    getDoughnutRoundedPieChart,
    getMultiplePieChart,
    getNightingaleMap,
    getPieEdgeAlignChart,
    getPieLabelAlignChart,
} from './data'


</script>
