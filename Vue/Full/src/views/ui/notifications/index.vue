<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="UI" subtitle="UI" />
        </BContainer>

        <div class="container-xl">
            <BRow>
                <BCol cols="12">
                    <BCard no-body>
                        <BCardHeader>
                            <BCardTitle tag="h4">Bootstrap Toasts</BCardTitle>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Push notifications to your visitors with a toast, a lightweight and easily customizable
                                alert message.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/toast.html"
                                target="_blank">
                                Toasts on Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol lg="6">

                    <UICard title="Basic" isCollapsable>
                        <p class="text-muted">Toasts are as flexible as you need and
                            have very little required markup. At a minimum, we
                            require a single element to contain your “toasted” content and
                            strongly encourage a dismiss button.</p>
                        <div class="p-3">


                            <BToast class="fade" :model-value="true" :noCloseButton="true" role="alert">
                                <template #title>
                                    <img :src="logoSm" alt="brand-logo" height="16" class="me-1" />
                                    <strong class="me-auto text-body">INSPINIA</strong>
                                    <small>11 mins ago</small>
                                    <button type="button" class="ms-2 btn-close" data-bs-dismiss="toast"
                                        aria-label="Close"></button>
                                </template>
                                Hello, world! This is a toast message.
                            </BToast>
                        </div>
                    </UICard>

                    <UICard title="Placement" isCollapsable>
                        <p class="text-muted">Place toasts with custom CSS as you
                            need them. The top right is often used for
                            notifications, as is the top middle. If you’re only ever going
                            to show one toast at a time, put the positioning
                            styles right on the <code>.toast</code>.</p>
                        <div class="p-3">
                            <div aria-live="polite" aria-atomic="true"
                                class="d-flex justify-content-center align-items-center" style="min-height: 200px;">

                                <BToast class="fade" :model-value="true" :noCloseButton="true" role="alert">
                                    <template #title>
                                        <img :src="logoSm" alt="brand-logo" height="16" class="me-1" />
                                        <strong class="me-auto text-body">INSPINIA</strong>
                                        <small>11 mins ago</small>
                                        <button type="button" class="ms-2 btn-close" data-bs-dismiss="toast"
                                            aria-label="Close"></button>
                                    </template>
                                    Hello, world! This is a toast message.
                                </BToast>

                            </div>
                        </div>
                    </UICard>

                    <UICard title="Placement" isCollapsable>
                        <p class="text-muted">Place toasts with custom CSS as you need them. The top
                            right is often used for notifications, as is the top middle. If you’re only ever
                            going to show one toast at a time, put the positioning styles right on the
                            <code>.toast</code>.
                        </p>

                        <form>
                            <div class="mb-3">
                                <label for="selectToastPlacement">Toast placement</label>
                                <b-form-select v-model="selected" :options="options" class="mt-2"
                                    id="selectToastPlacement" />
                            </div>
                        </form>
                        <div aria-live="polite" aria-atomic="true" class="bg-light position-relative bd-example-toasts"
                            style="min-height:294px">
                            <div class="toast-container position-absolute p-3" id="toastPlacement" :class="selected">
                                <BToast class="fade" :model-value="true" :noCloseButton="true" role="alert">
                                    <template #title>
                                        <img :src="logoSm" alt="brand-logo" height="16" class="me-1" />
                                        <strong class="me-auto text-body">INSPINIA</strong>
                                        <small>11 mins ago</small>
                                        <button type="button" class="ms-2 btn-close" data-bs-dismiss="toast"
                                            aria-label="Close"></button>
                                    </template>
                                    Hello, world! This is a toast message.
                                </BToast>
                            </div>
                        </div>
                    </UICard>
                </BCol>

                <BCol lg="6">
                    <UICard title="Live Toast" isCollapsable>

                        <p class="text-muted">Click the button below to show a toast (positioned with our utilities in
                            the Toop Right corner)
                            that has been hidden by default.
                        </p>

                        <button type="button" class="btn btn-primary" @click="showLiveAlert()">Show live toast</button>

                        <div v-if="active" class="toast-container position-fixed top-0 end-0 p-3">

                            <BToast class="fade" :model-value="active" :noCloseButton="true" role="alert">
                                <template #title>
                                    <img :src="logoSm" alt="brand-logo" height="16" class="me-1" />
                                    <strong class="me-auto text-body">INSPINIA</strong>
                                    <small>11 mins ago</small>
                                    <button type="button" class="ms-2 btn-close" @click="active = !active"
                                        aria-label="Close"></button>
                                </template>
                                Hello, world! This is a toast message.
                            </BToast>
                        </div>

                    </UICard>

                    <UICard title="Translucent" isCollapsable>
                        <p class="text-muted">Toasts are slightly translucent, too,
                            so they blend over whatever they might appear over.
                            For browsers that support the backdrop-filter CSS property,
                            we’ll also attempt to blur the elements under a toast.</p>

                        <div class="p-3 bg-light bg-opacity-50">

                            <BToast class="fade" :model-value="true" :noCloseButton="true" role="alert">
                                <template #title>
                                    <img :src="logoSm" alt="brand-logo" height="16" class="me-1" />
                                    <strong class="me-auto text-body">INSPINIA</strong>
                                    <small>11 mins ago</small>
                                    <button type="button" class="ms-2 btn-close" data-bs-dismiss="toast"
                                        aria-label="Close"></button>
                                </template>
                                Hello, world! This is a toast message.
                            </BToast>

                        </div>
                    </UICard>

                    <UICard title="Stacking" isCollapsable>
                        <p class="text-muted">When you have multiple toasts, we
                            default to vertiaclly stacking them in a readable manner.</p>
                        <div class="p-3">
                            <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">

                                <div class="toast-container" style="position: absolute; top: 0; right: 0;">


                                    <BToast class="fade" :model-value="true" :noCloseButton="true" role="alert">
                                        <template #title>
                                            <img :src="logoSm" alt="brand-logo" height="16" class="me-1" />
                                            <strong class="me-auto text-body">INSPINIA</strong>
                                            <small>just now</small>
                                            <button type="button" class="ms-2 btn-close" data-bs-dismiss="toast"
                                                aria-label="Close"></button>
                                        </template>
                                        See? Just like this.
                                    </BToast>


                                    <BToast class="fade" :model-value="true" :noCloseButton="true" role="alert">
                                        <template #title>
                                            <img :src="logoSm" alt="brand-logo" height="16" class="me-1" />
                                            <strong class="me-auto text-body">INSPINIA</strong>
                                            <small>2 seconds ago</small>
                                            <button type="button" class="ms-2 btn-close" data-bs-dismiss="toast"
                                                aria-label="Close"></button>
                                        </template>
                                        Heads up, toasts will stack automatically
                                    </BToast>

                                </div>
                            </div>
                        </div>
                    </UICard>

                    <UICard title="Custom content" isCollapsable>
                        <BToast show class="align-items-center mb-2" role="alert" aria-live="assertive"
                            aria-atomic="true">
                            Hello, world! This is a toast message.
                        </BToast>

                        <BToast show class="align-items-center text-white bg-primary border-0 mb-2" role="alert"
                            aria-live="assertive" aria-atomic="true">
                            Hello, world! This is a toast message.
                        </BToast>

                        <BToast show class="mb-2" role="alert" aria-live="assertive" :noCloseButton="true">
                            Hello, world! This is a toast message.
                            <div class="mt-2 pt-2 border-top">
                                <button type="button" class="btn btn-primary btn-sm">Take
                                    action</button>
                                <button type="button" class="btn btn-secondary btn-sm ms-1"
                                    data-bs-dismiss="toast">Close</button>
                            </div>
                        </BToast>
                    </UICard>
                </BCol>

            </BRow>

        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader, BCardTitle, BCol, BContainer, BRow, BToast } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import { ref } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

import logoSm from '@/assets/images/logo-sm.png';
import { usePageMeta } from '@/composables/usePageMeta';

const selected = ref(null);
const active = ref(false);

function showLiveAlert() {
    active.value = true
}
const options = [
    {
        value: null,
        text: 'Select a position...'
    },
    {
        value: 'top-0 start-0',
        text: 'Top left'
    },
    {
        value: 'top-0 start-50 translate-middle-x',
        text: 'Top center'
    },
    {
        value: 'top-0 end-0',
        text: 'Top right'
    },
    {
        value: 'top-50 start-0 translate-middle-y',
        text: 'Middle left'
    },
    {
        value: 'top-50 start-50 translate-middle',
        text: 'Middle center'
    },
    {
        value: 'top-50 end-0 translate-middle-y',
        text: 'Middle right'
    },
    {
        value: 'bottom-0 start-0',
        text: 'Bottom left'
    },
    {
        value: 'bottom-0 start-50 translate-middle-x',
        text: 'Bottom center'
    },
    {
        value: 'bottom-0 end-0',
        text: 'Bottom right'
    }
];

usePageMeta('Notifications')
</script>

<style lang="scss" scoped></style>