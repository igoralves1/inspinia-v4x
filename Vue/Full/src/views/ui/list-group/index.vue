<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="List Group" subTitle="UI" />
        </BContainer>

        <div class="container-xl">
            <BRow>
                <BCol lg="12">
                    <UICard title="Examples" isCollapsable>
                        <p class="text-muted mb-2">
                            List groups are a flexible and powerful component for displaying a series of content. Modify
                            and extend them to support just about any content within.
                        </p>
                        <a class="btn btn-link p-0 fw-semibold"
                            href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/list-group.html"
                            target="_blank">
                            List Group on Bootstrap
                            <Icon icon="tabler:chevron-right" class="ms-1" />
                        </a>
                    </UICard>
                </BCol>

                <BCol xl="4">
                    <UICard title="Basic Example" isCollapsable>
                        <p class="text-muted">
                            The most basic list group is an unordered list with list items and the proper classes. Build
                            upon it with the options that follow, or with your own CSS as needed.
                        </p>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <Icon icon="tabler:cloud" class="me-1 align-top fs-xl" /> Dropbox Cloud Storage
                            </li>
                            <li class="list-group-item">
                                <Icon icon="tabler:brand-slack" class="me-1 align-top fs-xl" /> Slack Team Collaboration
                            </li>
                            <li class="list-group-item">
                                <Icon icon="tabler:brand-windows" class="me-1 align-top fs-xl" /> Microsoft Windows OS
                            </li>
                            <li class="list-group-item">
                                <Icon icon="tabler:device-desktop-analytics" class="me-1 align-top fs-xl" /> Zendesk
                                Customer Support
                            </li>
                            <li class="list-group-item">
                                <Icon icon="tabler:brand-stripe" class="me-1 align-top fs-xl" /> Stripe Payment
                                Integration
                            </li>
                        </ul>
                    </UICard>
                </BCol>

                <BCol xl="4">
                    <UICard title="Active Items" isCollapsable>
                        <p class="text-muted">
                            Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active
                            selection.
                        </p>
                        <ul class="list-group">
                            <li class="list-group-item active">
                                <Icon icon="tabler:brand-github" class="me-1 align-top fs-xl" /> GitHub Repository
                            </li>
                            <li class="list-group-item">
                                <Icon icon="tabler:brand-figma" class="me-1 align-top fs-xl" /> Figma Design Tool
                            </li>
                            <li class="list-group-item">
                                <Icon icon="tabler:brand-notion" class="me-1 align-top fs-xl" /> Notion Workspace
                            </li>
                            <li class="list-group-item">
                                <Icon icon="tabler:brand-trello" class="me-1 align-top fs-xl" /> Trello Task Manager
                            </li>
                            <li class="list-group-item">
                                <Icon icon="tabler:cloud" class="me-1 align-top fs-xl" /> DigitalOcean Cloud
                            </li>
                        </ul>
                    </UICard>
                </BCol>

                <BCol xl="4">
                    <UICard title="Disabled Items" isCollapsable>
                        <p>Add <code>.disabled</code> to a <code>.list-group-item</code> to make it <em>appear</em>
                            disabled.</p>
                        <ul class="list-group">
                            <li class="list-group-item disabled" aria-disabled="true">
                                <Icon icon="tabler:cloud" class="me-1 align-top fs-xl" /> Dropbox Cloud Storage
                            </li>
                            <li class="list-group-item">
                                <Icon icon="tabler:brand-slack" class="me-1 align-top fs-xl" /> Slack Team Collaboration
                            </li>
                            <li class="list-group-item">
                                <Icon icon="tabler:brand-windows" class="me-1 align-top fs-xl" /> Microsoft Windows OS
                            </li>
                            <li class="list-group-item">
                                <Icon icon="tabler:device-desktop-analytics" class="me-1 align-top fs-xl" /> Zendesk
                                Customer Support
                            </li>
                            <li class="list-group-item">
                                <Icon icon="tabler:brand-stripe" class="me-1 align-top fs-xl" /> Stripe Payment
                                Integration
                            </li>
                        </ul>
                    </UICard>
                </BCol>

                <BCol xl="4">
                    <UICard title="Links and Buttons" isCollapsable>
                        <p class="text-muted">
                            Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create <em>actionable</em>
                            list group items with hover, disabled, and active states by adding
                            <code>.list-group-item-action</code>.
                        </p>
                        <div class="list-group">
                            <a href="javascript:void(0);" class="list-group-item list-group-item-action active">Stripe
                                Payment Integration</a>
                            <a href="javascript:void(0);" class="list-group-item list-group-item-action">Dropbox Cloud
                                Service</a>
                            <button type="button" class="list-group-item list-group-item-action">Slack
                                Communication</button>
                            <button type="button" class="list-group-item list-group-item-action">Notion Productivity
                                App</button>
                            <a href="javascript:void(0);" class="list-group-item list-group-item-action disabled"
                                tabindex="-1">Zendesk Support Tool</a>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="4">
                    <UICard title="Flush" isCollapsable>
                        <p class="text-muted">
                            Add <code>.list-group-flush</code> to remove some borders and rounded corners to render list
                            group items edge-to-edge in a parent container (e.g., cards).
                        </p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Slack Collaboration Tool</li>
                            <li class="list-group-item">Dropbox Cloud Storage</li>
                            <li class="list-group-item">Notion Workspace Organizer</li>
                            <li class="list-group-item">Zendesk Customer Support</li>
                            <li class="list-group-item">Stripe Payment Processor</li>
                        </ul>
                    </UICard>
                </BCol>

                <BCol xl="4">
                    <UICard title="Horizontal" isCollapsable>
                        <p class="text-muted">
                            Add <code>.list-group-horizontal</code> to change the layout of list group items from
                            vertical to horizontal across all breakpoints.
                        </p>
                        <ul class="list-group list-group-horizontal mb-3">
                            <li class="list-group-item">Slack</li>
                            <li class="list-group-item">Notion</li>
                            <li class="list-group-item">Dropbox</li>
                        </ul>
                        <ul class="list-group list-group-horizontal-sm mb-3">
                            <li class="list-group-item">Figma</li>
                            <li class="list-group-item">Stripe</li>
                            <li class="list-group-item">Zendesk</li>
                        </ul>
                        <ul class="list-group list-group-horizontal-md">
                            <li class="list-group-item">Trello</li>
                            <li class="list-group-item">Asana</li>
                            <li class="list-group-item">ClickUp</li>
                        </ul>
                    </UICard>
                </BCol>

                <BCol xl="4">
                    <UICard title="Contextual Classes" isCollapsable>
                        <p class="text-muted">Use contextual classes to style list items with a stateful background and
                            color.</p>
                        <ul class="list-group">
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
                            <li class="list-group-item list-group-item-secondary">A simple secondary list group item
                            </li>
                            <li class="list-group-item list-group-item-success">A simple success list group item</li>
                            <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
                            <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
                            <li class="list-group-item list-group-item-info">A simple info list group item</li>
                            <li class="list-group-item list-group-item-light">A simple light list group item</li>
                            <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
                        </ul>
                    </UICard>
                </BCol>

                <BCol xl="4">
                    <UICard title="Contextual Classes with Link" isCollapsable>
                        <p class="text-muted">Use contextual classes to style list items with a stateful background and
                            color.</p>
                        <div class="list-group">
                            <a href="javascript:void(0);" class="list-group-item list-group-item-action">Darius ac
                                facilities in</a>
                            <a href="javascript:void(0);"
                                class="list-group-item list-group-item-action list-group-item-primary">A simple primary
                                list group item</a>
                            <a href="javascript:void(0);"
                                class="list-group-item list-group-item-action list-group-item-secondary">A simple
                                secondary list group item</a>
                            <a href="javascript:void(0);"
                                class="list-group-item list-group-item-action list-group-item-success">A simple success
                                list group item</a>
                            <a href="javascript:void(0);"
                                class="list-group-item list-group-item-action list-group-item-danger">A simple danger
                                list group item</a>
                            <a href="javascript:void(0);"
                                class="list-group-item list-group-item-action list-group-item-warning">A simple warning
                                list group item</a>
                            <a href="javascript:void(0);"
                                class="list-group-item list-group-item-action list-group-item-info">A simple info list
                                group item</a>
                            <a href="javascript:void(0);"
                                class="list-group-item list-group-item-action list-group-item-light">A simple light list
                                group item</a>
                            <a href="javascript:void(0);"
                                class="list-group-item list-group-item-action list-group-item-dark">A simple dark list
                                group item</a>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="4">
                    <UICard title="Custom Content" isCollapsable>
                        <p class="text-muted">Add nearly any HTML within, even for linked list groups, with the help of
                            flexbox utilities.</p>
                        <div class="list-group">
                            <a href="javascript:void(0);" class="list-group-item list-group-item-action active">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-2">List group item heading</h5>
                                    <small>3 days ago</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                                    risus varius blandit.</p>
                                <small>Donec id elit non mi porta.</small>
                            </a>
                            <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-2">List group item heading</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                                    risus varius blandit.</p>
                                <small class="text-muted">Donec id elit non mi porta.</small>
                            </a>
                            <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-2">List group item heading</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                                    risus varius blandit.</p>
                                <small class="text-muted">Donec id elit non mi porta.</small>
                            </a>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="4">
                    <UICard title="With Badges" isCollapsable>
                        <p class="text-muted">Add badges to any list group item to show counts, activity, and more.</p>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Gmail Notifications <span class="badge bg-primary rounded-pill">14</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Unprocessed Orders <span class="badge bg-success rounded-pill">2</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Urgent Tickets <span class="badge bg-danger rounded-pill">99+</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Completed Transactions <span class="badge bg-success rounded-pill">20+</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Invoices Awaiting Approval <span class="badge bg-warning rounded-pill">12</span>
                            </li>
                        </ul>
                    </UICard>
                </BCol>

                <BCol xl="4">
                    <UICard title="Checkboxes and Radios" isCollapsable>
                        <p class="text-muted">Place Bootstrap’s checkboxes and radios within list group items.</p>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <input class="form-check-input me-1" type="checkbox" id="newsletterCheckbox">
                                <label class="form-check-label" for="newsletterCheckbox">Subscribe to newsletter</label>
                            </li>
                            <li class="list-group-item">
                                <input class="form-check-input me-1" type="checkbox" id="termsCheckbox">
                                <label class="form-check-label" for="termsCheckbox">Accept terms and conditions</label>
                            </li>
                        </ul>
                        <ul class="list-group mt-2">
                            <li class="list-group-item">
                                <input class="form-check-input me-1" type="radio" name="notificationOptions"
                                    id="emailRadio" checked>
                                <label class="form-check-label" for="emailRadio">Notify by Email</label>
                            </li>
                            <li class="list-group-item">
                                <input class="form-check-input me-1" type="radio" name="notificationOptions"
                                    id="smsRadio">
                                <label class="form-check-label" for="smsRadio">Notify by SMS</label>
                            </li>
                        </ul>
                    </UICard>
                </BCol>

                <BCol xl="4">
                    <UICard title="Numbered" isCollapsable>
                        <p class="text-muted">
                            Numbers are generated by <code>counter-reset</code> on the <code>&lt;ol&gt;</code>, and
                            styled via <code>::before</code>.
                        </p>
                        <ol class="list-group list-group-numbered">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">INSPINIA Admin</div>
                                    INSPINIA Admin
                                </div>
                                <span class="badge bg-primary rounded-pill">865</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">INSPINIA React Admin</div>
                                    INSPINIA React Admin
                                </div>
                                <span class="badge bg-primary rounded-pill">140</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Angular Version</div>
                                    Angular Version
                                </div>
                                <span class="badge bg-primary rounded-pill">85</span>
                            </li>
                        </ol>
                    </UICard>
                </BCol>
            </BRow>
        </div>
    </MainLayout>
</template>


<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BCol, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

usePageMeta('List Group')
</script>