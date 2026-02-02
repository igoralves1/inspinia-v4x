<template>
    <BCard no-body>
        <BCardBody>
            <div v-for="(item, idx) in comments" :key="idx" class="d-flex border border-dashed rounded p-3">
                <div class="flex-shrink-0">
                    <img :src="item.avatar" alt="avatar" class="avatar-sm rounded-circle shadow-sm" />
                </div>

                <div class="flex-grow-1 ms-2">
                    <h5 class="mb-1">
                        {{ item.name }}
                        <small class="text-muted">
                            {{ ' ' + item.date }} · {{ item.time }}
                        </small>
                    </h5>
                    <p class="mb-2">{{ item.message }}</p>

                    <div class="d-flex justify-content-between mt-2 text-muted">
                        <div class="d-flex gap-3">
                            <span class="d-inline-flex align-items-center gap-1">
                                <Icon icon="tabler:eye" />
                                {{ abbreviatedNumber(item.views) }}
                            </span>
                            <span class="d-inline-flex align-items-center gap-1">
                                <Icon icon="tabler:heart" />
                                {{ item.likes }}
                            </span>
                            <span class="d-inline-flex align-items-center gap-1">
                                <Icon icon="tabler:message-circle" />
                                {{ item.comments }}
                            </span>
                        </div>
                        <RouterLink to="#" class="link-primary fw-semibold d-inline-flex align-items-center gap-1">
                            <Icon icon="tabler:arrow-back-up" /> Reply
                        </RouterLink>
                    </div>

                    <div v-for="(reply, rIdx) in item.reply" :key="rIdx" class="d-flex mt-4">
                        <div class="flex-shrink-0">
                            <img :src="reply.avatar" alt="reply-avatar" class="avatar-sm rounded-circle shadow-sm" />
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="mb-1">
                                {{ reply.name }}
                                <small class="text-muted">
                                    {{ ' ' + reply.date }} · {{ reply.time }}
                                </small>
                            </h5>
                            <p class="mb-2">{{ reply.message }}</p>
                            <div class="d-flex justify-content-between text-muted">
                                <div class="d-flex gap-3">
                                    <span class="d-inline-flex align-items-center gap-1">
                                        <Icon icon="tabler:eye" />
                                        {{ abbreviatedNumber(reply.views) }}
                                    </span>
                                    <span class="d-inline-flex align-items-center gap-1">
                                        <Icon icon="tabler:heart" />
                                        {{ reply.likes }}
                                    </span>
                                    <span class="d-inline-flex align-items-center gap-1">
                                        <Icon icon="tabler:message-circle" />
                                        {{ reply.comments }}
                                    </span>
                                </div>
                                <RouterLink to="#"
                                    class="link-primary fw-semibold d-inline-flex align-items-center gap-1">
                                    <Icon icon="tabler:arrow-back-up" /> Reply
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody } from 'bootstrap-vue-next';
import { comments } from './data';
import { Icon } from '@iconify/vue';
import { abbreviatedNumber } from '@/helpers/casing';
</script>