<template>
    <BCard no-body class="card-top-sticky">
        <BCardBody class="pt-0">
            <article class="card card-out-of-container border-top-0">
                <div class="position-relative card-side-img overflow-hidden rounded-top"
                    style="height: 180px;"  :style="{ backgroundImage: `url(${sellerProfile})` }">
                    <div
                        class="p-4 card-img-overlay rounded-start-0 auth-overlay d-flex rounded-top align-items-center justify-content-center">

                    </div>
                </div>


                <BCardBody class="pt-0 position-relative" style="margin-top: -40px;">
                    <div
                        class="d-flex justify-content-between align-items-center rounded border-light p-3 bg-light-subtle border">
                        <div class="d-flex justify-content-start align-items-center gap-3">
                            <div class="avatar avatar-xxl">
                                <img :src="seller4" alt="avatar-2"
                                    class="img-fluid img-thumbnail rounded-circle" />
                            </div>
                            <div>
                                <h4 class="text-nowrap fw-bold mb-1"> TechTonic Store</h4>
                                <p class="text-muted mb-0">Since 2014</p>
                            </div>
                        </div>
                        <BDropdown placement="bottom-end" toggle-class="btn btn-icon btn-dark drop-arrow-none" class="d-flex gap-2">
                            <template #button-content>
                                <Icon icon="tabler:dots" class="fs-24" />
                            </template>
                            <li>
                                <BDropdownItem>Edit Profile</BDropdownItem>
                            </li>
                            <li>
                                <BDropdownItem class="text-danger">Report</BDropdownItem>
                            </li>
                        </BDropdown>
                    </div>
                </BCardBody>
            </article>

            <div class="">
                <div class="d-flex align-items-center gap-2 mb-2">
                    <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                        <Icon icon="tabler:user" class="fs-xl text-secondary"/>
                    </div>
                    <p class="mb-0 fs-sm">Owner: <span class="fw-semibold">Alex Johnson</span>
                    </p>
                </div>

                <div class="d-flex align-items-center gap-2 mb-2">
                    <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                        <Icon icon="tabler:briefcase" class="fs-xl text-secondary"/>
                    </div>
                    <p class="mb-0 fs-sm">Business Type: <span class="fw-semibold">E-commerce
                            Electronics</span>
                    </p>
                </div>

                <div class="d-flex align-items-center gap-2 mb-2">
                    <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                        <Icon icon="tabler:calendar-event" class="fs-xl text-secondary"/>
                    </div>
                    <p class="mb-0 fs-sm">Founded: <span class="fw-semibold">2010</span></p>
                </div>

                <div class="d-flex align-items-center gap-2 mb-2">
                    <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                        <Icon icon="tabler:map-pin" class="fs-xl text-secondary"/>
                    </div>
                    <p class="mb-0 fs-sm">Location: <span class="fw-semibold">New York, USA</span></p>
                </div>

                <div class="d-flex align-items-center gap-2 mb-2">
                    <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                        <Icon icon="tabler:mail" class="fs-xl text-secondary"/>
                    </div>
                    <p class="mb-0 fs-sm">Support: <a href="mailto:support@example.com"
                            class="text-primary fw-semibold">support@example.com</a>
                    </p>
                </div>

                <div class="d-flex align-items-center gap-2 mb-2">
                    <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                        <Icon icon="tabler:link" class="fs-xl text-secondary" />
                    </div>
                    <p class="mb-0 fs-sm">Website: <a href="https://www.example.com"
                            class="text-primary fw-semibold">www.example.com</a>
                    </p>
                </div>

            </div>

        </BCardBody>

        <BCardBody class="border-top border-dashed">
            <h5 class="mb-3">Contact Seller</h5>
            <form action="#">
                <div class="mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"
                        placeholder="Enter your messages..."></textarea>
                </div>
                <div class="text-end">
                    <button type="submit" class="btn btn-primary">Send Messages</button>
                </div>
            </form>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BDropdown } from 'bootstrap-vue-next';

import seller4 from '@/assets/images/sellers/4.png'
import sellerProfile from '@/assets/images/seller-profile.jpg'
import { Icon } from '@iconify/vue';
</script>

<style lang="scss" scoped></style>