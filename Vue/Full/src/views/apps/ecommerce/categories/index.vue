<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Categories" subTitle="Ecommerce" />

            <BRow>
                <BCol xs="12">
                    <BCard no-body>
                        <BCardHeader class="border-light justify-content-between">
                            <div class="d-flex gap-2">
                                <div class="app-search">
                                    <input type="search" class="form-control" placeholder="Search category..."
                                        v-model="searchQuery">
                                    <Icon  icon="lucide:search" class="app-search-icon text-muted" />
                                </div>

                                <BButton v-if="selected.length" variant="danger" @click="handleDeleteSelected">
                                    Delete
                                </BButton>
                            </div>

                            <div class="d-flex align-items-center gap-1">
                                <div>
                                    <BFormSelect v-model="perPage" :options="perPageOptions"
                                        class="form-control my-1 my-md-0" />
                                </div>

                                <div class="app-search">
                                    <select data-table-filter="status" class="form-select form-control my-1 my-md-0">
                                        <option value="">All</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                    <Icon icon="lucide:circle" class="app-search-icon text-muted" />
                                </div>

                                <RouterLink to="" class="btn btn-primary ms-1">
                                    <Icon icon="lucide:plus" class="fs-sm me-2" /> Add Category
                                </RouterLink>
                            </div>
                        </BCardHeader>

                        <BTable show-empty :filter="searchQuery" empty-text="Nothing found."
                            v-model:selected-rows="selected" thead-class="bg-light align-middle bg-opacity-25 thead-sm"
                            hover :fields="fields" :items="categories" :per-page="perPage" :current-page="currentPage"
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
                                            <RouterLink to="/product-details/1" class="link-reset">{{ item.name }}
                                            </RouterLink>
                                        </h5>
                                    </div>
                                </div>
                            </template>
                            <template #cell(products)="{ item }">
                                <h5 class="fs-base mb-0 fw-medium">{{ item.products }}</h5>
                            </template>
                            <template #cell(lastModified)="{ item }">
                                {{ item.lastModified }} <small class="text-muted">{{ item.lastModifiedTime }}</small>
                            </template>
                            <template #cell(status)="{ item }">
                                <span class="badge fs-xxs"
                                    :class="item.status == 'Active' ? 'badge-soft-success' : 'badge-soft-danger'">{{
                                        item.status }}</span>
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
                            <TablePagination v-model:currentPage="currentPage" :per-page="perPage"
                                :total-items="totalRows" label="categories" />
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
import { categoriesData, type CategoryType } from './data';
import TablePagination from '@/components/TablePagination.vue';
import { ref } from 'vue';
import { usePageMeta } from '@/composables/usePageMeta';
import { useTableActions } from '@/composables/useTableActions';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

const fields: Exclude<TableFieldRaw<CategoryType>, string>[] = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Category Name', sortable: true },
    { key: 'slug', label: 'Slug', sortable: true },
    { key: 'products', label: 'Products', sortable: true },
    { key: 'orders', label: 'Orders', sortable: true },
    { key: 'earnings', label: 'Earnings', sortable: true },
    { key: 'lastModified', label: 'Last Modified', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'action', label: 'Action', sortable: false },
]

const searchQuery = ref('')

const perPageOptions = [5, 8, 10, 20, 50]

const currentPage = ref(1)
const perPage = ref(8)
const totalRows = ref(categoriesData.length)
const categories = ref<CategoryType[]>(categoriesData)

function onFiltered(filteredItems: CategoryType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}

function adjustPage() {
    const totalPages = Math.ceil(categories.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}

function handleDeleteItem(item: CategoryType) {
    deleteItem(item)
    totalRows.value = categories.value.length
    adjustPage()
}

function handleDeleteSelected() {
    deleteSelected()
    totalRows.value = categories.value.length
    adjustPage()
}

const { selected, toggleSelectAll, onToggleRow, deleteSelected, deleteItem, allSelected, isIndeterminate } = useTableActions(categories)

usePageMeta('Categories')

</script>

<style scoped></style>