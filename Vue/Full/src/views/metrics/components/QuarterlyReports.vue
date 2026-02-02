<template>
    <UICard body-class="p-0" title="Quarterly Reports" isCollapsable isReloadable isCloseable>
        <div class="table-responsive mb-0">
            <table class="table table-hover table-custom table-nowrap table-centered mb-0">
                <thead class="bg-light bg-opacity-25 thead-sm">
                    <tr class="text-uppercase fs-xxs">
                        <th class="text-muted">Quarter</th>
                        <th class="text-muted">Revenue</th>
                        <th class="text-muted">Expense</th>
                        <th class="text-muted">Margin</th>
                        <th class="text-muted">•••</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="report in quarterlyReports" :key="report.id">
                        <td>
                            <h5 class="mb-0">{{ report.quarter }}</h5>
                            <span class="text-muted fs-xs">{{ report.period }}</span>
                        </td>
                        <td>{{ report.revenue }}</td>
                        <td>{{ report.expense }}</td>
                            <td>{{ report.margin }}</td>
                        <td style="width: 60px">
                            <div dir="ltr">
                                <CustomEChart :extensions="[PieChart, TooltipComponent, CanvasRenderer]"
                                    :get-options="getPieEchartOptions" :style="{ height: '30px', width: '30px' }" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </UICard>
</template>

<script setup lang="ts">
import { PieChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { quarterlyReports } from './data'
import UICard from '@/components/UICard.vue'
import { getPieEchartOptions } from '@/views/dashboards/dashboard/components/data'
</script>
