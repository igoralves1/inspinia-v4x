<template>
    <UICard title="Custom table with checkbox select" body-class="p-0">

        <BCardHeader class="border-light justify-content-between">
            <div class="d-flex gap-2">
                <div class="app-search">
                    <input v-model="searchQuery" type="search" class="form-control"
                        placeholder="Search product name...">
                    <Icon icon="lucide:search" class="app-search-icon text-muted" />
                </div>
            </div>

            <div class="d-flex align-items-center gap-2">
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
            <template #cell(action)>
                <div class="d-flex justify-content-center gap-1">
                    <button class="btn btn-light btn-icon btn-sm rounded-circle">
                        <Icon icon="tabler:eye" class="fs-lg" />
                    </button>
                    <button class="btn btn-light btn-icon btn-sm rounded-circle">
                        <Icon icon="tabler:edit" class="fs-lg" />
                    </button>
                    <button class="btn btn-light btn-icon btn-sm rounded-circle">
                        <Icon icon="tabler:trash" class="fs-lg"/>
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
import { useTableActions } from '@/composables/useTableActions';
import { type TableFieldRaw } from 'bootstrap-vue-next';
import { ref } from 'vue';
import { products, type ProductType } from '../data';
import { Icon } from '@iconify/vue';
import { toPascalCase } from '@/helpers/casing';
import { currency } from '@/helpers';

const fields: Exclude<TableFieldRaw<ProductType>, string>[] = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Product' },
    { key: 'sku', label: 'Sku' },
    { key: 'category', label: 'Category', },
    { key: 'stock', label: 'Stock', },
    { key: 'price', label: 'Price', },
    { key: 'orders', label: 'Orders', },
    { key: 'rating', label: 'Rating'},
    { key: 'status', label: 'Status', },
    { key: 'publish', label: 'Publish', },
    { key: 'action', label: 'Action', },
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



const { selected, toggleSelectAll, onToggleRow, allSelected, isIndeterminate } = useTableActions(productsData)

</script>

<style scoped></style>