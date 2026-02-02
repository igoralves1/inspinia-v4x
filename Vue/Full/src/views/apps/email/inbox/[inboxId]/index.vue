<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Email" subTitle="Apps" />

            <div class="outlook-box email-app">
                <BOffcanvas no-header body-class="p-0 h-100" v-model="show" placement="start" responsive="lg"
                    class="outlook-left-menu outlook-left-menu-sm" tabindex="-1">
                    <EmailSidebar />
                </BOffcanvas>

                <BCard no-body class="card h-100 mb-0 rounded-start-0 flex-grow-1 border-start-0">
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
                        <div class="d-flex flex-wrap align-items-center gap-1">

                            <RouterLink to="/inbox" class="btn btn-default btn-icon btn-sm" data-bs-toggle="tooltip"
                                title="Back to Inbox">
                                <Icon icon="tabler:arrow-left-dashed" class="fs-lg" />
                            </RouterLink>

                            <div v-for="({ label, icon }, idx) in actions.slice(0, 4)" :key="idx">
                                <BTooltip placement="top">
                                    <template #target>
                                        <button type="button" class="btn btn-default btn-icon btn-sm">
                                            <Icon :icon="icon" class="fs-lg" />
                                        </button>
                                    </template>
                                    {{ label }}
                                </BTooltip>
                            </div>
                        </div>

                        <div class="d-flex align-items-center gap-1">

                            <button type="button" class="btn btn-icon btn-sm btn-ghost-secondary rounded-circle">
                                <Icon icon="tabler:share-3" class="fs-xl" />
                            </button>

                            <button type="button" class="btn btn-icon btn-sm btn-ghost-dark rounded-circle">
                                <Icon icon="tabler:dots-vertical" class="fs-xl" />
                            </button>
                        </div>
                    </BCardHeader>

                    <simplebar class="card-body pt-0 pb-5" style="height: calc(100% - 100px)">
                        <h4 class="py-3 mb-0 sticky-top bg-body-secondary">Design Reviews &amp; Feedback</h4>

                        <div class="pb-3">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center flex-grow-1 text-reset" @click="toggleCollapse1"
                                    role="button">
                                    <img :src="user3" class="avatar-md rounded-circle" alt="User Avatar" />
                                    <div class="ms-2 overflow-hidden">
                                        <h5 class="fs-sm mb-0 text-truncate">John Maxwell</h5>
                                        <p class="text-muted mb-0 text-truncate">john.maxwell@uxstudio.com</p>
                                    </div>
                                </div>
                                <div class="ms-auto d-flex align-items-center gap-1">
                                    <button class="btn btn-icon btn-sm btn-ghost-light rounded-circle">
                                        <Icon icon="tabler:star-filled" class="text-warning fs-lg" />
                                    </button>
                                    <button class="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                                        <Icon icon="tabler:mail-forward" class="fs-lg" />
                                    </button>
                                    <button class="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                                        <Icon icon="tabler:mail-opened" class="fs-lg" />
                                    </button>
                                    <span class="text-muted fs-xs mb-0 ms-2">Apr 11, 07:47 AM</span>
                                </div>
                            </div>

                            <BCollapse v-model="isOpenCollapse1" class="mt-3">
                                <p>Hey team,</p>
                                <p>
                                    I reviewed the new dashboard layout and overall it's looking solid. The spacing and
                                    typography are much
                                    better
                                    than the previous version.
                                </p>
                                <p>A couple of suggestions:</p>
                                <ul>
                                    <li>Make the chart legends slightly smaller and lighter in color.</li>
                                    <li>Try a softer drop shadow for the card components – they feel a bit harsh right
                                        now.
                                    </li>
                                </ul>
                                <p>Let me know if you need a quick call to discuss.</p>
                                <p class="mt-3 mb-0">Cheers,</p>
                                <p class="fw-medium mb-0">John</p>
                            </BCollapse>
                        </div>

                        <div class="py-3 border-top border-dashed">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center flex-grow-1 text-reset" @click="toggleCollapse2"
                                    role="button">
                                    <img :src="user6" class="avatar-md rounded-circle" alt="User Avatar" />
                                    <div class="ms-2 overflow-hidden">
                                        <h5 class="fs-sm mb-0 text-truncate">Anika Patel</h5>
                                        <p class="text-muted mb-0 text-truncate">anika@creativemix.net</p>
                                    </div>
                                </div>
                                <div class="ms-auto d-flex align-items-center gap-1">
                                    <button class="btn btn-icon btn-sm btn-ghost-light rounded-circle">
                                        <Icon icon="tabler:star-filled" class="text-warning fs-lg" />
                                    </button>
                                    <button class="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                                        <Icon icon="tabler:mail-forward" class="fs-lg" />
                                    </button>
                                    <button class="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                                        <Icon icon="tabler:mail-opened" class="fs-lg" />
                                    </button>
                                    <span class="text-muted fs-xs mb-0 ms-2">Apr 11, 09:05 AM</span>
                                </div>
                            </div>

                            <BCollapse v-model="isOpenCollapse2" class="mt-3">
                                <p>Hello team,</p>
                                <p>
                                    I did a final check on the landing page animations. Everything works smoothly except
                                    the
                                    testimonial
                                    slider –
                                    there's a tiny jitter on loop transition.
                                </p>
                                <p>Maybe easing timing or delay tweaks can help fix it. Otherwise, great job!</p>
                                <p>Let me know once it's deployed to staging so I can do one last run-through.</p>
                                <p class="mt-3 mb-0">Thanks,</p>
                                <p class="fw-medium mb-0">Anika</p>

                                <div class="d-flex justify-content-between mt-3">
                                    <h4 class="fs-sm text-muted">1 Attachment</h4>
                                </div>
                                <div class="mt-2 d-flex flex-wrap gap-2">
                                    <div
                                        class="d-flex p-2 gap-2 align-items-center text-start position-relative border border-dashed rounded">
                                        <Icon icon="tabler:video" class="fs-24 text-primary" />
                                        <div>
                                            <h4 class="fs-sm mb-1">
                                                <RouterLink to="" class="link-reset stretched-link">
                                                    testimonial-glitch.mp4
                                                </RouterLink>
                                            </h4>
                                            <p class="fs-xs mb-0">4.7 MB</p>
                                        </div>
                                        <Icon icon="tabler:download" class="fs-xxl text-muted" />
                                    </div>
                                </div>
                            </BCollapse>
                        </div>

                        <div class="py-3 border-top border-dashed">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center flex-grow-1 text-reset" @click="toggleCollapse3"
                                    role="button">
                                    <img :src="user5" class="avatar-md rounded-circle" alt="User Avatar" />
                                    <div class="ms-2 overflow-hidden">
                                        <h5 class="fs-sm mb-0 text-truncate">Laura Chen</h5>
                                        <p class="text-muted mb-0 text-truncate">laura.chen@designteam.co</p>
                                    </div>
                                </div>
                                <div class="ms-auto d-flex align-items-center gap-1">
                                    <button class="btn btn-icon btn-sm btn-ghost-light rounded-circle">
                                        <Icon icon="tabler:star-filled" class="text-warning fs-lg" />
                                    </button>
                                    <button class="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                                        <Icon icon="tabler:mail-forward" class="fs-lg" />
                                    </button>
                                    <button class="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                                        <Icon icon="tabler:mail-opened" class="fs-lg" />
                                    </button>
                                    <span class="text-muted fs-xs mb-0 ms-2">Apr 12, 11:42 AM</span>
                                </div>
                            </div>

                            <BCollapse v-model="isOpenCollapse3" class="mt-3">
                                <p>Hi folks,</p>
                                <p>
                                    Thanks for sharing the prototype. The color scheme and layout look clean, but I
                                    think we
                                    can still
                                    refine the
                                    mobile responsiveness on the pricing page.
                                </p>
                                <p>Also, the button contrast on the footer needs more WCAG-friendly contrast – it's
                                    currently a bit hard to
                                    read.</p>
                                <p>I’ve attached some screenshots with markup for clarity.</p>
                                <p class="mt-3 mb-0">Regards,</p>
                                <p class="fw-medium">Laura</p>

                                <div class="d-flex justify-content-between mt-3">
                                    <h4 class="fs-sm text-muted">2 Attachments</h4>
                                </div>
                                <div class="mt-2 d-flex flex-wrap gap-2">
                                    <div
                                        class="d-flex p-2 gap-2 align-items-center text-start position-relative border border-dashed rounded">
                                        <Icon icon="tabler:file-text" class="fs-24 text-danger" />
                                        <div>
                                            <h4 class="fs-sm mb-1">
                                                <RouterLink to="" class="link-reset stretched-link">
                                                    footer-contrast-notes.pdf
                                                </RouterLink>
                                            </h4>
                                            <p class="fs-xs mb-0">1.2 MB</p>
                                        </div>
                                        <Icon icon="tabler:download" class="fs-xxl text-muted" />
                                    </div>
                                    <div
                                        class="d-flex p-2 gap-2 align-items-center text-start position-relative border border-dashed rounded">
                                        <Icon icon="tabler:photo" class="fs-24 text-secondary" />
                                        <div>
                                            <h4 class="fs-sm mb-1">
                                                <RouterLink to="" class="link-reset stretched-link">
                                                    responsive-issues.png
                                                </RouterLink>
                                            </h4>
                                            <p class="fs-xs mb-0">850 KB</p>
                                        </div>
                                        <Icon icon="tabler:download" class="fs-xxl text-muted" />
                                    </div>
                                </div>
                            </BCollapse>
                        </div>

                        <div class="position-sticky bottom-0 z-1">
                            <BCollapse v-model="isOpenReply" class="mt-2 pb-5">
                                <textarea class="form-control rounded-top rounded-0" rows="6"
                                    placeholder="Enter message"></textarea>
                                <div class="bg-light-subtle p-2 rounded-bottom border border-top-0">
                                    <div class="d-flex gap-1 align-items-center">
                                        <button v-for="({ icon, title }, idx) in replyToolbarButtons" :key="idx"
                                            type="button" class="btn btn-sm btn-icon btn-light" :title="title">
                                            <Icon :icon="icon" />
                                        </button>
                                        <button type="button" class="btn btn-sm btn-light ms-auto" @click="toggleReply">
                                            <Icon icon="tabler:x" class="me-1" /> Cancel
                                        </button>
                                        <button type="button" class="btn btn-sm btn-success">
                                            <Icon icon="tabler:send" class="me-1" /> Send
                                        </button>
                                    </div>
                                </div>
                            </BCollapse>
                        </div>
                    </simplebar>

                    <BCardHeader
                        class="bg-body-secondary border-top border-dashed border-bottom-0 position-absolute bottom-0 w-100">
                        <div class="d-flex flex-wrap align-items-center justify-content-between">
                            <div class="d-flex align-items-center gap-2">
                                <button class="btn btn-sm btn-default" @click="toggleReply" type="button">
                                    <Icon icon="tabler:share-3" class="fs-lg" />
                                    <span class="fw-medium ms-1">Reply</span>
                                </button>
                                <button class="btn btn-sm btn-default" type="button">
                                    <Icon icon="tabler:arrow-big-right" class="fs-lg" />
                                    <span class="fw-medium ms-1">Forward</span>
                                </button>
                                <button class="btn btn-sm btn-default" type="button">
                                    <Icon icon="tabler:printer" class="fs-lg" />
                                    <span class="fw-medium ms-1">Print</span>
                                </button>
                            </div>
                        </div>
                    </BCardHeader>
                </BCard>
            </div>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardHeader, BCollapse, BContainer, BOffcanvas } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import { actions } from '../../components/data';
