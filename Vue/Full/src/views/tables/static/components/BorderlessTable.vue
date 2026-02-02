<template>
    <BCard no-body>
        <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Borderless Table</BCardTitle>
            <RouterLink to="https://react-bootstrap.netlify.app/docs/components/table#example" target="_blank"
                class="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold">
                View Docs
                <Icon icon="tabler:arrow-right" class="bi align-middle fs-lg" />
            </RouterLink>
        </BCardHeader>

        <BCardBody>
            <BTableSimple responsive borderless class="align-middle mb-0">
                <thead class="align-middle thead-sm">
                    <tr class="text-uppercase fs-xxs">
                        <th v-for="(header, idx) in productsTable.header" :key="idx"
                            :style="header === 'Actions' ? { width: '1%' } : { width: 'auto' }">
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
                            <span :class="[
                                'badge',
                                'badge-label',
                                `badge-soft-${product.status === 'Active' ? 'success' : 'warning'}`
                            ]">
                                {{ product.status }}
                            </span>
                        </td>

                        <td class="text-center">
                            <BDropdown variant="link" toggle-class="drop-arrow-none fs-xxl link-reset p-0 text-muted"
                                end>
                                <template #button-content>
                                    <Icon icon="tabler:dots-vertical" />
                                </template>
                                <BDropdownItem>
                                    <Icon icon="tabler:eye" class="me-1" /> View
                                </BDropdownItem>
                                <BDropdownItem>
                                    <Icon icon="tabler:edit" class="me-1" /> Edit
                                </BDropdownItem>
                                <BDropdownItem to="#" class="text-danger">
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
import { currency } from '@/helpers';
import { productsTable } from '../data';
import { BTableSimple } from 'bootstrap-vue-next';
import { Icon } from '@iconify/vue';


</script>
