<template>
    <BCard no-body>
        <BCardHeader class="d-flex justify-content-between align-items-center">
            <BCardTitle>Variants of Table</BCardTitle>
            <RouterLink to="https://getbootstrap.com/docs/5.3/content/tables/#variants" target="_blank"
                class="icon-link icon-link-hover link-secondary link-underline-secondary link-underline-opacity-25 fw-semibold">
                View Docs
                <Icon icon="tabler:arrow-right" class="align-middle fs-lg ms-1" />
            </RouterLink>
        </BCardHeader>

        <BCardBody>
            <p class="text-muted">Use contextual classes to color tables, table rows or individual cells.</p>

            <BTableSimple responsive class="align-middle mb-0">
                <thead class="bg-light align-middle bg-opacity-25 thead-sm">
                    <tr class="text-uppercase fs-xxs">
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Rating</th>
                        <th>Status</th>
                        <th style="width: 1%">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="table-primary">
                        <td>Bluetooth Speaker</td>
                        <td>Audio</td>
                        <td>$49.00</td>
                        <td>200</td>
                        <td>4.6 ★</td>
                        <td><span class="badge badge-label badge-soft-success">Active</span></td>
                        <td class="text-center">
                            <BDropdown variant="link" class="text-muted" auto-close="outside" toggle-class="drop-arrow-none">
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

                    <tr>
                        <td>Leather Wallet</td>
                        <td>Accessories</td>
                        <td>$29.99</td>
                        <td>150</td>
                        <td class="table-warning">4.3 ★</td>
                        <td><span class="badge badge-label badge-soft-success">Active</span></td>
                        <td class="text-center">
                            <BDropdown variant="link" class="text-muted" auto-close="outside" toggle-class="drop-arrow-none">
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

                    <tr>
                        <td>Fitness Tracker</td>
                        <td>Wearables</td>
                        <td class="table-info">$89.00</td>
                        <td>60</td>
                        <td>4.1 ★</td>
                        <td><span class="badge badge-label badge-soft-warning">Limited Stock</span></td>
                        <td class="text-center table-light">
                            <BDropdown variant="link" class="text-muted" auto-close="outside" toggle-class="drop-arrow-none">
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

                    <tr>
                        <td>4K Monitor</td>
                        <td>Electronics</td>
                        <td>$349.00</td>
                        <td class="table-danger">30</td>
                        <td>4.8 ★</td>
                        <td><span class="badge badge-label badge-soft-success">Active</span></td>
                        <td class="text-center">
                            <BDropdown variant="link" class="text-muted" auto-close="outside" toggle-class="drop-arrow-none">
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

                    <tr>
                        <td class="table-dark">Standing Desk</td>
                        <td>Furniture</td>
                        <td>$499.00</td>
                        <td>10</td>
                        <td>4.4 ★</td>
                        <td><span class="badge badge-label badge-soft-info">New</span></td>
                        <td class="text-center">
                            <BDropdown variant="link" class="text-muted" auto-close="outside" toggle-class="drop-arrow-none">
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
import { Icon } from '@iconify/vue';
import { BTableSimple } from 'bootstrap-vue-next';


</script>