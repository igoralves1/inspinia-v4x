<template>
  <BContainer fluid>
    <PageBreadcrumb title="Candlestick Echart" subtitle="Charts" />

    <BRow>
      <BCol xl="12">
        <UICard title="Basic Candlestick Chart">
          <CustomEChart
            :extensions="[CandlestickChart, CanvasRenderer]"
            :getOptions="getBasicCandlestickChart"
            :style="{ height: '400px' }"
          />
        </UICard>
      </BCol>

      <BCol xl="12">
        <UICard title="Mixed Candlestick Chart">
          <CustomEChart
            :extensions="[CandlestickChart, CanvasRenderer]"
            :getOptions="getMixedCandlestickChart"
            :style="{ height: '400px' }"
          />
        </UICard>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'
import UICard from '~/components/UICard.vue'
import PageBreadcrumb from '~/components/PageBreadcrumb.vue'
import CustomEChart from '~/components/CustomEChart.vue'

import { CandlestickChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import { getBasicCandlestickChart, getMixedCandlestickChart } from './data'


usePageTitle('Echart Candlestick Chart')
</script>
