<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Permissions" subTitle="Users" />
            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BCard no-body>
                        <BCardHeader class="border-light justify-content-between">
                            <div class="d-flex gap-2">
                                <div class="app-search">
                                    <input v-model="searchQuery" type="search" class="form-control"
                                        placeholder="Search permissions...">
                                    <Icon icon="lucide:search"  class="app-search-icon text-muted" />
                                </div>
                            </div>

                            <div>
                                <BFormSelect v-model="perPage" :options="perPageOptions"
                                    class="form-control my-1 my-md-0" />
                            </div>
                        </BCardHeader>

                        <BTable show-empty :filter="searchQuery" empty-text="Nothing found."
                            v-model:selected-rows="selected" thead-class="bg-light align-middle bg-opacity-25 thead-sm"
                            hover :fields="fields" :items="permissions" :per-page="perPage" :current-page="currentPage"
                            @filtered="onFiltered" responsive
                            class="table table-custom table-nowrap table-centered mb-0 w-100">
                            <template #head()="data">
                                <span class="text-uppercase fs-xxs">{{ data.label }}</span>
                            </template>
                            <template #head(action)>
                                <span class="text-uppercase d-flex justify-content-center fs-xxs">Actions</span>
                            </template>
                            <template #cell(assigned)="{ item }">
                                <span v-for="(role, idx) in item.roles" :key="idx"
                                    class="badge  badge-label fs-xxs fw-semibold me-1"
                                    :class="[`bg-${role.variant}-subtle`, `text-${role.variant}`]">{{
                                        role.label }}</span>
                            </template>
                            <template #cell(createdDate)="{ item }">
                                {{ item.date }}, <span class="text-muted">{{ item.time }}</span>
                            </template>

                            <template #cell(action)="{ item }">
                                <div class="d-flex justify-content-center gap-1">
                                    <button class="btn btn-light btn-icon btn-sm rounded-circle">
                                        <Icon icon="tabler:eye" class="fs-lg" />
                                    </button>
                                    <button class="btn btn-light btn-icon btn-sm rounded-circle">
                                        <Icon icon="tabler:trash" class="fs-lg" @click="handleDeleteItem(item)" />
                                    </button>
                                </div>
                            </template>
                        </BTable>
                        <BCardFooter class="border-0">
                            <TablePagination v-model:currentPage="currentPage" :per-page="perPage"
                                :total-items="totalRows" label="permissions" />
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
import { permissionManagementData, type ManagementType } from './data';
import { ref } from 'vue';
import { useTableActions } from '@/composables/useTableActions';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

const fields: Exclude<TableFieldRaw<ManagementType>, string>[] = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'assigned', label: 'Assign To' },
    { key: 'createdDate', label: 'Created Date', sortable: true },
    { key: 'users', label: 'Users', sortable: true },
    { key: 'action', label: 'Action', sortable: false },
]

const searchQuery = ref('')

const perPageOptions = [5, 8, 10, 20, 50]

const currentPage = ref(1)
const perPage = ref(8)
const totalRows = ref(permissionManagementData.length)
const permissions = ref<ManagementType[]>(permissionManagementData)

function onFiltered(filteredItems: ManagementType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}

function adjustPage() {
    const totalPages = Math.ceil(permissions.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}

function handleDeleteItem(item: ManagementType) {
    deleteItem(item)
    totalRows.value = permissions.value.length
    adjustPage()
}


const { selected, deleteItem } = useTableActions(permissions)

usePageMeta('User Permissions')

</script>

<style scoped></style>