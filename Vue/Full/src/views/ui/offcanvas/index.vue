<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Offcanvas" subtitle="UI" />
        </BContainer>

        <div class="container-xl">
            <BRow>
                <BCol cols="12">
                    <BCard no-body>
                        <BCardHeader>
                            <h5 class="card-title">Examples</h5>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Build hidden sidebars into your project for navigation, shopping carts, and more with a
                                few
                                classes and our JavaScript plugin.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/offcanvas.html"
                                target="_blank">
                                Offcanvas on Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>

                    <UICard title="Offcanvas" isCollapsable>
                        <p class="text-muted fs-base">You can trigger an offcanvas using a link with <code>href</code>
                            or a button with <code>data-bs-target</code>, but both must include
                            <code>data-bs-toggle="offcanvas"</code>.
                        </p>

                        <div class="d-flex flex-wrap gap-2">
                            <a class="btn btn-primary" href="#" role="button"
                                @click="defaultOffcanvas = !defaultOffcanvas">
                                Link with href </a>
                            <BButton variant="primary" type="button" @click="defaultOffcanvas = !defaultOffcanvas">
                                Button
                                with data-bs-target </BButton>
                        </div>
                    </UICard>

                    <UICard title="Offcanvas Backdrop" isCollapsable>
                        <p class="text-muted fs-base">When an offcanvas and its backdrop are visible,
                            <code>&lt;body&gt;</code> scrolling is disabled. Use <code>data-bs-scroll</code> to enable
                            scrolling and <code>data-bs-backdrop</code> to control the backdrop visibility.
                        </p>

                        <div class="d-flex flex-wrap gap-2">

                            <BButton variant="primary" class="mt-2 mt-md-0" type="button"
                                @click="offcanvasScrolling = !offcanvasScrolling">Enable body scrolling</BButton>
                            <BButton variant="primary" class="mt-2 mt-md-0" type="button"
                                @click="offcanvasBackdrop = !offcanvasBackdrop">Enable backdrop (default)</BButton>
                            <BButton variant="primary" class="mt-2 mt-md-0" type="button"
                                @click="offcanvasScrollingBackdrop = !offcanvasScrollingBackdrop">Enable both scrolling
                                &
                                backdrop</BButton>

                        </div>
                    </UICard>

                    <UICard title="Offcanvas Placement" isCollapsable>
                        <p class="text-muted fs-sm">
                            <code>.offcanvas-start</code> positions the offcanvas on the left,
                            <code>.offcanvas-end</code> on the right, <code>.offcanvas-top</code> displays it from the
                            top, and <code>.offcanvas-bottom</code> displays it from the bottom of the viewport.
                        </p>

                        <div>
                            <div class="d-flex flex-wrap gap-2">

                                <BButton variant="primary" class="mt-2 mt-md-0" type="button"
                                    @click="offcanvasTop = !offcanvasTop">Toggle Top offcanvas</BButton>
                                <BButton variant="primary" class="mt-2 mt-md-0" type="button"
                                    @click="offcanvasStart = !offcanvasStart">Toggle right offcanvas</BButton>
                                <BButton variant="primary" class="mt-2 mt-md-0" type="button"
                                    @click="offcanvasBottom = !offcanvasBottom">Toggle bottom offcanvas</BButton>
                                <BButton variant="primary" class="mt-2 mt-lg-0" type="button"
                                    @click="offcanvasEnd = !offcanvasEnd">Toggle Left offcanvas</BButton>
                            </div>

                        </div>
                    </UICard>

                    <UICard title="Dark Offcanvas" isCollapsable>
                        <p class="text-muted fs-sm">Customize the look of offcanvases using utility classes to suit
                            different themes, such as dark navbars. Add <code>.text-bg-dark</code> to
                            <code>.offcanvas</code> and <code>.btn-close-white</code> to <code>.btn-close</code> for
                            dark styling.
                        </p>

                        <BButton variant="primary" class="mt-2 mt-md-0" type="button"
                            @click="offcanvasDark = !offcanvasDark">Dark offcanvas</BButton>

                    </UICard>
                </BCol>
            </BRow>
        </div>
    </MainLayout>

    <!-- Default offcanvas -->
    <BOffcanvas v-model="defaultOffcanvas" placement="start" id="offcanvasExample">
        <template #title>
            <h5 id="offcanvasExampleLabel">Offcanvas</h5>
        </template>
        <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
        </div>
        <h5 class="mt-3">List</h5>
        <ul class="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
        </ul>

        <ul class="ps-3">
            <li>At vero eos et accusamus et iusto odio dignissimos</li>
            <li>Et harum quidem rerum facilis</li>
            <li>Temporibus autem quibusdam et aut officiis</li>
        </ul>
    </BOffcanvas>

    <!-- Offcanvas Placement Top -->
    <BOffcanvas v-model="offcanvasTop" placement="top" id="offcanvasExample">
        <template #title>
            <h5 id="offcanvasExampleLabel">Offcanvas Top</h5>
        </template>
        <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
        </div>
        <h5 class="mt-3">List</h5>
        <ul class="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
        </ul>
    </BOffcanvas>

    <!-- Offcanvas Placement Right -->
    <BOffcanvas v-model="offcanvasStart" placement="end" id="offcanvasExample">
        <template #title>
            <h5 id="offcanvasExampleLabel">Offcanvas right</h5>
        </template>
        <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
        </div>
        <h5 class="mt-3">List</h5>
        <ul class="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
        </ul>
    </BOffcanvas>

    <!-- Offcanvas Placement Bottom -->
    <BOffcanvas v-model="offcanvasBottom" placement="bottom" id="offcanvasExample">
        <template #title>
            <h5 id="offcanvasExampleLabel">Offcanvas bottom</h5>
        </template>
        <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
        </div>
        <h5 class="mt-3">List</h5>
        <ul class="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
        </ul>
    </BOffcanvas>

    <!-- Offcanvas Placement Left -->
    <BOffcanvas v-model="offcanvasEnd" placement="start" id="offcanvasExample">
        <template #title>
            <h5 id="offcanvasExampleLabel">Offcanvas Left</h5>
        </template>
        <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
        </div>
        <h5 class="mt-3">List</h5>
        <ul class="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
        </ul>
    </BOffcanvas>

    <!-- Offcanvas Placement Scrolling -->
    <BOffcanvas v-model="offcanvasScrolling" placement="start" id="offcanvasExample" :backdrop="false"
        :bodyScrolling="true">
        <template #title>
            <h5 id="offcanvasExampleLabel">Colored with scrolling</h5>
        </template>
        <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
        </div>
        <h5 class="mt-3">List</h5>
        <ul class="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
        </ul>

        <ul class="ps-3">
            <li>At vero eos et accusamus et iusto odio dignissimos</li>
            <li>Et harum quidem rerum facilis</li>
            <li>Temporibus autem quibusdam et aut officiis</li>
        </ul>
    </BOffcanvas>

    <!-- Offcanvas Placement Backdrop -->
    <BOffcanvas v-model="offcanvasBackdrop" placement="start" id="offcanvasExample">
        <template #title>
            <h5 id="offcanvasExampleLabel">Offcanvas with backdrop</h5>
        </template>
        <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
        </div>
        <h5 class="mt-3">List</h5>
        <ul class="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
        </ul>

        <ul class="ps-3">
            <li>At vero eos et accusamus et iusto odio dignissimos</li>
            <li>Et harum quidem rerum facilis</li>
            <li>Temporibus autem quibusdam et aut officiis</li>
        </ul>
    </BOffcanvas>

    <!-- Offcanvas Placement Scrolling & Backdrop -->
    <BOffcanvas v-model="offcanvasScrollingBackdrop" placement="start" id="offcanvasExample" :bodyScrolling="true">
        <template #title>
            <h5 id="offcanvasExampleLabel">Backdroped with scrolling</h5>
        </template>
        <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
        </div>
        <h5 class="mt-3">List</h5>
        <ul class="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
        </ul>

        <ul class="ps-3">
            <li>At vero eos et accusamus et iusto odio dignissimos</li>
            <li>Et harum quidem rerum facilis</li>
            <li>Temporibus autem quibusdam et aut officiis</li>
        </ul>
    </BOffcanvas>

    <!-- Offcanvas Placement Dark -->
    <BOffcanvas class="text-bg-dark" v-model="offcanvasDark" placement="start" id="offcanvasDark"
        header-close-class="btn-close-white">
        <template #title>
            <h5 id="offcanvasExampleLabel">Dark Offcanvas</h5>
        </template>
        <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
        </div>
        <h5 class="mt-3">List</h5>
        <ul class="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
        </ul>
    </BOffcanvas>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BCard, BCardBody, BCardHeader, BCol, BContainer, BOffcanvas, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';

import { ref } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

const defaultOffcanvas = ref(false);
const offcanvasEnd = ref(false)
const offcanvasStart = ref(false);
const offcanvasTop = ref(false);
const offcanvasBottom = ref(false);
const offcanvasDark = ref(false);

const offcanvasScrolling = ref(false);
const offcanvasBackdrop = ref(false);
const offcanvasScrollingBackdrop = ref(false);

usePageMeta('Offcanvas')
</script>

<style scoped></style>