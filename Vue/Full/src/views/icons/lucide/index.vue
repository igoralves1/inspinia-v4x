<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb sub-title="Icons" title="Lucide" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BCard no-body>
                        <BCardHeader class="d-block">
                            <h4 class="card-title mb-1 d-flex align-items-center gap-2">
                                <Icon icon="lucide:layout-dashboard"  />
                                Overview
                            </h4>
                            <p class="mb-0 text-muted">
                                Lucide is an open-source library of clean, scalable SVG icons for web and app
                                development,
                                offering easy integration and customization.
                            </p>
                        </BCardHeader>

                        <BCardBody>
                            <h4 class="mt-0 fs-base mb-1">Usage</h4>
                            <code>&lt;Icon icon="lucide:icon-name" /&gt;</code>

                            <div class="d-flex align-items-center gap-2 mt-3">
                                <Icon icon="lucide:camera" class="fs-2" />
                                <Icon icon="lucide:heart" class="fs-2" />
                                <Icon icon="lucide:star" class="fs-2" />
                                <Icon icon="lucide:check" class="fs-2" />
                                <Icon icon="lucide:bell" class="fs-2" />
                                <Icon icon="lucide:cloud" class="fs-2" />
                                <Icon icon="lucide:user" class="fs-2" />
                            </div>
                        </BCardBody>

                        <BCardBody class="border-top border-dashed">
                            <h4 class="mt-0 fs-base mb-1">Colors</h4>
                            <code>&lt;Icon icon="lucide:icon-name"  class="text-xxx" /&gt;</code>
                            <div class="d-flex align-items-center gap-2 mt-3">
                                <Icon icon="lucide:home" class="text-primary fs-2"  />
                                <Icon icon="lucide:settings" class="text-secondary fs-2"  />
                                <Icon icon="lucide:calendar" class="text-success fs-2"  />
                                <Icon icon="lucide:message-circle" class="text-info fs-2"  />
                                <Icon icon="lucide:flag" class="text-warning fs-2"  />
                                <Icon icon="lucide:folder" class="text-danger fs-2"  />
                                <Icon icon="lucide:globe" class="text-light fs-2"  />
                                <Icon icon="lucide:key" class="text-dark fs-2"  />
                                <Icon icon="lucide:layers" class="text-purple fs-2"  />
                            </div>
                        </BCardBody>

                        <BCardBody class="border-top border-dashed">
                            <h4 class="mt-0 fs-base mb-1">Fill Colors</h4>
                            <code>&lt;Icon icon="lucide:icon-name"  class="fill-xxx" /&gt;</code>
                            <div class="d-flex align-items-center gap-2 mt-3">
                                <Icon icon="lucide:home" class="text-primary fill-primary fs-2"  />
                                <Icon icon="lucide:settings" class="text-secondary fill-secondary fs-2"  />
                                <Icon icon="lucide:calendar" class="text-success fill-success fs-2"  />
                                <Icon icon="lucide:message-circle" class="text-info fill-info fs-2"  />
                                <Icon icon="lucide:flag" class="text-warning fill-warning fs-2"  />
                                <Icon icon="lucide:folder" class="text-danger fill-danger fs-2"  />
                                <Icon icon="lucide:globe" class="text-light fill-light fs-2"  />
                                <Icon icon="lucide:key" class="text-dark fill-dark fs-2"  />
                                <Icon icon="lucide:layers" class="text-purple fill-purple fs-2"  />
                            </div>
                        </BCardBody>

                        <BCardBody class="border-top border-dashed">
                            <h4 class="mt-0 fs-base mb-1">Sizes</h4>

                            <div class="d-flex align-items-center gap-2 mt-3 flex-wrap">
                                <Icon icon="lucide:phone" class="fs-1" />
                                <Icon icon="lucide:badge-dollar-sign" class="fs-2" />
                                <Icon icon="lucide:monitor" class="fs-3" />
                                <Icon icon="lucide:tablet" class="fs-4" />
                                <Icon icon="lucide:gamepad-2" class="fs-5" />
                                <Icon icon="lucide:watch" class="fs-6" />
                            </div>

                            <div class="d-flex align-items-center gap-2 mt-3 flex-wrap">
                                <Icon icon="lucide:watch" />
                                <Icon icon="lucide:watch" class="fs-sm" />
                                <Icon icon="lucide:watch" class="fs-lg" />
                                <Icon icon="lucide:watch" class="fs-xl" />
                                <Icon icon="lucide:watch" class="fs-xxl" />
                                <Icon icon="lucide:watch" class="fs-24" />
                                <Icon icon="lucide:watch" class="fs-32" />
                                <Icon icon="lucide:watch" class="fs-36" />
                                <Icon icon="lucide:watch" class="fs-42" />
                                <Icon icon="lucide:watch" class="fs-60" />
                            </div>
                        </BCardBody>

                        <BCardBody class="border-top border-dashed">
                            <h4 class="mt-0 mb-3">Icons</h4>

                            <div class="d-flex flex-wrap align-items-center text-center gap-2">
                                <div v-for="icon in lucideIcons" :key="icon.name" class="avatar-xxl">
                                    <span
                                        class="avatar-title flex-column gap-1 border border-dashed rounded-3 overflow-hidden text-truncate text-center p-1">
                                        <Icon :icon="icon.icon" class="fs-24" />
                                        <span class="fw-semibold d-block w-100 text-truncate">{{ icon.name }}</span>
                                    </span>
                                </div>
                            </div>

                            <div class="text-center mt-3">
                                <a href="https://lucide.dev/icons/" target="_blank" class="btn btn-danger">View All
                                    Icons</a>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCol } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';
