<template>
    <BCard no-body>
        <BCardHeader class="justify-content-between border-dashed d-flex align-items-center">
            <BCardTitle as="h4">Customer Details</BCardTitle>
            <button class="btn btn-default btn-sm btn-icon rounded-circle">
                <Icon icon="tabler:pencil" class="fs-lg" />
            </button>
        </BCardHeader>

        <BCardBody>
            <div class="d-flex align-items-center mb-4">
                <div class="me-2">
                    <img :src="user5" width="44" height="44" alt="avatar"
                        class="rounded-circle avatar-lg" />
                </div>
                <div>
                    <h5 class="mb-1 d-flex align-items-center">
                        <RouterLink to="/pages/profile" class="link-reset">Sophia Carter</RouterLink>
                        <img :src="gbImg" alt="UK" width="16" height="16"
                            class="ms-2 rounded-circle" />
                    </h5>
                    <p class="text-muted mb-0">Since 2020</p>
                </div>

                <div class="ms-auto">
                    <BDropdown toggle-class="drop-arrow-none px-1" variant="link" class="btn-icon btn-ghost-light text-muted" align="end">
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
                            <Icon icon="tabler:lock" class="me-2" /> Block
                        </BDropdownItem>
                        <BDropdownItem class="text-danger">
                            <Icon icon="tabler:trash" class="me-2" /> Delete
                        </BDropdownItem>
                    </BDropdown>
                </div>
            </div>

            <ul class="list-unstyled text-muted mb-0">
                <li class="mb-2">
                    <div class="d-flex align-items-center gap-2">
                        <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                <Icon icon="tabler:mail" />
                            </span>
                        </div>
                        <h5 class="fs-base mb-0 fw-medium">
                            <RouterLink to="" class="link-reset">sophia@designhub.com</RouterLink>
                        </h5>
                    </div>
                </li>
                <li class="mb-2">
                    <div class="d-flex align-items-center gap-2">
                        <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                <Icon icon="tabler:phone" />
                            </span>
                        </div>
                        <h5 class="fs-base mb-0 fw-medium">
                            <RouterLink to="" class="link-reset">+44 7911 123456</RouterLink>
                        </h5>
                    </div>
                </li>
                <li>
                    <div class="d-flex align-items-center gap-2">
                        <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                <Icon icon="tabler:map-pin" />
                            </span>
                        </div>
                        <h5 class="fs-base mb-0 fw-medium">London, UK</h5>
                    </div>
                </li>
            </ul>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader, BCardTitle, BDropdown, BDropdownItem } from 'bootstrap-vue-next'

import user5 from '@/assets/images/users/user-5.jpg'
import gbImg from '@/assets/images/flags/gb.svg'
import { Icon } from '@iconify/vue';
</script>
