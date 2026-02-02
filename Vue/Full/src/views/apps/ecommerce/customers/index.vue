<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Customers" subTitle="Ecommerce" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BCard no-body>
                        <BCardHeader
                            class="border-light d-flex align-items-center justify-content-between flex-wrap gap-2">

                            <div class="d-flex gap-2">
                                <div class="app-search">
                                    <input type="search" class="form-control" v-model="searchQuery"
                                        placeholder="Search customer...">
                                    <Icon  icon="lucide:search" class="app-search-icon text-muted" />
                                </div>
                                <BButton v-if="selected.length" variant="danger" @click="handleDeleteSelected">
                                    Delete
                                </BButton>
                            </div>


                            <div class="d-flex align-items-center gap-5">

                                <div>
                                    <BFormSelect v-model="perPage" :options="perPageOptions"
                                        class="form-control my-1 my-md-0" />
                                </div>

                                <div>

                                    <BDropdown toggle-class="btn btn-default drop-arrow-none"
                                        class="btn-icon btn-ghost-light text-muted">
                                        <template #button-content>
                                            <Icon icon="lucide:download" class="me-1" /> Export
                                            <Icon icon="tabler:chevron-down" class="align-middle ms-1" />

                                        </template>
                                        <li>
                                            <BDropdownItem>Export as PDF</BDropdownItem>
                                        </li>
                                        <li>
                                            <BDropdownItem>Export as CSV</BDropdownItem>
                                        </li>
                                        <li>
                                            <BDropdownItem>Export as Excel</BDropdownItem>
                                        </li>
                                    </BDropdown>
                                </div>



                                <RouterLink to="" class="btn btn-primary">
                                    <Icon icon="lucide:plus" class="fs-sm me-1" /> Add Customer
                                </RouterLink>
                            </div>
                        </BCardHeader>

                        <BTable show-empty :filter="searchQuery" empty-text="Nothing found."
                            v-model:selected-rows="selected" thead-class="bg-light align-middle bg-opacity-25 thead-sm"
                            hover :fields="fields" :items="allCustomers" :per-page="perPage" :current-page="currentPage"
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
                                <div class="d-flex align-items-center gap-2">
                                    <div class="avatar avatar-sm">
                                        <img :src="item.avatar" alt="avatar-7" class="img-fluid rounded-circle" />
                                    </div>
                                    <div>
                                        <h5 class="mb-0">
                                            <RouterLink to="/pages/profilez" class="link-reset">{{ item.name }}
                                            </RouterLink>
                                        </h5>
                                    </div>
                                </div>
                            </template>
                            <template #cell(country)="{ item }">
                                <img :src="item.countryFlag" alt="" class="rounded-circle me-1" height="16" />
                                {{ item.country }}
                            </template>
                            <template #cell(joinedDate)="{ item }">
                                {{ item.joined.date }} <small class="text-muted">{{ item.joined.time }}</small>
                            </template>
                            <template #cell(totalSpent)="{ item }">
                                {{ currency }}{{ item.totalSpends }}
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
                                :total-items="totalRows" label="customers" />
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
import { customers, type CustomerType } from './data';
import { currency } from '@/helpers';
import { ref } from 'vue';
import { usePageMeta } from '@/composables/usePageMeta';
import { useTableActions } from '@/composables/useTableActions';
import { Icon } from '@iconify/vue';
import MainLayout from '@/layouts/MainLayout.vue';

const fields: Exclude<TableFieldRaw<CustomerType>, string>[] = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Client Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'phone', label: 'Phone', sortable: true },
    { key: 'country', label: 'Country', sortable: true },
    { key: 'joinedDate', label: 'Joined Date', sortable: true },
    { key: 'orders', label: 'Orders', sortable: true },
    { key: 'totalSpent', label: 'Total Spends', sortable: true },
    { key: 'action', label: 'Action', sortable: false },
]

const searchQuery = ref('')

const perPageOptions = [5, 8, 10, 20, 50]

const currentPage = ref(1)
const perPage = ref(8)
const totalRows = ref(customers.length)
const allCustomers = ref<CustomerType[]>(customers)

function onFiltered(filteredItems: CustomerType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}


function adjustPage() {
    const totalPages = Math.ceil(allCustomers.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}

function handleDeleteItem(item: CustomerType) {
    deleteItem(item)
    totalRows.value = allCustomers.value.length
    adjustPage()
}

function handleDeleteSelected() {
    deleteSelected()
    totalRows.value = allCustomers.value.length
    adjustPage()
}

const { selected, toggleSelectAll, onToggleRow, deleteSelected, deleteItem, allSelected, isIndeterminate } = useTableActions(allCustomers)

usePageMeta('Customers')


</script>

<style scoped></style>