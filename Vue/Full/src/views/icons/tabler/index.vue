<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb sub-title="Icons" title="Tabler" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BCard no-body>
                        <BCardHeader class="d-block">
                            <h4 class="card-title mb-1">Overview</h4>
                            <p class="mb-0 text-muted">
                                Free and open source icons designed to make your website or app
                                attractive, visually consistent and simply beautiful.
                            </p>
                        </BCardHeader>

                        <BCardBody>
                            <h4 class="mt-0 fs-base mb-1">Usage</h4>
                            <code>&lt;Icon icon="tabler:icon-name" /&gt;</code>

                            <div class="d-flex align-items-center gap-2 mt-3">
                                <Icon icon="tabler:phone" class="fs-2" />
                                <Icon icon="tabler:ad-2" class="fs-2" />
                                <Icon icon="tabler:device-desktop" class="fs-2" />
                                <Icon icon="tabler:device-tablet" class="fs-2" />
                                <Icon icon="tabler:device-gamepad" class="fs-2" />
                                <Icon icon="tabler:device-watch" class="fs-2" />
                            </div>
                        </BCardBody>

                        <BCardBody class="border-top border-dashed">
                            <h4 class="mt-0 fs-base mb-1">Colors</h4>
                            <code>&lt;Icon icon="tabler:icon-name" class="text-xxxx" /&gt;</code>

                            <div class="d-flex align-items-center gap-2 mt-3">
                                <Icon icon="tabler:camera" class="text-primary fs-2"  />
                                <Icon icon="tabler:chart-pie-2" class="text-secondary fs-2"  />
                                <Icon icon="tabler:bell" class="text-success fs-2"  />
                                <Icon icon="tabler:credit-card" class="text-info fs-2"  />
                                <Icon icon="tabler:cloud" class="text-warning fs-2"  />
                                <Icon icon="tabler:mail" class="text-danger fs-2"  />
                                <Icon icon="tabler:lock" class="text-dark fs-2"  />
                                <Icon icon="tabler:user" class="text-purple fs-2"  />
                                <Icon icon="tabler:star" class="text-light fs-2"  />
                            </div>
                        </BCardBody>

                        <BCardBody class="border-top border-dashed">
                            <h4 class="mt-0 fs-base mb-1">Sizes</h4>
                            <code>&lt;Icon icon="tabler:icon-name" class="fs-xx" /&gt;</code>

                            <div class="d-flex align-items-center gap-2 mt-3">
                                <Icon icon="tabler:phone" class="fs-1" />
                                <Icon icon="tabler:ad-2" class="fs-2" />
                                <Icon icon="tabler:device-desktop" class="fs-3" />
                                <Icon icon="tabler:device-tablet" class="fs-4" />
                                <Icon icon="tabler:device-gamepad" class="fs-5" />
                                <Icon icon="tabler:device-watch" class="fs-6" />
                            </div>

                            <div class="d-flex align-items-center gap-2 mt-3 flex-wrap">
                                <Icon icon="tabler:device-watch" class="fs-sm" />
                                <Icon icon="tabler:device-watch" class="fs-lg" />
                                <Icon icon="tabler:device-watch" class="fs-xl" />
                                <Icon icon="tabler:device-watch" class="fs-xxl" />
                                <Icon icon="tabler:device-watch" class="fs-24" />
                                <Icon icon="tabler:device-watch" class="fs-32" />
                                <Icon icon="tabler:device-watch" class="fs-36" />
                                <Icon icon="tabler:device-watch" class="fs-42" />
                                <Icon icon="tabler:device-watch" class="fs-60" />
                            </div>
                        </BCardBody>

                        <BCardBody class="border-top border-dashed">
                            <h4 class="mt-0 mb-3">Icons</h4>

                            <div class="d-flex flex-wrap align-items-center text-center gap-2">
                                <div v-for="icon in tablerIcons" :key="icon.name" class="avatar-xxl">
                                    <span
                                        class="avatar-title flex-column gap-1 border border-dashed rounded-3 overflow-hidden text-truncate text-center p-1">
                                        <Icon :icon="icon.icon" class="fs-24"    />
                                        <span class="fw-semibold d-block w-100 text-truncate">{{ icon.name }}</span>
                                    </span>
                                </div>
                            </div>

                            <div class="text-center mt-3">
                                <a href="https://tabler.io/icons" target="_blank" class="btn btn-danger">View All
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
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';
import { BCard, BCardBody, BCardHeader, BCol, BContainer } from 'bootstrap-vue-next';


const tablerIcons = [
    { icon: 'tabler:phone', name: 'Phone' },
    { icon: 'tabler:ad-2', name: 'Ad 2' },
    { icon: 'tabler:headphones', name: 'Headphones' },
    { icon: 'tabler:camera', name: 'Camera' },
    { icon: 'tabler:device-watch', name: 'Watch' },
    { icon: 'tabler:microphone', name: 'Microphone' },
    { icon: 'tabler:headset', name: 'Headset' },
    { icon: 'tabler:device-tablet', name: 'Tablet' },
    { icon: 'tabler:device-gamepad', name: 'Gamepad' },
    { icon: 'tabler:printer', name: 'Printer' },
    { icon: 'tabler:device-speaker', name: 'Speaker' },
    { icon: 'tabler:database', name: 'Database' },
    { icon: 'tabler:cloud', name: 'Cloud' },
    { icon: 'tabler:wifi', name: 'WiFi' },
    { icon: 'tabler:bluetooth', name: 'Bluetooth' },
    { icon: 'tabler:usb', name: 'USB' },
    { icon: 'tabler:folder', name: 'Folder' },
    { icon: 'tabler:lock', name: 'Lock' },
    { icon: 'tabler:key', name: 'Key' },
    { icon: 'tabler:shield', name: 'Shield' },
    { icon: 'tabler:paperclip', name: 'Paperclip' },
    { icon: 'tabler:bell', name: 'Bell' },
    { icon: 'tabler:search', name: 'Search' },
    { icon: 'tabler:briefcase', name: 'Briefcase' },
    { icon: 'tabler:shopping-cart', name: 'Cart' },
    { icon: 'tabler:file', name: 'File' },
    { icon: 'tabler:book', name: 'Book' },
    { icon: 'tabler:mail', name: 'Mail' },
    { icon: 'tabler:user', name: 'User' },
    { icon: 'tabler:user-circle', name: 'User Circle' },
    { icon: 'tabler:phone-call', name: 'Phone Call' },
    { icon: 'tabler:music', name: 'Music' },
    { icon: 'tabler:movie', name: 'Movie' },
    { icon: 'tabler:file-upload', name: 'Upload' },
    { icon: 'tabler:cloud-upload', name: 'Cloud Upload' },
    { icon: 'tabler:share', name: 'Share' },
    { icon: 'tabler:arrow-right', name: 'Arrow Right' },
    { icon: 'tabler:arrow-left', name: 'Arrow Left' },
    { icon: 'tabler:arrow-up', name: 'Arrow Up' },
    { icon: 'tabler:arrow-down', name: 'Arrow Down' },
    { icon: 'tabler:refresh', name: 'Refresh' },
]

usePageMeta('Tabler Icons')
</script>
