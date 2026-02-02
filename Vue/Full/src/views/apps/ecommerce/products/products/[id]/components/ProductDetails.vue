<template>
    <div class="d-flex align-items-center justify-content-between">
        <div>
            <span class="badge bg-success-subtle text-success px-2 py-1 fs-base rounded-pill">In
                Stock</span>
        </div>
        <div class="flex-grow-1 d-inline-flex align-items-center justify-content-end fs-lg">
            <Icon icon="tabler:star-filled" class="text-warning"/>
            <Icon icon="tabler:star-filled" class="text-warning"/>
            <Icon icon="tabler:star-filled" class="text-warning"/>
            <Icon icon="tabler:star-filled" class="text-warning"/>
            <Icon icon="tabler:star-filled" class="text-warning"/>
            <span class="ms-1 fs-base"><RouterLink to="/reviews" class="link-reset fw-medium">(859 Reviews)</RouterLink>
            </span>
        </div>
    </div>
    <div class="mt-3 mb-5">
        <h4 class="fs-xl">Monterey Velvet Blue Luxury Relaxation Single
            Seater Sofa</h4>
    </div>

    <BRow class="mb-4">
        <BCol md="4" xl="3">
            <h6 class="mb-1 text-muted text-uppercase">SKU:</h6>
            <p class="fw-medium mb-0">SOFA-10058</p>
        </BCol>
        <BCol md="4" xl="3">
            <h6 class="mb-1 text-muted text-uppercase">Category:</h6>
            <p class="fw-medium mb-0">Furniture</p>
        </BCol>
        <BCol md="4" xl="3">
            <h6 class="mb-1 text-muted text-uppercase">Stock:</h6>
            <p class="fw-medium mb-0">128</p>
        </BCol>
        <BCol md="4" xl="3">
            <h6 class="mb-1 text-muted text-uppercase">Published:</h6>
            <p class="fw-medium mb-0">28 Apr, 2025 <small class="text-muted">10:15
                    AM</small></p>
        </BCol>
    </BRow>

    <BRow class="mb-4">
        <BCol md="4" xl="3">
            <h6 class="mb-1 text-muted text-uppercase">Orders:</h6>
            <p class="fw-medium mb-0">5028</p>
        </BCol>
        <BCol md="4" xl="3">
            <h6 class="mb-1 text-muted text-uppercase">Revenue:</h6>
            <p class="fw-medium mb-0">$20,886.25</p>
        </BCol>
    </BRow>

    <h3 class="text-muted d-flex align-items-center gap-2 mb-4">
        <small class="text-decoration-line-through">$899.00</small>
        <span class="fw-bold text-danger">$764.15</span>
        <small>(22%)</small>
    </h3>

    <h5 class="text-uppercase text-muted fs-xs mb-2">Product Info:</h5>

    <p>Relax in style with the Azure Comfort Single Sofa. Crafted with premium
        materials and a rich blue fabric, this single-seater is designed for both
        luxury and durability. Its sleek, modern profile fits perfectly in living
        rooms, reading nooks, or stylish lounges.</p>
    <p>Experience superior comfort with its deep cushioning and supportive backrest.
        The finely tailored upholstery and sturdy wood frame ensure long-lasting
        beauty and relaxation for years to come.</p>

    <h6 class="mt-3 fs-base">Details :</h6>
    <ul class="d-flex flex-column gap-1 mb-3">
        <li>
            Solid Mahogany frame from certified sustainable sources.
        </li>
        <li>
            Upholstered in premium blue fabric.
        </li>
        <li>
            Available with matte or polished wood finishes.
        </li>
        <li>
            High-density foam seat and back for exceptional comfort.
        </li>
    </ul>

    <RouterLink to="" class="link-primary fw-semibold">Read More...</RouterLink>

</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { BCol, BRow } from 'bootstrap-vue-next';


</script>

<style scoped></style>