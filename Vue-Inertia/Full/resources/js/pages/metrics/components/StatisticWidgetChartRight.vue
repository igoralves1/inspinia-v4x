<template>
    <BCard no-body>
        <BCardHeader class="d-flex border-0 justify-content-between align-items-center">
            <h5 class="card-title">{{ props.item.title }}</h5>
            <span v-if="props.item.badge" :class="`badge badge-soft-${props.item.badge.variant}`">
                {{ props.item.badge.text }}
            </span>
        </BCardHeader>

        <BCardBody>
            <div class="d-flex justify-content-between align-items-center">
                <div class="text-start">
                    <h3 class="mb-1 fw-normal">
                        
                            <CountUp :end-val="item.count.value"
                                :options="{ prefix: item.count.prefix ?? '', suffix: item.count.suffix ?? '', enableScrollSpy: true, scrollSpyOnce: true }" />
                        
                    </h3>
                    <p class="mb-0 text-muted">
                        <span>{{ props.item.description }}</span>
                    </p>
                </div>

                <CustomEChart v-if="props.item.chartOptions" :extensions="getExtensions(props.item.ChartType)"
                    :get-options="props.item.chartOptions"
                    :style="{ height: props.item.chartHeight, width: props.item.chartWidth }" />
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import { TooltipComponent, GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import CountUp from 'vue-countup-v3'
import type { StatisticsWithChartType } from './types'
import CustomEChart from '@/components/CustomEChart.vue'

const props = defineProps<{ item: StatisticsWithChartType }>()

const getExtensions = (chartType: string) => {
    const map: Record<string, any> = {
        pie: PieChart,
        line: LineChart,
        bar: BarChart,
    }
    const chartExtension = map[chartType] ? [map[chartType]] : []
    return [...chartExtension, TooltipComponent, CanvasRenderer, GridComponent]
}
</script>