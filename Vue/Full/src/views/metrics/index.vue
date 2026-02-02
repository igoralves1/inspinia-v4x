<template>
    <MainLayout>
        <div class="container-fluid">
            <PageBreadcrumb title="Metrics" />

            <BRow class="row-cols-xxl-4 row-cols-md-2 row-cols-1">
                <BCol v-for="(item, idx) in statisticCardData" :key="idx">
                    <StatisticCard :item="item" />
                </BCol>
            </BRow>

            <BRow class="row-cols-xxl-4 row-cols-md-2 row-cols-1">
                <BCol v-for="(item, idx) in statisticsData.slice(0, 4)" :key="idx">
                    <StatisticWidgetChartRight v-if="idx % 2 === 0" :item="item" />
                    <StatisticWidgetChartLeft v-else :item="item" />
                </BCol>
            </BRow>

            <BRow class="row-cols-xxl-4 row-cols-md-2 row-cols-1">
                <BCol v-for="(item, idx) in statisticsData.slice(4, 8)" :key="idx">
                    <StatisticWidgetChartRight v-if="idx % 2 === 0" :item="item" />
                    <StatisticWidgetChartLeft v-else :item="item" />
                </BCol>
            </BRow>

            <BRow class="row-cols-xxl-4 row-cols-md-2 row-cols-1">
                <BCol v-for="(item, idx) in statisticsData.slice(8, 12)" :key="idx">
                    <StatisticWidgetChartRight v-if="idx % 2 === 0" :item="item" />
                    <StatisticWidgetChartLeft v-else :item="item" />
                </BCol>
            </BRow>

            <BRow>
                <BCol xxl="4">
                    <QuarterlyReports />
                </BCol>
                <BCol xxl="8">
                    <BRow>
                        <BCol xl="4">
                            <OrdersCard />
                        </BCol>
                        <BCol xl="4">
                            <ProductsChart />
                        </BCol>
                        <BCol xl="4">
                            <ProfitOverviewChart />
                        </BCol>
                    </BRow>
                </BCol>
            </BRow>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import StatisticCard from './components/StatisticCard.vue';
import StatisticWidgetChartRight from './components/StatisticWidgetChartRight.vue';
import StatisticWidgetChartLeft from './components/StatisticWidgetChartLeft.vue';
import ProfitOverviewChart from './components/ProfitOverviewChart.vue';
import ProductsChart from './components/ProductsChart.vue';
import OrdersCard from './components/OrdersCard.vue';
import QuarterlyReports from './components/QuarterlyReports.vue';
import { statisticCardData, statisticsData } from './components/data';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';


usePageMeta('Metrics')

</script>