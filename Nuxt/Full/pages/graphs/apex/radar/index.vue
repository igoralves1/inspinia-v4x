<template>
    <BContainer fluid>
        <PageBreadcrumb title="Radar Apexchart" subtitle="Charts" />

        <BRow>
            <BCol xl="6">
                <UICard title="Basic Radar Chart">
                    <CustomApexChart :getOptions="getBasicRadarChart" :series="getBasicRadarChart().series" type="radar"
                        height="350" />
                </UICard>
            </BCol>

            <BCol xl="6">
                <UICard title="Radar with Polygon-fill">
                    <CustomApexChart :getOptions="getRadarPolygonChart" :series="getRadarPolygonChart().series"
                        type="radar" height="350" />
                </UICard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <UICard title="Radar – Multiple Series">
                    <CustomApexChart :getOptions="() => ({ ...getRadarMultiPleSeriesChart(), series: series })"
                        :series="series" type="radar" height="350" />
                    <div class="text-center mt-2">
                        <BButton size="sm" variant="primary" @click="handleUpdate">
                            Update
                        </BButton>
                    </div>
                </UICard>
            </BCol>
        </BRow>
    </BContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import {
    generateRandomSeries,
    getBasicRadarChart,
    getRadarMultiPleSeriesChart,
    getRadarPolygonChart,
} from './data'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'
import PageBreadcrumb from '~/components/PageBreadcrumb.vue'
import UICard from '~/components/UICard.vue'
import CustomApexChart from '~/components/CustomApexChart.vue'

const series = ref(generateRandomSeries())

const handleUpdate = () => {
    series.value = generateRandomSeries()
}

usePageTitle('Apex Radar Charts')
</script>
