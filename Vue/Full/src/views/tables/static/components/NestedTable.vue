<template>
    <BCard no-body>
        <BCardHeader class="justify-content-between">
            <BCardTitle>Nesting</BCardTitle>
            <RouterLink to="https://getbootstrap.com/docs/5.3/content/tables/#nesting" target="_blank"
                class="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold">
                View Docs
                <Icon icon="tabler:arrow-right" class="bi align-middle fs-lg" />
            </RouterLink>
        </BCardHeader>

        <BCardBody>
            <p class="text-muted">
                Border styles, active styles, and table variants are not inherited by nested tables.
            </p>

            <BTableSimple responsive class="align-middle mb-0">
                <thead class="align-middle thead-sm">
                    <tr class="text-uppercase fs-xxs">
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Rating</th>
                        <th>Status</th>
                        <th style="width: 1%;">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bluetooth Speaker</td>
                        <td>Audio</td>
                        <td>$49.00</td>
                        <td>200</td>
                        <td>4.6 ★</td>
                        <td>
                            <span class="badge badge-label badge-soft-success">Active</span>
                        </td>
                        <td class="text-end">
                            <BDropdown end variant="link" class="text-muted" toggle-class="fs-xxl link-reset p-0  drop-arrow-none">
                                <template #button-content>
                                    <Icon icon='tabler:dots-vertical'  />
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

                    <tr>
                        <td colspan="7" class="p-3">
                            <table class="table table-sm mb-0">
                                <thead class="align-middle thead-sm">
                                    <tr class="text-uppercase fs-xxs">
                                        <th>Variant</th>
                                        <th>Color</th>
                                        <th>SKU</th>
                                        <th>Stock</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mini</td>
                                        <td>Black</td>
                                        <td>SPK-M-BLK</td>
                                        <td>80</td>
                                    </tr>
                                    <tr>
                                        <td>Standard</td>
                                        <td>Blue</td>
                                        <td>SPK-S-BLU</td>
                                        <td>120</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td>Leather Wallet</td>
                        <td>Accessories</td>
                        <td>$29.99</td>
                        <td>150</td>
                        <td>4.3 ★</td>
                        <td>
                            <span class="badge badge-label badge-soft-success">Active</span>
                        </td>
                        <td class="text-end">
                            <BDropdown end variant="link" class="text-muted" toggle-class="fs-xxl link-reset p-0  drop-arrow-none">
                                <template #button-content>
                                    <Icon icon='tabler:dots-vertical'  />
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

                    <tr>
                        <td>Fitness Tracker</td>
                        <td>Wearables</td>
                        <td>$89.00</td>
                        <td>60</td>
                        <td>4.1 ★</td>
                        <td>
                            <span class="badge badge-label badge-soft-warning">Limited Stock</span>
                        </td>
                        <td class="text-end">
                            <BDropdown end variant="link" class="text-muted" toggle-class="fs-xxl link-reset p-0  drop-arrow-none">
                                <template #button-content>
                                    <Icon icon='tabler:dots-vertical'  />
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
import { Icon } from '@iconify/vue';
import { BCard, BCardHeader, BCardTitle, BCardBody, BDropdown, BDropdownItem, BTableSimple } from 'bootstrap-vue-next'
</script>
