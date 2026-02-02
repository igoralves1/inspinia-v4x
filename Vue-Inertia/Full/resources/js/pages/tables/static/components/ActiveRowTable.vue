<template>
    <BCard no-body>
        <BCardHeader class="d-flex justify-content-between align-items-center">
            <BCardTitle>Active Table</BCardTitle>
            <a href="https://getbootstrap.com/docs/5.3/content/tables/#active-tables" target="_blank"
                class="icon-link icon-link-hover link-secondary link-underline-secondary link-underline-opacity-25 fw-semibold">
                View Docs
                <Icon icon="tabler:arrow-right" class="bi align-middle fs-lg" />
            </a>
        </BCardHeader>

        <BCardBody>
            <p class="text-muted">
                Highlight a table row or cell by adding a
                <code>.table-active</code> class.
            </p>

            <BTableSimple responsive class="align-middle mb-0">
                <thead class="align-middle thead-sm">
                    <tr class="text-uppercase fs-xxs">
                        <th v-for="(header, idx) in productsTable.header" :key="idx"
                            :style="header === 'Actions' ? { width: '1%' } : { width: 'auto' }">
                            {{ header }}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(product, idx) in productsTable.data" :key="idx"
                        :class="idx === 0 ? 'table-active' : ''">
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
                        <td class="text-end">
                            <BDropdown end variant="link" toggle-class="drop-arrow-none fs-xxl link-reset p-0">
                                <template #button-content>
                                    <Icon icon="tabler:dots-vertical" />
                                </template>

                                <BDropdownItem href="#">
                                    <Icon icon="tabler:eye" class="me-1" /> View
                                </BDropdownItem>
                                <BDropdownItem href="#">
                                    <Icon icon="tabler:edit" class="me-1" /> Edit
                                </BDropdownItem>
                                <BDropdownItem href="#" class="text-danger">
                                    <Icon icon="tabler:trash" class="me-1" /> Delete
                                </BDropdownItem>
                            </BDropdown>
                        </td>
                    </tr>
                </tbody>
            </BTableSimple>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardHeader, BCardTitle, BCardBody, BDropdown, BDropdownItem, BTableSimple } from 'bootstrap-vue-next'
import { productsTable } from '../data';
import { currency } from '@/helpers';
import { Icon } from '@iconify/vue';

</script>
