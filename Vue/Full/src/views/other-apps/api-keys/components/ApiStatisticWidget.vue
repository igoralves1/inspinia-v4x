<template>
    <BCard no-body>
        <BCardBody>
            <div class="d-flex align-items-center gap-3">
                <div :class="`avatar-xl bg-light text-${item.variant} rounded-circle`">
                    <span class="avatar-title">
                        <Icon :icon="item.icon"  class="fs-xxl" />
                    </span>
                </div>

                <div class="flex-grow-1">
                    <h6 class="mb-2 text-muted text-uppercase fs-xs">{{ item.title }}</h6>
                    <h4 class="mb-0 fw-bold">{{ item.value }}</h4>
                </div>
            </div>

            <div v-if="item.chartOptions" class="mt-3">
                <CustomApexChart :get-options="item.chartOptions" :series="item.chartOptions().series" type="area"
                    :height="60" />
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody } from 'bootstrap-vue-next'
import type { StatisticsWidgetType } from '../data';
import CustomApexChart from '@/components/CustomApexChart.vue';
import { Icon } from '@iconify/vue';

defineProps<{
    item: StatisticsWidgetType
}>()
</script>