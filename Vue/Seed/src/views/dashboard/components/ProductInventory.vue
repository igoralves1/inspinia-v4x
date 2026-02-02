<template>
  <UICard title="Product Inventory" body-class="p-0" footer-class="border-0">
    <template #card-header-actions>
      <div class="d-flex gap-2">
        <RouterLink to="#" class="btn btn-sm btn-soft-secondary">
          <Icon icon="tabler:plus" class="me-1" />
          Add Product
        </RouterLink>
        <RouterLink to="#" class="btn btn-sm btn-primary">
          <Icon icon="tabler:file-export" class="me-1" />
          Export CSV
        </RouterLink>
      </div>
    </template>

    <BTable
      small
      hover
      :fields="fields"
      :items="products"
      :per-page="perPage"
      :current-page="currentPage"
      responsive
      thead-class="d-none"
      class="table table-centered table-custom table-nowrap mb-0"
    >
      <template #cell(imagenamecategoryurl)="data">
        <div class="d-flex align-items-center">
          <img :src="data.item.image" alt="" class="avatar-sm rounded-circle me-2" />
          <div>
            <h5 class="fs-base my-1">
              <RouterLink :to="data.item.url" class="text-body">{{ data.item.name }}</RouterLink>
            </h5>
            <span class="text-muted fs-xs">{{ data.item.category }}</span>
          </div>
        </div>
      </template>

      <template #cell(stock)="data">
        <span class="text-muted fs-xs">Stock</span>
        <h5 class="fs-base mt-1 fw-normal">{{ data.item.stock }} units</h5>
      </template>

      <template #cell(price)="data">
        <span class="text-muted fs-xs">Price</span>
        <h5 class="fs-base mt-1 fw-normal">{{ currency }}{{ data.item.price }}</h5>
      </template>

      <template #cell(ratingsreviews)="data">
        <span class="text-muted fs-xs">Ratings</span>
        <h5 class="fs-base mt-1 fw-normal d-flex align-items-center">
          <Rating :rating="data.item.ratings" class="d-inline-flex justify-content-start" />
          <span class="ms-1">
            <RouterLink to="#" class="link-reset fw-semibold">
              ({{ data.item.reviews }})
            </RouterLink>
          </span>
        </h5>
      </template>

      <template #cell(statusvariant)="data">
        <span class="text-muted fs-xs">Status</span>
        <h5 class="fs-base mt-1 fw-normal">
          <Icon icon="tabler:circle-filled" :class="`fs-xs text-${data.item.variant}`" />
          {{ toTitleCase(data.item.status) }}
        </h5>
      </template>

      <template #cell(actions)>
        <BDropdown
          :variant="null"
          placement="bottom-end"
          no-caret
          toggle-class="text-muted card-drop border-0 p-0"
        >
          <template #button-content>
            <Icon icon="tabler:dots-vertical" class="fs-lg" />
          </template>

          <BDropdownItem>Edit Product</BDropdownItem>
          <BDropdownItem>Remove</BDropdownItem>
        </BDropdown>
      </template>
    </BTable>

    <template #card-footer>
      <div class="align-items-center justify-content-between row text-center text-sm-start">
        <BCol class="col-sm">
          <span class="text-muted"
            >Showing <span class="fw-semibold">{{ start }}</span> to
            <span class="fw-semibold">{{ end }}</span> of
            <span class="fw-semibold">{{ totalItems }}</span> products</span
          >
        </BCol>
        <BCol class="col-sm-auto mt-3 mt-sm-0">
          <BPagination
            v-model="currentPage"
            :total-rows="products.length"
            :per-page="perPage"
            align="end"
            first-number
            last-number
            class="m-0"
          >
            <template #prev-text>
              <Icon icon="tabler:chevron-left" />
            </template>
            <template #next-text>
              <Icon icon="tabler:chevron-right" />
            </template>
          </BPagination>
        </BCol>
      </div>
    </template>
  </UICard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { products as productsData } from '@/views/dashboard/components/data'
import { currency } from '@/helpers'
import { toTitleCase } from '@/helpers/casing'
import type { ProductType } from '@/views/dashboard/components/types'
import Rating from '@/components/Rating.vue'
import { computed, ref } from 'vue'
import UICard from '@/components/UICard.vue'

const fields = [
  { key: 'imagenamecategoryurl', label: 'Product' },
  { key: 'stock', label: 'Stock' },
  { key: 'price', label: 'Price' },
  { key: 'ratingsreviews', label: 'Ratings' },
  { key: 'statusvariant', label: 'Status' },
  { key: 'actions', label: 'Actions' },
]

const currentPage = ref(1)
const perPage = ref(5)

const products = ref<ProductType[]>(productsData)

const totalItems = computed(() => products.value.length)

const start = computed(() =>
  totalItems.value === 0 ? 0 : (currentPage.value - 1) * perPage.value + 1,
)

const end = computed(() => Math.min(currentPage.value * perPage.value, totalItems.value))
</script>