import simplebar from 'simplebar-vue';

import { ref } from 'vue'
import EmailSidebar from '../../components/EmailSidebar.vue';
import { usePageMeta } from '@/composables/usePageMeta';

import user3 from '@/assets/images/users/user-3.jpg';
import user4 from '@/assets/images/users/user-4.jpg';
import user5 from '@/assets/images/users/user-5.jpg';
import user6 from '@/assets/images/users/user-6.jpg';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

const show = ref(false)

const toggleSidebar = () => {
    show.value = !show.value
}

const isOpenCollapse1 = ref(false)
const isOpenCollapse2 = ref(false)
const isOpenCollapse3 = ref(true)
const isOpenReply = ref(false)

const toggleCollapse1 = () => (isOpenCollapse1.value = !isOpenCollapse1.value)
const toggleCollapse2 = () => (isOpenCollapse2.value = !isOpenCollapse2.value)
const toggleCollapse3 = () => (isOpenCollapse3.value = !isOpenCollapse3.value)
const toggleReply = () => (isOpenReply.value = !isOpenReply.value)

const replyToolbarButtons = [
    { title: 'Bold', icon: 'tabler:bold' },
    { title: 'Italic', icon: 'tabler:italic' },
    { title: 'Attach files', icon: 'tabler:paperclip' },
    { title: 'Insert link', icon: 'tabler:link' },
    { title: 'Insert photo', icon: 'tabler:photo-up' },
]

usePageMeta('Inbox Detail')

</script>

<style scoped></style>