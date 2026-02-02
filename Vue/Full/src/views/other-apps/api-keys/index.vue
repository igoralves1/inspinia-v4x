<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="API Keys" subtitle="Apps" />

            <BRow class="g-3">

                <BCol v-for="(item, idx) in apiStatistics" :key="idx" md="6" lg="3">
                    <ApiStatisticWidget :item="item" />
                </BCol>

            </BRow>

            <BRow>
                <BCol xs="12">
                    <BCard no-body>
                        <BCardHeader class="border-light justify-content-between">
                            <div class="d-flex gap-2">
                                <div class="app-search">
                                    <input v-model="searchQuery" type="text" class="form-control"
                                        placeholder="Search API clients...">
                                    <Icon  icon="lucide:search" class="app-search-icon text-muted" />
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
                                    <select data-table-filter="status" class="form-select form-control my-1 my-md-0">
                                        <option value="All">Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Revoked">Revoked</option>
                                        <option value="Suspended">Suspended</option>
                                        <option value="Expired">Expired</option>
                                    </select>
                                    <Icon  icon="lucide:circle-check" class="app-search-icon text-muted" />
                                </div>


                                <div class="app-search">
                                    <select data-table-filter="region" class="form-select form-control my-1 my-md-0">
                                        <option value="All">Region</option>
                                        <option value="US">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="IN">India</option>
                                        <option value="DE">Germany</option>
                                        <option value="AU">Australia</option>
                                    </select>
                                    <Icon  icon="lucide:globe" class="app-search-icon text-muted" />
                                </div>


                                <div>
                                    <BFormSelect v-model="perPage" :options="perPageOptions"
                                        class="form-control my-1 my-md-0" />
                                </div>
                            </div>
                        </BCardHeader>

                        <BTable show-empty :filter="searchQuery" empty-text="Nothing found."
                            v-model:selected-rows="selected" thead-class="bg-light align-middle bg-opacity-25 thead-sm"
                            hover :fields="fields" :items="apis" :per-page="perPage" :current-page="currentPage"
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
                            <template #cell(createdBy)="{ item }">
                                <div class="d-flex justify-content-start align-items-center gap-2">
                                    <div class="avatar avatar-xs">
                                        <img :src="item.image" alt="avatar-2" class="img-fluid rounded-circle" />
                                    </div>
                                    <div>
                                        <h5 class="text-nowrap fs-sm mb-0 lh-base">{{ item.author }}</h5>
                                    </div>
                                </div>
                            </template>
                            <template #cell(apiKey)="{ item }">
                                <div class="input-group">
                                    <input type="text" class="form-control form-control-sm" id="keyOne" readonly
                                        :value="item.apiKey">
                                    <button class="btn btn-sm btn-icon btn-light" type="button">
                                        <Icon icon="tabler:copy" class="fs-lg" />
                                    </button>
                                </div>
                            </template>
                            <template #cell(status)="{ item }">
                                <span class="badge  badge-label"
                                    :class="item.status === 'active' ? 'bg-success-subtle text-success' : item.status === 'pending' ? 'bg-warning-subtle text-warning' : 'bg-danger-subtle text-danger'">{{
                                        toPascalCase(item.status) }}</span>
                            </template>
                            <template #cell(region)="{ item }">
                                <span class="badge p-1 text-bg-light fs-sm">
                                    <img :src="item.regionFlag" alt="" class="rounded-circle me-1" height="12" />
                                    {{ item.region }}
                                </span>
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
import { BCard, BCardHeader, BCol, BContainer, BFormSelect, BRow, type TableFieldRaw } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import { apiClients, apiStatistics, type ApiClientType } from './data';
import ApiStatisticWidget from './components/ApiStatisticWidget.vue';
import TablePagination from '@/components/TablePagination.vue';
import { toPascalCase } from '@/helpers/casing';
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import { usePageMeta } from '@/composables/usePageMeta';
import { useTableActions } from '@/composables/useTableActions';
import { Icon } from '@iconify/vue';


const fields: Exclude<TableFieldRaw<ApiClientType>, string>[] = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'createdBy', label: 'Created By', sortable: true },
    { key: 'apiKey', label: 'Api Key', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'createdAt', label: 'Created', sortable: true },
    { key: 'expiresAt', label: 'Expired', sortable: true },
    { key: 'region', label: 'Region', sortable: true },
    { key: 'action', label: 'Action', sortable: false },
]

const searchQuery = ref('')

const perPageOptions = [5, 8, 10, 20, 50]

const currentPage = ref(1)
const perPage = ref(8)
const totalRows = ref(apiClients.length)
const apis = ref<ApiClientType[]>(apiClients)

function onFiltered(filteredItems: ApiClientType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}

function adjustPage() {
    const totalPages = Math.ceil(apis.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}

function handleDeleteItem(item: ApiClientType) {
    deleteItem(item)
    totalRows.value = apis.value.length
    adjustPage()
}

function handleDeleteSelected() {
    deleteSelected()
    totalRows.value = apis.value.length
    adjustPage()
}

const { selected, toggleSelectAll, onToggleRow, deleteSelected, deleteItem, allSelected, isIndeterminate } = useTableActions(apis)

usePageMeta('API Keys')

</script>

<style scoped></style>