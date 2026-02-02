<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Create Invoice" subTitle="Invoices" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BRow>
                        <BCol xl="9">
                            <BCard no-body>
                                <form>
                                    <BCardBody class="p-4">
                                        <div class="d-flex justify-content-between align-items-center mb-4">

                                            <div class="border rounded position-relative d-flex text-center align-items-center justify-content-between px-2"
                                                style="height: 60px; width: 260px;">
                                                <label for="invoiceLogo"
                                                    class="position-absolute top-0 start-0 end-0 bottom-0"></label>
                                                <input type="file" class="d-none" id="invoiceLogo" accept="image/*"
                                                    onchange="previewImage(event)">
                                                <img id="preview" :src="logoDark" alt="Company Logo" height="28" />
                                                <Icon icon="tabler:upload" class="fs-xxl text-muted" role="button" />
                                            </div>


                                            <div class="text-end">
                                                <BRow class="g-2 align-items-center">
                                                    <div class="col-auto">
                                                        <label for="invoiceNumber"
                                                            class="form-label fw-semibold">Invoice
                                                            #</label>
                                                        <input type="text" id="invoiceNumber" class="form-control"
                                                            placeholder="e.g. INV-0001">
                                                    </div>
                                                    <div class="col-auto">
                                                        <label for="currency"
                                                            class="form-label fw-semibold">Currency</label>
                                                        <select id="currency" class="form-select">
                                                            <option value="USD" selected>USD ($)</option>
                                                            <option value="EUR">EUR (€)</option>
                                                            <option value="GBP">GBP (£)</option>
                                                            <option value="INR">INR (₹)</option>
                                                            <option value="JPY">JPY (¥)</option>
                                                            <option value="AUD">AUD (A$)</option>
                                                            <option value="CAD">CAD (C$)</option>
                                                            <option value="CNY">CNY (¥)</option>
                                                        </select>
                                                    </div>
                                                </BRow>
                                            </div>
                                        </div>



                                        <BRow>
                                            <BCol md="4">
                                                <label for="invoiceDate" class="form-label">Invoice Date</label>
                                                <flatPickr modelValue="2023-01-01" class="form-control" />
                                            </BCol>
                                            <BCol md="4">
                                                <label for="dueDate" class="form-label">Due Date</label>
                                                <flatPickr modelValue="2023-01-01" class="form-control" />
                                            </BCol>
                                            <BCol md="4">
                                                <label for="paymentMethod" class="form-label">Payment Method</label>
                                                <select id="paymentMethod" class="form-select">
                                                    <option value="">Select</option>
                                                    <option>Credit / Debit Card</option>
                                                    <option>Bank Transfer</option>
                                                    <option>PayPal</option>
                                                    <option>UPI (GPay)</option>
                                                    <option>Cash</option>
                                                </select>
                                            </BCol>
                                        </BRow>


                                        <BRow class="mt-4">

                                            <BCol md="6">
                                                <label class="form-label">Billing Address</label>
                                                <BFormInput type="text" class="form-control mb-2" placeholder="Name" />
                                                <textarea rows="3" class="mb-2 form-control"
                                                    placeholder="Address"></textarea>
                                                <div class="input-group">
                                                    <select class="form-select" style="max-width: 120px;">
                                                        <option value="+1">+1 (US)</option>
                                                        <option value="+44" selected>+44 (UK)</option>
                                                        <option value="+91">+91 (IN)</option>
                                                        <option value="+61">+61 (AU)</option>
                                                        <option value="+971">+971 (UAE)</option>

                                                    </select>
                                                    <input type="text" class="form-control" placeholder="Phone Number">
                                                </div>
                                            </BCol>


                                            <BCol md="6">
                                                <label class="form-label">Shipping Address</label>
                                                <input type="text" class="form-control mb-2" placeholder="Name">
                                                <textarea rows="3" class="form-control mb-2"
                                                    placeholder="Address"></textarea>
                                                <div class="input-group">
                                                    <select class="form-select" style="max-width: 120px;">
                                                        <option value="+1">+1 (US)</option>
                                                        <option value="+44" selected>+44 (UK)</option>
                                                        <option value="+91">+91 (IN)</option>
                                                        <option value="+61">+61 (AU)</option>
                                                        <option value="+971">+971 (UAE)</option>

                                                    </select>
                                                    <input type="text" class="form-control" placeholder="Phone Number">
                                                </div>
                                            </BCol>
                                        </BRow>



                                        <div class="table-responsive mt-4">
                                            <table class="table table-bordered table-nowrap text-center align-middle">
                                                <thead class="bg-light align-middle bg-opacity-25 thead-sm">
                                                    <tr class="text-uppercase fs-xxs">
                                                        <th>#</th>
                                                        <th class="text-start">Item Description</th>
                                                        <th>Qty</th>
                                                        <th>Unit Price</th>
                                                        <th>Amount</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="invoice-items">
                                                    <tr>
                                                        <td>1</td>
                                                        <td><input type="text" class="form-control"
                                                                placeholder="Description"></td>
                                                        <td><input type="number" class="form-control" placeholder="1">
                                                        </td>
                                                        <td><input type="number" class="form-control"
                                                                placeholder="0.00">
                                                        </td>
                                                        <td><input type="number" class="form-control"
                                                                placeholder="0.00">
                                                        </td>
                                                        <td><button type="button"
                                                                class="btn btn-sm btn-danger">×</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <BButton variant="primary" type="button" class="mt-4">
                                                <Icon icon="tabler:plus" />
                                                Add Item
                                            </BButton>
                                        </div>


                                        <div class="row justify-content-end mt-4">
                                            <BCol md="4">
                                                <table class="table table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td class="text-end">Subtotal</td>
                                                            <td><input type="number" class="form-control" id="subtotal"
                                                                    placeholder="0.00"></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-end">Tax (%)</td>
                                                            <td><input type="number" class="form-control" id="tax"
                                                                    placeholder="0.00"></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-end">Discount</td>
                                                            <td><input type="number" class="form-control" id="discount"
                                                                    placeholder="0.00"></td>
                                                        </tr>
                                                        <tr class="fw-bold">
                                                            <td class="text-end">Total</td>
                                                            <td><input type="number" class="form-control" id="total"
                                                                    readonly placeholder="0.00"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </BCol>
                                        </div>


                                        <div class="mt-4">
                                            <label for="invoiceNote" class="form-label">Additional Notes</label>
                                            <textarea id="invoiceNote" class="form-control" rows="3"
                                                placeholder="e.g. Thank you for your business!"></textarea>
                                        </div>
                                    </BCardBody>

                                </form>
                            </BCard>
                        </BCol>

                        <BCol xl="3" class="d-print-none">
                            <BCard no-body class="card-top-sticky">
                                <BCardBody>
                                    <div class="justify-content-center d-flex flex-column gap-2">
                                        <BButton variant="light">
                                            <Icon icon="tabler:eye" class="me-1" />
                                            Preview
                                        </BButton>
                                        <BButton variant="light">
                                            <Icon icon="tabler:download" class="me-1" /> Download
                                        </BButton>
                                        <BButton variant="danger" class="btn btn-danger btn-lg">
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
import { BButton, BCard, BCardBody, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';
import flatPickr from 'vue-flatpickr-component'

import logoDark from '@/assets/images/logo-black.png'
usePageMeta('Add Invoice')
</script>

<style scoped></style>