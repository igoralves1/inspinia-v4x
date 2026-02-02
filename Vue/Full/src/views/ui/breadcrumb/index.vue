<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Breadcrumb" subTitle="UI" />
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
                                Indicate the current page’s location within a navigational hierarchy that automatically
                                adds
                                separators via CSS.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://getbootstrap.com/docs/5.3/components/breadcrumb/" target="_blank">
                                Breadcrumb on Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Basic" isCollapsable>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 py-2">
                                <li class="breadcrumb-item active" aria-current="page">Home</li>
                            </ol>
                        </nav>

                        <nav aria-label="breadcrumb ">
                            <ol class="breadcrumb mb-0 py-2 d-flex align-items-center gap-1">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <Icon icon="tabler:chevron-right" class="breadcrumb-arrow" />
                                <li class="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>

                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 py-2 d-flex align-items-center gap-1">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <Icon icon="tabler:chevron-right" class="breadcrumb-arrow" />

                                <li class="breadcrumb-item"><a href="#">Library</a></li>
                                <Icon icon="tabler:chevron-right" class="breadcrumb-arrow" />

                                <li class="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="With Icons" isCollapsable>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb bg-light bg-opacity-50 p-2 mb-2">
                                <li class="breadcrumb-item active" aria-current="page">
                                    <Icon icon="tabler:smart-home" class="me-1" />Home
                                </li>
                            </ol>
                        </nav>

                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb bg-light bg-opacity-50 p-2 mb-2">
                                <li class="breadcrumb-item">
                                    <RouterLink to="#">
                                        <Icon icon="tabler:smart-home" />
                                        Home
                                    </RouterLink>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>

                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb bg-light bg-opacity-50 p-2 mb-0">
                                <li class="breadcrumb-item">
                                    <RouterLink to="#">
                                        <Icon icon="tabler:smart-home" />
                                        Home
                                    </RouterLink>
                                </li>
                                <li class="breadcrumb-item">
                                    <RouterLink to="#">Library</RouterLink>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                    </UICard>
                </BCol>
            </BRow>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BCard, BCardBody, BCardHeader, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

usePageMeta('Breadcrumb')

</script>

<style scoped></style>