<template>
    <BCard no-body>
        <BCardHeader class="d-flex justify-content-between align-items-center">
            <BCardTitle>Basic Table</BCardTitle>
            <a href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/components/table/" target="_blank"
                class="icon-link icon-link-hover link-secondary link-underline-secondary link-underline-opacity-25 fw-semibold">
                View Docs
                <Icon icon="tabler:arrow-right" class="bi align-middle fs-lg" />
            </a>
        </BCardHeader>

        <BCardBody>
            <BTableSimple responsive class="align-middle mb-0">
                <thead class="fs-xs">
                    <tr>
                        <th v-for="(header, idx) in productsTable.header" :key="idx">
                            {{ header }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, idx) in productsTable.data" :key="idx">
                        <td>{{ product.name }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ currency }}{{ product.price.toFixed(2) }}</td>
                        <td>{{ product.stock }}</td>
                        <td>{{ product.rating }} ★</td>
                        <td>
                            <span class="badge badge-label" :class="product.status === 'Active'
                                ? 'badge-soft-success'
                                : 'badge-soft-warning'">
                                {{ product.status }}
                            </span>
                        </td>
                        <td>
                            <BButton size="sm" variant="primary" class="me-1">
                                Edit
                            </BButton>
                            <BButton size="sm" variant="danger">
                                Delete
                            </BButton>
                        </td>
                    </tr>
                </tbody>
            </BTableSimple>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import {
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
    BButton,
    BTableSimple
} from 'bootstrap-vue-next'

import { productsTable } from '../data'
import { currency } from '@/helpers';
import { Icon } from '@iconify/vue';
</script>
