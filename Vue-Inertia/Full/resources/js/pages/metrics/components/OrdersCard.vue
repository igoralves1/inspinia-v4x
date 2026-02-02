<template>
    <BCard no-body class="p-0">
        <BCardBody class="p-0">
            <div class="p-3">
                <h3 class="mb-3 fw-bold">
                    <span>{{ 421 }}</span>
                    <span class="text-muted ms-1 fs-sm">Orders</span>
                </h3>
                <p class="mb-0">
                    You have received 421 new orders, indicating a healthy sales trend over the past period.
                </p>
            </div>

            <div class="mb-3">
                <CustomEChart :extensions="[BarChart, TooltipComponent, CanvasRenderer]"
                    :get-options="getOrderChartOptions" :style="{ height: '120px' }" />
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BarChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { getOrderChartOptions } from './data'
import CustomEChart from '@/components/CustomEChart.vue'
</script>
