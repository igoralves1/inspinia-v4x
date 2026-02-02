<template>
  <UICard title="Recent Orders" body-class="p-0" footer-class="border-0">
    <template #card-header-actions>
      <div class="d-flex gap-2">
        <RouterLink to="#" class="btn btn-sm btn-soft-secondary">
          <Icon icon="tabler:plus" class="me-1" />
          Add Order
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
      :items="orders"
      :per-page="perPage"
      :current-page="currentPage"
      responsive
      thead-class="d-none"
      class="table table-centered table-custom table-nowrap mb-0"
    >
      <template #cell(iduserurl)="data">
        <div class="d-flex align-items-center">
          <img :src="data.item.user.image" alt="" class="avatar-sm rounded-circle me-2" />
          <div>
            <h5 class="fs-base my-1">
              <RouterLink :to="data.item.url" class="text-body">#{{ data.item.id }}</RouterLink>
            </h5>
            <span class="text-muted fs-xs">{{ data.item.user.name }}</span>
          </div>
        </div>
      </template>

      <template #cell(product)="data">
        <span class="text-muted fs-xs">Product</span>
        <h5 class="fs-base mt-1 fw-normal">{{ data.item.product }}</h5>
      </template>

      <template #cell(date)="data">
        <span class="text-muted fs-xs">Date</span>
        <h5 class="fs-base mt-1 fw-normal">{{ data.item.date }}</h5>
      </template>

      <template #cell(amount)="data">
        <span class="text-muted fs-xs">Amount</span>
        <h5 class="fs-base mt-1 fw-normal">{{ currency }}{{ data.item.amount }}</h5>
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

          <BDropdownItem>View Details</BDropdownItem>
          <BDropdownItem>Cancel Order</BDropdownItem>
        </BDropdown>
      </template>
    </BTable>

    <template #card-footer>
      <div class="align-items-center justify-content-between row text-center text-sm-start">
        <BCol class="col-sm">
          <span class="text-muted"
            >Showing <span class="fw-semibold">{{ start }}</span> to
            <span class="fw-semibold">{{ end }}</span> of
            <span class="fw-semibold">{{ totalItems }}</span> orders</span
          >
        </BCol>
        <BCol class="col-sm-auto mt-3 mt-sm-0">
          <BPagination
            v-model="currentPage"
            :total-rows="orders.length"
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
import { currency } from '@/helpers'
import { toTitleCase } from '@/helpers/casing'
import type { OrderType } from '@/views/dashboard/components/types'
import { orders as orderData } from '@/views/dashboard/components/data'
import UICard from '@/components/UICard.vue'
import { computed, ref } from 'vue'

const fields = [
  { key: 'iduserurl', label: 'Id' },
  { key: 'product', label: 'Product' },
  { key: 'date', label: 'Date' },
  { key: 'amount', label: 'Amount' },
  { key: 'statusvariant', label: 'Status' },
  { key: 'actions', label: 'Actions' },
]

const currentPage = ref(1)
const perPage = ref(5)

const orders = ref<OrderType[]>(orderData)

const totalItems = computed(() => orders.value.length)

const start = computed(() =>
  totalItems.value === 0 ? 0 : (currentPage.value - 1) * perPage.value + 1,
)

const end = computed(() => Math.min(currentPage.value * perPage.value, totalItems.value))
</script>
