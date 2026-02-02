<template>

    <VueApexCharts type="line" :height="350" :options="options" :series="series" />

</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { ApexOptions } from 'apexcharts'
import { createDailyTimeSeries, generateNewPoint, getRealTimeChartOptions } from '../data'
import VueApexCharts from 'vue3-apexcharts'

type DataPoint = [number, number]

// State
const series = ref<{ data: DataPoint[] }[]>([{ data: [] }])
const options = ref<ApexOptions>(getRealTimeChartOptions([]))

const dataRef = ref<DataPoint[]>([])
const lastDateRef = ref<number>(0)

let updateInterval: ReturnType<typeof setInterval> | null = null
let resetInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
    const initialData = createDailyTimeSeries(new Date('11 May 2024 GMT').getTime(), 10, { min: 10, max: 90 })
    dataRef.value = initialData
    lastDateRef.value = initialData[initialData.length - 1]![0]

    series.value = [{ data: [...initialData] }]
    options.value = getRealTimeChartOptions(initialData)

    updateInterval = setInterval(() => {
        const newPoint = generateNewPoint(lastDateRef.value, { min: 10, max: 90 })
        lastDateRef.value = newPoint[0]
        dataRef.value.push(newPoint)
        series.value = [{ data: [...dataRef.value] }]
    }, 2000)

    resetInterval = setInterval(() => {
        dataRef.value = dataRef.value.slice(-10)
        series.value = [{ data: [...dataRef.value] }]
    }, 60000)
})

onBeforeUnmount(() => {
    if (updateInterval) clearInterval(updateInterval)
    if (resetInterval) clearInterval(resetInterval)
})
</script>
