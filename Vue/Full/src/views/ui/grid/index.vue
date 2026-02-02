<template>
    <MainLayout>
        <div class="container-fluid">
            <PageBreadcrumb subTitle="UI" title="Grids" />
        </div>

        <div class="container-xl">
            <BRow>
                <BCol xl="12">
                    <UICard title="Options">
                        <p class="text-muted mb-2">
                            Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks
                            to a
                            twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of
                            predefined classes.
                        </p>

                        <a class="btn btn-link p-0 fw-semibold"
                            href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/grid-system.html"
                            target="_blank">
                            Grid Options on Bootstrap
                            <Icon icon="tabler:chevron-right" class="ms-1" />
                        </a>
                    </UICard>
                </BCol>

                <BCol cols="12">
                    <UICard title="Grid Options">
                        <p class="text-muted">
                            See how aspects of the Bootstrap grid system work across multiple devices with a handy
                            table.
                        </p>

                        <div class="table-responsive">
                            <table class="table table-bordered table-striped mb-0">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th class="text-center">
                                            Extra small<br />
                                            <small>&lt;576px</small>
                                        </th>
                                        <th class="text-center">
                                            Small<br />
                                            <small>≥576px</small>
                                        </th>
                                        <th class="text-center">
                                            Medium<br />
                                            <small>≥768px</small>
                                        </th>
                                        <th class="text-center">
                                            Large<br />
                                            <small>≥992px</small>
                                        </th>
                                        <th class="text-center">
                                            Extra Large<br />
                                            <small>≥1200px</small>
                                        </th>
                                        <th class="text-center">
                                            Extra Large<br />
                                            <small>≥1400px</small>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th class="text-nowrap" scope="row">
                                            Container <code class="fw-normal">max-width</code>
                                        </th>
                                        <td>None (auto)</td>
                                        <td>540px</td>
                                        <td>720px</td>
                                        <td>960px</td>
                                        <td>1140px</td>
                                        <td>1320px</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Class prefix</th>
                                        <td><code>.col-</code></td>
                                        <td><code>.col-sm-</code></td>
                                        <td><code>.col-md-</code></td>
                                        <td><code>.col-lg-</code></td>
                                        <td><code>.col-xl-</code></td>
                                        <td><code>.col-xxl-</code></td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row"># of columns</th>
                                        <td colspan="6">12</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Gutter width</th>
                                        <td colspan="6">1.25rem (0.625rem on left and right)</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Custom gutters</th>
                                        <td colspan="6">Yes</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Nestable</th>
                                        <td colspan="6">Yes</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Column ordering</th>
                                        <td colspan="6">Yes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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

usePageMeta('Grid')
</script>