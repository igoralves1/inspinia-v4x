<template>
    <BCard no-body>
        <BCardHeader class="border-light justify-content-between">
            <div class="d-flex gap-2">
                <div class="app-search">
                    <input v-model="searchQuery" type="search" class="form-control"
                        placeholder="Search product name...">
                    <Icon  icon="tabler:search" class="app-search-icon text-muted" />
                </div>
                <BButton v-if="selected.length" variant="danger" @click="handleDeleteSelected">
                    Delete
                </BButton>
            </div>

            <div class="d-flex gap-1">

                <div>
                    <BFormSelect v-model="perPage" :options="perPageOptions" class="form-control my-1 my-md-0" />
                </div>

                <RouterLink to="/add-product" class="btn btn-danger ms-1">
                    <Icon icon="tabler:plus" data-lucide="plus" class="fs-sm me-2" /> Add Product
                </RouterLink>
            </div>
        </BCardHeader>

        <BTable show-empty :filter="searchQuery" empty-text="Nothing found." v-model:selected-rows="selected"
            thead-class="bg-light align-middle bg-opacity-25 thead-sm" hover :fields="fields" :items="products"
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
            <template #cell(price)="{ item }">
                {{ currency }}{{ item.price }}
            </template>
            <template #cell(status)="{ item }">
               <span class="badge fs-xxs" :class="item.status === 'published' ? 'badge-soft-success' : item.status === 'pending' ? 'badge-soft-warning' : 'badge-soft-danger'">{{toPascalCase(item.status)}}</span>
            </template>
            <template #cell(action)="{ item }">
                <div class="d-flex justify-content-center gap-1">
                    <button class="btn btn-light btn-icon btn-sm rounded-circle">
                        <Icon icon="tabler:eye" class="fs-lg" />
                    </button>
                    <button class="btn btn-light btn-icon btn-sm rounded-circle">
                        <Icon icon="tabler:edit" class="fs-lg" />
                    </button>
                    <button class="btn btn-light btn-icon btn-sm rounded-circle">
                        <Icon icon="tabler:trash" class="fs-lg" @click="handleDeleteItem(item)" />
                    </button>
                </div>
            </template>
        </BTable>
        <BCardFooter class="border-0">
            <TablePagination v-model:currentPage="currentPage" :per-page="perPage" :total-items="totalRows"
                label="products" />
        </BCardFooter>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardFooter, BCardHeader, BFormSelect, type TableFieldRaw } from 'bootstrap-vue-next';
import TablePagination from '@/components/TablePagination.vue';
import type { SellerProductType } from './types';
import { sellerProducts } from './data';
import { currency } from '@/helpers';
import { toPascalCase } from '@/helpers/casing';
import { ref } from 'vue';
import { useTableActions } from '@/composables/useTableActions';
import { Icon } from '@iconify/vue';

const fields: Exclude<TableFieldRaw<SellerProductType>, string>[] = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Product', sortable: true },
    { key: 'category', label: 'Category', sortable: true },
    { key: 'stock', label: 'Stock', sortable: true },
    { key: 'price', label: 'Price', sortable: true },
    { key: 'orders', label: 'Orders', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'action', label: 'Action', sortable: false },
]

const searchQuery = ref('')

const perPageOptions = [5, 8, 10, 20, 50]

const currentPage = ref(1)
const perPage = ref(8)
const totalRows = ref(sellerProducts.length)
const products = ref<SellerProductType[]>(sellerProducts)

function onFiltered(filteredItems: SellerProductType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}

function adjustPage() {
    const totalPages = Math.ceil(products.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}

function handleDeleteItem(item: SellerProductType) {
    deleteItem(item)
    totalRows.value = products.value.length
    adjustPage()
}

function handleDeleteSelected() {
    deleteSelected()
    totalRows.value = products.value.length
    adjustPage()
}

const { selected, toggleSelectAll, onToggleRow, deleteSelected, deleteItem, allSelected, isIndeterminate } =
    useTableActions(products)

</script>

<style scoped></style>