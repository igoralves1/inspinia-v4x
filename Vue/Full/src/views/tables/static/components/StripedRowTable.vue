<template>
  <BCard no-body>
    <BCardHeader class="d-flex justify-content-between align-items-center">
      <h5 class="mb-0">Striped Rows</h5>
      <RouterLink
        to="https://react-bootstrap.netlify.app/docs/components/table#striped-rows"
        target="_blank"
        class="icon-link icon-link-hover link-secondary link-underline-secondar link-underline-opacity-25 fw-semibold"
      >
        View Docs
        <Icon icon="tabler:arrow-right" class="bi align-middle fs-lg" />
      </RouterLink>
    </BCardHeader>

    <BCardBody>
      <BTableSimple responsive striped class="align-middle mb-0">
        <thead class="align-middle thead-sm">
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
                :class="`badge badge-label badge-soft-${product.status === 'Active' ? 'success' : 'warning'}`"
              >
                {{ product.status }}
              </span>
            </td>
            <td class="text-end">
              <BDropdown
                end
                variant="link"
                class="text-muted"
                toggle-class="drop-arrow-none fs-xxl link-reset p-0"
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
import { BTableSimple } from 'bootstrap-vue-next';
import { currency } from '@/helpers';
import { productsTable } from '../data';
import { Icon } from '@iconify/vue';


</script>
