<template>

  <BContainer fluid>

    <PageBreadcrumb title="Dashboard"/>

    <BRow class="row-cols-xxl-4 row-cols-md-2 row-cols-1">
      <BCol v-for="(item,idx) in statistics" :key="idx">
        <StatisticWidget :item="item"/>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="12">
        <OrderStatistics/>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <ProductInventory/>
      </BCol>
      <BCol xxl="6">
        <RecentOrders/>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="12">
        <Transactions/>
      </BCol>
    </BRow>

  </BContainer>

</template>

<script setup lang="ts">
import StatisticWidget from "~/pages/(dashboards)/dashboard2/components/StatisticWidget.vue";
import OrderStatistics from "~/pages/(dashboards)/dashboard2/components/OrderStatistics.vue";
import ProductInventory from "~/pages/(dashboards)/dashboard2/components/ProductInventory.vue";
import RecentOrders from "~/pages/(dashboards)/dashboard2/components/RecentOrders.vue";
import Transactions from "~/pages/(dashboards)/dashboard2/components/Transactions.vue";
import {statistics} from "~/pages/(dashboards)/dashboard2/components/data";
import { usePageTitle } from "~/composables/usePageTitle";

usePageTitle('Dashboard2')
</script>