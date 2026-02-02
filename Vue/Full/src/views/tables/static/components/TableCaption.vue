
<template>
  <BCard no-body>
    <BCardHeader class="d-flex justify-content-between align-items-center">
      <h5 class="mb-0">Captions</h5>
      <RouterLink
        to="https://getbootstrap.com/docs/5.3/content/tables/#captions"
        target="_blank"
        class="icon-link icon-link-hover link-secondary link-underline-secondar link-underline-opacity-25 fw-semibold"
      >
        View Docs
        <Icon icon="tabler:arrow-right" class="bi align-middle fs-lg" />
      </RouterLink>
    </BCardHeader>

    <BCardBody>
      <p class="text-muted">
        A <code>&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers
        to find a table and understand what it’s about and decide if they want to read it.
      </p>

      <div class="table-responsive">
        <BTableSimple responsive hover class="align-middle mb-0">
          <caption>List of Ecommerce Products</caption>

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
              <td class="text-center">
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
      </div>
    </BCardBody>
  </BCard>
</template>

<script setup lang="ts">
import { currency } from '@/helpers';
import { productsTable } from '../data';
import { BTableSimple } from 'bootstrap-vue-next';
import { Icon } from '@iconify/vue';

</script>