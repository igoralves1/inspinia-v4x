<template>
    <UICard title="My Tasks" body-class="p-0">
        <BTable thead-class="bg-light align-middle bg-opacity-25 thead-sm" hover
            :fields="fields" :items="tasksData" responsive
            class="table table-custom table-nowrap table-centered mb-0 w-100">
            <template #head()="data">
                <span class="text-uppercase fs-xxs">{{ data.label }}</span>
            </template>
            <template #cell(task)="{ item }">
                <h5 class="fs-sm my-1">
                    <RouterLink to="" class="text-body">{{ item.title }}</RouterLink>
                </h5>
                <span class="text-muted fs-xs">Due in {{ item.dueDays }} days</span>
            </template>
            <template #cell(status)="{ item }">
                <span class="badge" :class="item.status === 'in-progress' ? 'badge-soft-warning' : item.status === 'completed' ? 'badge-soft-success' : item.status === 'on-hold' ? 'badge-soft-dark' : 'badge-soft-danger'">{{ item.status }}</span>
            </template>
            <template #cell(assignBy)="{ item }">
                <div class="d-flex justify-content-start align-items-center gap-2">
                    <div class="avatar avatar-sm">
                        <img :src="item.assignBy.image" alt="avatar-3" class="img-fluid rounded-circle"/>
                    </div>
                    <div>
                        <h5 class="text-nowrap fs-sm mb-0 lh-base">{{ item.assignBy.name }}</h5>
                        <p class="text-muted fs-xs mb-0">{{ item.assignBy.email }}</p>
                    </div>
                </div>
            </template>
            <template #cell(priority)="{ item }">
                <span class="badge"
                    :class="item.priority === 'high' ? 'badge-soft-danger' : item.priority === 'low' ? 'badge-soft-secondary' : 'badge-soft-primary'">{{
                    item.priority }}</span>
            </template>
            <template #cell(action)>
                <RouterLink to="" class="text-muted fs-xxl">
                    <Icon icon="tabler:pencil" />
                </RouterLink>
            </template>

        </BTable>
    </UICard>
</template>

<script setup lang="ts">
import { BTable, type TableFieldRaw } from 'bootstrap-vue-next';
import UICard from '@/components/UICard.vue';
import type { TaskType } from './types';
import { tasks } from './data';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const fields: Exclude<TableFieldRaw<TaskType>, string>[] = [
    { key: 'task', label: 'Task' },
    { key: 'status', label: 'Status' },
    { key: 'assignBy', label: 'Assigned By' },
    { key: 'startDate', label: 'Start Date' },
    { key: 'priority', label: 'Priority' },
    { key: 'progress', label: 'Progress' },
    { key: 'totalTime', label: 'Total Time Spents' },
    { key: 'action', label: '' },
]

const tasksData = ref<TaskType[]>(tasks)

</script>

<style scoped></style>