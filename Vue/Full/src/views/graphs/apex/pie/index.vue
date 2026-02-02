<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Pie Apexchart" subtitle="Charts" />
            <BRow>
                <BCol xl='6'>
                    <UICard title="Simple Pie Chart">
                        <CustomApexChart :get-options='getSimplePieChart' :series='getSimplePieChart().series'
                            type="pie" :height='320' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Simple Donut Chart">
                        <CustomApexChart :get-options='getSimpleDonutChart' :series='getSimpleDonutChart().series'
                            type="pie" :height='320' />
                    </UICard>
                </BCol>
            </BRow>
            <BRow>
                <BCol xl='6'>
                    <UICard title="Monochrome Pie Chart">
                        <CustomApexChart :get-options='getMonochromeChart' :series='getMonochromeChart().series'
                            type="pie" :height='320' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Gradient Donut Chart">
                        <CustomApexChart :get-options='getGradientDonutChart' :series='getGradientDonutChart().series'
                            type="pie" :height='320' />
                    </UICard>
                </BCol>
            </BRow>
            <BRow>
                <BCol xl='6'>
                    <UICard title="Patterned Donut Chart">
                        <CustomApexChart :get-options='getPatternedDonutChart' :series='getPatternedDonutChart().series'
                            type="donut" :height='320' />
                    </UICard>
                </BCol>
                <BCol xl='6'>
                    <UICard title="Pie Chart with Image fill">
                        <CustomApexChart :get-options='getImagePieChart' :series='getImagePieChart().series' type="pie"
                            :height='320' />
                    </UICard>
                </BCol>
            </BRow>
            <BRow>
                <BCol cols="12" md="6">
                    <UICard title="Donut Update">
                        <CustomApexChart :get-options="() => getDonutOptions(series)" :series="series" type="donut"
                            :height="320" />
                        <div class="text-center mt-2 d-flex justify-content-center gap-2 flex-wrap">
                            <BButton variant="primary" size="sm" @click="series = randomize(series)">
                                RANDOMIZE
                            </BButton>
                            <BButton variant="primary" size="sm" @click="series = appendData(series)">
                                ADD
                            </BButton>
                            <BButton variant="primary" size="sm" @click="series = removeData(series)">
                                REMOVE
                            </BButton>
                            <BButton variant="primary" size="sm" @click="series = initialSeries">
                                RESET
                            </BButton>
                        </div>
                    </UICard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import CustomApexChart from '@/components/CustomApexChart.vue';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import { appendData, getDonutOptions, getGradientDonutChart, getImagePieChart, getMonochromeChart, getPatternedDonutChart, getSimpleDonutChart, getSimplePieChart, initialSeries, randomize, removeData } from './data';
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import { usePageMeta } from '@/composables/usePageMeta';
const series = ref<number[]>(initialSeries)


usePageMeta('Apex Pie Charts')
</script>

<style scoped></style>