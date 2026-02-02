

<template>
  <BCard no-body>
    <BCardHeader class="d-flex justify-content-between align-items-center">
      <BCardTitle>Table Head</BCardTitle>
      <RouterLink
        to="https://getbootstrap.com/docs/5.3/content/tables/#table-head"
        target="_blank"
        class="icon-link icon-link-hover link-secondary link-underline-secondary link-underline-opacity-25 fw-semibold"
      >
        View Docs
        <Icon icon="tabler:arrow-right" class="align-middle fs-lg ms-1" />
      </RouterLink>
    </BCardHeader>

    <BCardBody>
      <p class="text-muted">
        Similar to tables and dark tables, use the modifier classes
        <code>.table-light</code> or <code>.table-dark</code> to make
        <code>&lt;thead&gt;</code>s appear light or dark gray.
      </p>

      <BTableSimple responsive hover class="table-custom align-middle mb-0">
        <thead class="align-middle table-dark">
          <tr class="text-uppercase fs-xxs">
            <th
              v-for="(header, idx) in productsTable.header"
              :key="idx"
              :style="header === 'Actions' ? { width: '1%' } : { width: 'auto' }"
            >
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
              <span
                class="badge badge-label"
                :class="`badge-soft-${product.status === 'Active' ? 'success' : 'warning'}`"
              >
                {{ product.status }}
              </span>
            </td>
            <td class="text-center">
              <BDropdown
                variant="link"
                class="text-muted"
                :toggle-class="['drop-arrow-none', 'fs-xxl', 'link-reset', 'p-0']"
                auto-close="outside"
              >
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
import { BDropdown, BTableSimple } from 'bootstrap-vue-next';
import { Icon } from '@iconify/vue';


</script>