<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Line EChart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Line Chart">
                        <CustomEChart :extensions="[LineChart, CanvasRenderer, TooltipComponent, GridComponent,LegendComponent]"
                            :getOptions="getLineChart" :style="{ height: '300px' }" />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Line Stacked Chart">
                        <CustomEChart :extensions="[LinesChart, CanvasRenderer]" :getOptions="getStackedLineChart"
                            :style="{
                                height: '300px'
                            }" />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Line Marker">
                        <CustomEChart :extensions="[LinesChart, CanvasRenderer]" :getOptions="getLineMarkerChart"
                            :style="{
                                height: '300px'
                            }" />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <DynamicLineChart />
                </BCol>

                <BCol xl='6'>
                    <UICard title="Step Line">
                        <CustomEChart :extensions="[LinesChart, CanvasRenderer]" :getOptions="getStepLine" :style="{
                            height: '300px'
                        }" />
                    </UICard>
                </BCol>

                <BCol xl='6'>
                    <UICard title="Line Y Category">
                        <CustomEChart :extensions="[LinesChart, CanvasRenderer]" :getOptions="getLineYCategory" :style="{
                            height: '300px'
                        }" />
                    </UICard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import CustomEChart from '@/components/CustomEChart.vue';
import UICard from '@/components/UICard.vue';
import { getLineChart, getLineMarkerChart, getLineYCategory, getStackedLineChart, getStepLine } from './data';
import { LineChart, LinesChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import DynamicLineChart from './components/DynamicLineChart.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('EChart Line Chart')
</script>

<style scoped></style>