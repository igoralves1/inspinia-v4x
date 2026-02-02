<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Email" subTitle="Apps" />

            <div class="outlook-box email-app">
                <BOffcanvas no-header body-class="p-0 h-100" v-model="show" placement="start" responsive="lg"
                    class="outlook-left-menu outlook-left-menu-sm" tabindex="-1">
                    <EmailSidebar />
                </BOffcanvas>

                <BCard no-body class="h-100 mb-0 rounded-start-0 flex-grow-1 border-start-0">
                    <BCardHeader class="d-lg-none d-flex gap-2">
                        <button class="btn btn-default btn-icon" type="button" aria-controls="emailSidebaroffcanvas"
                            @click="toggleSidebar">
                            <Icon icon="tabler:menu-2" class="fs-lg" />
                        </button>

                        <div class="app-search">
                            <input type="text" class="form-control" placeholder="Search mails...">
                            <Icon icon="tabler:search" class="app-search-icon text-muted" />
                        </div>
                    </BCardHeader>

                    <BCardHeader class="card-bg justify-content-between">
                        <h4 class="card-title">Compose Message</h4>
                    </BCardHeader>

                    <simplebar class="card-body p-0" style="height: calc(100% - 120px);">
                        <div class="app-search input-group border-bottom border-dashed ps-2 pe-4">
                            <input type="text" class="form-control py-3 border-0" placeholder="Enter emails..">
                            <span class="app-search-icon fw-semibold fs-sm">To:</span>
                            <button class="btn btn-link fs-sm px-2 text-decoration-underline text-reset fw-semibold"
                                type="button" data-bs-toggle="collapse" data-bs-target="#email-cc" aria-expanded="false"
                                aria-controls="email-cc">Cc</button>
                            <button class="btn btn-link fs-sm px-2 text-decoration-underline text-reset fw-semibold"
                                type="button" data-bs-toggle="collapse" data-bs-target="#email-bcc"
                                aria-expanded="false" aria-controls="email-bcc">Bcc</button>
                        </div>

                        <div class="collapse" id="email-cc">
                            <div class="app-search input-group border-bottom border-dashed ps-2 pe-4">
                                <input type="text" class="form-control py-3 border-0" placeholder="Enter emails..">
                                <span class="app-search-icon fw-semibold fs-sm">Cc:</span>
                                <button class="btn btn-link px-2 text-muted fw-semibold" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#email-cc" aria-expanded="false"
                                    aria-controls="email-cc">
                                    <Icon icon="tabler:x" class="fs-xl" />
                                </button>
                            </div>
                        </div>

                        <div class="collapse" id="email-bcc">
                            <div class="app-search input-group border-bottom border-dashed ps-2 pe-4">
                                <input type="text" class="form-control py-3 border-0" placeholder="Enter emails..">
                                <span class="app-search-icon fw-semibold fs-sm">Bcc:</span>
                                <button class="btn btn-link px-2 text-muted fw-semibold" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#email-bcc" aria-expanded="false"
                                    aria-controls="email-bcc">
                                    <Icon icon="tabler:x" class="fs-xl" />
                                </button>
                            </div>
                        </div>

                        <div class="border-bottom border-dashed ps-2 pe-4">
                            <input type="text" class="form-control py-3 fs-sm fw-semibold border-0"
                                placeholder="Subject">
                        </div>

                        <div class="email-editor">
                            <QuillEditor v-model:content="content" theme="snow" content-type="html" :toolbar="[
                                [{ header: [false, 1, 2, 3, 4, 5, 6] }],
                                ['bold', 'italic', 'underline', 'strike'],
                                [{ color: [] }, { background: [] }],
                                ['blockquote', 'code-block'],
                                [{ list: 'ordered' }, { list: 'bullet' }],
                                ['link', 'image', 'video'],
                            ]" />
                        </div>
                        <div class="bg-light-subtle p-2 border-light border-bottom">
                            <div class="d-flex gap-1 align-items-center">
                                <BDropdown split split-variant="primary" variant="primary" text="Send"
                                    class="btn-group">
                                    <template #button-content>
                                        <Icon icon="tabler:send-2" class="me-2" />
                                        Send
                                    </template>

                                    <BDropdownItem href="#">Send & Archive</BDropdownItem>
                                    <BDropdownItem href="#">Schedule Send</BDropdownItem>
                                    <BDropdownItem href="#">Save as Draft</BDropdownItem>
                                    <BDropdownDivider />
                                    <BDropdownItem href="#">Discard</BDropdownItem>
                                </BDropdown>
                                <div class="d-flex gap-2 ms-auto">
                                    <BTooltip title="Settings" placement="top" trigger="hover">
                                        <template #target>
                                            <button type="button" class="btn btn-sm btn-icon btn-light">
                                                <Icon icon="tabler:settings" />
                                            </button>
                                        </template>
                                    </BTooltip>

                                    <BTooltip title="Delete" placement="top" trigger="hover">
                                        <template #target>
                                            <button type="button" class="btn btn-sm btn-icon btn-soft-danger">
                                                <Icon icon="tabler:trash" />
                                            </button>
                                        </template>
                                    </BTooltip>
                                </div>

                            </div>
                        </div>

                    </simplebar>

                </BCard>
            </div>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader, BContainer, BDropdown, BOffcanvas, BTooltip } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import EmailSidebar from '../components/EmailSidebar.vue';
import { ref } from 'vue'
import simplebar from 'simplebar-vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import { Icon } from '@iconify/vue';
import { QuillEditor } from '@vueup/vue-quill'

const show = ref(false)

const toggleSidebar = () => {
    show.value = !show.value
}

const content = ref(`<p>Hi <strong><em>James</em></strong></p><p>I hope you're doing well.</p><p>I'm reaching out regarding the latest updates on our project. Please find the summary below:</p><ul><li>All UI components have been reviewed and finalized.</li><li>The mobile responsiveness is now optimized across all breakpoints.</li><li>We’re awaiting final client feedback before deployment.</li></ul><p>Let me know if you need anything else or if there's anything you'd like us to adjust.</p><p><br></p><p>Best regards,</p><p><em>Damian</em></p>`)

usePageMeta('Email Compose')
</script>

<style scoped></style>