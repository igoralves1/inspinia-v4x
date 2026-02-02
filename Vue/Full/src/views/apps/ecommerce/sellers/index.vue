<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Sallers" subTitle="Ecommerce" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BCard no-body>
                        <BCardHeader class="border-light justify-content-between">

                            <div class="d-flex gap-2">
                                <div class="app-search">
                                    <input v-model="searchQuery" type="search" class="form-control"
                                        placeholder="Search seller...">
                                    <Icon  icon="lucide:search" class="app-search-icon text-muted" />
                                </div>
                                <BButton v-if="selected.length" variant="danger" @click="handleDeleteSelected">
                                    Delete
                                </BButton>

                            </div>

                            <div class="d-flex align-items-center gap-2">
                                <span class="me-2 fw-semibold">Filter By:</span>

                                <div class="app-search">
                                    <select data-table-range-filter="orders"
                                        class="form-select form-control my-1 my-md-0">
                                        <option value="All">Orders</option>
                                        <option value="20000+">Top Orders</option>
                                        <option value="0-20000">Low Orders</option>
                                        <option value="0">No Orders</option>
                                    </select>
                                    <Icon  icon="lucide:shopping-cart" class="app-search-icon text-muted" />
                                </div>

                                <div class="app-search">
                                    <select data-table-range-filter="revenue"
                                        class="form-select form-control my-1 my-md-0">
                                        <option value="All">Revenue</option>
                                        <option value="100k+">Top Revenue</option>
                                        <option value="50k-100k">Low Revenue</option>
                                        <option value="0">No Revenue</option>
                                    </select>
                                    <Icon  icon="lucide:dollar-sign" class="app-search-icon text-muted" />
                                </div>

                                <div class="app-search">
                                    <select data-table-range-filter="rating"
                                        class="form-select form-control my-1 my-md-0">
                                        <option value="All">Ratings</option>
                                        <option value="4-5">Top Rated</option>
                                        <option value="1-3">Low Rated</option>
                                        <option value="0">No Ratings</option>
                                    </select>
                                    <Icon  icon="lucide:star" class="app-search-icon text-muted" />
                                </div>

                                <div>
                                    <BFormSelect v-model="perPage" :options="perPageOptions"
                                        class="form-control my-1 my-md-0" />
                                </div>
                            </div>
                        </BCardHeader>

                        <BTable show-empty :filter="searchQuery" empty-text="Nothing found."
                            v-model:selected-rows="selected" thead-class="bg-light align-middle bg-opacity-25 thead-sm"
                            hover :fields="fields" :items="sellers" :per-page="perPage" :current-page="currentPage"
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
                            <template #cell(seller)="{ item }">
                                <div class="d-flex align-items-center">
                                    <div class="avatar-md me-3">
                                        <img :src="item.image" :alt="item.name" class="img-fluid rounded" />
                                    </div>
                                    <div>
                                        <h5 class="mb-1">
                                            <RouterLink to="/sellers/1" class="link-reset">{{ item.name }}</RouterLink>
                                        </h5>
                                        <p class="text-muted mb-0 fs-xxs">Since {{ item.sinceYear }}</p>
                                    </div>
                                </div>
                            </template>
                            <template #cell(rating)="{ item }">
                                <Rating :rating="item.rating" class="d-inline-flex align-items-center gap-1" />

                                <span class="ms-1">
                                    <RouterLink to="/reviews" class="link-reset fw-semibold">({{ item.rating }})
                                    </RouterLink>
                                </span>
                            </template>
                            <template #cell(location)="{ item }">
                                <span class="badge p-1 text-bg-light fs-sm">
                                    <img :src="item.flag" :alt="item.location" class="rounded-circle me-1"
                                        height="12" />
                                    {{ item.location }}
                                </span>
                            </template>
                            <template #cell(balance)="{ item }">
                                {{ currency }}{{ item.balance }}k
                            </template>
                            <template #cell(rank)="{ item }">
                                {{ item.id }}{{ item.id === 1 ? 'st' : item.id === 2 ? 'nd' : item.id === 3 ? 'rd' :
                                'th' }}
                            </template>
                            <template #cell(report)="{ item }">
                                <CustomApexChart :get-Options="() => getSellerReportChartOptions(item.chartType)"
                                    :series="getSellerReportChartOptions(item.chartType).series" :height="30"
                                    style="max-width: 100px;" />
                            </template>

                        </BTable>
                        <BCardFooter class="border-0">
                            <TablePagination v-model:currentPage="currentPage" :per-page="perPage"
                                :total-items="totalRows" label="sellers" />
                        </BCardFooter>
                    </BCard>
                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { type TableFieldRaw } from 'bootstrap-vue-next';
import { getSellerReportChartOptions, sellersData, type SellerType } from './data';
import { usePageMeta } from '@/composables/usePageMeta';
import { useTableActions } from '@/composables/useTableActions';
import { ref } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';
import { currency } from '@/helpers';

const fields: Exclude<TableFieldRaw<SellerType>, string>[] = [
    { key: 'id', label: 'Id' },
    { key: 'seller', label: 'Seller', sortable: true },
    { key: 'products', label: 'Products', sortable: true },
    { key: 'orders', label: 'Orders', sortable: true },
    { key: 'rating', label: 'Rating', sortable: true },
    { key: 'location', label: 'Location', sortable: true },
    { key: 'balance', label: 'Balance', sortable: true },
    { key: 'rank', label: 'Rank', sortable: true },
    { key: 'report', label: 'Report' },
]

const searchQuery = ref('')

const perPageOptions = [5, 8, 10, 20, 50]

const currentPage = ref(1)
const perPage = ref(8)
const totalRows = ref(sellersData.length)
const sellers = ref<SellerType[]>(sellersData)

function onFiltered(filteredItems: SellerType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}

function adjustPage() {
    const totalPages = Math.ceil(sellers.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}

function handleDeleteSelected() {
    deleteSelected()
    totalRows.value = sellers.value.length
    adjustPage()
}

const { selected, toggleSelectAll, onToggleRow, deleteSelected, allSelected, isIndeterminate } = useTableActions(sellers)
usePageMeta('Sellers')


</script>

<style scoped></style>