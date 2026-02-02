<template>
  <UICard title="Morphing between Map and Bar Chart">
    <CustomEChart
      v-if="loaded"
      :extensions="[MapChart, BarChart, TooltipComponent, VisualMapComponent, GridComponent, GeoComponent, CanvasRenderer]"
      :get-options="()=>getOptions"
      style="height: 400px"
    />
  </UICard>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

import type { EChartsOption } from 'echarts'
import { registerMap } from 'echarts'
import { BarChart, MapChart } from 'echarts/charts'
import {
  GeoComponent,
  GridComponent,
  TooltipComponent,
  VisualMapComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { populationData } from '../data'
import UICard from '@/components/UICard.vue'
import CustomEChart from '@/components/CustomEChart.vue'
import { getColor } from '@/helpers/chart'

// Sort population data
populationData.sort((a, b) => a.value - b.value)

const currentView = ref<'map' | 'bar'>('map')
const loaded = ref(false)
let intervalId: any = null

onMounted(async () => {
  // Load geo map JSON
  const res = await fetch('/data/usa_geo.json')
  const geoJson = await res.json()
  registerMap('USA', geoJson, {
    Alaska: { left: -131, top: 25, width: 15 },
    Hawaii: { left: -112, top: 25, width: 5 },
    'Puerto Rico': { left: -76, top: 26, width: 2 }
  })
  loaded.value = true

  // Toggle between map and bar chart
  intervalId = setInterval(() => {
    currentView.value = currentView.value === 'map' ? 'bar' : 'map'
  }, 3000)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})

const getOptions = computed((): EChartsOption => {
  if (currentView.value === 'map') {
    return {
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: getColor('secondary-bg'),
        borderColor: getColor('border-color'),
        textStyle: { color: getColor('light-text-emphasis') },
        borderWidth: 1,
        transitionDuration: 0,
        formatter: (params: any) =>
          params.value != null && params.value !== '-'
            ? `<strong>${params.name}</strong><br/>Population: ${params.value.toLocaleString()}`
            : `<strong>${params.name}</strong><br/>No data`
      },
      visualMap: {
        left: 'right',
        min: 500000,
        max: 38000000,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026'
          ]
        },
        text: ['High', 'Low'],
        calculable: true,
        textStyle: {
          color: getColor('light-text-emphasis')
        }
      },
      series: [
        {
          id: 'population',
          type: 'map',
          roam: true,
          map: 'USA',
          animationDurationUpdate: 1000,
          universalTransition: true,
          data: populationData,
          label: { show: false },
          emphasis: { label: { show: false } }
        }
      ]
    }
  } else {
    return {
      tooltip: {
        trigger: 'axis',
        padding: [5, 0],
        backgroundColor: getColor('secondary-bg'),
        borderColor: getColor('border-color'),
        textStyle: { color: getColor('light-text-emphasis') },
        borderWidth: 1,
        transitionDuration: 0.125,
        axisPointer: { type: 'none' },
        shadowBlur: 2,
        shadowColor: 'rgba(76, 76, 92, 0.15)',
        shadowOffsetX: 0,
        shadowOffsetY: 1,
        formatter: (params: any) => {
          const title = params[0].name
          let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor(
            'border-color'
          )}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`
          params.forEach((item: any) => {
            content += `<div style="margin-top: 4px; padding: 3px 15px;">
              <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
              <strong>${item.value}</strong>
            </div>`
          })
          return content
        }
      },
      xAxis: {
        type: 'value',
        axisLabel: { color: getColor('body-color'), margin: 15 },
        splitLine: {
          show: true,
          lineStyle: { color: getColor('light') }
        }
      },
      yAxis: {
        type: 'category',
        axisLabel: { rotate: 30, color: getColor('body-color'), margin: 15 },
        data: populationData.map((item) => item.name)
      },
      animationDurationUpdate: 1000,
      series: [
        {
          type: 'bar',
          id: 'population',
          data: populationData.map((item) => item.value),
          universalTransition: true
        }
      ],
      grid: { right: '5%', left: '13%', bottom: '10%', top: '5%' }
    }
  }
})
</script>
