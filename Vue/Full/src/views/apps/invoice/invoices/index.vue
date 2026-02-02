<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Invoices List" subtitle="Invoices" />

            <BRow>
                <BCol xs="12">
                    <BCard no-body>
                        <BCardHeader class="card-header border-light justify-content-between">
                            <div class="d-flex gap-2">
                                <div class="app-search">
                                    <input v-model="searchQuery" type="text" class="form-control"
                                        placeholder="Search invoices...">
                                    <Icon icon="lucide:search"  class="app-search-icon text-muted"></Icon>
                                </div>
                                <BButton v-if="selected.length" variant="danger" @click="handleDeleteSelected">
                                    Delete
                                </BButton>
                                <RouterLink to="/add-invoice" class="btn btn-purple rounded-circle btn-icon">
                                    <Icon icon="tabler:plus" class="fs-lg" />
                                </RouterLink>
                            </div>

                            <div class="d-flex align-items-center gap-2">
                                <span class="me-2 fw-semibold">Filter By:</span>


                                <div class="app-search">
                                    <select data-table-filter="status" class="form-select form-control my-1 my-md-0">
                                        <option value="All">Status</option>
                                        <option value="Paid">Paid</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Overdue">Overdue</option>
                                        <option value="Draft">Draft</option>
                                    </select>
                                    <Icon icon="lucide:check-circle"  class="app-search-icon text-muted" />
                                </div>


                                <div>
                                    <BFormSelect v-model="perPage" :options="perPageOptions"
                                        class="form-control my-1 my-md-0" />
                                </div>
                            </div>
                        </BCardHeader>

                        <BTable show-empty :filter="searchQuery" empty-text="Nothing found."
                            v-model:selected-rows="selected" thead-class="bg-light align-middle bg-opacity-25 thead-sm"
                            hover :fields="fields" :items="invoicesData" :per-page="perPage" :current-page="currentPage"
                            @filtered="onFiltered" responsive
                            class="table table-custom table-nowrap table-centered mb-0 w-100">
                            <template #head()="data">
                                <span class="text-uppercase fs-xxs">{{ data.label }}</span>
                            </template>
                            <template #head(checkbox)>
                                <input class="form-check-input form-check-input-light fs-14 mt-0" type="checkbox"
                                    id="select-all-products" value="option" :checked="allSelected"
                                    :indeterminate="isIndeterminate" @change="toggleSelectAll" />
                            </template>
                            <template #head(action)>
                                <span class="text-uppercase d-flex justify-content-center fs-xxs">Actions</span>
                            </template>
                            <template #cell(checkbox)="data">
                                <input class="form-check-input form-check-input-light fs-14 product-item-check mt-0"
                                    type="checkbox" :value="data.item" :checked="selected.includes(data.item)"
                                    @change="onToggleRow(data.item, $event)" />
                            </template>
                            <template #cell(id)="{ item }">
                                <h5 class="m-0">
                                    <Icon icon="tabler:file-invoice" class=" fs-lg"
                                        :class="item.status === 'overdue' ? 'text-danger' : item.status === 'draft' ? 'text-info' : item.status === 'pending' ? 'text-warning' : 'text-success'">
                                    </Icon>
                                    <RouterLink to="/invoices/1" class="link-reset fw-semibold">#{{ item.id }}
                                    </RouterLink>
                                </h5>
                            </template>
                            <template #cell(clientName)="{ item }">
                                <div class="d-flex justify-content-start align-items-center gap-2">
                                    <div class="avatar avatar-sm">
                                        <img v-if="item.image" :src="item.image" alt="avatar-7"
                                            class="img-fluid rounded-circle" />
                                        <div v-else className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title text-bg-primary fw-bold rounded-circle">{{
                                                generateInitials(item.name) }}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 class="text-nowrap fs-base mb-0 lh-base">
                                            <RouterLink to="/pages/profile" class="link-reset">{{ item.name }}
                                            </RouterLink>
                                        </h5>
                                        <p class="text-muted fs-xs mb-0">{{ item.email }}</p>
                                    </div>
                                </div>
                            </template>
                            <template #cell(amount)="{ item }">
                                {{ currency }}{{ item.amount }} USD
                            </template>
                            <template #cell(status)="{ item }">
                                <span class="badge   badge-label"
                                    :class="item.status === 'overdue' ? 'text-danger bg-danger-subtle' : item.status === 'draft' ? 'text-info bg-info-subtle' : item.status === 'pending' ? 'text-warning bg-warning-subtle' : 'text-success bg-success-subtle'">Paid</span>
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
import { BCard, BCardFooter, BCardHeader, BCol, BContainer, BFormSelect, BRow, BTable, type TableFieldRaw } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import TablePagination from '@/components/TablePagination.vue';
import { invoices, type InvoiceType } from './data';
import { currency } from '@/helpers';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useTableActions } from '@/composables/useTableActions';
import { usePageMeta } from '@/composables/usePageMeta';
import { generateInitials } from '@/helpers/generators';
import MainLayout from '@/layouts/MainLayout.vue';


const fields: Exclude<TableFieldRaw<InvoiceType>, string>[] = [
    { key: 'checkbox', label: '' },
    { key: 'id', label: 'Id' },
    { key: 'date', label: 'Create & End Date' },
    { key: 'clientName', label: 'Clients Name', sortable: true },
    { key: 'purchase', label: 'Purchase', sortable: true },
    { key: 'amount', label: 'Amount', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'action', label: 'Action', sortable: false },
]

const searchQuery = ref('')

const perPageOptions = [5, 8, 10, 20, 50]

const currentPage = ref(1)
const perPage = ref(8)
const totalRows = ref(invoices.length)
const invoicesData = ref<InvoiceType[]>(invoices)

function onFiltered(filteredItems: InvoiceType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}

function adjustPage() {
    const totalPages = Math.ceil(invoicesData.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}

function handleDeleteItem(item: InvoiceType) {
    deleteItem(item)
    totalRows.value = invoicesData.value.length
    adjustPage()
}

function handleDeleteSelected() {
    deleteSelected()
    totalRows.value = invoicesData.value.length
    adjustPage()
}

const { selected, toggleSelectAll, onToggleRow, deleteSelected, deleteItem, allSelected, isIndeterminate } =
    useTableActions(invoicesData)

usePageMeta('Invoices List')

</script>

<style scoped></style>