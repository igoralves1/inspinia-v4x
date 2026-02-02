<template>
    <MainLayout>

        <BContainer fluid>
            <PageBreadcrumb title="Order Details" subTitle="Ecommerce" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BRow>
                        <BCol xl="9">
                            <OrderSummary />

                            <ShippingActivity />
                        </BCol>


                        <BCol xl="3">
                            <CustomerDetails />

                            <ShippingAddress />

                            <BillingDetails />

                        </BCol>
                    </BRow>
                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import OrderSummary from './components/OrderSummary.vue';
import ShippingActivity from './components/ShippingActivity.vue';
import CustomerDetails from './components/CustomerDetails.vue';
import ShippingAddress from './components/ShippingAddress.vue';
import BillingDetails from './components/BillingDetails.vue';
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>