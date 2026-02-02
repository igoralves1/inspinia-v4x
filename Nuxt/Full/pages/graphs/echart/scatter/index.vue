<template>
  <BContainer fluid>
    <PageBreadcrumb title="Scatter Echart" subtitle="Charts" />
    <BRow>
      <BCol xl="6">
        <UICard title="Scatter Chart">
          <CustomEChart
            :extensions="[ScatterChart, CanvasRenderer]"
            :getOptions="getScatterChart"
            :style="{ height: '300px' }"
          />
        </UICard>
      </BCol>

      <BCol xl="6">
        <UICard title="Bubble Chart">
          <CustomEChart
            :extensions="[ScatterChart, CanvasRenderer]"
            :getOptions="getBubbleChart"
            :style="{ height: '300px' }"
          />
        </UICard>
      </BCol>

      <BCol xl="12">
        <UICard title="Quartet Scatter Chart">
          <CustomEChart
            :extensions="[ScatterChart, CanvasRenderer]"
            :getOptions="getQuartetScatterChart"
            :style="{ height: '600px' }"
          />
        </UICard>
      </BCol>

      <BCol xl="12">
        <UICard title="Single Axis Scatter Chart">
          <CustomEChart
            :extensions="[ScatterChart, CanvasRenderer]"
            :getOptions="getSingleAxisScatterChart"
            :style="{ height: '450px' }"
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

import { ScatterChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import {
  getScatterChart,
  getBubbleChart,
  getQuartetScatterChart,
  getSingleAxisScatterChart,
} from './data'

usePageTitle('Echart Scatter Chart')
</script>
