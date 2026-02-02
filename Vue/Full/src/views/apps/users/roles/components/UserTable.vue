<template>
    <BCard no-body>
        <BCardHeader class="border-light justify-content-between">

            <div class="d-flex gap-2">
                <div class="app-search">
                    <input v-model="searchQuery" type="search" class="form-control" placeholder="Search users...">
                    <Icon  icon="lucide:search" class="app-search-icon text-muted" />
                </div>
                <BButton v-if="selected.length" variant="danger" @click="handleDeleteSelected">
                    Delete
                </BButton>
            </div>

            <div class="d-flex align-items-center gap-2">
                <span class="me-2 fw-semibold">Filter By:</span>

                <div class="app-search">
                    <select data-table-filter="roles" class="form-select form-control my-1 my-md-0">
                        <option value="All">Role</option>
                        <option value="Security Officer">Security Officer</option>
                        <option value="Project Manager">Project Manager</option>
                        <option value="Developer">Developer</option>
                        <option value="Support Lead">Support Lead</option>
                    </select>
                    <Icon  icon="lucide:shield" class="app-search-icon text-muted" />
                </div>


                <div class="app-search">
                    <select class="form-select form-control my-1 my-md-0">
                        <option value="All">Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Suspended">Suspended</option>
                    </select>
                    <Icon  icon="lucide:user-check" class="app-search-icon text-muted" />
                </div>

                <div>
                    <BFormSelect v-model="perPage" :options="perPageOptions" class="form-control my-1 my-md-0" />
                </div>

                <button type="submit" class="btn btn-secondary">Add User</button>
            </div>
        </BCardHeader>

        <BTable show-empty :filter="searchQuery" empty-text="Nothing found." v-model:selected-rows="selected"
            thead-class="bg-light align-middle bg-opacity-25 thead-sm" hover :fields="fields" :items="allUsers"
            :per-page="perPage" :current-page="currentPage" @filtered="onFiltered" responsive
            class="table table-custom table-nowrap table-centered mb-0 w-100">
            <template #head()="data">
                <span class="text-uppercase fs-xxs">{{ data.label }}</span>
            </template>
            <template #head(checkbox)>
                <input class="form-check-input form-check-input-light fs-14 mt-0" type="checkbox"
                    id="select-all-products" value="option" :checked="allSelected" :indeterminate="isIndeterminate"
                    @change="toggleSelectAll" />
            </template>
            <template #head(action)>
                <span class="text-uppercase d-flex justify-content-center fs-xxs">Actions</span>
            </template>
            <template #cell(checkbox)="data">
                <input class="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox"
                    :value="data.item" :checked="selected.includes(data.item)"
                    @change="onToggleRow(data.item, $event)" />
            </template>
            <template #cell(id)="{ item }">
                <h5 class="m-0">
                    <RouterLink to="" class="link-reset">{{ item.id }}</RouterLink>
                </h5>
            </template>
            <template #cell(user)="{ item }">
                <div class="d-flex align-items-center gap-2">
                    <div class="avatar avatar-sm">
                        <img :src="item.avatar" class="img-fluid rounded-circle" alt="" />
                    </div>
                    <div>
                        <h5 class="fs-base mb-0">
                            <RouterLink to="" class="link-reset">{{ item.name }}</RouterLink>
                        </h5>
                        <p class="text-muted fs-xs mb-0">{{ item.email }}</p>
                    </div>
                </div>
            </template>
            <template #cell(lastUpdated)="{ item }">
                {{ item.date }} <small class="text-muted">{{ item.time }}</small>
            </template>
            <template #cell(status)="{ item }">
                <span class="badge badge-label" :class="item.status === 'suspended' ? 'bg-danger-subtle text-danger' : item.status === 'inactive' ? 'bg-warning-subtle text-warning' : 'bg-success-subtle text-success'">{{ item.status }}</span>
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
                label="roles" />
        </BCardFooter>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardFooter, BCardHeader, BFormSelect, BTable, type TableFieldRaw } from 'bootstrap-vue-next';
import TablePagination from '@/components/TablePagination.vue';
import type { UserType } from './types';
import { users } from './data';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useTableActions } from '@/composables/useTableActions';


const fields: Exclude<TableFieldRaw<UserType>, string>[] = [
    { key: 'checkbox', label: '' },
    { key: 'id', label: 'Id', sortable: true },
    { key: 'user', label: 'User', sortable: true },
    { key: 'role', label: 'Role', sortable: true },
    { key: 'lastUpdated', label: 'Last Updated', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'action', label: 'Action', sortable: false },
]

const searchQuery = ref('')

const perPageOptions = [5, 8, 10, 20, 50]

const currentPage = ref(1)
const perPage = ref(8)
const totalRows = ref(users.length)
const allUsers = ref<UserType[]>(users)

function onFiltered(filteredItems: UserType[]) {
    totalRows.value = filteredItems.length  
    currentPage.value = 1
}

function adjustPage() {
    const totalPages = Math.ceil(allUsers.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}

function handleDeleteItem(item: UserType) {
    deleteItem(item)
    totalRows.value = allUsers.value.length
    adjustPage()
}

function handleDeleteSelected() {
    deleteSelected()
    totalRows.value = allUsers.value.length
    adjustPage()
}

const { selected, toggleSelectAll, onToggleRow, deleteSelected, deleteItem, allSelected, isIndeterminate } =
    useTableActions(allUsers)


</script>

<style scoped></style>