<template>
  <UICard title="Pie Chart on Geo Map">
    <CustomEChart
      v-if="loaded"
      :getOptions="getOptions"
      :extensions="[GeoComponent, TooltipComponent, LegendComponent, PieChart, CanvasRenderer]"
      style="height: 400px"
    />
  </UICard>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { registerMap, type EChartsOption, type PieSeriesOption } from 'echarts'
import { PieChart } from 'echarts/charts'
import { GeoComponent, GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { getColor } from '@/helpers/chart'
import CustomEChart from '@/components/CustomEChart.vue'
import UICard from '@/components/UICard.vue'


const loaded = ref(false)

const randomPieSeries = (center: any, radius: number): PieSeriesOption => {
  const data = ['A', 'B', 'C', 'D'].map((t) => ({
    value: Math.round(Math.random() * 100),
    name: 'Category ' + t,
  }))
  return {
    type: 'pie',
    coordinateSystem: 'geo',
    tooltip: {
      formatter: '{b}: {c} ({d}%)',
      backgroundColor: getColor('secondary-bg'),
      borderColor: getColor('border-color'),
      textStyle: { color: getColor('light-text-emphasis') },
    },
    label: { show: false },
    labelLine: { show: false },
    animationDuration: 0,
    radius,
    center,
    data,
  }
}

const getOptions = (): EChartsOption => ({
  geo: {
    map: 'USA',
    roam: true,
    itemStyle: {
      borderColor: getColor('border-color'),
      areaColor: getColor('secondary'),
    },
    label: { color: '#fff' },
    emphasis: {
      label: { show: true, color: '#fff' },
      itemStyle: { areaColor: getColor('warning') },
    },
  },
  legend: { textStyle: { color: '#858d98' } },
  series: [
    randomPieSeries([-86.753504, 33.01077], 15),
    randomPieSeries([-116.853504, 39.8], 25),
    randomPieSeries([-99, 31.5], 30),
    randomPieSeries([-69, 45.5], 12),
  ],
  tooltip: {
    backgroundColor: getColor('secondary-bg'),
    borderColor: getColor('border-color'),
    textStyle: { color: getColor('light-text-emphasis') },
  },
})

onMounted(async () => {
  const res = await fetch('/data/usa_geo.json')
  const usaGeoJson = await res.json()
  registerMap('USA', usaGeoJson, {
    Alaska: { left: -131, top: 25, width: 15 },
    Hawaii: { left: -112, top: 25, width: 5 },
    'Puerto Rico': { left: -76, top: 26, width: 2 },
  })
  loaded.value = true
})
</script>
