<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Candlestick Echart" subtitle="Charts" />

            <BRow>
                <BCol xl="12">
                    <UICard title="Basic Candlestick Chart">
                        <CustomEChart :extensions="[CandlestickChart, CanvasRenderer,TooltipComponent,TitleComponent,LegendComponent,GridComponent,ToolboxComponent,DataZoomComponent,LineChart]"
                            :getOptions="getBasicCandlestickChart" :style="{ height: '400px' }" />
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Mixed Candlestick Chart">
                        <CustomEChart :extensions="[CandlestickChart, CanvasRenderer]"
                            :getOptions="getMixedCandlestickChart" :style="{ height: '400px' }" />
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
import { usePageMeta } from '@/composables/usePageMeta'
import MainLayout from '@/layouts/MainLayout.vue'

import { CandlestickChart, LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import { getBasicCandlestickChart, getMixedCandlestickChart } from './data'
import { DataZoomComponent, GridComponent, LegendComponent, TitleComponent, ToolboxComponent, TooltipComponent } from 'echarts/components'


usePageMeta('Echart Candlestick Chart')
</script>
