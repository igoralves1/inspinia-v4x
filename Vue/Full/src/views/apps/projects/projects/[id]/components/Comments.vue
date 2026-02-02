<template>
    <div>
        <form action="#" class="mb-3">
            <div class="mb-3">
                <textarea class="form-control" id="form-control-textarea" rows="4"
                    placeholder="Enter your messages..."></textarea>
            </div>
            <div class="text-end">
                <BButton variant="secondary" type="submit" size="sm">
                    Comment
                    <Icon icon="tabler:send-2" class="align-baseline ms-1" />
                </BButton>
            </div>
        </form>

        <h4 class="mb-3 fs-md">Comments (15)</h4>

        <div v-for="(comment, idx) in comments" :key="idx" class="d-flex border border-dashed rounded p-3"
            :class="idx === comments.length - 1 ? 'mb-3' : 'mb-2'">
            <div class="flex-shrink-0">
                <img :src="comment.avatar" alt="comment-avatar" class="avatar-sm rounded-circle shadow-sm" />
            </div>

            <div class="flex-grow-1 ms-2">
                <h5 class="mb-1">
                    {{ comment.name }}
                    <small class="text-muted">
                        {{ comment.date }} · {{ comment.time }}
                    </small>
                </h5>
                <p class="mb-2">{{ comment.message }}</p>

                <RouterLink to="#" class="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                    <Icon icon="tabler:arrow-back-up" class="fs-lg" /> Reply
                </RouterLink>

                <div v-if="comment.reply">
                    <div v-for="(reply, i) in comment.reply" :key="i" class="d-flex mt-4">
                        <div class="flex-shrink-0">
                            <img :src="reply.avatar" alt="reply-avatar"
                                class="avatar-sm rounded-circle shadow-sm" />
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="mb-1">
                                {{ reply.name }}
                                <small class="text-muted">
                                    {{ reply.date }} · {{ reply.time }}
                                </small>
                            </h5>
                            <p class="mb-2">{{ reply.message }}</p>
                            <RouterLink to="#" class="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                                <Icon icon="tabler:arrow-back-up" class="fs-lg" /> Reply
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <BPagination class="pagination-rounded pagination-boxed justify-content-center mb-0" v-model="page"
            :total-rows="60" :per-page="10" align="center" first-number last-number>
            <template #prev-text>
                <Icon icon="tabler:chevron-left" />
            </template>
            <template #next-text>
                <Icon icon="tabler:chevron-right" />
            </template>
        </BPagination>
    </div>
</template>

<script setup lang="ts">
import { BButton, BPagination } from 'bootstrap-vue-next'
import { comments } from './data'
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const page = ref(1)
</script>
