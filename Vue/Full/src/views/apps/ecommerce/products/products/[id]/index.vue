<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Product Details" subTitle="Ecommerce" />
            <BRow>
                <BCol xs="12">
                    <BCard no-body>
                        <BCardBody>
                            <BRow>
                                <BCol xl="4">
                                    <ProductDisplay />
                                </BCol>

                                <BCol xl="8">
                                    <div class="p-4">
                                        <ProductDetails />
                                        <ProductReviews />

                                    </div>
                                </BCol>
                            </BRow>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import ProductDisplay from './components/ProductDisplay.vue';
import ProductDetails from './components/ProductDetails.vue';
import ProductReviews from './components/ProductReviews.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

usePageMeta('Product Details')
</script>

<style scoped></style>