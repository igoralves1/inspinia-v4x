<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Issue List" subTitle="Apps" />

            <BRow>
                <BCol xs="12">
                    <BCard no-body>
                        <BCardHeader class="border-light justify-content-between">
                            <div class="app-search">
                                <input v-model="searchQuery" type="search" class="form-control"
                                    placeholder="Search issues...">
                                <Icon icon="lucide:search"  class="app-search-icon text-muted" />
                            </div>

                            <button type="submit" class="btn btn-success">Add New Issues</button>
                        </BCardHeader>

                        <BCardBody>
                            <div class="table-responsive">

                                <BTable show-empty :filter="searchQuery" empty-text="Nothing found."
                                    thead-class="d-none" v-model:selected-rows="selected" hover :fields="fields"
                                    :items="issuesData" :per-page="perPage" :current-page="currentPage"
                                    @filtered="onFiltered" responsive
                                    class="table table-custom table-nowrap table-centered mb-0 w-100">
                                    <template #cell(status)="{ item }">
                                        <span class="badge fs-xxs badge-label"
                                            :class="item.status === 'resolved' ? 'text-bg-success' : item.status === 'in-progress' ? 'text-bg-warning' : item.status === 'review' ? 'text-bg-info' : item.status === 'pending' ? 'text-bg-secondary' : 'text-bg-danger'">{{
                                                toPascalCase(item.status) }}</span>
                                    </template>
                                    <template #cell(issue)="{ item }">
                                        <RouterLink to="" class="link-reset text-uppercase fw-semibold">{{ item.issueID
                                            }}
                                        </RouterLink>
                                        <p class="mb-0 text-muted">{{ item.description }}</p>
                                    </template>
                                    <template #cell(userName)="{ item }">
                                        <div class="d-flex justify-content-start align-items-center gap-2">
                                            <div class="avatar avatar-xs">
                                                <img :src="item.image" alt="avatar-3"
                                                    class="img-fluid rounded-circle" />
                                            </div>
                                            <div>
                                                <h5 class="text-nowrap mb-0 lh-base">{{ item.name }}</h5>
                                            </div>
                                        </div>

                                    </template>
                                    <template #cell(created)="{ item }">
                                        <p class="mb-0">
                                            <Icon icon="tabler:calendar" /> <span class="fw-semibold">Created:</span>
                                            {{ item.createdAt }}
                                        </p>
                                        <p class="mb-0">
                                            <Icon icon="tabler:clock" /> <span class="fw-semibold">Due:</span>
                                            {{ item.dueDate }}
                                        </p>
                                    </template>
                                    <template #cell(role)="{ item }">
                                        <RouterLink to="" v-for="(tag, idx) in item.tags" :key="idx"
                                            class="badge badge-label badge-default me-1">{{ tag }}</RouterLink>
                                    </template>
                                    <template #cell(progress)="{ item }">
                                        <BProgress :value="item.progress" :bg-variant="item.variant" :max="100"
                                            style="height: 6px;" />

                                        <small class="text-muted">{{ item.progress }}% Complete</small>
                                    </template>
                                    <template #cell(comments)="{ item }">
                                        <Icon icon="tabler:message-circle" class="text-muted me-1" /> {{ item.comments
                                        }}
                                        comments
                                    </template>
                                    <template #cell(files)="{ item }">
                                        <Icon icon="tabler:paperclip" class="text-muted me-1" /> {{ item.files }} files
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
                                                <Icon icon="tabler:trash" class="fs-lg"
                                                    @click="handleDeleteItem(item)" />
                                            </button>
                                        </div>
                                    </template>
                                </BTable>
                                <BCardFooter class="border-0 px-0 pb-0">
                                    <TablePagination v-model:currentPage="currentPage" :per-page="perPage"
                                        :total-items="totalRows" label="categories" />
                                </BCardFooter>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardHeader, BCardBody, BCol, BContainer, BRow, type TableFieldRaw, BProgress } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import TablePagination from '@/components/TablePagination.vue';
import { issues, type IssueType } from './data';
import { toPascalCase } from '@/helpers/casing';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useTableActions } from '@/composables/useTableActions';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

const fields: Exclude<TableFieldRaw<IssueType>, string>[] = [
    { key: 'status', label: 'Status', },
    { key: 'issue', label: 'Issue', },
    { key: 'userName', label: 'User Name', },
    { key: 'created', label: 'Created', },
    { key: 'role', label: 'Role', },
    { key: 'progress', label: 'Progress', },
    { key: 'comments', label: 'Comments', },
    { key: 'files', label: 'Files', },
    { key: 'action', label: 'Action', sortable: false },
]

const searchQuery = ref('')


const currentPage = ref(1)
const perPage = ref(8)
const totalRows = ref(issues.length)
const issuesData = ref<IssueType[]>(issues)

function onFiltered(filteredItems: IssueType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}

function adjustPage() {
    const totalPages = Math.ceil(issuesData.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}

function handleDeleteItem(item: IssueType) {
    deleteItem(item)
    totalRows.value = issuesData.value.length
    adjustPage()
}


const { selected, deleteItem } = useTableActions(issuesData)

usePageMeta('Issue Tracker')

</script>

<style scoped></style>