<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Faq" subtitle="Pages" />

            <BRow class="justify-content-center">
                <BCol xxl="9">
                    <BRow class="justify-content-center my-4">
                        <BCol lg="5" md="8">
                            <div class="text-center">
                                <h3 class="fw-bold mb-4">Frequently Asked Questions</h3>

                                <div class="app-search mb-3 position-relative">
                                    <BFormInput type="text" class="py-2 rounded-pill"
                                        placeholder="Search Questions..." />
                                    <Icon icon="lucide:search" class="app-search-icon text-muted" />
                                </div>

                                <div class="d-flex justify-content-center align-items-center gap-1">
                                    <h5 class="text-muted mb-0">Popular Searches : </h5>
                                    <RouterLink to="#"
                                        class="badge bg-primary-subtle text-primary rounded-pill px-2 py-1 fs-6">Apps
                                    </RouterLink>
                                    <RouterLink to="#"
                                        class="badge bg-primary-subtle text-primary rounded-pill px-2 py-1 fs-6">
                                        Developers
                                    </RouterLink>
                                    <RouterLink to="#"
                                        class="badge bg-primary-subtle text-primary rounded-pill px-2 py-1 fs-6">Repair
                                    </RouterLink>
                                    <RouterLink to="#"
                                        class="badge bg-primary-subtle text-primary rounded-pill px-2 py-1 fs-6">Billing
                                    </RouterLink>
                                </div>
                            </div>
                        </BCol>
                    </BRow>

                    <BRow>
                        <BCol xl="6">
                            <BCard no-body>
                                <BCardHeader class="d-block">
                                    <BCardTitle as="h4" class="mb-1">General</BCardTitle>
                                    <p class="text-muted mb-0">Here are some common questions about our templates.</p>
                                </BCardHeader>
                                <BCardBody>
                                    <BAccordion class="accordion-bordered">
                                        <BAccordionItem v-for="(faq, idx) in generalFaqs" :key="idx" class="border-0"
                                            button-class="shadow-none bg-light bg-opacity-50" :title="faq.question">
                                            {{ faq.answer }}
                                        </BAccordionItem>
                                    </BAccordion>
                                </BCardBody>
                            </BCard>
                        </BCol>

                        <BCol xl="6">
                            <BCard no-body>
                                <BCardHeader class="d-block">
                                    <BCardTitle as="h4" class="mb-1">Payments</BCardTitle>
                                    <p class="text-muted mb-0">Here are some common questions related to billing and
                                        payment.</p>
                                </BCardHeader>
                                <BCardBody>
                                    <BAccordion class="accordion-bordered">
                                        <BAccordionItem v-for="(faq, idx) in paymentFaqs" :key="idx" class="border-0"
                                            button-class="shadow-none bg-light bg-opacity-50" :title="faq.question">
                                            {{ faq.answer }}
                                        </BAccordionItem>
                                    </BAccordion>
                                </BCardBody>
                            </BCard>
                        </BCol>
                    </BRow>

                    <BRow>
                        <BCol xl="6">
                            <BCard no-body>
                                <BCardHeader class="d-block">
                                    <BCardTitle as="h4" class="mb-1">Refunds</BCardTitle>
                                    <p class="text-muted mb-0">Find answers related to our refund policy and conditions.
                                    </p>
                                </BCardHeader>
                                <BCardBody>
                                    <BAccordion class="accordion-bordered">
                                        <BAccordionItem v-for="(faq, idx) in refundFaqs" :key="idx" class="border-0"
                                            button-class="shadow-none bg-light bg-opacity-50" :title="faq.question">
                                            {{ faq.answer }}
                                        </BAccordionItem>
                                    </BAccordion>
                                </BCardBody>
                            </BCard>
                        </BCol>

                        <BCol xl="6">
                            <BCard no-body>
                                <BCardHeader class="d-block">
                                    <BCardTitle as="h4" class="mb-1">Customization</BCardTitle>
                                    <p class="text-muted mb-0">Questions about custom development and template
                                        modifications.</p>
                                </BCardHeader>
                                <BCardBody>
                                    <BAccordion class="accordion-bordered">
                                        <BAccordionItem v-for="(faq, idx) in customizationFaqs" :key="idx"
                                            class="border-0" button-class="shadow-none bg-light bg-opacity-50"
                                            :title="faq.question">
                                            {{ faq.answer }}
                                        </BAccordionItem>
                                    </BAccordion>
                                </BCardBody>
                            </BCard>
                        </BCol>
                    </BRow>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import {
    BAccordion,
    BAccordionItem,
    BCard,
    BCardBody,
    BCardHeader,
    BCardTitle,
    BCol,
    BContainer,
    BFormInput,
    BRow,
} from 'bootstrap-vue-next'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import { customizationFaqs, generalFaqs, paymentFaqs, refundFaqs } from './data';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import { Icon } from '@iconify/vue';

usePageMeta('Faq')
</script>