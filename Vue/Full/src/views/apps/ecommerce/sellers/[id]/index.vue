<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Seller Details" subTitle="Ecommerce" />

            <BRow>
                <BCol xl="4">
                    <SellerProfile />
                </BCol>

                <BCol xl="8">
                    <SellerOverview />

                    <h4 class="my-4">My Products</h4>

                    <BRow>
                        <BCol xs="12">
                            <SellerProducts />

                        </BCol>
                    </BRow>

                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import SellerProfile from './components/SellerProfile.vue';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import SellerOverview from './components/SellerOverview.vue';
import SellerProducts from './components/SellerProducts.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

usePageMeta('Seller Details')

</script>

<style scoped></style>