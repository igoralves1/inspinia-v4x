<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Dashboard 3" />
            <BRow>
                <BCol md='12'>
                    <AnalyticsOverview />
                    <BRow>
                        <BCol xxl="4">
                            <SessionsDevice />
                        </BCol>
                        <BCol xxl="4">
                            <TrafficSources />
                        </BCol>
                        <BCol xxl="4" lg="6">
                            <TopCountries />
                        </BCol>
                    </BRow>
                    <BRow>
                        <BCol xs="12">
                            <TopCampaignPerformance />
                        </BCol>
                    </BRow>
                </BCol>
            </BRow>
        </BContainer>

        <ExtraSideData />
    </MainLayout>
</template>

<script setup lang="ts">
import { BContainer, BRow } from 'bootstrap-vue-next';
import AnalyticsOverview from './components/AnalyticsOverview.vue';
import SessionsDevice from './components/SessionsDevice.vue';
import TrafficSources from './components/TrafficSources.vue';
import TopCountries from './components/TopCountries.vue';
import TopCampaignPerformance from './components/TopCampaignPerformance.vue';
import ExtraSideData from './components/ExtraSideData.vue';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

usePageMeta('Dashboard3')
</script>

<style scoped></style>