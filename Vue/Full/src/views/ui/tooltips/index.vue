<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Tooltips" subtitle="UI" />
        </BContainer>


        <div class="container-xl">
            <BRow>
                <BCol xl="12">
                    <BCard no-body>
                        <BCardHeader>
                            <BCardTitle tag="h4">Examples</BCardTitle>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript
                                using CSS3 for animations and data-bs-attributes for local title storage.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/tooltip.html"
                                target="_blank">
                                Tooltips on Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Basic" isCollapsable>
                        <p class="text-muted">Hover over the links below to see tooltips.</p>

                        <p class="mb-0">
                            Powerful admin features like <a href="#" class="fw-medium"
                                v-b-tooltip.focus.top="'Manage your dashboard easily'">custom dashboards</a> and UI
                            components
                            help you build scalable web applications efficiently.
                            This template includes pre-built pages, clean layouts, and reusable code blocks to boost
                            your development workflow.
                            From user management to analytics and settings, everything is modular and
                            developer-friendly.
                            Create modern admin panels with <a href="#" class="fw-medium"
                                v-b-tooltip.focus.top="'Built with Bootstrap 5'">responsive design</a> and seamless UX.
                            Get started quickly with a professional-grade <a href="#" class="fw-medium"
                                v-b-tooltip.focus.top="'Tailored for developers'">UI toolkit</a> and
                            supercharge your app with <a href="#" class="fw-medium"
                                v-b-tooltip.focus.top="'Includes charts, tables, forms and more'">powerful
                                components</a>
                            and
                            flexible layouts.
                        </p>
                    </UICard>
                    <UICard title="Disabled Elements" isCollapsable>
                        <p class="text-muted">Elements with the <code>disabled</code> attribute
                            aren’t interactive, meaning users cannot focus, hover, or click them to trigger
                            a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from
                            a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, ideally made
                            keyboard-focusable using <code>tabindex="0"</code>, and override the
                            <code>pointer-events</code> on the disabled element.
                        </p>
                        <div>
                            <span class="d-inline-block" v-b-tooltip="'Disabled tooltip'">
                                <BButton variant="primary" class="pe-none" type="button" disabled>Disabled
                                    button</BButton>
                            </span>
                        </div>
                    </UICard>

                    <UICard title="Hover Elements" isCollapsable>
                        <p class="text-muted">Elements with the <code>disabled</code> attribute
                            aren’t interactive, meaning users cannot focus, hover, or click them to trigger
                            a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from
                            a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, ideally made
                            keyboard-focusable using <code>tabindex="0"</code>, and override the
                            <code>pointer-events</code> on the disabled element.
                        </p>
                        <BButton variant="primary" type="button" v-b-tooltip.hover="'Hover Only, Not a Focus'">Hover to
                            See
                            Info</BButton>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Four Directions" isCollapsable>
                        <p class="text-muted">Hover over the buttons below to see the four tooltips
                            directions: top, right, bottom, and left.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton type="button" variant="info" v-b-tooltip.hover.top="'Tooltip on top'">Tooltip on
                                top</BButton>
                            <BButton type="button" variant="info" v-b-tooltip.hover.bottom="'Tooltip on bottom'">Tooltip
                                on
                                bottom</BButton>
                            <BButton type="button" variant="info" v-b-tooltip.hover.left="'Tooltip on left'">Tooltip on
                                left</BButton>
                            <BButton type="button" variant="info" v-b-tooltip.hover.right="'Tooltip on right'">Tooltip
                                on
                                right</BButton>
                        </div>
                    </UICard>

                    <UICard title="HTML Tags" isCollapsable>
                        <p class="text-muted">And with custom HTML added:</p>
                        <BTooltip>
                            <em>Tooltip</em> <u>with</u> <b>HTML</b><br />
                            custom message here!
                            <template #target>
                                <BButton type="button" variant="secondary">
                                    Tooltip with HTML
                                </BButton>
                            </template>
                        </BTooltip>
                    </UICard>


                    <UICard title="Color Tooltips" isCollapsable>
                        <div class="d-flex flex-wrap gap-2">
                            <BTooltip class="tooltip-primary">
                                This is a primary tooltip with a custom style.
                                <template #target>
                                    <BButton variant="primary" type="button">
                                        Primary tooltip
                                    </BButton>
                                </template>
                            </BTooltip>
                            <BTooltip class="tooltip-danger">
                                This is a danger tooltip with a custom warning message.
                                <template #target>
                                    <BButton variant="danger" type="button">
                                        Danger tooltip
                                    </BButton>
                                </template>
                            </BTooltip>

                            <BTooltip class="tooltip-info">
                                This is an info tooltip that provides extra details.
                                <template #target>
                                    <BButton variant="info" type="button">
                                        Info tooltip
                                    </BButton>
                                </template>
                            </BTooltip>

                            <BTooltip class="tooltip-success">
                                This is a success tooltip to indicate completion.
                                <template #target>
                                    <BButton variant="success" type="button">
                                        Success tooltip
                                    </BButton>
                                </template>
                            </BTooltip>

                            <BTooltip class="tooltip-secondary">
                                This is a secondary tooltip to indicate completion.
                                <template #target>
                                    <BButton variant="secondary" type="button">
                                        Secondary tooltip
                                    </BButton>
                                </template>
                            </BTooltip>
                            <BTooltip class="tooltip-warning">
                                This is a warning tooltip to alert you.
                                <template #target>
                                    <BButton variant="warning" type="button">
                                        Warning tooltip
                                    </BButton>
                                </template>
                            </BTooltip>

                            <BTooltip class="tooltip-dark">
                                This is a dark tooltip with important information.
                                <template #target>
                                    <BButton variant="dark" type="button">
                                        Dark tooltip
                                    </BButton>
                                </template>
                            </BTooltip>

                            <BTooltip class="tooltip-purple">
                                This is a purple tooltip with a vibrant style.
                                <template #target>
                                    <BButton class="btn-purple" type="button">
                                        Purple tooltip
                                    </BButton>
                                </template>
                            </BTooltip>
                        </div>
                    </UICard>
                </BCol>
            </BRow>

        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BButton, BCard, BCardHeader, BCardTitle, BCol, BContainer, BRow, BTooltip } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

usePageMeta('Tooltips')
</script>

<style scoped></style>