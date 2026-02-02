<template>
    <UICard title="Quarterly Reports" body-class="p-0" is-collapsable is-reloadable is-closeable>
        <div class="table-responsive">
            <table  class="table table-hover table-custom table-nowrap table-centered mb-0">
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
                    <tr v-for="(report,idx) in quarterlyReports" :key="idx">
                        <td>
                            <h5 class="fs-sm mb-1 fw-normal">{{ report.quarter }}</h5>
                            <span class="text-muted fs-xs">{{ report.period }}</span>
                        </td>
                        <td>{{ report.revenue }}</td>
                        <td>{{ report.expense }}</td>
                        <td>{{ report.margin }}</td>
                        <td style="width: 60px">
                            <div dir="ltr">
                                
                                    <CustomEChart :get-options="getPieEchartOptions"
                                        :extensions="[PieChart, TooltipComponent, GridComponent, CanvasRenderer]"
                                        :style="{ minHeight: '30px' , width: '30px' }" />
                                
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </UICard>
</template>

<script setup lang="ts">
import UICard from '@/components/UICard.vue';
import { getPieEchartOptions, quarterlyReports } from './data';
import { PieChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import CustomEChart from '@/components/CustomEChart.vue';


</script>

<style scoped></style>