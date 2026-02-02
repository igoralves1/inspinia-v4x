<template>
    <BCard no-body>
        <BCardBody class="d-flex flex-column justify-content-between">
            <div class="d-flex align-items-center mb-4">
                <div class="flex-shrink-0">
                    <div
                        class="avatar-xl rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center">
                        <Icon :icon="member.icon" class="fs-24 text-primary" />
                    </div>
                </div>

                <div class="ms-3">  
                    <h5 class="mb-2">{{ member.title }}</h5>
                    <p class="text-muted mb-0 fs-base">{{ member.description }}</p>
                </div>

                <div class="ms-auto">
                    <BDropdown placement="bottom-end" variant="link" toggle-class="text-muted px-0 fs-xl drop-arrow-none">
                        <template #button-content>
                            <Icon icon="tabler:dots-vertical" />
                        </template>
                        <BDropdownItem>
                            <Icon icon="tabler:eye" class="me-2" /> View
                        </BDropdownItem>
                        <BDropdownItem>
                            <Icon icon="tabler:edit" class="me-2" /> Edit
                        </BDropdownItem>
                        <BDropdownItem class="text-danger">
                            <Icon icon="tabler:trash" class="me-2" /> Remove
                        </BDropdownItem>
                    </BDropdown>
                </div>
            </div>

            <ul class="list-unstyled mb-3">
                <li v-for="(feature, idx) in member.features" :key="idx" class="d-flex align-items-center"
                    :class="{ 'mb-2': idx !== member.features.length - 1 }">
                    <Icon icon="tabler:check" class="fs-lg text-success me-2" /> {{ feature }}
                </li>
            </ul>

            <p class="mb-2 text-muted">Total {{ member.users.length }} users</p>
            <div class="avatar-group avatar-group-sm mb-3">
                <div v-for="(user, idx) in member.users.slice(0, 4)" :key="idx" class="avatar">
                    <img :src="user" class="rounded-circle avatar-sm" :alt="`user-${idx + 1}`" />
                </div>

                <BTooltip v-if="member.users.length > 4" :title="`${member.users.length - 4} More`" placement="top">
                    <template #target>
                        <div class="avatar avatar-sm">
                            <span class="avatar-title text-bg-primary rounded-circle fw-bold">
                                +{{ member.users.length - 4 }}
                            </span>
                        </div>
                    </template>
                </BTooltip>
            </div>

            <div class="d-flex justify-content-between align-items-center">
                <span class="text-muted fs-xs">
                    <Icon icon="tabler:clock" class="me-1" />
                    Updated {{ member.updatedTime }}
                </span>
                <RouterLink to="" class="btn btn-sm btn-outline-primary rounded-pill">
                    Details
                </RouterLink>
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BDropdown, BDropdownItem, BTooltip } from 'bootstrap-vue-next';
import type { MemberRoleType } from './types';
import { Icon } from '@iconify/vue';

defineProps<{ member: MemberRoleType }>()
</script>

<style scoped></style>