<template>
    <UICard title="Custom table with sort" body-class="p-0">

        <BCardHeader class="border-light justify-content-between">
            <div class="d-flex gap-2">
                <div class="app-search">
                    <input v-model="searchQuery" type="search" class="form-control"
                        placeholder="Search product name...">
                    <Icon icon="lucide:search" class="app-search-icon text-muted" />
                </div>
                <BButton v-if="selected.length" variant="danger" @click="handleDeleteSelected">
                    Delete
                </BButton>
            </div>

            <div class="d-flex align-items-center gap-2">

                <span class="me-2 fw-semibold">Filter By:</span>

                <div class="app-search">
                    <select data-table-filter="category" class="form-select form-control my-1 my-md-0">
                        <option value="All">Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Home">Home</option>
                        <option value="Sports">Sports</option>
                        <option value="Beauty">Beauty</option>
                    </select>
                    <Icon icon="lucide:tag"  class="app-search-icon text-muted" />
                </div>

                <div class="app-search">
                    <select data-table-filter="status" class="form-select form-control my-1 my-md-0">
                        <option value="">Status</option>
                        <option value="Published">Published</option>
                        <option value="Pending">Pending</option>
                        <option value="Out of Stock">Out of Stock</option>
                    </select>
                    <Icon icon="lucide:box" class="app-search-icon text-muted" />
                </div>

                <div class="app-search">
                    <select data-table-range-filter="price" class="form-select form-control my-1 my-md-0">
                        <option value="">Price Range</option>
                        <option value="0-50">$0 - $50</option>
                        <option value="51-150">$51 - $150</option>
                        <option value="151-500">$151 - $500</option>
                        <option value="500+">$500+</option>
                    </select>
                    <Icon icon="lucide:dollar-sign" class="app-search-icon text-muted" />
                </div>

                <div>
                    <BFormSelect v-model="perPage" :options="perPageOptions" class="form-control my-1 my-md-0" />
                </div>

            </div>
        </BCardHeader>

        <BTable show-empty :filter="searchQuery" empty-text="Nothing found." v-model:selected-rows="selected"
            thead-class="bg-light align-middle bg-opacity-25 thead-sm" hover :fields="fields" :items="productsData"
            :per-page="perPage" :current-page="currentPage" @filtered="onFiltered" responsive
            class="table table-custom table-nowrap table-centered mb-0 w-100">
            <template #head()="data">
                <span class="text-uppercase fs-xxs">{{ data.label }}</span>
            </template>
            <template #head(id)>
                <input class="form-check-input form-check-input-light fs-14 mt-0" type="checkbox"
                    id="select-all-products" value="option" :checked="allSelected" :indeterminate="isIndeterminate"
                    @change="toggleSelectAll" />
            </template>
            <template #head(action)>
                <span class="text-uppercase d-flex justify-content-center fs-xxs">Actions</span>
            </template>
            <template #cell(id)="data">
                <input class="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox"
                    :value="data.item" :checked="selected.includes(data.item)"
                    @change="onToggleRow(data.item, $event)" />
            </template>
            <template #cell(name)="{ item }">
                <div class="d-flex">
                    <div class="avatar-md me-3">
                        <img :src="item.image" alt="Product" class="img-fluid rounded" />
                    </div>
                    <div>
                        <h5 class="mb-1">
                            <RouterLink :to="`/products/${item.id}`" class="link-reset">{{ item.name }}</RouterLink>
                        </h5>
                        <p class="text-muted mb-0 fs-xxs">by: {{ item.manufacturer }}</p>
                    </div>
                </div>
            </template>
            <template #cell(stock)="{ item }">
                <h5 class="fs-base mb-0 fw-medium">{{ item.stock }}</h5>
            </template>
            <template #cell(price)="{ item }">
                {{ currency }}{{ item.price }}
            </template>
            <template #cell(rating)="{ item }">
                <Rating :rating="item.rating" class="d-inline-flex align-items-center gap-1"/>
                <span class="ms-1">
                    <RouterLink to="/reviews" class="link-reset fw-semibold">({{ item.reviews }})</RouterLink>
                </span>
            </template>
            <template #cell(status)="{ item }">
                <span class="badge  fs-xxs"
                    :class="item.status === 'out-of-stock' ? 'badge-soft-danger' : item.status === 'pending' ? 'badge-soft-warning' : 'badge-soft-success'">{{
                        toPascalCase(item.status) }}</span>
            </template>
            <template #cell(publish)="{ item }">
                {{ item.date }} <small class="text-muted">{{ item.time }}</small>
            </template>
            <template #cell(action)="{ item }">
                <div class="d-flex justify-content-center gap-1">
                    <button class="btn btn-light btn-icon btn-sm rounded-circle">
                        <Icon icon="tabler:eye" class="fs-lg" />
                    </button>
                    <button class="btn btn-light btn-icon btn-sm rounded-circle">
                        <Icon icon="tabler:edit" class="fs-lg" />
                    </button>
                    <button class="btn btn-danger btn-icon btn-sm rounded-circle">
                        <Icon icon="tabler:trash" class="fs-lg" @click="handleDeleteItem(item)" />
                    </button>
                </div>
            </template>
        </BTable>
            
        <BCardFooter class="border-0">
            <TablePagination v-model:currentPage="currentPage" :per-page="perPage" :total-items="totalRows"
                label="products" />
        </BCardFooter>

    </UICard>
</template>

<script setup lang="ts">
import { BCard, BCardHeader, BFormSelect, BTable, type TableFieldRaw } from 'bootstrap-vue-next';
import UICard from '@/components/UICard.vue';
import { products, type ProductType } from '../data';
import { currency } from '@/helpers';
import Rating from '@/components/Rating.vue';
import { toPascalCase } from '@/helpers/casing';
import TablePagination from '@/components/TablePagination.vue';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useTableActions } from '@/composables/useTableActions';

const fields: Exclude<TableFieldRaw<ProductType>, string>[] = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Product' },
    { key: 'sku', label: 'Sku' },
    { key: 'category', label: 'Category', sortable: true },
    { key: 'stock', label: 'Stock', sortable: true },
    { key: 'price', label: 'Price', sortable: true },
    { key: 'orders', label: 'Orders', sortable: true },
    { key: 'rating', label: 'Rating'},
    { key: 'status', label: 'Status', sortable: true },
    { key: 'publish', label: 'Publish', sortable: true },
    { key: 'action', label: 'Action', sortable: false },
]

const searchQuery = ref('')

const perPageOptions = [5, 10, 20, 50]

const currentPage = ref(1)
const perPage = ref(5)
const totalRows = ref(products.length)
const productsData = ref<ProductType[]>(products)

function onFiltered(filteredItems: ProductType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}

function adjustPage() {
    const totalPages = Math.ceil(productsData.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}

function handleDeleteItem(item: ProductType) {
    deleteItem(item)
    totalRows.value = productsData.value.length
    adjustPage()
}

function handleDeleteSelected() {
    deleteSelected()
    totalRows.value = productsData.value.length
    adjustPage()
}

const { selected, toggleSelectAll, onToggleRow, deleteSelected, deleteItem, allSelected, isIndeterminate } = useTableActions(productsData)

</script>

<style scoped></style>