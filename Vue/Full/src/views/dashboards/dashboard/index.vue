<template>
    <MainLayout>
        <BContainer fluid>
            <BRow class="mt-3">
                <BCol xs="12">
                    <WelcomeRevenueProgress />
                </BCol>
            </BRow>
            <BRow className="row row-cols-xxl-5 row-cols-md-3 row-cols-1 align-items-center">
                <BCol v-for="card in statCards" :key="card.id" :lg="card.id === 5 ? true : undefined"
                    :md="card.id === 5 ? 'auto' : undefined">
                    <StatisticCard :item="card" />
                </BCol>
            </BRow>
            <BRow>
                <BCol xxl="4">
                    <QuarterlyReports />

                    <ProjectPerformance />
                </BCol>

                <BCol xxl="4" xl="6">
                    <ProjectUpdates />
                </BCol>

                <BCol xxl="4" xl="6">
                    <Discussions />
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from "bootstrap-vue-next";
import WelcomeRevenueProgress from "./components/WelcomeRevenueProgress.vue";
import StatisticCard from "./components/StatisticCard.vue";
import QuarterlyReports from "./components/QuarterlyReports.vue";
import ProjectUpdates from "./components/ProjectUpdates.vue";
import Discussions from "./components/Discussions.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { statCards } from "./components/data";
import { usePageMeta } from "@/composables/usePageMeta";
import ProjectPerformance from "./components/ProjectPerformance.vue";


usePageMeta('Dashboard')
</script>

<style scoped></style>