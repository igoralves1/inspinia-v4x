<template>
    <BCard no-body>
        <BCardHeader class="justify-content-between border-dashed d-flex align-items-center">
            <BCardTitle as="h4">Customer Details</BCardTitle>
            <button class="btn btn-default btn-sm btn-icon rounded-circle">
                <Icon name="tabler:pencil" class="fs-lg" />
            </button>
        </BCardHeader>

        <BCardBody>
            <div class="d-flex align-items-center mb-4">
                <div class="me-2">
                    <NuxtImg src="/images/users/user-5.jpg" width="44" height="44" alt="avatar"
                        class="rounded-circle avatar-lg" />
                </div>
                <div>
                    <h5 class="mb-1 d-flex align-items-center">
                        <NuxtLink to="/pages/profile" class="link-reset">Sophia Carter</NuxtLink>
                        <NuxtImg src="/images/flags/gb.svg" alt="UK" width="16" height="16"
                            class="ms-2 rounded-circle" />
                    </h5>
                    <p class="text-muted mb-0">Since 2020</p>
                </div>

                <div class="ms-auto">
                    <BDropdown toggle-class="drop-arrow-none px-1" variant="link" class="btn-icon btn-ghost-light text-muted" align="end">
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
                            <Icon name="tabler:lock" class="me-2" /> Block
                        </BDropdownItem>
                        <BDropdownItem class="text-danger">
                            <Icon name="tabler:trash" class="me-2" /> Delete
                        </BDropdownItem>
                    </BDropdown>
                </div>
            </div>

            <ul class="list-unstyled text-muted mb-0">
                <li class="mb-2">
                    <div class="d-flex align-items-center gap-2">
                        <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                <Icon name="tabler:mail" />
                            </span>
                        </div>
                        <h5 class="fs-base mb-0 fw-medium">
                            <NuxtLink to="" class="link-reset">sophia@designhub.com</NuxtLink>
                        </h5>
                    </div>
                </li>
                <li class="mb-2">
                    <div class="d-flex align-items-center gap-2">
                        <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                <Icon name="tabler:phone" />
                            </span>
                        </div>
                        <h5 class="fs-base mb-0 fw-medium">
                            <NuxtLink to="" class="link-reset">+44 7911 123456</NuxtLink>
                        </h5>
                    </div>
                </li>
                <li>
                    <div class="d-flex align-items-center gap-2">
                        <div class="avatar-xs avatar-img-size fs-24">
                            <span class="avatar-title text-bg-light fs-sm rounded-circle">
                                <Icon name="tabler:map-pin" />
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
</script>
