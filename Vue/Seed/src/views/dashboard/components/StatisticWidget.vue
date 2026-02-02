<template>
  <BCard no-body>
    <BCardHeader class="d-flex border-dashed justify-content-between align-items-center">
      <h5 class="card-title">{{ item.title }}</h5>
      <span v-if="item.badge" :class="`badge badge-soft-${item.badge.variant}`">
        {{ item.badge.text }}
      </span>
    </BCardHeader>

    <BCardBody>
      <div class="d-flex justify-content-between align-items-center">
        <CustomEChart
          v-if="item.chartOptions"
          :get-options="item.chartOptions"
          :extensions="[
            CanvasRenderer,
            PieChart,
            TitleComponent,
            TooltipComponent,
            LegendComponent,
          ]"
          :style="{ minHeight: '60px', width: '60px' }"
        />

        <div class="text-end">
          <h3 class="mb-2 fw-normal">
            <CountUp
              :end-val="item.value"
              :options="{
                prefix: item.prefix ?? '',
                suffix: item.suffix ?? '',
                enableScrollSpy: true,
                scrollSpyOnce: true,
              }"
            />
          </h3>
          <p class="mb-0 text-muted">
            <span>{{ item.description }}</span>
          </p>
        </div>
      </div>
    </BCardBody>
  </BCard>
</template>

<script setup lang="ts">
import type { StatisticsWidgetType } from '@/views/dashboard/components/types'
import CountUp from 'vue-countup-v3'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components'
import CustomEChart from '@/components/CustomEChart.vue'

type PropsType = {
  item: StatisticsWidgetType
}

defineProps<PropsType>()
</script>
