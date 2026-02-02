<template>
  <BCard no-body>
    <BCardHeader class="d-flex border-dashed justify-content-between align-items-center">
      <h5 class="card-title">{{ item.title }}</h5>
      <span v-if="item.badgeColor" :class="`badge badge-soft-${item.badgeColor}`">
        {{ item.badgeText }}
      </span>
    </BCardHeader>

    <BCardBody>
      <div class="d-flex justify-content-between align-items-center">

        <CustomEChart
             :get-options="getStatisticChartOptions"
            :extensions="[CanvasRenderer,PieChart,TitleComponent,TooltipComponent,LegendComponent]"
            :style="{minHeight: '60px', width: '60px'}"
        />

        <div class="text-end">
          <h3 class="mb-2 fw-normal">
            
              <CountUp
                  :end-val="item.count.value"
                  :options="{ prefix:item.count.prefix ?? '',suffix: item.count.suffix ?? '',enableScrollSpy: true, scrollSpyOnce: true }"
              />
            
          </h3>
          <p class="mb-0 text-muted">
            <span>{{ item.metric }}</span>
          </p>
        </div>
      </div>
    </BCardBody>
  </BCard>
</template>

<script setup lang="ts">
import CountUp from 'vue-countup-v3'
import {CanvasRenderer} from 'echarts/renderers';
import {PieChart} from 'echarts/charts';
import {LegendComponent, TitleComponent, TooltipComponent,} from 'echarts/components';
import type { StatisticCardType } from './types';
import { getStatisticChartOptions } from './data';

type PropsType = {
  item: StatisticCardType;
}

defineProps<PropsType>()
</script>