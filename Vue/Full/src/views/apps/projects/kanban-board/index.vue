<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Kanban Board" subTitle="Projects" />

            <div class="outlook-box kanban-app">
                <BCard no-body class="h-100 mb-0 flex-grow-1">
                    <BCardHeader class="border-light align-items-center gap-2">

                        <div class="app-search">
                            <input type="search" class="form-control" placeholder="Search tasks...">
                            <Icon  icon="lucide:search" class="app-search-icon text-muted" />
                        </div>

                        <div class="d-flex flex-wrap align-items-center gap-2">

                            <div class="app-search">
                                <select class="form-select form-control">
                                    <option selected>Department</option>
                                    <option value="Design">Design</option>
                                    <option value="Development">Development</option>
                                    <option value="UI/UX">UI/UX</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Finance">Finance</option>
                                    <option value="QA">QA</option>
                                </select>
                                <Icon  icon="lucide:briefcase" class="app-search-icon text-muted" />
                            </div>

                            <div class="app-search">
                                <select class="form-select form-control">
                                    <option selected>Due Date</option>
                                    <option value="Today">Today</option>
                                    <option value="This Week">This Week</option>
                                    <option value="This Month">This Month</option>
                                </select>
                                <Icon  icon="lucide:calendar-clock" class="app-search-icon text-muted" />
                            </div>
                        </div>

                        <button type="submit" class="btn btn-secondary ms-lg-auto">
                            <Icon icon="tabler:plus" class="me-1" /> Add New
                            Card
                        </button>
                    </BCardHeader>

                    <BCardBody class="p-0">
                        <div class="kanban-content bg-light bg-opacity-40">

                            <div v-for="(status, idx) in statuses" :key="idx" class="kanban-board">
                                <div class="kanban-item py-2 px-3 d-flex align-items-center">
                                    <h5 class="m-0">{{ toTitleCase(status) }} ({{ tasksByStatus(status).length }})</h5>
                                    <RouterLink to="" class="ms-auto btn btn-sm btn-icon rounded-circle btn-primary">
                                        <Icon icon="tabler:plus" />
                                    </RouterLink>
                                </div>
                                <simplebar class="kanban-board-group px-3">
                                    <ul data-plugins="sortable">
                                        <li class="kanban-item" v-for="(task, idx) in tasksByStatus(status)" :key="idx">
                                            <VueDraggableNext group="project-task" id="project-tasks-list">
                                                <TaskCard :item="task" />
                                            </VueDraggableNext>
                                        </li>
                                    </ul>
                                </simplebar>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </div>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardHeader, BContainer } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import { KanbanTaskData, type KanbanTaskType } from './data';
import TaskCard from './components/TaskCard.vue';
import simplebar from 'simplebar-vue';
import { VueDraggableNext } from 'vue-draggable-next'
import { toTitleCase } from '@/helpers/casing';
import { usePageMeta } from '@/composables/usePageMeta';
import { Icon } from '@iconify/vue';
import MainLayout from '@/layouts/MainLayout.vue';

const statuses: KanbanTaskType['status'][] = ['todo', 'in-progress', 'in-review', 'done']

const tasksByStatus = (status: string) => {
    return KanbanTaskData.filter((task: KanbanTaskType) => task.status === status)
}

usePageMeta('Kanban Board')

</script>

<style lang="scss" scoped></style>