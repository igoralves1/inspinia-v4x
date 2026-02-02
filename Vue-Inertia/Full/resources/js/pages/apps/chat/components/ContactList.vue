<template>
    <BCard no-body class="h-100 w-100 mb-0 border-end-0 rounded-end-0">
        <BCardHeader class="p-3 border-light card-bg d-block">
            <div class="d-flex gap-2">
                <div class="app-search flex-grow-1 position-relative">
                    <BFormInput type="text" class="bg-light-subtle border-light" placeholder="Search here..." />
                    <Icon  icon="lucide:search" class="app-search-icon text-muted" />
                </div>

                <BButton variant="dark" class="btn-icon">
                    <Icon icon="tabler:pencil-plus" class="fs-xl" />
                </BButton>
            </div>
        </BCardHeader>

        <simplebar class="card-body p-2" style="height: calc(100% - 100px)" data-simplebar data-simplebar-md>
            <BListGroup flush class="chat-list">
                <BListGroupItem v-for="contact in props.contacts" :key="contact.id" action :class="[
                    'd-flex gap-2 justify-content-between',
                    contact.id === currentContact.id ? 'active' : ''
                ]" @click="handleSelect(contact)">
                    <span class="d-flex justify-content-start align-items-center gap-2 overflow-hidden">
                        <span class="avatar avatar-sm flex-shrink-0">
                            <img v-if="contact.avatar" :src="contact.avatar" alt="" height="36" width="36"
                                class="img-fluid rounded-circle" />
                            <span v-else class="avatar-title text-bg-primary fw-bold rounded-circle">
                                {{ contact.name.charAt(0).toUpperCase() }}
                            </span>
                        </span>

                        <span class="overflow-hidden">
                            <span class="text-nowrap fw-semibold fs-base mb-0 lh-base">
                                {{ contact.name }}
                            </span>
                            <span v-if="contact.lastMessage" class="text-muted d-block fs-xs mb-0 text-truncate">
                                {{ contact.lastMessage }}
                            </span>
                        </span>
                    </span>

                    <span class="d-flex flex-column gap-1 justify-content-center flex-shrink-0 align-items-end">
                        <span v-if="contact.timestamp" class="text-muted fs-xs">
                            {{ contact.timestamp }}
                        </span>
                        <span v-if="contact.unreadMessages" class="badge text-bg-primary fs-xxs">
                            {{ contact.unreadMessages }}
                        </span>
                    </span>
                </BListGroupItem>
            </BListGroup>
        </simplebar>
    </BCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ContactType } from './types';
import simplebar from 'simplebar-vue';
import { Icon } from '@iconify/vue';

type PropsType = {
    contacts: ContactType[]
    setContact: (contact: ContactType) => void
}

const props = defineProps<PropsType>()

// track current contact
const currentContact = ref<ContactType>(props.contacts[0] || { id: 'u1', name: '', avatar: '', lastMessage: '', timestamp: '', unreadMessages: 0, isOnline: false })

const handleSelect = (contact: ContactType) => {
    props.setContact(contact)
    currentContact.value = contact
}
</script>
