<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Outlook View" subtitle="Apps" />

            <div class="outlook-box outlook-box-full">
                <BOffcanvas no-header body-class="p-0 h-100" v-model="show" responsive="lg" placement="start"
                    class="offcanvas-lg outlook-left-menu">
                    <Sidebar :messages="messages" :setMessages="setMessages" />
                </BOffcanvas>

                <simplebar class="card h-100 mb-0 rounded-0 border-0 flex-grow-1" data-simplebar-md>
                    <BCardHeader class="d-lg-none d-flex">
                        <BButton size="sm" class="btn-default btn-icon" type="button" @click="show = !show">
                            <Icon icon="tabler:menu-2" class="fs-lg" />
                        </BButton>
                    </BCardHeader>

                    <BCardBody>
                        <div>
                            <div class="d-flex justify-content-between gap-2">
                                <div>
                                    <div class="text-muted mb-2">
                                        <Icon icon="tabler:clock" /> {{ message.body.timestamp }}
                                    </div>
                                    <h2 class="fs-xl mb-3">{{ message.body.title }}</h2>
                                </div>

                                <div>
                                    <BTooltip placement="left">
                                        Plug this message
                                        <template #target>
                                            <BButton size="sm" class="btn-default me-1">
                                                <Icon icon="tabler:plug" class="me-1" /> Plug it
                                            </BButton>
                                        </template>
                                    </BTooltip>

                                    <BTooltip placement="top">
                                        Mark as read
                                        <template #target>
                                            <BButton size="sm" class="btn-icon btn-default me-1">
                                                <Icon icon="tabler:eye" />
                                            </BButton>
                                        </template>
                                    </BTooltip>

                                    <BTooltip placement="top">
                                        Mark as important
                                        <template #target>
                                            <BButton size="sm" class="btn-icon btn-default me-1">
                                                <Icon icon="tabler:alert-circle" />
                                            </BButton>
                                        </template>
                                    </BTooltip>

                                    <BTooltip placement="top">
                                        Move to trash
                                        <template #target>
                                            <BButton size="sm" class="btn-icon btn-default">
                                                <Icon icon="tabler:trash" />
                                            </BButton>
                                        </template>
                                    </BTooltip>
                                </div>
                            </div>

                            <VueMarkdown :source="message.body.content" />

                            <BForm class="my-3">
                                <div class="mb-3">
                                    <BFormTextarea rows="4" placeholder="Enter your reply..." />
                                </div>
                                <div class="text-end">
                                    <BButton variant="secondary" type="submit">
                                        Submit
                                        <Icon icon="tabler:send-2" class="align-baseline ms-1" />
                                    </BButton>
                                </div>
                            </BForm>
                        </div>
                    </BCardBody>
                </simplebar>
            </div>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BButton, BCardBody, BCardHeader, BContainer, BForm, BFormTextarea, BOffcanvas, BTooltip } from 'bootstrap-vue-next'
import VueMarkdown from 'vue3-markdown-it'
import { messages, type MessageType } from './data'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'

import Sidebar from './components/Sidebar.vue'
import simplebar from 'simplebar-vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { Icon } from '@iconify/vue'

const message = ref<MessageType>(messages[0]!)
const show = ref(false)

const setMessages = (m: MessageType) => {
    message.value = m
}

usePageMeta('Outlook View')
</script>