<template>
  <UICard title="Area Chart - Datetime X-axis">
    <div class="toolbar apex-toolbar d-flex gap-2 mb-3">
      <BButton
        v-for="range in ['1M', '6M', '1Y', 'YTD', 'ALL']"
        :key="range"
        size="sm"
        variant="light"
        :class="{ active: activeRange === range }"
        @click="filterChartRange(range)"
      >
        {{ range }}
      </BButton>
    </div>

    <CustomApexChart
      :get-options="() => getAreaChartDateTimeChart(filteredData)"
      :series="series"
      type="area"
      :height="350"
    />
  </UICard>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import { datetimeData, getAreaChartDateTimeChart } from '../data'
import { BButton } from 'bootstrap-vue-next'
import UICard from '@/components/UICard.vue'
import CustomApexChart from '@/components/CustomApexChart.vue'

// Reactive state
const activeRange = ref('1Y')
const filteredData = ref([...datetimeData])

const filterChartRange = (range: string) => {
  const now = new Date(datetimeData[datetimeData.length - 1]![0]!)
  let fromDate: Date

  switch (range) {
    case '1M':
      fromDate = new Date(now)
      fromDate.setMonth(now.getMonth() - 1)
      break
    case '6M':
      fromDate = new Date(now)
      fromDate.setMonth(now.getMonth() - 6)
      break
    case '1Y':
      fromDate = new Date(now)
      fromDate.setFullYear(now.getFullYear() - 1)
      break
    case 'YTD':
      fromDate = new Date(now.getFullYear(), 0, 1)
      break
    default:
      fromDate = new Date(datetimeData[0]![0]!)
  }

  filteredData.value = datetimeData.filter((point) => point[0]! >= fromDate.getTime())
  activeRange.value = range
}

// Chart series computed property
const series = computed(() => [
  { name: 'Inspinia', data: filteredData.value }
])
</script>

<style scoped>

</style>