import { usePageMeta } from '@/composables/usePageMeta';

const lucideIcons = [
    { icon: 'lucide:phone', name: 'Phone' },
    { icon: 'lucide:badge-percent', name: 'Ad 2' },
    { icon: 'lucide:headphones', name: 'Headphones' },
    { icon: 'lucide:camera', name: 'Camera' },
    { icon: 'lucide:watch', name: 'Watch' },
    { icon: 'lucide:mic', name: 'Microphone' },
    { icon: 'lucide:headset', name: 'Headset' },
    { icon: 'lucide:tablet', name: 'Tablet' },
    { icon: 'lucide:gamepad-2', name: 'Gamepad' },
    { icon: 'lucide:printer', name: 'Printer' },
    { icon: 'lucide:speaker', name: 'Speaker' },
    { icon: 'lucide:database', name: 'Database' },
    { icon: 'lucide:cloud', name: 'Cloud' },
    { icon: 'lucide:wifi', name: 'Wi-Fi' },
    { icon: 'lucide:bluetooth', name: 'Bluetooth' },
    { icon: 'lucide:usb', name: 'USB' },
    { icon: 'lucide:folder', name: 'Folder' },
    { icon: 'lucide:lock', name: 'Lock' },
    { icon: 'lucide:key', name: 'Key' },
    { icon: 'lucide:shield', name: 'Shield' },
    { icon: 'lucide:paperclip', name: 'Paperclip' },
    { icon: 'lucide:bell', name: 'Bell' },
    { icon: 'lucide:search', name: 'Search' },
    { icon: 'lucide:briefcase', name: 'Briefcase' },
    { icon: 'lucide:shopping-cart', name: 'Cart' },
    { icon: 'lucide:file', name: 'File' },
    { icon: 'lucide:book', name: 'Book' },
    { icon: 'lucide:mail', name: 'Mail' },
    { icon: 'lucide:user', name: 'User' },
    { icon: 'lucide:user-circle', name: 'User Circle' },
    { icon: 'lucide:music', name: 'Music' },
    { icon: 'lucide:film', name: 'Movie' },
    { icon: 'lucide:upload', name: 'Upload' },
    { icon: 'lucide:cloud-upload', name: 'Cloud Upload' },
    { icon: 'lucide:share', name: 'Share' },
    { icon: 'lucide:arrow-right', name: 'Arrow Right' },
    { icon: 'lucide:arrow-left', name: 'Arrow Left' },
    { icon: 'lucide:arrow-up', name: 'Arrow Up' },
    { icon: 'lucide:arrow-down', name: 'Arrow Down' },
    { icon: 'lucide:refresh-ccw', name: 'Refresh' },
]

usePageMeta('Lucide Icons')
</script>
