<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Invoice Details" subtitle="Invoices" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BRow>
                        <BCol xl="9">
                            <BCard no-body>
                                <BCardBody class="px-4">
                                    <div
                                        class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                                        <div class="auth-brand mb-0">
                                            <RouterLink to="/" class="logo-dark">
                                                <img :src="logoDark" alt="dark logo" height="36" width="127.8" />
                                            </RouterLink>
                                            <RouterLink to="/" class="logo-light">
                                                <img :src="logoLight" alt="logo" height="36" width="127.8" />
                                            </RouterLink>
                                        </div>
                                        <div class="text-end">
                                            <span
                                                class="badge bg-warning-subtle text-warning mb-2 fs-xs px-2 py-1">Pending</span>
                                            <h4 class="fw-bold text-dark m-0">Invoice #INS-0120001</h4>
                                        </div>
                                    </div>

                                    <BRow>
                                        <BCol cols="4">
                                            <h6 class="text-uppercase text-muted mb-2">From</h6>
                                            <p class="mb-1 fw-semibold">Alina Thompson</p>
                                            <p class="text-muted mb-1">
                                                88 Crescent Ave,<br />
                                                Boston, MA - 02125
                                            </p>
                                            <p class="text-muted mb-0">Phone: 617-452-0099</p>

                                            <div class="mt-4">
                                                <h6 class="text-uppercase text-muted">Invoice Date</h6>
                                                <p class="mb-0 fw-medium">20 Apr 2025</p>
                                            </div>
                                        </BCol>

                                        <BCol cols="4">
                                            <h6 class="text-uppercase text-muted mb-2">To</h6>
                                            <p class="mb-1 fw-semibold">Daniel Moore</p>
                                            <p class="text-muted mb-1">
                                                790 Westwood Blvd,<br />
                                                Los Angeles, CA - 90024
                                            </p>
                                            <p class="text-muted mb-0">Phone: 310-555-1022</p>

                                            <div class="mt-4">
                                                <h6 class="text-uppercase text-muted">Due Date</h6>
                                                <p class="mb-0 fw-medium">05 May 2025</p>
                                            </div>
                                        </BCol>

                                        <BCol cols="4" class="text-end">
                                            <img :src="qrImg" alt="Barcode" class="img-fluid" height="80" width="80"
                                                style="max-height: 80px;" />
                                        </BCol>
                                    </BRow>

                                    <BTableSimple responsive bordered
                                        class="table-nowrap text-center align-middle mt-4">
                                        <thead class="bg-light align-middle bg-opacity-25 thead-sm">
                                            <tr class="text-uppercase fs-xxs">
                                                <th style="width: 50px;">#</th>
                                                <th class="text-start">Product Details</th>
                                                <th>Qty</th>
                                                <th>Unit Price</th>
                                                <th class="text-end">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>01</td>
                                                <td class="text-start">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <div>
                                                            <strong>Figma Design System</strong>
                                                            <div class="text-muted small">(Desktop & Mobile UI Kit)
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>1</td>
                                                <td>{{ currency }}350.00</td>
                                                <td class="text-end">{{ currency }}350.00</td>
                                            </tr>
                                            <tr>
                                                <td>02</td>
                                                <td class="text-start">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <div>
                                                            <strong>Node.js API Development</strong>
                                                            <div class="text-muted small">(User auth, dashboard APIs)
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>12</td>
                                                <td>{{ currency }}50.00</td>
                                                <td class="text-end">{{ currency }}600.00</td>
                                            </tr>
                                            <tr>
                                                <td>03</td>
                                                <td class="text-start">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <div>
                                                            <strong>Bootstrap UI Setup</strong>
                                                            <div class="text-muted small">(Homepage, blog layout)</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>1</td>
                                                <td>{{ currency }}220.00</td>
                                                <td class="text-end">{{ currency }}220.00</td>
                                            </tr>
                                            <tr>
                                                <td>04</td>
                                                <td class="text-start">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <div>
                                                            <strong>Firebase Setup</strong>
                                                            <div class="text-muted small">(Hosting & config)</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>1</td>
                                                <td>{{ currency }}100.00</td>
                                                <td class="text-end">{{ currency }}100.00</td>
                                            </tr>
                                        </tbody>
                                    </BTableSimple>

                                    <div class="d-flex justify-content-end">
                                        <BTableSimple class="table w-100 table-borderless text-end">
                                            <tbody>
                                                <tr>
                                                    <td class="fw-medium">Subtotal</td>
                                                    <td>{{ currency }}1,270.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="fw-medium">Shipping</td>
                                                    <td>Free</td>
                                                </tr>
                                                <tr>
                                                    <td class="fw-medium">Discount (5%)</td>
                                                    <td class="text-danger">- {{ currency }}63.50</td>
                                                </tr>
                                                <tr>
                                                    <td class="fw-medium">Tax (7%)</td>
                                                    <td>{{ currency }}84.42</td>
                                                </tr>
                                                <tr class="border-top pt-2 fs-5 fw-bold">
                                                    <td>Total</td>
                                                    <td>{{ currency }}1,290.92</td>
                                                </tr>
                                            </tbody>
                                        </BTableSimple>
                                    </div>

                                    <div class="mt-lg-4 mt-2 bg-light bg-opacity-50 rounded px-3 py-2">
                                        <p class="mb-0 text-muted">
                                            <strong>Note:</strong> Please make payment within 10 days. For any billing
                                            inquiries,
                                            contact
                                            <RouterLink to="mailto:billing@alinadesignco.com" class="fw-medium">
                                                billing@alinadesignco.com
                                            </RouterLink>.
                                        </p>
                                    </div>

                                    <div class="mt-4">
                                        <p class="fw-semibold mb-3">Thank you for your business!</p>
                                        <img :src="sign" alt="Company Logo" height="42" width="176.14" />
                                        <p class="text-muted fs-xxs fst-italic">Authorized Signature</p>
                                    </div>
                                </BCardBody>
                            </BCard>
                        </BCol>

                        <BCol xl="3" class="d-print-none">
                            <BCard no-body class="card-top-sticky">
                                <BCardBody>
                                    <div class="justify-content-center d-flex flex-column gap-2">
                                        <BButton variant="light">
                                            <Icon icon="tabler:pencil" class="me-1" /> Edit
                                        </BButton>

                                        <BButton variant="primary" @click="handlePrint">
                                            <Icon icon="tabler:printer" class="me-1" /> Print
                                        </BButton>

                                        <BButton variant="info">
                                            <Icon icon="tabler:download" class="me-1" /> Download
                                        </BButton>
                                        <BButton variant="danger">
                                            <Icon icon="tabler:send" class="me-1" /> Send
                                        </BButton>
                                    </div>
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

import logoDark from '@/assets/images/logo-black.png'
import logoLight from '@/assets/images/logo.png'
import sign from '@/assets/images/sign.png'
import qrImg from '@/assets/images/qr.png'
import { BButton, BCard, BCardBody, BCol, BRow, BTableSimple } from 'bootstrap-vue-next'
import { Icon } from '@iconify/vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { currency } from '@/helpers'
import MainLayout from '@/layouts/MainLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'


const handlePrint = () => {
    window.print()
}

usePageMeta('Invoice Detail')
</script>