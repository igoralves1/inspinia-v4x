<template>
    <VueECharts class="mx-auto" :option="options" style="height: 300px;width: 300px"
        :extensions="[GaugeChart, CanvasRenderer, TooltipComponent]" @chart-ready="onChartReady" />

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { use } from 'echarts/core'
import { GaugeChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { TooltipComponent } from 'echarts/components'
import { getTemperatureChart, setTemperatureChartInstance } from '../data'
import VueECharts from 'vue-echarts'
// Register ECharts components
use([GaugeChart, CanvasRenderer, TooltipComponent])

const fontFamily = typeof window !== 'undefined'
    ? getComputedStyle(document.body).fontFamily
    : 'sans-serif'

// Make options reactive
const options = ref({
    ...getTemperatureChart(),
    textStyle: { fontFamily },
})

// Reactive value for gauge
const value = ref(
    (options.value.series as any[])[0].data?.[0]?.value
)

// Update series value periodically
onMounted(() => {
    setInterval(() => {
        // generate new random value
        value.value = Math.floor(Math.random() * 100)

        const currentSeries = (options.value.series as any[])[0] ?? { data: [] }
        // update options to reflect new value
        options.value = {
            ...options.value,
            series: [
                {
                    ...currentSeries,
                    data: [{ value: value.value, name: 'Temperature' }],
                },
            ],
        }
    }, 1000)
})

const onChartReady = (chartInstance: any) => {
    setTemperatureChartInstance(chartInstance)
}
</script>
