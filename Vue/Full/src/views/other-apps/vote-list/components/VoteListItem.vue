<template>
    <div class="d-flex gap-4 align-items-center">
        <div>
            <div class="vstack gap-1 text-center">
                <div>
                    <button class="btn p-0" :class="props.item.userVote === 'up' ? 'text-danger' : 'btn-link'"
                        :disabled="!item.canVote" >
                        <Icon icon="tabler:chevron-up" class="fs-xxl" />
                    </button>
                </div>

                <h5 class="fw-bold m-0 fs-lg">{{ votes }}</h5>

                <div>
                    <button class="btn p-0" :class="props.item.userVote === 'down' ? 'text-danger' : 'btn-link'"
                        :disabled="!item.canVote">
                        <Icon icon="tabler:chevron-down" class="fs-xxl" />
                    </button>
                </div>
            </div>
        </div>

        <div class="flex-grow-1">
            <h4 class="fs-md mb-1">
                <RouterLink to="" class="link-reset">{{ item.title }}</RouterLink>
            </h4>

            <p class="text-muted mb-2">{{ item.description }}</p>

            <p class="d-flex flex-wrap gap-3 text-muted mb-1 align-items-center fs-base">
                <span class="d-flex align-items-center gap-1">
                    <img :src="item.image" height="24" width="24" alt=""
                        class="img-fluid avatar-xs rounded-circle" />
                    <RouterLink to="" class="link-reset fw-semibold">{{ item.author }}</RouterLink>
                </span>

                <span class="d-flex align-items-center gap-1">
                    <Icon icon="tabler:calendar" />
                    <span>Posted on: {{ item.postedOn }}</span>
                </span>

                <span class="d-flex align-items-center gap-1">
                    <Icon icon="tabler:tag" />
                    <span class="badge bg-light text-primary">{{ item.category }}</span>
                </span>

                <span class="d-flex align-items-center gap-1">
                    <Icon icon="tabler:message-circle" />
                    <RouterLink to="" class="link-reset">Comments: {{ item.comments }}</RouterLink>
                </span>

                <span class="d-flex align-items-center gap-1">
                    <Icon icon="tabler:clock" />
                    <span>Ends in: {{ item.endsIn }}</span>
                </span>

                <span class="d-flex align-items-center gap-1">
                    <Icon icon="tabler:users" />
                    <span>Votes: {{ votes }}</span>
                </span>

                <span class="d-flex align-items-center gap-1">
                    <Icon icon="tabler:lock" />
                    <span class="badge" :class="item.status === 'open'
                        ? 'text-bg-primary'
                        : item.status === 'closed'
                            ? 'text-bg-danger'
                            : 'text-bg-info'">
                        {{ toPascalCase(item.status) }}
                    </span>
                </span>
            </p>
        </div>

        <div v-if="props.item.userVote">
            <BTooltip placement="top">
                Thank you for voting
                <template #target>
                    <Icon icon="tabler:checks" class="ms-auto fs-36 text-success text-opacity-25" />
                </template>
            </BTooltip>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toPascalCase } from '@/helpers/casing'
import type { VoteListItemType } from '../data'
import { BTooltip } from 'bootstrap-vue-next';
import { Icon } from '@iconify/vue';

const props = defineProps<{
    item: VoteListItemType
}>()

const votes = ref<number>(props.item.votes ?? 0)


</script>
