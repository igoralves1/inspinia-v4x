<template>
    <BCard no-body class="card-h-100">
        <BCardBody>
            <div class="d-flex align-items-center mb-4">
                <div class="me-3 position-relative">
                    <template v-if="contact.avatar">
                        <img :src="contact.avatar" alt="avatar" class="rounded-circle" width="72" height="72" />
                    </template>
                    <template v-else>
                        <div class="avatar rounded-circle flex-shrink-0" style="width: 72px; height: 72px;">
                            <span class="avatar-title text-bg-primary fw-semibold rounded-circle fs-22">
                                {{ generateInitials(contact.name) }}
                            </span>
                        </div>
                    </template>

                    <span class="position-absolute bottom-0 end-0 badge rounded-circle p-1 shadow-sm"
                        :class="`bg-${contact.variant}`" title="Rating 4.8">
                        <Icon icon="tabler:star" class="text-white" />
                    </span>
                </div>

                <div>
                    <h5 class="mb-1 d-flex align-items-center">
                        <RouterLink to="/pages/profile" class="link-reset">{{ contact.name }}</RouterLink>
                        <img :src="contact.flag" alt="flag" class="ms-2 rounded-circle" height="16" />
                    </h5>
                    <p class="text-muted mb-1">{{ contact.position }}</p>
                    <span class="badge text-bg-light badge-label">{{ contact.role }}</span>
                </div>

                <div class="ms-auto">
                    <BDropdown toggle-class="btn btn-icon btn-ghost-light text-muted drop-arrow-none"
                        placement="right-start">
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
            </div>

            <ul class="list-unstyled text-muted mb-4">
                <li class="mb-2" v-if="contact.email">
                    <div class="d-flex align-items-center gap-2">
                        <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                <Icon icon="tabler:mail" />
                            </span>
                        </div>
                        <h5 class="fs-base mb-0 fw-medium">
                            <RouterLink to="">{{ contact.email }}</RouterLink>
                        </h5>
                    </div>
                </li>

                <li class="mb-2" v-if="contact.mobileNo">
                    <div class="d-flex align-items-center gap-2">
                        <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                <Icon icon="tabler:phone" />
                            </span>
                        </div>
                        <h5 class="fs-base mb-0 fw-medium">
                            <RouterLink to="">{{ contact.mobileNo }}</RouterLink>
                        </h5>
                    </div>
                </li>

                <li class="mb-2" v-if="contact.location">
                    <div class="d-flex align-items-center gap-2">
                        <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                <Icon icon="tabler:map-pin" />
                            </span>
                        </div>
                        <h5 class="fs-base mb-0 fw-medium">{{ contact.location }}</h5>
                    </div>
                </li>

                <li v-if="contact.url">
                    <div class="d-flex align-items-center gap-2">
                        <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                <Icon icon="tabler:link" />
                            </span>
                        </div>
                        <h5 class="fs-base mb-0 fw-medium">
                            <RouterLink to="">{{ contact.url }}</RouterLink>
                        </h5>
                    </div>
                </li>
            </ul>

            <div class="d-flex justify-content-between align-items-center">
                <span class="text-muted fs-xs">
                    <Icon icon="tabler:refresh" class="me-1" />
                    Updated {{ contact.updatedTime }}
                </span>
                <RouterLink  to="/pages/profile"  class="btn btn-soft-primary btn-sm rounded-pill">
                    View Profile
                </RouterLink>
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BCard, BCardBody, BDropdown, BDropdownItem } from 'bootstrap-vue-next'
import type { ContactType } from '../data'
import { generateInitials } from '@/helpers/generators';
import { Icon } from '@iconify/vue';

defineProps<{ contact: ContactType }>()

</script>