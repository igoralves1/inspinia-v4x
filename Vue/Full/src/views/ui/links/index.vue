<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Links" subTitle="UI" />
        </BContainer>

        <div class="container-xl">
            <BRow>
                <BCol xl="12">
                    <UICard title="Examples" isCollapsable>
                        <p class="text-muted mb-2">
                            Documentation and examples for Colored links with hover states.
                        </p>
                        <a class="btn btn-link p-0 fw-semibold"
                            href="https://getbootstrap.com/docs/5.3/helpers/colored-links/" target="_blank">
                            Links on Bootstrap
                            <Icon icon="tabler:chevron-right" class="ms-1" />
                        </a>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Colored Links" isCollapsable>
                        <p class="text-muted">
                            You can use the <code>.link-*</code> classes to colorize links. Unlike the
                            <a href="ui-utilities.html"><code>.text-*</code> classes</a>, these classes have a
                            <code>:hover</code> and <code>:focus</code> state.
                        </p>

                        <p><a href="javascript:void(0);" class="link-primary">Primary link</a></p>
                        <p><a href="javascript:void(0);" class="link-secondary">Secondary link</a></p>
                        <p><a href="javascript:void(0);" class="link-success">Success link</a></p>
                        <p><a href="javascript:void(0);" class="link-danger">Danger link</a></p>
                        <p><a href="javascript:void(0);" class="link-warning">Warning link</a></p>
                        <p><a href="javascript:void(0);" class="link-info">Info link</a></p>
                        <p><a href="javascript:void(0);" class="link-light">Light link</a></p>
                        <p><a href="javascript:void(0);" class="link-dark">Dark link</a></p>
                        <p class="mb-0"><a href="javascript:void(0);" class="link-body-emphasis">Emphasis link</a></p>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Link Utilities" isCollapsable>
                        <p class="text-muted">
                            <RouterLink to="/ui/utilities">Colored link helpers</RouterLink> have been updated to pair with our link
                            utilities.
                            Use the new utilities to modify the link opacity, underline opacity, and underline offset.
                        </p>

                        <p><a href="javascript:void(0);"
                                class="link-primary text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Primary
                                link</a></p>
                        <p><a href="javascript:void(0);"
                                class="link-secondary text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Secondary
                                link</a></p>
                        <p><a href="javascript:void(0);"
                                class="link-success text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Success
                                link</a></p>
                        <p><a href="javascript:void(0);"
                                class="link-danger text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Danger
                                link</a></p>
                        <p><a href="javascript:void(0);"
                                class="link-warning text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Warning
                                link</a></p>
                        <p><a href="javascript:void(0);"
                                class="link-info text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Info
                                link</a></p>
                        <p><a href="javascript:void(0);"
                                class="link-light text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Light
                                link</a></p>
                        <p><a href="javascript:void(0);"
                                class="link-dark text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Dark
                                link</a></p>
                        <p><a href="javascript:void(0);"
                                class="link-body-emphasis text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Emphasis
                                link</a></p>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Link Opacity" isCollapsable>
                        <p class="text-muted">Change the alpha opacity of the link <code>rgba()</code> color value with
                            utilities.</p>
                        <p><a class="link-opacity-10" href="javascript:void(0);">Link opacity 10</a></p>
                        <p><a class="link-opacity-25" href="javascript:void(0);">Link opacity 25</a></p>
                        <p><a class="link-opacity-50" href="javascript:void(0);">Link opacity 50</a></p>
                        <p><a class="link-opacity-75" href="javascript:void(0);">Link opacity 75</a></p>
                        <p class="mb-0"><a class="link-opacity-100" href="javascript:void(0);">Link opacity 100</a></p>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Link Hover Opacity" isCollapsable>
                        <p class="text-muted">You can even change the opacity level on hover.</p>
                        <p><a class="link-opacity-10-hover" href="javascript:void(0);">Link hover opacity 10</a></p>
                        <p><a class="link-opacity-25-hover" href="javascript:void(0);">Link hover opacity 25</a></p>
                        <p><a class="link-opacity-50-hover" href="javascript:void(0);">Link hover opacity 50</a></p>
                        <p><a class="link-opacity-75-hover" href="javascript:void(0);">Link hover opacity 75</a></p>
                        <p class="mb-0"><a class="link-opacity-100-hover" href="javascript:void(0);">Link hover opacity
                                100</a></p>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Underline Color" isCollapsable>
                        <p class="text-muted">Change the underline’s color independent of the link text color.</p>
                        <p><a href="javascript:void(0);"
                                class="text-decoration-underline link-underline-primary">Primary
                                underline</a></p>
                        <p><a href="javascript:void(0);"
                                class="text-decoration-underline link-underline-secondary">Secondary underline</a></p>
                        <p><a href="javascript:void(0);"
                                class="text-decoration-underline link-underline-success">Success
                                underline</a></p>
                        <p><a href="javascript:void(0);" class="text-decoration-underline link-underline-danger">Danger
                                underline</a></p>
                        <p><a href="javascript:void(0);"
                                class="text-decoration-underline link-underline-warning">Warning
                                underline</a></p>
                        <p><a href="javascript:void(0);" class="text-decoration-underline link-underline-info">Info
                                underline</a></p>
                        <p><a href="javascript:void(0);" class="text-decoration-underline link-underline-light">Light
                                underline</a></p>
                        <p class="mb-0"><a href="javascript:void(0);"
                                class="text-decoration-underline link-underline-dark">Dark underline</a></p>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Underline Opacity" isCollapsable>
                        <p class="text-muted">Change the underline’s opacity. Requires adding
                            <code>.link-underline</code> first.
                        </p>
                        <p><a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0"
                                href="javascript:void(0);">Underline opacity 0</a></p>
                        <p><a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10"
                                href="javascript:void(0);">Underline opacity 10</a></p>
                        <p><a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25"
                                href="javascript:void(0);">Underline opacity 25</a></p>
                        <p><a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50"
                                href="javascript:void(0);">Underline opacity 50</a></p>
                        <p><a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75"
                                href="javascript:void(0);">Underline opacity 75</a></p>
                        <p class="mb-0"><a
                                class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100"
                                href="javascript:void(0);">Underline opacity 100</a></p>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Underline Offset" isCollapsable>
                        <p class="text-muted">Change the underline’s offset. Requires adding
                            <code>.link-underline</code> first.
                        </p>
                        <p><a href="javascript:void(0);">Default link</a></p>
                        <p><a class="text-decoration-underline link-offset-1" href="javascript:void(0);">Offset 1
                                link</a></p>
                        <p><a class="text-decoration-underline link-offset-2" href="javascript:void(0);">Offset 2
                                link</a></p>
                        <p class="mb-0"><a class="text-decoration-underline link-offset-3"
                                href="javascript:void(0);">Offset
                                3 link</a></p>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Hover Variants" isCollapsable>
                        <p class="text-muted">
                            Just like the <code>.link-opacity-*-hover</code> utilities, <code>.link-offset</code> and
                            <code>.link-underline-opacity</code> utilities include <code>:hover</code> variants by
                            default. Mix and match to create unique link styles.
                        </p>
                        <a class="link-offset-2 link-offset-3-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                            href="javascript:void(0);">
                            Underline opacity 0
                        </a>
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
import { RouterLink } from 'vue-router';

usePageMeta('Links')
</script>