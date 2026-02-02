<template>
    <BCard no-body class="card-h-100 rounded-0 rounded-end">
        <BCardBody class="p-0">
            <div class="p-3 border-bottom border-dashed">
                <h5 class="mb-2">Status</h5>
                <div class="app-search">
                    <select class="form-select form-control my-1 my-md-0">
                        <option>Status</option>
                        <option value="On Track">On Track</option>
                        <option value="Delayed">Delayed</option>
                        <option value="At Risk">At Risk</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <Icon  icon="lucide:calendar-clock" class="app-search-icon text-muted" />
                </div>
            </div>

            <div class="p-3 border-bottom border-dashed">
                <div class="d-flex mb-3 justify-content-between align-items-center">
                    <h5 class="mb-0">Team Members:</h5>
                    <RouterLink to="#" class="btn btn-light btn-sm btn-icon rounded-circle">
                        <Icon icon="tabler:plus" />
                    </RouterLink>
                </div>

                <div v-for="(member, idx) in teamMembers" :key="idx"
                    class="d-flex justify-content-between align-items-center"
                    :class="{ 'pb-2': idx !== teamMembers.length - 1 }">
                    <div class="d-flex align-items-center py-1 gap-2">
                        <div class="avatar avatar-sm">
                            <img :src="member.avatar" alt="avatar" class="img-fluid rounded-circle" />
                        </div>
                        <div>
                            <h5 class="text-nowrap mb-0 lh-base">
                                <RouterLink to="/pages/profile" class="link-reset">
                                    {{ member.name }}
                                </RouterLink>
                            </h5>
                            <p class="text-muted fs-xxs mb-0">{{ member.role }}</p>
                        </div>
                    </div>
                    <div>
                        <RouterLink to="" class="btn btn-sm btn-icon btn-default" title="Message">
                            <Icon icon="tabler:message" class="fs-lg" />
                        </RouterLink>
                    </div>
                </div>
            </div>

            <div class="px-3 pt-3 border-bottom border-dashed">
                <div class="d-flex mb-3 justify-content-between align-items-center">
                    <h5 class="mb-0">Files:</h5>
                    <RouterLink to="" class="btn btn-light btn-sm btn-icon rounded-circle">
                        <Icon icon="tabler:plus" />
                    </RouterLink>
                </div>

                <div v-for="({ name, size, icon }, idx) in files" :key="idx"
                    class="d-flex justify-content-between align-items-center pb-2">
                    <div class="d-flex align-items-center py-1 gap-2">
                        <div class="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2">
                            <span class="avatar-title">
                                <Icon :icon="icon" class="fs-xl" />
                            </span>
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="mb-1 fs-base">
                                <RouterLink to="#" class="link-reset">
                                    {{ name }}
                                </RouterLink>
                            </h5>
                            <p class="text-muted mb-0 fs-xs">{{ formatBytes(size) }}</p>
                        </div>
                    </div>
                    <div>
                        <RouterLink to="#" class="btn btn-sm btn-icon btn-default" title="Download">
                            <Icon icon="tabler:download" class="fs-lg" />
                        </RouterLink>
                    </div>
                </div>

                <div class="d-flex align-items-center justify-content-center gap-2 p-3">
                    <strong>Loading...</strong>
                    <div class="spinner-border spinner-border-sm text-danger" role="status" aria-hidden="true"></div>
                </div>
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody } from 'bootstrap-vue-next';
import { files, teamMembers } from './data';
import { Icon } from '@iconify/vue';
import { formatBytes } from '@/helpers/file';

</script>