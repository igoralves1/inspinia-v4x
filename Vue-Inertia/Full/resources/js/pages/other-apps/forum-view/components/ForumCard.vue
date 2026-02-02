<template>
    <BCard no-body :class="className">
        <BCardBody>
            <div class="d-flex gap-4 align-items-center">
                <div class="flex-grow-1">
                    <p class="text-muted text-uppercase mb-2 fw-semibold">{{ item.category }}</p>

                    <h4 class="fs-lg mb-2">
                        <Link :href="item.url" class="link-reset">
                            {{ item.title }}
                        </Link>
                    </h4>

                    <p class="text-muted mb-0">{{ item.description }}</p>
                </div>
            </div>
        </BCardBody>

        <BCardFooter>
            <p class="d-flex flex-wrap gap-3 text-muted mb-0 align-items-center justify-content-between fs-sm">
                <span class="d-flex align-items-center gap-2">
                    <img :src="item.image" height="32" width="32" alt="" class="img-fluid avatar-sm rounded" />
                    <span>
                        <Link href="#" class="link-dark fw-semibold lh-sm d-block">
                            {{ item.author }}
                        </Link>
                        <span class="text-muted small">{{ item.timeAgo }}</span>
                    </span>
                </span>

                <span class="d-flex align-items-center gap-1">
                    <Icon icon="tabler:message-reply" />
                    <Link href="#" class="link-reset">Answers: {{ item.answers }}</Link>
                </span>

                <span class="d-flex align-items-center gap-1">
                    <Icon icon="tabler:clock" />
                    <span>Ends in: {{ item.endsIn }}</span>
                </span>

                <span class="d-flex align-items-center gap-1">
                    <Icon icon="tabler:users" />
                    <span>Votes: {{ item.votes }}</span>
                </span>

                <span class="d-flex align-items-center gap-1">
                    <span :class="`badge text-bg-${item.variant}`">{{ item.badge }}</span>
                </span>
            </p>
        </BCardFooter>
    </BCard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { ForumPostType } from '../data';
import { BCard, BCardBody } from 'bootstrap-vue-next';
import { Link } from '@inertiajs/vue3';

defineProps<{
    item: ForumPostType
    className?: string
}>()
</script>
