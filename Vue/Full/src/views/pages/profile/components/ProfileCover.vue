<template>
    <article class="card card-out-of-container border-top-0">
        <div class="position-relative card-side-img overflow-hidden" style="height: 250px"
            :style="{ backgroundImage: `url(${backgroundImg})` }">
            <div
                class="p-4 card-img-overlay rounded-start-0 auth-overlay d-flex align-items-center justify-content-center">
                <h3 class="text-white mb-0 fst-italic">
                    "Designing the future, one template at a time"
                </h3>
            </div>
        </div>

        <BCardBody>
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-start align-items-center gap-3">
                    <div class="avatar avatar-xxl">
                        <img :src="user2" width="80" height="80" alt="avatar-2"
                            class="img-fluid img-thumbnail rounded-circle" />
                    </div>
                    <div>
                        <h4 class="text-nowrap fw-bold mb-1">Damian D.</h4>
                        <p class="text-muted mb-1">Product Designer</p>
                        <span class="badge badge-soft-primary fw-medium ms-2 fs-xs ms-auto">
                            Author
                        </span>
                    </div>
                </div>

                <div class="d-flex gap-2">
                    <BButton variant="outline-primary">Follow</BButton>
                    <BButton variant="primary">Message</BButton>

                    <BDropdown end toggle-class="drop-arrow-none btn-dark btn-icon">
                        <template #button-content>
                            <Icon icon="tabler:dots" class="fs-24" />
                        </template>
                        <BDropdownItem>Edit Profile</BDropdownItem>
                        <BDropdownItem>Report</BDropdownItem>
                    </BDropdown>
                </div>
            </div>
        </BCardBody>
    </article>
</template>


<script setup lang="ts">
import { BButton, BDropdown, BDropdownItem, BCardBody } from 'bootstrap-vue-next'
import user2 from '@/assets/images/users/user-2.jpg'
import { Icon } from '@iconify/vue';

import backgroundImg from '@/assets/images/profile-bg.jpg'
</script>