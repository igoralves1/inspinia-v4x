<template>
  <BCard no-body class="text-bg-secondary border-0">
    <BCardBody class="p-0">
      <div class="p-3 mb-3">
        <h3 class="mb-3 fw-bold">
          <span>{{ 185 }}</span>
          <span class="text-white-50 ms-1 fs-sm">Products</span>
        </h3>
        <p class="mb-0 text-white-50">
          You currently have 185 active products available across your store inventory.
        </p>
      </div>

      <CustomEChart
        :extensions="[LineChart, TooltipComponent, CanvasRenderer]"
        :get-options="getProductsChartOptions"
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
import { getProductsChartOptions } from './data';
</script>
