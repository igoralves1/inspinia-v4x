<template>
    <BContainer fluid>
        <PageBreadcrumb sub-title="Icons" title="Lucide" />

        <BRow class="justify-content-center">
            <BCol xxl="10">
                <BCard no-body>
                    <BCardHeader class="d-block">
                        <h4 class="card-title mb-1 d-flex align-items-center gap-2">
                            <Icon name="lucide:layout-dashboard" size="18" />
                            Overview
                        </h4>
                        <p class="mb-0 text-muted">
                            Lucide is an open-source library of clean, scalable SVG icons for web and app development,
                            offering easy integration and customization.
                        </p>
                    </BCardHeader>

                    <BCardBody>
                        <h4 class="mt-0 fs-base mb-1">Usage</h4>
                        <code>&lt;Icon name="lucide:icon-name" /&gt;</code>

                        <div class="d-flex align-items-center gap-2 mt-3">
                            <Icon name="lucide:camera" size="22" />
                            <Icon name="lucide:heart" size="22" />
                            <Icon name="lucide:star" size="22" />
                            <Icon name="lucide:check" size="22" />
                            <Icon name="lucide:bell" size="22" />
                            <Icon name="lucide:cloud" size="22" />
                            <Icon name="lucide:user" size="22" />
                        </div>
                    </BCardBody>

                    <BCardBody class="border-top border-dashed">
                        <h4 class="mt-0 fs-base mb-1">Colors</h4>
                          <code>&lt;Icon name="lucide:icon-name"  class="text-xxx" /&gt;</code>
                        <div class="d-flex align-items-center gap-2 mt-3">
                            <Icon name="lucide:home" class="text-primary" size="22" />
                            <Icon name="lucide:settings" class="text-secondary" size="22" />
                            <Icon name="lucide:calendar" class="text-success" size="22" />
                            <Icon name="lucide:message-circle" class="text-info" size="22" />
                            <Icon name="lucide:flag" class="text-warning" size="22" />
                            <Icon name="lucide:folder" class="text-danger" size="22" />
                            <Icon name="lucide:globe" class="text-light" size="22" />
                            <Icon name="lucide:key" class="text-dark" size="22" />
                            <Icon name="lucide:layers" class="text-purple" size="22" />
                        </div>
                    </BCardBody>

                    <BCardBody class="border-top border-dashed">
                        <h4 class="mt-0 fs-base mb-1">Fill Colors</h4>
                        <code>&lt;Icon name="lucide:icon-name"  class="fill-xxx" /&gt;</code>
                        <div class="d-flex align-items-center gap-2 mt-3">
                            <Icon name="lucide:home" class="text-primary fill-primary" size="22" />
                            <Icon name="lucide:settings" class="text-secondary fill-secondary" size="22" />
                            <Icon name="lucide:calendar" class="text-success fill-success" size="22"/>
                            <Icon name="lucide:message-circle" class="text-info fill-info" size="22"/>
                            <Icon name="lucide:flag" class="text-warning fill-warning" size="22" />
                            <Icon name="lucide:folder" class="text-danger fill-danger" size="22" />
                            <Icon name="lucide:globe" class="text-light fill-light" size="22" />
                            <Icon name="lucide:key" class="text-dark fill-dark" size="22" />
                            <Icon name="lucide:layers" class="text-purple fill-purple" size="22" />
                        </div>
                    </BCardBody>

                    <BCardBody class="border-top border-dashed">
                        <h4 class="mt-0 fs-base mb-1">Sizes</h4>

                        <div class="d-flex align-items-center gap-2 mt-3 flex-wrap">
                            <Icon name="lucide:phone" class="fs-1" />
                            <Icon name="lucide:badge-dollar-sign" class="fs-2" />
                            <Icon name="lucide:monitor" class="fs-3" />
                            <Icon name="lucide:tablet" class="fs-4" />
                            <Icon name="lucide:gamepad-2" class="fs-5" />
                            <Icon name="lucide:watch" class="fs-6" />
                        </div>

                        <div class="d-flex align-items-center gap-2 mt-3 flex-wrap">
                            <Icon name="lucide:watch" />
                            <Icon name="lucide:watch" class="fs-sm" />
                            <Icon name="lucide:watch" class="fs-lg" />
                            <Icon name="lucide:watch" class="fs-xl" />
                            <Icon name="lucide:watch" class="fs-xxl" />
                            <Icon name="lucide:watch" class="fs-24" />
                            <Icon name="lucide:watch" class="fs-32" />
                            <Icon name="lucide:watch" class="fs-36" />
                            <Icon name="lucide:watch" class="fs-42" />
                            <Icon name="lucide:watch" class="fs-60" />
                        </div>
                    </BCardBody>

                    <BCardBody class="border-top border-dashed">
                        <h4 class="mt-0 mb-3">Icons</h4>

                        <div class="d-flex flex-wrap align-items-center text-center gap-2">
                            <div v-for="icon in lucideIcons" :key="icon.name" class="avatar-xxl">
                                <span
                                    class="avatar-title flex-column gap-1 border border-dashed rounded-3 overflow-hidden text-truncate text-center p-1">
                                    <Icon :name="icon.icon" size="20" />
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
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCol } from 'bootstrap-vue-next';
import PageBreadcrumb from '~/components/PageBreadcrumb.vue';

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

usePageTitle('Lucide Icons')
</script>
