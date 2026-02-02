<template>
    <BCard no-body class="card-h-100">
        <BCardHeader class="d-flex align-items-center justify-content-between">
            <BCardTitle tag="h4" class="mb-0">
                IT-{{ team.id.toString().padStart(2, '0') }} - {{ team.name }}
                <span v-if="team.isNew" class="ms-2 badge badge-label text-bg-primary">New</span>
            </BCardTitle>

            <BDropdown variant="link" toggle-class="text-muted fs-xl drop-arrow-none px-0" placement="bottom-end">
                <template #button-content>
                    <Icon icon="tabler:dots-vertical" />
                </template>

                <BDropdownItem>
                    <Icon icon="tabler:eye" class="me-2" />
                    View
                </BDropdownItem>
                <BDropdownItem>
                    <Icon icon="tabler:edit" class="me-2" />
                    Edit
                </BDropdownItem>
                <BDropdownItem class="text-danger">
                    <Icon icon="tabler:trash" class="me-2" />
                    Remove
                </BDropdownItem>
            </BDropdown>
        </BCardHeader>

        <BCardBody class="d-flex flex-column justify-content-between">
            <p class="mb-2 text-muted">Total {{ team.members.length }} members</p>

            <div class="avatar-group avatar-group-sm mb-3">
                <div v-for="(member, i) in team.members" :key="i" class="avatar">
                    <img :src="member" alt="" class="rounded-circle avatar-sm" />
                </div>
            </div>

            <div class="mb-3">
                <h5 class="fs-base mb-2">About Team:</h5>
                <p class="text-muted">{{ team.description }}</p>
            </div>

            <BRow>
                <BCol xl="4" md="6" v-for="(stat, idx) in team.stats" :key="idx">
                    <div class="d-flex gap-2 mb-3 mb-xl-0">
                        <div class="avatar-sm flex-shrink-0">
                            <span class="avatar-title text-bg-light rounded-circle">
                                <Icon :icon="stat.icon" class="fs-lg text-primary" />
                            </span>
                        </div>
                        <div>
                            <h6 class="mb-1 text-muted text-uppercase">{{ stat.name }}</h6>
                            <p class="fw-medium mb-0">
                                {{ stat.count?.prefix }}{{ stat.count?.value }}{{ stat.count?.suffix }}
                            </p>
                        </div>
                    </div>
                </BCol>
            </BRow>

            <div class="my-3">
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <p class="mb-0 text-muted fw-semibold fs-xxs">{{ team.progressTitle }}</p>
                    <p class="fw-semibold mb-0">{{ team.progress }}%</p>
                </div>
                <BProgress :value="team.progress" variant="primary" height="8px" />
            </div>

            <div class="d-flex justify-content-between align-items-center">
                <span class="text-muted fs-xs">
                    <Icon icon="tabler:clock" class="me-1" />
                    Updated {{ team.lastUpdatedTime }}
                </span>
                <BButton size="sm" class="rounded-pill" variant="primary">
                    Details
                </BButton>
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import {
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
    BDropdown,
    BDropdownItem,
    BProgress,
    BRow,
    BCol,
    BButton
} from 'bootstrap-vue-next'

import type { TeamType } from '../data';
import { Icon } from '@iconify/vue';

defineProps<{
    team: TeamType
}>()
</script>