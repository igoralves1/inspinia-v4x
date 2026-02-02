<template>
    <BCard no-body>
        <BCardBody class="p-0">
            <BRow class="g-0">
                <BCol xxl="3" xl="6" class="order-xl-1 order-xxl-0">
                    <div class="p-4 border-end border-dashed">
                        <h4 class="fs-lg mb-1">Welcome to INSPINIA+ Admin Theme.</h4>
                        <span class="text-muted">
                            You have <span class="text-primary fw-semibold">42</span> messages and 6 notifications.
                        </span>

                        <BListGroup flush class="mt-3">
                            <BListGroupItem v-for="item in activityItems" :key="item.id"
                                class="d-flex justify-content-between align-items-center border-0 px-0">
                                <div>
                                    <BBadge :variant="item.badgeVariant" :text-variant="item.badgeText"
                                        class="avatar-xs me-2">
                                        <span class="avatar-title fw-medium fs-sm">{{ item.id }}</span>
                                    </BBadge>
                                    {{ item.text }}
                                </div>
                                <span class="text-muted">{{ item.time }}</span>
                            </BListGroupItem>
                        </BListGroup>

                        <div class="text-center mt-2">
                            <BButton variant="secondary" class="rounded-pill" href="#!">
                                View Messages
                            </BButton>
                        </div>
                    </div>
                    <hr class="d-xxl-none border-light m-0" />
                </BCol>

                <BCol xxl="6" class="order-xl-3 order-xxl-1">
                    <div class="px-4 py-3 border-end border-dashed">
                        <div class="d-flex justify-content-between mb-3">
                            <h4 class="card-title">Revenue</h4>
                            <RouterLink to="#" class="link-reset text-decoration-underline fw-semibold link-offset-3">
                                View Reports
                                <Icon icon="tabler:arrow-right" />
                            </RouterLink>
                        </div>

                        <b-row class="text-center mb-3">
                            <BCol>
                                <div class="bg-light bg-opacity-50 p-2">
                                    <h5 class="m-0">
                                        <span class="text-muted me-1">Total Revenue:</span>

                                        <CountUp class="d-inline-flex" :end-val="40"
                                            :options="{ prefix: '$', suffix: 'M', enableScrollSpy: true, scrollSpyOnce: true }" />

                                    </h5>
                                </div>
                            </BCol>
                            <BCol>
                                <div class="bg-light bg-opacity-50 p-2">
                                    <h5 class="m-0">
                                        <span class="text-muted me-1">Total Orders:</span>

                                        <CountUp class="d-inline-flex" :end-val="50.90"
                                            :options="{ suffix: 'K', decimalPlaces: 2 }" />

                                    </h5>
                                </div>
                            </BCol>
                        </b-row>

                        <div class="position-relative" dir="ltr">
                            <div class="py-2 px-3 rounded-3 bg-light-subtle border text-primary z-1 position-absolute"
                                style="top: 4.5%; left: 12%;">
                                <p class="mb-2 text-uppercase fs-xxs fw-semibold">Growth Rate</p>
                                <h4 class="mb-0 fw-bold text-primary">
                                    89.24%
                                    <Icon icon="tabler:trending-up" />
                                </h4>
                            </div>

                            <CustomEChart :get-options="getRevenueChartOptions"
                                :extensions="[LineChart, TooltipComponent, GridComponent, CanvasRenderer]"
                                :style="{ minHeight: '252px' }" />
                        </div>
                    </div>
                </BCol>

                <BCol xxl="3" xl="6" class="order-xl-2 order-xxl-2">
                    <div class="p-3">
                        <h4 class="card-title mb-1">Project Progress</h4>
                        <p class="text-muted fs-xs">You have 21 projects with not completed task.</p>

                        <b-row class="mt-4">
                            <BCol>
                                <CustomEChart :get-options="getProgressChartOptions"
                                    :extensions="[PieChart, TooltipComponent, GridComponent, CanvasRenderer]"
                                    :style="{ minHeight: '278px' }" />
                            </BCol>
                        </b-row>
                    </div>
                    <hr class="d-xxl-none border-light m-0" />
                </BCol>
            </BRow>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { activityItems, getProgressChartOptions, getRevenueChartOptions } from './data';
import { CanvasRenderer } from 'echarts/renderers';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { LineChart, PieChart } from 'echarts/charts';
import { BBadge, BButton, BCard, BCol, BListGroupItem, BRow } from 'bootstrap-vue-next';
import CountUp from 'vue-countup-v3'
import CustomEChart from '@/components/CustomEChart.vue';
import { Icon } from '@iconify/vue';
</script>
