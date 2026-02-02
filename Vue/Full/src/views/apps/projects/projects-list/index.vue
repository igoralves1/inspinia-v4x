<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Projects List" subTitle="Apps" />

            <BRow>
                <BCol xs="12">
                    <BCard no-body>
                        <BCardHeader class="border-light justify-content-between">

                            <div class="d-flex gap-2">
                                <div class="app-search">
                                    <input v-model="searchQuery" type="search" class="form-control"
                                        placeholder="Search project name...">
                                    <Icon icon="lucide:search"  class="app-search-icon text-muted" />
                                </div>
                                <BButton v-if="selected.length" variant="danger" @click="handleDeleteSelected">
                                    Delete
                                </BButton>
                            </div>

                            <div class="d-flex align-items-center gap-2">
                                <span class="me-2 fw-semibold">Filter By:</span>


                                <div class="app-search">
                                    <select data-table-filter="status" class="form-select form-control my-1 my-md-0">
                                        <option value="All">Status</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Pending Review">Pending Review</option>
                                        <option value="Overdue">Overdue</option>
                                        <option value="In Review">In Review</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Scheduled">Scheduled</option>
                                        <option value="On Hold">On Hold</option>
                                        <option value="Pending">Pending</option>
                                    </select>
                                    <Icon icon="lucide:activity"  class="app-search-icon text-muted" />
                                </div>


                                <div class="app-search">
                                    <select data-table-range-filter="date"
                                        class="form-select form-control my-1 my-md-0">
                                        <option value="All">Deadline</option>
                                        <option value="Today">Today</option>
                                        <option value="Last 7 Days">Last 7 Days</option>
                                        <option value="Last 30 Days">Last 30 Days</option>
                                        <option value="This Year">This Year</option>
                                    </select>
                                    <Icon  icon="lucide:calendar-clock" class="app-search-icon text-muted" />
                                </div>


                                <div>
                                    <BFormSelect v-model="perPage" :options="perPageOptions"
                                        class="form-control my-1 my-md-0" />
                                </div>

                            </div>

                            <div class="d-flex gap-1">
                                <RouterLink to="/projects" class="btn btn-soft-primary btn-icon">
                                    <Icon icon="lucide:layout-grid" class="fs-lg" />
                                </RouterLink>
                                <RouterLink to="/projects-list" class="btn btn-primary btn-icon">
                                    <Icon icon="lucide:list" class="fs-lg" />
                                </RouterLink>
                            </div>
                        </BCardHeader>

                        <BTable show-empty :filter="searchQuery" empty-text="Nothing found."
                            v-model:selected-rows="selected" thead-class="bg-light align-middle bg-opacity-25 thead-sm"
                            hover :fields="fields" :items="projects" :per-page="perPage" :current-page="currentPage"
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
                            <template #cell(project)="{ item }">
                                <div class="d-flex">
                                    <div class="avatar-md me-3">
                                        <span class="avatar-title text-bg-light rounded">
                                            <Icon :icon="item.icon" class="fs-24" :class="[`text-${item.variant}`]" />
                                        </span>
                                    </div>
                                    <div>
                                        <h5 class="mb-1 d-flex align-items-center">
                                            <RouterLink :to="`/projects/${item.id}`" class="link-reset">{{ item.title }}
                                            </RouterLink>
                                        </h5>
                                        <p class="text-muted mb-0 fs-xxs">Updated {{ item.updatedTime }}</p>
                                    </div>
                                </div>
                            </template>
                            <template #cell(members)="{ item }">
                                <div class="avatar-group avatar-group-xs">
                                    <div class="avatar" v-for="(member, idx) in item.members" :key="idx">
                                        <img :src="member" alt="" class="rounded-circle avatar-xs" />
                                    </div>
                                </div>
                            </template>
                            <template #cell(status)="{ item }">
                                <span class="badge fs-xxs badge-label"
                                    :class="[`badge-soft-${getStatusVariant(item.status)}`]">{{ toTitleCase(item.status)
                                    }}</span>
                            </template>
                            <template #cell(tasks)="{ item }">
                                <h5 className="fs-base mb-0 fw-medium">
                                    {{ item.task.completed }}/{{ item.task.total }}&nbsp;
                                    <span v-if="item.task.new" className="badge bg-secondary">
                                        +{{ item.task.new }}
                                        New
                                    </span>
                                    <span v-if="item.status === 'completed'" className="badge bg-success">✓</span>
                                </h5>
                            </template>
                            <template #cell(progress)="{ item }">
                                <BProgress :value="item.progress" :variant="item.variant" height="5px" />
                            </template>
                            <template #cell(attachments)="{ item }">
                                {{ item.attachments }} Files
                            </template>
                            <template #cell(comments)="{ item }">
                                {{ item.comments }} Comments
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
import { BCardFooter, BCardHeader, BCol, BContainer, BFormSelect, BRow, BTable, type TableFieldRaw } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import TablePagination from '@/components/TablePagination.vue';
import { projectsData, type ProjectType } from './data';
import { toTitleCase } from '@/helpers/casing';
import { ref } from 'vue';
import { useTableActions } from '@/composables/useTableActions';
import { usePageMeta } from '@/composables/usePageMeta';
import { Icon } from '@iconify/vue';
import MainLayout from '@/layouts/MainLayout.vue';


const fields: Exclude<TableFieldRaw<ProjectType>, string>[] = [
    { key: 'id', label: 'Id' },
    { key: 'project', label: 'project', sortable: true },
    { key: 'members', label: 'Members', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'tasks', label: 'Tasks' },
    { key: 'progress', label: 'Progress' },
    { key: 'attachments', label: 'Attachments', sortable: true },
    { key: 'comments', label: 'Comments', sortable: true },
    { key: 'dueDate', label: 'Due date', sortable: true },
    { key: 'action', label: 'Action', sortable: false },
]

const searchQuery = ref('')

const perPageOptions = [5, 8, 10, 20, 50]

const currentPage = ref(1)
const perPage = ref(8)
const totalRows = ref(projectsData.length)
const projects = ref<ProjectType[]>(projectsData)

function onFiltered(filteredItems: ProjectType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}

function adjustPage() {
    const totalPages = Math.ceil(projects.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}

function handleDeleteItem(item: ProjectType) {
    deleteItem(item)
    totalRows.value = projects.value.length
    adjustPage()
}

function handleDeleteSelected() {
    deleteSelected()
    totalRows.value = projects.value.length
    adjustPage()
}

const { selected, toggleSelectAll, onToggleRow, deleteSelected, deleteItem, allSelected, isIndeterminate } =
    useTableActions(projects)

function getStatusVariant(status: ProjectType['status']) {
    if (status === 'in-progress') {
        return 'warning'
    } else if (status === 'in-review') {
        return 'info'
    } else if (status === 'overdue') {
        return 'danger'
    } else if (status === 'on-hold') {
        return 'dark'
    } else {
        return 'success'
    }
}

usePageMeta('Projects List')

</script>

<style scoped></style>