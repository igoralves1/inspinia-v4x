<template>
    <div>
        <BCard no-body v-for="(task, idx) in tasks" :key="idx" class="mb-1">
            <BCardBody class="p-2">
                <BRow class="g-3 align-items-center justify-content-between">
                    <BCol md="6">
                        <div class="d-flex align-items-center gap-2">
                            <input type="checkbox" class="form-check-input rounded-circle mt-0 fs-xl"
                                :id="`task${task.id}`" />
                            <RouterLink to="#" class="link-reset fw-medium">
                                {{ task.title }}
                            </RouterLink>
                        </div>
                    </BCol>

                    <BCol md="6">
                        <div class="d-flex align-items-center gap-3 justify-content-md-end">
                            <div class="d-flex align-items-center gap-1">
                                <div class="avatar avatar-xs">
                                    <img :src="task.avatar" :alt="task.name" class="img-fluid rounded-circle" />
                                </div>
                                <div>
                                    <h5 class="text-nowrap mb-0 lh-base">
                                        <RouterLink to="/pages/profile" class="link-reset">
                                            {{ task.name }}
                                        </RouterLink>
                                    </h5>
                                </div>
                            </div>

                            <div class="flex-shrink-0">
                                <span class="badge badge-label" :class="`text-bg-${getStatusVariant(task.status)}`">
                                    {{ toPascalCase(task.status) }}
                                </span>
                            </div>

                            <ul class="list-inline fs-base text-end flex-shrink-0 mb-0">
                                <li class="list-inline-item">
                                    <div class="d-flex align-items-center gap-1">
                                        <Icon icon="tabler:calendar" class="text-muted fs-lg me-1" />
                                        <span class="fw-semibold">{{ task.time }}</span>
                                    </div>
                                </li>
                                <li class="list-inline-item ms-1">
                                    <div class="d-flex align-items-center gap-1">
                                        <Icon icon="tabler:list-details" class="text-muted fs-lg me-1" />
                                        <span class="fw-medium">
                                            {{ task.tasks.completed }}/{{ task.tasks.total }}
                                        </span>
                                    </div>
                                </li>
                                <li class="list-inline-item ms-1">
                                    <div class="d-flex align-items-center gap-1">
                                        <Icon icon="tabler:message" class="text-muted fs-lg me-1" />
                                        <span class="fw-medium">{{ task.comments }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </BCol>
                </BRow>
            </BCardBody>
        </BCard>
    </div>
</template>

<script setup lang="ts">
import { toPascalCase } from '@/helpers/casing'
import type { TaskType } from './types'
import { tasks } from './data'
import { BCard, BCardBody, BCol, BRow } from 'bootstrap-vue-next'
import { Icon } from '@iconify/vue'

// Map status → Bootstrap variant
const getStatusVariant = (status: TaskType['status']) => {
    switch (status) {
        case 'in-progress':
            return 'warning'
        case 'review':
            return 'info'
        case 'delayed':
            return 'danger'
        case 'pending':
            return 'primary'
        case 'planned':
            return 'secondary'
        default:
            return 'success'
    }
}
</script>