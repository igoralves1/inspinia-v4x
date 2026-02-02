<template>
    <BCard no-body class="shadow border-light mb-2">
        <BCardBody>
            <div class="d-flex align-items-center mb-2">
                <span
                    :class="`badge p-1 badge-soft-${item.category.variant} d-flex align-items-center justify-content-center`">
                    <Icon icon="tabler:point-filled" class="me-1" />
                    {{ item.category.name }}
                </span>

                <BDropdown end variant="link" class="ms-auto"  toggle-class="btn btn-icon btn-sm text-muted drop-arrow-none ms-auto">
                    <template #button-content>
                        <Icon icon="tabler:dots-vertical" class="fs-xl" />
                    </template>

                    <BDropdownItem>
                        <Icon icon="tabler:share" class="me-2" /> Share
                    </BDropdownItem>

                    <BDropdownItem>
                        <Icon icon="tabler:edit" class="me-2" /> Edit
                    </BDropdownItem>

                    <BDropdownItem>
                        <Icon icon="tabler:ban" class="me-2" /> Block
                    </BDropdownItem>

                    <BDropdownItem class="text-danger">
                        <Icon icon="tabler:trash" class="me-2" /> Delete
                    </BDropdownItem>
                </BDropdown>
            </div>

            <h5 class="mb-3">
                <RouterLink to="" class="link-reset">
                    {{ item.title }}
                </RouterLink>
            </h5>

            <div v-if="item.image" class="mb-3">
                <img :src="item.image" alt="user" class="rounded img-fluid w-100" />
            </div>

            <div class="d-flex justify-content-between">
                <div class="avatar-group avatar-group-xs d-flex">
                    <div v-for="(user, idx) in item.users" :key="idx" class="avatar">
                        <img :src="user" alt="user" class="rounded-circle avatar-xs" />
                    </div>
                </div>

                <div class="d-flex align-items-center gap-2">
                    <Icon icon="tabler:calendar-time" class="text-muted fs-lg" />
                    <h5 class="fs-base mb-0 fw-medium">{{ item.date }}</h5>
                </div>
            </div>

            <div v-if="item.progress" class="mt-3">
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <p class="mb-0 text-muted fw-semibold fs-xxs">Progress</p>
                    <p class="fw-semibold mb-0">{{ item.progress }}%</p>
                </div>
                <BProgress :value="item.progress" :bg-variant="item.category.variant" height="5px" />
            </div>
        </BCardBody>
    </BCard>
</template>


<script setup lang="ts">

import {
    BCard,
    BCardBody,
    BDropdown,
    BDropdownItem,
    BProgress,
} from 'bootstrap-vue-next'
import type { KanbanTaskType } from '../data';
import { Icon } from '@iconify/vue';


defineProps<{
    item: KanbanTaskType
}>()

</script>