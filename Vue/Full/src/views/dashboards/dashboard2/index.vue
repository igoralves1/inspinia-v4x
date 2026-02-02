<template>
    <MainLayout>
        <BContainer fluid>

            <PageBreadcrumb title="Dashboard" />

            <BRow class="row-cols-xxl-4 row-cols-md-2 row-cols-1">
                <BCol v-for="(item, idx) in statistics" :key="idx">
                    <StatisticWidget :item="item" />
                </BCol>
            </BRow>

            <BRow>
                <BCol cols="12">
                    <OrderStatistics />
                </BCol>
            </BRow>

            <BRow>
                <BCol xxl="6">
                    <ProductInventory />
                </BCol>
                <BCol xxl="6">
                    <RecentOrders />
                </BCol>
            </BRow>

            <BRow>
                <BCol cols="12">
                    <Transactions />
                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>

</template>

<script setup lang="ts">

import MainLayout from "@/layouts/MainLayout.vue";
import StatisticWidget from "./components/StatisticWidget.vue";
import OrderStatistics from "./components/OrderStatistics.vue";
import ProductInventory from "./components/ProductInventory.vue";
import RecentOrders from "./components/RecentOrders.vue";
import Transactions from "./components/Transactions.vue";
import { usePageMeta } from "@/composables/usePageMeta";
import { statistics } from "./components/data";
import PageBreadcrumb from "@/components/PageBreadcrumb.vue";

usePageMeta('Dashboard2')
</script>