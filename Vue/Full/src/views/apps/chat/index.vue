<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Chat" subtitle="Apps" />

            <div class="outlook-box">
                <BOffcanvas body-class="p-0 h-100 " no-header v-model="show" responsive="lg"
                    class="outlook-left-menu outlook-left-menu-lg">
                    <ContactList :contacts="contacts" :setContact="c => (currentContact = c)" />
                </BOffcanvas>

                <BCard no-body class="h-100 mb-0 rounded-start-0 flex-grow-1">
                    <BCardHeader class="card-bg d-flex align-items-center gap-2">
                        <div class="d-lg-none d-inline-flex gap-2">
                            <button class="btn-icon btn btn-default" @click="show = !show">
                                <Icon icon="tabler:menu-2" class="fs-lg" />
                            </button>
                        </div>

                        <div class="flex-grow-1">
                            <h5 class="mb-1 lh-base fs-lg">
                                <RouterLink to="/pages/profile" class="link-reset">
                                    {{ currentContact.name }}
                                </RouterLink>
                            </h5>
                            <p class="mb-0 lh-sm text-muted pt-1">
                                <Icon icon="tabler:circle-filled" class="me-1"
                                    :class="currentContact.isOnline ? 'text-success' : 'text-danger'" />
                                {{ currentContact.isOnline ? 'Active' : 'Offline' }}
                            </p>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <BTooltip placement="top">
                                Video Call
                                <template #target>
                                    <button class="btn-icon btn btn-default">
                                        <Icon icon="tabler:video" class="fs-lg" />
                                    </button>
                                </template>
                            </BTooltip>

                            <BTooltip placement="top">
                                Audio Call
                                <template #target>
                                    <button class="btn btn-icon btn-default">
                                        <Icon icon="tabler:phone" class="fs-lg" />
                                    </button>
                                </template>
                            </BTooltip>

                            <BDropdown end toggleClass="btn btn-default btn-icon drop-arrow-none">
                                <template #button-content>
                                    <Icon icon="tabler:dots-vertical" class="fs-lg" />
                                </template>
                                <BDropdownItem>
                                    <Icon icon="tabler:user" class="me-2" /> View Profile
                                </BDropdownItem>
                                <BDropdownItem>
                                    <Icon icon="tabler:bell-off" class="me-2" /> Mute Notifications
                                </BDropdownItem>
                                <BDropdownItem>
                                    <Icon icon="tabler:trash" class="me-2" /> Delete Chat
                                </BDropdownItem>
                            </BDropdown>
                        </div>
                    </BCardHeader>

                    <simplebar class="card-body pt-0 mb-5 pb-2" style="max-height: calc(100vh - 317px)">
                        <template v-if="currentThread">
                            <template v-for="message in currentThread.messages" :key="message.id">
                                <div v-if="currentContact.id === message.senderId"
                                    class="d-flex align-items-start gap-2 my-3 chat-item">
                                    <img v-if="currentContact.avatar" :src="currentContact.avatar" width="36"
                                        height="36" class="avatar-md rounded-circle" alt="User" />
                                    <span v-else class="avatar-sm flex-shrink-0">
                                        <span class="avatar-title text-bg-primary fw-bold rounded-circle">
                                            {{ currentContact.name.charAt(0).toUpperCase() }}
                                        </span>
                                    </span>
                                    <div>
                                        <div class="chat-message py-2 px-3 bg-warning-subtle rounded">
                                            {{ message.text }}
                                        </div>
                                        <div class="text-muted d-inline-flex align-items-center gap-1 fs-xs mt-1">
                                            <Icon icon="tabler:clock" /> {{ message.time }}
                                        </div>
                                    </div>
                                </div>

                                <div v-else-if="currentUser.id === message.senderId"
                                    class="d-flex align-items-start gap-2 my-3 text-end chat-item justify-content-end">
                                    <div>
                                        <div class="chat-message py-2 px-3  bg-info-subtle rounded">
                                            {{ message.text }}
                                        </div>
                                        <div class="text-muted d-inline-flex align-items-center gap-1 fs-xs mt-1">
                                            <Icon icon="tabler:clock" /> {{ message.time }}
                                        </div>
                                    </div>
                                    <img v-if="currentUser.avatar" :src="currentUser.avatar" width="36" height="36"
                                        class="avatar-md rounded-circle" alt="User" />
                                    <span v-else class="avatar-sm flex-shrink-0">
                                        <span class="avatar-title text-bg-primary fw-bold rounded-circle">
                                            {{ currentUser.name.charAt(0).toUpperCase() }}
                                        </span>
                                    </span>
                                </div>
                            </template>
                        </template>

                        <div v-else class="d-flex align-items-center justify-content-center my-5">
                            <Icon icon="tabler:message-circle-off"  class="text-muted me-1" />
                            <span>No messages found.</span>
                        </div>
                    </simplebar>

                    <BCardFooter
                        class="bg-body-secondary border-top border-dashed border-bottom-0 position-absolute bottom-0 w-100">
                        <div class="d-flex gap-2">
                            <div class="app-search flex-grow-1 position-relative">
                                <BFormInput type="text" class="py-2 bg-light-subtle border-light"
                                    placeholder="Enter message..." />
                                <Icon  icon="lucide:message-square" class="app-search-icon text-muted" />
                            </div>
                            <BButton variant="primary">
                                Send
                                <Icon icon="tabler:send-2" class="ms-1 fs-xl" />
                            </BButton>
                        </div>
                    </BCardFooter>
                </BCard>
            </div>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ChatThread, ContactType } from './components/types'
import { contacts, currentUser, messageThreads } from './components/data'
import simplebar from 'simplebar-vue'
import { BButton, BCardFooter, BDropdown, BDropdownItem, BFormInput, BTooltip } from 'bootstrap-vue-next'
import ContactList from './components/ContactList.vue'
import { Icon } from '@iconify/vue'
import { usePageMeta } from '@/composables/usePageMeta'
import MainLayout from '@/layouts/MainLayout.vue'

const show = ref(false)
const currentContact = ref<ContactType>(contacts[0]!)
const currentThread = ref<ChatThread | null>(messageThreads[0]!)

// watch contact → update currentThread
watch(currentContact, (newContact: ContactType) => {
    const foundThread = messageThreads.find((thread) =>
        thread.participants.some((p) => p.id === newContact.id)
    )
    currentThread.value = foundThread || null
})

usePageMeta('Chat')
</script>