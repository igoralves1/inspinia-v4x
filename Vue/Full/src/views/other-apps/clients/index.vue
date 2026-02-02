<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Clients" subTitle="Apps" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BCard no-body>
                        <BCardHeader class="border-light justify-content-between">
                            <div class="d-flex gap-2">
                                <div class="app-search">
                                    <input v-model="searchQuery" type="text" class="form-control"
                                        placeholder="Search clients...">
                                    <Icon icon="lucide:search"  class="app-search-icon text-muted" />
                                </div>

                                <BButton v-if="selected.length" variant="danger" @click="handleDeleteSelected">
                                    Delete
                                </BButton>

                                <button type="submit" class="btn btn-purple rounded-circle btn-icon">
                                    <Icon icon="lucide:plus" class="fs-lg" />
                                </button>
                            </div>

                            <div class="d-flex align-items-center gap-2">
                                <span class="me-2 fw-semibold">Filter By:</span>


                                <div class="app-search">
                                    <select data-table-filter="country" class="form-select form-control my-1 my-md-0">
                                        <option value="All">Country</option>
                                        <option value="US">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="AU">Australia</option>
                                        <option value="DE">Germany</option>
                                        <option value="IN">India</option>
                                    </select>
                                    <Icon icon="lucide:globe" :size="18" class="app-search-icon text-muted" />
                                </div>


                                <div class="app-search">
                                    <select data-table-filter="type" class="form-select form-control my-1 my-md-0">
                                        <option value="All">Project Type</option>
                                        <option value="Project">Project</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Retainer">Retainer</option>
                                        <option value="Dashboard">Dashboard</option>
                                    </select>
                                    <Icon icon="lucide:layout"  class="app-search-icon text-muted" />
                                </div>


                                <div>
                                    <BFormSelect v-model="perPage" :options="perPageOptions"
                                        class="form-control my-1 my-md-0" />
                                </div>
                            </div>
                        </BCardHeader>
                        <BTable show-empty :filter="searchQuery" empty-text="Nothing found."
                            v-model:selected-rows="selected" thead-class="bg-light align-middle bg-opacity-25 thead-sm"
                            hover :fields="fields" :items="clientsData" :per-page="perPage" :current-page="currentPage"
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
                                <div class="d-flex justify-content-start align-items-center gap-2">
                                    <div class="avatar avatar-sm">
                                        <img :src="item.image" alt="avatar-7" class="img-fluid rounded-circle" />
                                    </div>
                                    <div>
                                        <h5 class="text-nowrap mb-0 lh-base fs-base">
                                            <RouterLink to="/pages/profile" class="link-reset">{{ item.name }}
                                            </RouterLink>
                                        </h5>
                                        <p class="text-muted fs-xs mb-0">{{ item.email }}</p>
                                    </div>
                                </div>
                            </template>
                            <template #cell(country)="{ item }">
                                <span class="badge p-1 text-bg-light fs-sm">
                                    <img :src="item.flag" alt="" class="rounded-circle me-1" height="12" />
                                    {{ item.countryCode }}
                                </span>
                            </template>
                            <template #cell(status)="{ item }">
                                <span class="badge badge-label"
                                    :class="item.status === 'active' ? 'bg-success-subtle text-success' : item.status === 'pending' ? 'bg-warning-subtle text-warning' : 'bg-danger-subtle text-danger'">{{
                                        toPascalCase(item.status) }}</span>
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
import { clients, type ClientType } from './data';
import { Icon } from '@iconify/vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import { toPascalCase } from '@/helpers/casing';
import { usePageMeta } from '@/composables/usePageMeta';
import { useTableActions } from '@/composables/useTableActions';


const fields: Exclude<TableFieldRaw<ClientType>, string>[] = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Clients Name', sortable: true },
    { key: 'phone', label: 'Phone', sortable: true },
    { key: 'country', label: 'Country', sortable: true },
    { key: 'enrollDate', label: 'Enrolled', sortable: true },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'role', label: 'Job title', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'action', label: 'Actions', sortable: false },
]

const searchQuery = ref('')

const perPageOptions = [5, 8, 10, 20, 50]

const currentPage = ref(1)
const perPage = ref(8)
const totalRows = ref(clients.length)
const clientsData = ref<ClientType[]>(clients)

function onFiltered(filteredItems: ClientType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}

function adjustPage() {
    const totalPages = Math.ceil(clientsData.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}

function handleDeleteItem(item: ClientType) {
    deleteItem(item)
    totalRows.value = clientsData.value.length
    adjustPage()
}

function handleDeleteSelected() {
    deleteSelected()
    totalRows.value = clientsData.value.length
    adjustPage()
}

const { selected, toggleSelectAll, onToggleRow, deleteSelected, deleteItem, allSelected, isIndeterminate } = useTableActions(clientsData)

usePageMeta('Clients')

</script>

<style scoped></style>