<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Product Views" subTitle="Ecommerce" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BCard no-body>
                        <BCardHeader class="border-light justify-content-between">

                            <div class="d-flex gap-2">
                                <div class="app-search">
                                    <input v-model="searchQuery" type="search" class="form-control"
                                        placeholder="Search report...">
                                    <Icon  icon="lucide:search" class="app-search-icon text-muted" />
                                </div>

                                <BButton v-if="selected.length" variant="danger" @click="handleDeleteSelected">
                                    Delete
                                </BButton>
                            </div>

                            <div class="d-flex align-items-center gap-2">
                                <span class="me-2 fw-semibold">Filter By:</span>

                                <div class="app-search">
                                    <select class="form-select form-control my-1 my-md-0">
                                        <option value="All">Sales Performance</option>
                                        <option value="1000+">Top Selling</option>
                                        <option value="1-1000">Low Selling</option>
                                        <option value="0">No Sales</option>
                                    </select>
                                    <Icon icon="lucide:trending-up" class="app-search-icon text-muted" />
                                </div>

                                <div>
                                    <BFormSelect v-model="perPage" :options="perPageOptions"
                                        class="form-control my-1 my-md-0" />
                                </div>
                            </div>
                        </BCardHeader>

                        <BTable show-empty :filter="searchQuery" empty-text="Nothing found."
                            v-model:selected-rows="selected" thead-class="bg-light align-middle bg-opacity-25 thead-sm"
                            hover :fields="fields" :items="products" :per-page="perPage" :current-page="currentPage"
                            @filtered="onFiltered" responsive
                            class="table table-custom table-nowrap table-centered mb-0 w-100">
                            <template #head()="data">
                                <span class="text-uppercase fs-xxs">{{ data.label }}</span>
                            </template>
                            <template #head(id)>
                                <input class="form-check-input form-check-input-light fs-14 mt-0" type="checkbox"
                                    id="select-all-products" value="option" :checked="allSelected"
                                    :indeterminate="isIndeterminate" @change="toggleSelectAll" />
                            </template>
                            <template #head(action)>
                                <span class="text-uppercase d-flex justify-content-center fs-xxs">Actions</span>
                            </template>
                            <template #cell(id)="data">
                                <input class="form-check-input form-check-input-light fs-14 product-item-check mt-0"
                                    type="checkbox" :value="data.item" :checked="selected.includes(data.item)"
                                    @change="onToggleRow(data.item, $event)" />
                            </template>
                            <template #cell(name)="{ item }">
                                <div class="d-flex align-items-center">
                                    <div class="avatar-md me-3">
                                        <img :src="item.image" alt="Product" class="img-fluid rounded" />
                                    </div>
                                    <div>
                                        <h5 class="mb-0">
                                            <RouterLink to="/products/1" class="link-reset">{{ item.name }}</RouterLink>
                                        </h5>
                                    </div>
                                </div>
                            </template>
                            <template #cell(rating)="{ item }">
                                <Rating :rating="item.rating" class="d-inline-flex align-items-center gap-1" />
                                <span class="ms-1">
                                    <RouterLink to="/reviews" class="link-reset fw-semibold">({{ item.views }})
                                    </RouterLink>
                                </span>
                            </template>
                            <template #cell(report)="{ item }">
                                <CustomApexChart :getOptions="() => getReportsChartOptions(item.chartType)"
                                    :series="getReportsChartOptions(item.chartType).series" :height="30" :width="100" />
                            </template>

                        </BTable>
                        <BCardFooter class="border-0">
                            <TablePagination v-model:currentPage="currentPage" :per-page="perPage"
                                :total-items="totalRows" label="products" />
                        </BCardFooter>
                    </BCard>
                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardFooter, BCardHeader, BCol, BContainer, BFormSelect, BRow, type TableFieldRaw } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import TablePagination from '@/components/TablePagination.vue';
import { getReportsChartOptions, productsData, type ProductType } from './data';
import Rating from '@/components/Rating.vue';
import CustomApexChart from '@/components/CustomApexChart.vue';
import { ref } from 'vue';
import { usePageMeta } from '@/composables/usePageMeta';
import { useTableActions } from '@/composables/useTableActions';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';


const fields: Exclude<TableFieldRaw<ProductType>, string>[] = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Product', sortable: true },
    { key: 'sku', label: 'Sku', sortable: true },
    { key: 'price', label: 'Price   ', sortable: true },
    { key: 'rating', label: 'Rating', sortable: true },
    { key: 'views', label: 'Views', sortable: true },
    { key: 'orders', label: 'Orders', sortable: true },
    { key: 'conversion', label: 'Conversation', sortable: true },
    { key: 'report', label: 'Report', sortable: false },
]

const searchQuery = ref('')

const perPageOptions = [5, 8, 10, 20, 50]

const currentPage = ref(1)
const perPage = ref(8)
const totalRows = ref(productsData.length)
const products = ref<ProductType[]>(productsData)

function onFiltered(filteredItems: ProductType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}

function adjustPage() {
    const totalPages = Math.ceil(products.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}


function handleDeleteSelected() {
    deleteSelected()
    totalRows.value = products.value.length
    adjustPage()
}

const { selected, toggleSelectAll, onToggleRow, deleteSelected, allSelected, isIndeterminate } = useTableActions(products)

usePageMeta('Product Views')

</script>

<style scoped></style>