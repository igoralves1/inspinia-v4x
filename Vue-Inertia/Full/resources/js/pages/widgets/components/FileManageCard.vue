<template>
    <BCard no-body>
        <BCardHeader class="d-flex align-items-center justify-content-between">
            <h4 class="card-title mb-0">File Manage</h4>
            <Link href="#" class="btn btn-light btn-sm btn-icon rounded-circle" title="Add New">
                <Icon icon="tabler:plus" />
            </Link>
        </BCardHeader>

        <BCardBody>
            <div v-for="(file, idx) in fileItems" :key="idx" class="d-flex justify-content-between align-items-center"
                :class="{ 'pb-2': idx !== fileItems.length - 1 }">
                <div class="d-flex align-items-center py-1 gap-2">
                    <div
                        class="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2 d-flex align-items-center justify-content-center">
                        <span class="avatar-title">
                            <component :is="file.icon" class="fs-xl" />
                        </span>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="mb-1 fs-base">
                            <Link href="#" class="link-reset">
                                {{ file.name }}
                            </Link>
                        </h5>
                        <p class="text-muted mb-0 fs-xs">{{ formatBytes(file.size) }}</p>
                    </div>
                </div>

                <div class="avatar-group avatar-group-xs">
                    <div v-for="(user, i) in file.users" :key="i" class="avatar">
                        <img :src="user" class="rounded-circle avatar-xs" alt="User" />
                    </div>
                </div>

                <div>
                    <Link href="#" class="btn btn-sm btn-icon btn-default" title="Download">
                        <Icon icon="tabler-download" class="fs-lg" />
                    </Link>
                </div>
            </div>
        </BCardBody>
    </BCard>
</template>
<script setup lang="ts">
import { BCard, BCardBody, BCardHeader } from 'bootstrap-vue-next';
import { fileItems } from './data';
import { formatBytes } from '@/helpers/file';
import { Icon } from '@iconify/vue';
import { Link } from '@inertiajs/vue3';
</script>
