<template>
    <BCard no-body>
        <BCardHeader class="justify-content-between">
            <h4 class="card-title">Today's Schedule</h4>
            <RouterLink to="" class="link-primary fw-semibold d-inline-flex align-items-center gap-1">
                <Icon icon="tabler:calendar" class="me-1" />
                <span>Invite</span>
            </RouterLink>
        </BCardHeader>

        <BCardBody>
            <div class="pb-2 border-bottom border-light border-dashed">
                <div class="mb-2">
                    <p class="mb-1 text-truncate fs-sm fw-medium">Design Review Meeting</p>
                    <span class="text-warning fs-xs">30 minute session with UI/UX team</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="avatar-group avatar-group-xs">
                        <div class="avatar">
                            <img :src="user5" alt="Liam Carter" class="avatar-xs rounded-circle" />
                        </div>
                        <div class="avatar">
                            <img :src="user6" alt="Zoe Miles" class="avatar-xs rounded-circle" />
                        </div>
                        <div class="avatar avatar-xs">
                            <span class="avatar-title bg-primary-subtle text-primary rounded-circle fw-bold">
                                D
                            </span>
                        </div>
                    </div>
                    <button type="button" class="btn btn-sm rounded-circle btn-icon btn-soft-secondary">
                        <Icon icon="tabler:brand-figma" class="fs-lg" />
                    </button>
                </div>
            </div>

            <div class="py-2 border-bottom border-light border-dashed">
                <div class="mb-2">
                    <p class="mb-1 text-truncate fs-sm fw-medium">Sprint Planning Session</p>
                    <span class="text-success fs-xs">1 hour agile team meeting</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="avatar-group avatar-group-xs">
                        <div class="avatar">
                            <img :src="user7" alt="Ava Lee" class="avatar-xs rounded-circle" />
                        </div>
                        <div class="avatar">
                            <img :src="user8" alt="Ethan King" class="avatar-xs rounded-circle" />
                        </div>
                        <div class="avatar">
                            <img :src="user9" alt="Lucas White" class="avatar-xs rounded-circle" />
                        </div>
                    </div>
                    <button type="button" class="btn btn-sm rounded-circle btn-icon btn-soft-secondary">
                        <Icon icon="tabler:calendar-event" class="fs-lg" />
                    </button>
                </div>
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">

import { BCard, BCardBody, BCardHeader } from 'bootstrap-vue-next'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'
import { Icon } from '@iconify/vue'
</script>
