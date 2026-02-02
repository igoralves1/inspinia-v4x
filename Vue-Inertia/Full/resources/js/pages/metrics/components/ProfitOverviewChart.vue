<template>
  <BCard no-body> 
    <BCardBody>
      <h3 class="mb-3 fw-bold">
        <span>{{currency}}12.50k</span>
        <span class="text-muted ms-1 fs-sm">Profit</span>
      </h3>
      <p class="mb-3">
        Your total profit reached $12,500 this month, showing stable and positive business growth.
      </p>

      <CustomEChart
        :extensions="[LineChart, TooltipComponent, CanvasRenderer]"
        :get-options="profitChartOptions"
        :style="{ height: '120px' }"
      />
    </BCardBody>
  </BCard>
</template>

<script setup lang="ts">
import { LineChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import CustomEChart from '@/components/CustomEChart.vue';
import { currency } from '@/helpers';

import { profitChartOptions } from './data';
</script>