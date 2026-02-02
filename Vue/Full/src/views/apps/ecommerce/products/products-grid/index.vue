<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Products Grid" subtitle="Ecommerce" />

            <BRow class="mb-2">
                <BCol lg="12">
                    <form class="bg-light-subtle rounded border p-3">
                        <div class="d-flex flex-wrap justify align-items-center gap-3">
                            <div class="d-lg-none d-flex gap-2">
                                <button class="btn btn-default btn-icon" type="button" @click="click">
                                    <Icon icon="tabler:menu-2" class="fs-lg" />
                                </button>
                            </div>
                            <h3 class="mb-0 fs-xl flex-grow-1">952 Products</h3>

                            <div class="d-flex gap-1">
                                <RouterLink to="/products-grid" class="btn btn-primary btn-icon">
                                    <Icon icon="lucide:layout-grid" class="fs-lg" />
                                </RouterLink>
                                <RouterLink to="/products" class="btn btn-soft-primary btn-icon">
                                    <Icon icon="lucide:list" class="fs-lg" />
                                </RouterLink>
                                <RouterLink to="/add-product" class="btn btn-danger ms-1">
                                    <Icon icon="lucide:plus" class="fs-sm me-2" /> Add Product
                                </RouterLink>
                            </div>
                        </div>
                    </form>
                </BCol>
            </BRow>

            <BRow class="g-2">
                <BCol xl="3">
                    <ProductFilter v-model:show="showFilter" />
                </BCol>

                <BCol xl="9">
                    <BRow class="row-cols-xxl-4 row-cols-lg-3 row-cols-sm-2 row-col-1 g-2">
                        <BCol v-for="(product, idx) of productsData" :key="idx">
                            <ProductCard :product="product" />
                        </BCol>
                    </BRow>

                    <div class="d-flex justify-content-between align-items-center mb-4 mt-3">
                        <span class="text-muted fst-italic">Last modification:
                            <Icon icon="tabler:clock" /> 4:55 pm -
                            22.04.2025
                        </span>
                        <BPagination v-model="currentPage" first-number last-number hide-ellipsis
                            :total-rows="totalRows" :per-page="perPage" class="pagination-boxed" />

                    </div>

                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow, BPagination } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import ProductFilter from './components/ProductFilter.vue';
import { productsData } from './data';
import ProductCard from './components/ProductCard.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import { ref } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

const showFilter = ref(false)

const perPage = ref(1)
const totalRows = ref(3)
const currentPage = ref(1)

const click = () => {
    showFilter.value = !showFilter.value
}

usePageMeta('Products Grid')
</script>

<style scoped></style>