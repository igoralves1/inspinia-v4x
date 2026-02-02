<template>
  <MainLayout>
       <Head title="Dashboard" />
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
import MainLayout from '@/layouts/MainLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import StatisticWidget from '@/pages/dashboard/components/StatisticWidget.vue'
import OrderStatistics from '@/pages/dashboard/components/OrderStatistics.vue'
import ProductInventory from '@/pages/dashboard/components/ProductInventory.vue'
import RecentOrders from '@/pages/dashboard/components/RecentOrders.vue'
import Transactions from '@/pages/dashboard/components/Transactions.vue'
import { statistics } from '@/pages/dashboard/components/data'
import { Head } from '@inertiajs/vue3'

</script>
