<template>
    <simplebar class="card w-100 mb-0 rounded-0 border-0">
        <BCardBody class="p-0">
            <BListGroup flush class="outlook-list mb-0">
                <BListGroupItem v-for="(item, idx) in props.messages" :key="idx"
                    :class="['p-0', item.id === active.id ? 'active' : '']" role="button" @click="handleSelect(item)">
                    <span class="nav-link p-3">
                        <span class="d-flex justify-content-between align-items-center mb-1">
                            <span class="ff-secondary fw-semibold">{{ item.name }}</span>
                            <small class="float-end text-muted">{{ item.date }}</small>
                        </span>

                        <span class="mb-2 d-block fs-xs text-muted">{{ item.summary }}</span>

                        <span class="d-flex align-items-center flex-wrap justify-content-between">
                            <span>
                                <Icon icon="tabler:map-pin" class="me-1" />
                                {{ item.location }}
                            </span>
                            <span v-if="item.badge" :class="['badge', `text-bg-${item.badge.variant}`, 'badge-label']">
                                {{ item.badge.label }}
                            </span>
                        </span>
                    </span>
                </BListGroupItem>
            </BListGroup>
        </BCardBody>
    </simplebar>
</template>


<script setup lang="ts">
import { ref } from 'vue'

import { BCardBody, BListGroup, BListGroupItem } from 'bootstrap-vue-next'
import type { MessageType } from '../data'
import simplebar from 'simplebar-vue'
import { Icon } from '@iconify/vue';


const props = defineProps<{ messages: MessageType[], setMessages: (m: MessageType) => void }>()
const active = ref<MessageType>(props.messages[0]!)

const handleSelect = (item: MessageType) => {
    props.setMessages(item)
    active.value = item
}
</script>