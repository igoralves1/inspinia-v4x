<template>
  <BContainer fluid>
    <PageBreadcrumb title="GEO Maps" subtitle="Charts" />

    <BRow>
      <BCol xl="6">
        <UsaMap />
      </BCol>

      <BCol xl="6">
        <MorphingMapBarChart />
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <GeoMapWithPieChart />
      </BCol>

      <BCol xl="6">
        <GeoSVGScatterMap />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import PageBreadcrumb from '~/components/PageBreadcrumb.vue'
import GeoMapWithPieChart from './components/GeoMapWithPieChart.vue'
import GeoSVGScatterMap from './components/GeoSVGScatterMap.vue'
import MorphingMapBarChart from './components/MorphingMapBarChart.vue'
import UsaMap from './components/UsaMap.vue'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'

usePageTitle('Echart Geo Map Chart')
</script>
