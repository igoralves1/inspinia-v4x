<template>
    <CustomEChart :extensions="[BarChart, CanvasRenderer]" :getOptions="getBarRaceChart" :style="{ height: '300px' }"
        @chart-ready="onChartReady" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import CustomEChart from '@/components/CustomEChart.vue'
import { getBarRaceChart, setBarRaceChartInstance, startBarRaceChart } from '../data'



// trigger bar race animation
onMounted(() => {
    startBarRaceChart()
})

// bind chart ready event
const onChartReady = (chartInstance: any) => {
    setBarRaceChartInstance(chartInstance)
}
</script>
