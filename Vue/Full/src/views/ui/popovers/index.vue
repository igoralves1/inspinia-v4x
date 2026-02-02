<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Popovers" subtitle="UI" />
        </BContainer>

        <div class="container-xl">
            <BRow>
                <BCol cols="12">
                    <BCard no-body>
                        <BCardHeader>
                            <h4 class="card-title">Examples</h4>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Documentation and examples for adding Bootstrap popovers, like those found in iOS, to
                                any
                                element on your site.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/popover.html"
                                target="_blank">
                                Popovers on Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol cols="6">
                    <UICard title="Simple Popover" isCollapsable>
                        <BButton variant="info" id="simple-popover"> Get Support Info </BButton>
                        <BPopover target="simple-popover" placement="right">
                            <template #title>Need Help?</template>
                            Click here to get support from our team. We're here 24/7 to assist you.
                        </BPopover>
                    </UICard>
                </BCol>

                <BCol cols="6">

                    <UICard title="Dismiss on Next Click" isCollapsable>
                        <BButton variant="primary" id="dismissible-popover"> Show Tips </BButton>
                        <BPopover target="dismissible-popover" placement="right">
                            <template #title>Quick Tips</template>
                            Get quick tips and tricks to improve your workflow instantly.
                        </BPopover>
                    </UICard>
                </BCol>

                <BCol cols="6">
                    <UICard title="Hover" isCollapsable>
                        <BButton variant="dark" id="hover-popover"> Please Hover Me </BButton>
                        <BPopover target="hover-popover" placement="right" triggers="hover">
                            <template #title>Exciting Features!</template>
                            Discover features you didn’t know existed. Hover to explore more!
                        </BPopover>
                    </UICard>

                </BCol>

                <BCol cols="6">
                    <UICard title="Four Directions" isCollapsable>
                        <div class="d-flex flex-wrap gap-1">
                            <BPopover title="Top Popover"
                                body="`This popover appears above the button. Great for tips or info.`">
                                <template #target>
                                    <BButton variant="primary">
                                        Popover on top </BButton>
                                </template>
                            </BPopover>
                            <BPopover title="Bottom Popover" placement="bottom"
                                body="`This popover shows below. Perfect for additional details.`">
                                <template #target>
                                    <BButton variant="primary">
                                        Popover on bottom </BButton>
                                </template>
                            </BPopover>
                            <BPopover title="Right Popover" placement="right"
                                body="`Slide in from the right to provide quick insights.`">
                                <template #target>
                                    <BButton variant="primary">
                                        Popover on right </BButton>
                                </template>
                            </BPopover>
                            <BPopover title="Left Popover" placement="left"
                                body="`Appears on the left side. Great for tooltips or notes.`">
                                <template #target>
                                    <BButton variant="primary">
                                        Popover on left </BButton>
                                </template>
                            </BPopover>
                        </div>
                    </UICard>
                </BCol>

                <BCol cols="6">
                    <UICard title="Custom Popovers" isCollapsable>
                        <div class="d-flex flex-wrap gap-2">
                            <BPopover class="popover-primary" placement="right">
                                <template #title>Primary popover</template>
                                This popover is themed via CSS variables.
                                <template #target>
                                    <BButton variant="primary"> Primary popover </BButton>
                                </template>
                            </BPopover>

                            <BButton variant="success" id="popover-2"> Success popover </BButton>
                            <BPopover target="popover-2" class="popover-success" placement="right">
                                <template #title>Success popover</template>
                                This popover is themed via CSS variables.
                            </BPopover>

                            <BButton variant="danger" id="popover-3"> Danger popover </BButton>
                            <BPopover target="popover-3" class="popover-danger" placement="right">
                                <template #title>Danger popover</template>
                                This popover is themed via CSS variables.
                            </BPopover>

                            <BButton variant="info" id="popover-4"> Info popover</BButton>
                            <BPopover target="popover-4" class="popover-info" placement="right">
                                <template #title>Info popover</template>
                                This popover is themed via CSS variables.
                            </BPopover>

                            <BButton variant="dark" id="popover-5"> Dark popover </BButton>
                            <BPopover target="popover-5" class="popover-dark" placement="right">
                                <template #title>Dark popover</template>
                                This popover is themed via CSS variables.
                            </BPopover>

                            <BButton variant="secondary" id="popover-6"> Secondary popover</BButton>
                            <BPopover target="popover-6" class="popover-secondary" placement="right">
                                <template #title>Secondary popover</template>
                                This popover is themed via CSS variables.
                            </BPopover>
                            <BButton class="btn-purple" id="popover-7"> Purple popover</BButton>
                            <BPopover target="popover-7" class="popover-purple" placement="right">
                                <template #title>Purple popover</template>
                                This popover is themed via CSS variables.
                            </BPopover>
                        </div>
                    </UICard>

                </BCol>

                <BCol cols="6">
                    <UICard title="Disabled Elements" isCollapsable>
                        <span class="d-inline-block"
                            v-b-popover.hover="`This button is disabled, but the popover still works.`">
                            <BButton variant="primary" style="pointer-events: none" disabled> Disabled button </BButton>
                        </span>
                    </UICard>
                </BCol>
            </BRow>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BCard, BCardBody, BCardHeader, BCol, BContainer, BPopover, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

usePageMeta('Popovers')
</script>

<style scoped></style>