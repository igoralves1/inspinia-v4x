<template>
    <BCard no-body class="card-h-100">
        <BCardBody>
            <div class="d-flex align-items-center mb-4">
                <div class="me-3 position-relative">
                    <template v-if="contact.avatar">
                        <NuxtImg :src="contact.avatar" alt="avatar" class="rounded-circle" width="72" height="72" />
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
                        <Icon name="tabler:star" class="text-white" />
                    </span>
                </div>

                <div>
                    <h5 class="mb-1 d-flex align-items-center">
                        <NuxtLink to="/pages/profile" class="link-reset">{{ contact.name }}</NuxtLink>
                        <NuxtImg :src="contact.flag" alt="flag" class="ms-2 rounded-circle" height="16" />
                    </h5>
                    <p class="text-muted mb-1">{{ contact.position }}</p>
                    <span class="badge text-bg-light badge-label">{{ contact.role }}</span>
                </div>

                <div class="ms-auto">
                    <BDropdown toggle-class="btn btn-icon btn-ghost-light text-muted drop-arrow-none"
                        placement="right-start">
                        <template #button-content>
                            <Icon name="tabler:dots-vertical" class="fs-xl" />
                        </template>

                        <BDropdownItem>
                            <Icon name="tabler:share" class="me-2" /> Share
                        </BDropdownItem>
                        <BDropdownItem>
                            <Icon name="tabler:edit" class="me-2" /> Edit
                        </BDropdownItem>
                        <BDropdownItem>
                            <Icon name="tabler:ban" class="me-2" /> Block
                        </BDropdownItem>
                        <BDropdownItem class="text-danger">
                            <Icon name="tabler:trash" class="me-2" /> Delete
                        </BDropdownItem>
                    </BDropdown>
                </div>
            </div>

            <ul class="list-unstyled text-muted mb-4">
                <li class="mb-2" v-if="contact.email">
                    <div class="d-flex align-items-center gap-2">
                        <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                <Icon name="tabler:mail" />
                            </span>
                        </div>
                        <h5 class="fs-base mb-0 fw-medium">
                            <NuxtLink to="">{{ contact.email }}</NuxtLink>
                        </h5>
                    </div>
                </li>

                <li class="mb-2" v-if="contact.mobileNo">
                    <div class="d-flex align-items-center gap-2">
                        <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                <Icon name="tabler:phone" />
                            </span>
                        </div>
                        <h5 class="fs-base mb-0 fw-medium">
                            <NuxtLink to="">{{ contact.mobileNo }}</NuxtLink>
                        </h5>
                    </div>
                </li>

                <li class="mb-2" v-if="contact.location">
                    <div class="d-flex align-items-center gap-2">
                        <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                <Icon name="tabler:map-pin" />
                            </span>
                        </div>
                        <h5 class="fs-base mb-0 fw-medium">{{ contact.location }}</h5>
                    </div>
                </li>

                <li v-if="contact.url">
                    <div class="d-flex align-items-center gap-2">
                        <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                <Icon name="tabler:link" />
                            </span>
                        </div>
                        <h5 class="fs-base mb-0 fw-medium">
                            <NuxtLink to="">{{ contact.url }}</NuxtLink>
                        </h5>
                    </div>
                </li>
            </ul>

            <div class="d-flex justify-content-between align-items-center">
                <span class="text-muted fs-xs">
                    <Icon name="tabler:refresh" class="me-1" />
                    Updated {{ contact.updatedTime }}
                </span>
                <NuxtLink  to="/pages/profile"  class="btn btn-soft-primary btn-sm rounded-pill">
                    View Profile
                </NuxtLink>
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BCard, BCardBody, BDropdown, BDropdownItem } from 'bootstrap-vue-next'
import type { ContactType } from '../data'
import { generateInitials } from '~/helpers/generators';

const props = defineProps<{ contact: ContactType }>()

</script>