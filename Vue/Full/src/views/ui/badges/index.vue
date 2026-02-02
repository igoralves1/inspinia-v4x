<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Badges" subtitle="UI" />
        </BContainer>


        <div class="container-xl">
            <BRow>
                <BCol xl="12">
                    <BCard no-body>
                        <BCardHeader>
                            <h4 class="card-title">Examples</h4>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Documentation and examples for badges, our small count and labeling component.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/badge.html"
                                target="_blank">
                                Badges on vue Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Basic Badges" isCollapsable>
                        <p class="text-muted">
                            Use the <code>.badge</code> & <code>.text-bg-*</code> classes to make badges.
                        </p>
                        <div class="d-flex align-items-center gap-1 flex-wrap">
                            <span class="badge badge-default">Default</span>
                            <BBadge variant="primary">Primary</BBadge>
                            <BBadge variant="secondary">Secondary</BBadge>
                            <BBadge variant="success">Success</BBadge>
                            <BBadge variant="danger">Danger</BBadge>
                            <BBadge variant="warning">Warning</BBadge>
                            <BBadge variant="info">Info</BBadge>
                            <BBadge variant="light">Light</BBadge>
                            <BBadge variant="dark">Dark</BBadge>
                            <BBadge :variant="null" class="text-bg-purple">Purple</BBadge>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Basic Pill Badges" isCollapsable>
                        <p class="text-muted">
                            Use the <code>.rounded-pill</code> modifier class to make badges more rounded.
                        </p>
                        <div class="d-flex align-items-center gap-1 flex-wrap">
                            <span class="badge badge-default rounded-pill">Default</span>
                            <BBadge variant="primary" pill>Primary</BBadge>
                            <BBadge variant="secondary" pill>Secondary</BBadge>
                            <BBadge variant="success" pill>Success</BBadge>
                            <BBadge variant="danger" pill>Danger</BBadge>
                            <BBadge variant="warning" pill>Warning</BBadge>
                            <BBadge variant="info" pill>Info</BBadge>
                            <BBadge variant="light" pill>Light</BBadge>
                            <BBadge variant="dark" pill>Dark</BBadge>
                            <BBadge :variant="null" class="text-bg-purple" pill>Purple</BBadge>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Outline Badges" isCollapsable>
                        <p class="text-muted">
                            Using the <code>.badge-outline-*</code> to quickly create a bordered badges.
                        </p>
                        <div class="d-flex align-items-center gap-1 flex-wrap">
                            <span class="badge badge-outline-primary">Primary</span>
                            <span class="badge badge-outline-secondary">Secondary</span>
                            <span class="badge badge-outline-success">Success</span>
                            <span class="badge badge-outline-danger">Danger</span>
                            <span class="badge badge-outline-warning">Warning</span>
                            <span class="badge badge-outline-info">Info</span>
                            <span class="badge badge-outline-dark">Dark</span>
                            <span class="badge badge-outline-purple">Purple</span>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Outline Pill Badges" isCollapsable>
                        <p class="text-muted">
                            Use the <code>.rounded-pill</code> modifier class to make badges more rounded.
                        </p>
                        <div class="d-flex align-items-center gap-1 flex-wrap">
                            <span class="badge badge-outline-primary rounded-pill">Primary</span>
                            <span class="badge badge-outline-secondary rounded-pill">Secondary</span>
                            <span class="badge badge-outline-success rounded-pill">Success</span>
                            <span class="badge badge-outline-danger rounded-pill">Danger</span>
                            <span class="badge badge-outline-warning rounded-pill">Warning</span>
                            <span class="badge badge-outline-info rounded-pill">Info</span>
                            <span class="badge badge-outline-dark rounded-pill">Dark</span>
                            <span class="badge badge-outline-purple rounded-pill">Purple</span>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Lighten Badges" isCollapsable>
                        <p class="text-muted">
                            Use the <code>.badge-soft--*</code> modifier class to make badges lighten.
                        </p>
                        <div class="d-flex align-items-center gap-1 flex-wrap">
                            <span class="badge badge-soft-primary">Primary</span>
                            <span class="badge badge-soft-secondary">Secondary</span>
                            <span class="badge badge-soft-success">Success</span>
                            <span class="badge badge-soft-danger">Danger</span>
                            <span class="badge badge-soft-warning">Warning</span>
                            <span class="badge badge-soft-info">Info</span>
                            <span class="badge badge-soft-dark">Dark</span>
                            <span class="badge badge-soft-purple">Purple</span>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Lighten Pill Badges" isCollapsable>
                        <p class="text-muted">
                            Use the <code>.badge-soft--*</code> modifier class to make badges lighten.
                        </p>
                        <div class="d-flex align-items-center gap-1 flex-wrap">
                            <span class="badge badge-soft-primary rounded-pill">Primary</span>
                            <span class="badge badge-soft-secondary rounded-pill">Secondary</span>
                            <span class="badge badge-soft-success rounded-pill">Success</span>
                            <span class="badge badge-soft-danger rounded-pill">Danger</span>
                            <span class="badge badge-soft-warning rounded-pill">Warning</span>
                            <span class="badge badge-soft-info rounded-pill">Info</span>
                            <span class="badge badge-soft-dark rounded-pill">Dark</span>
                            <span class="badge badge-soft-purple rounded-pill">Purple</span>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Label Badges" isCollapsable>
                        <p class="text-muted">
                            Using the <code>.badge-label</code> to quickly create a square based badges.
                        </p>
                        <div class="d-flex align-items-center gap-1 flex-wrap">
                            <span class="badge badge-label badge-default">Default</span>
                            <span class="badge badge-label text-bg-primary">Primary</span>
                            <span class="badge badge-label text-bg-secondary">Secondary</span>
                            <span class="badge badge-label text-bg-success">Success</span>
                            <span class="badge badge-label text-bg-danger">Danger</span>
                            <span class="badge badge-label text-bg-warning">Warning</span>
                            <span class="badge badge-label text-bg-info">Info</span>
                            <span class="badge badge-label text-bg-light">Light</span>
                            <span class="badge badge-label text-bg-dark">Dark</span>
                            <span class="badge badge-label text-bg-purple">Purple</span>
                        </div>
                    </UICard>

                </BCol>

                <BCol xl="6">
                    <UICard title="Square Badges" isCollapsable>
                        <p class="text-muted">
                            Using the <code>.badge-square</code> to quickly create a square based badges.
                        </p>
                        <div class="d-flex align-items-center gap-1 flex-wrap">
                            <span class="badge badge-square badge-default">0</span>
                            <span class="badge badge-square text-bg-primary">1</span>
                            <span class="badge badge-square text-bg-secondary">2</span>
                            <span class="badge badge-square text-bg-success">3</span>
                            <span class="badge badge-square text-bg-danger">4</span>
                            <span class="badge badge-square text-bg-warning">5</span>
                            <span class="badge badge-square text-bg-info">6</span>
                            <span class="badge badge-square text-bg-light">7</span>
                            <span class="badge badge-square text-bg-dark">8</span>
                            <span class="badge badge-square text-bg-purple">9</span>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Circle Badges" isCollapsable>
                        <p class="text-muted">
                            Using the <code>.badge-circle</code> to quickly create a circle based badges.
                        </p>
                        <div class="d-flex align-items-center gap-1 flex-wrap">
                            <span class="badge badge-circle badge-default">0</span>
                            <span class="badge badge-circle text-bg-primary">1</span>
                            <span class="badge badge-circle text-bg-secondary">2</span>
                            <span class="badge badge-circle text-bg-success">3</span>
                            <span class="badge badge-circle text-bg-danger">4</span>
                            <span class="badge badge-circle text-bg-warning">5</span>
                            <span class="badge badge-circle text-bg-info">6</span>
                            <span class="badge badge-circle text-bg-light">7</span>
                            <span class="badge badge-circle text-bg-dark">8</span>
                            <span class="badge badge-circle text-bg-purple">9</span>
                        </div>
                    </UICard>

                    <UICard title="Positioned" isCollapsable>
                        <p class="text-muted">
                            Use utilities to modify a <code>.badge</code> and position it in the corner of a
                            link or button.
                        </p>

                        <div class="d-flex flex-wrap gap-3">
                            <button type="button" class="btn btn-primary position-relative">
                                Inbox
                                <span
                                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    99+
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button>

                            <button type="button" class="btn btn-primary position-relative">
                                Profile
                                <span
                                    class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                    <span class="visually-hidden">New alerts</span>
                                </span>
                            </button>

                            <button type="button" class="btn btn-success">
                                Notifications <span class="badge text-bg-light ms-1">4</span>
                            </button>
                        </div>
                    </UICard>


                </BCol>

                <BCol xl="6">
                    <UICard title="Headings with Badges" isCollapsable>
                        <h1>h1.Example heading <span class="badge text-bg-primary">New</span></h1>
                        <h2>h2.Example heading <span class="badge text-bg-primary">New</span></h2>
                        <h3>h3.Example heading <span class="badge text-bg-primary">New</span></h3>
                        <h4>h4.Example heading <span class="badge text-bg-primary">New</span></h4>
                        <h5>h5.Example heading <span class="badge text-bg-primary">New</span></h5>
                        <h6>h6.Example heading <span class="badge text-bg-primary">New</span></h6>
                    </UICard>
                </BCol>
            </BRow>

        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BBadge, BCard, BCardBody, BCardHeader, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

usePageMeta('Badges')
</script>

<style scoped></style>