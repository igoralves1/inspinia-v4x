<template>
   <BCol
    class="p-3 rounded m-1 border border-dashed"
    :class="{ 'mt-xxl-0': item.id !== 1 }"
  >
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h3 class="mb-1">
          <span>
            <CountUp
            class="d-inline-flex"
              :endVal="item.value"
              :options="{decimalPlaces: 2,duration:1,enableScrollSpy: true, scrollSpyOnce: true}"
            />
          </span>{{ item.unit }}&nbsp;
          <span
            class="fs-base"
            :class="item.isPositive ? 'text-success' : 'text-danger'"
          >
            {{ item.isPositive ? '+' : '-' }}{{ item.percentage }}%
            <Icon :icon="item.percentageIcon" :size="13" />
          </span>
        </h3>
        <p class="mb-0 text-muted">{{ item.title }}</p>
      </div>

      <div class="avatar-xl">
        <span class="avatar-title text-bg-light rounded-circle">
          <Icon  :icon="item.icon" class="text-muted fs-2" />
        </span>
      </div>
    </div>
  </BCol>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { AnalyticsCardProps } from './types';
import CountUp from 'vue-countup-v3';

defineProps<{
  item:AnalyticsCardProps
}>();

</script>

<style scoped>

</style>