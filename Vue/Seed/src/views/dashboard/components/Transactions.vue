<template>
  <UICard
    title="Transactions Worldwide"
    body-class="pt-2"
    is-collapsable
    is-reloadable
    is-closeable
  >
    <BRow class="align-items-center">
      <BCol xl="6">
        <BTable
          small
          hover
          :fields="fields"
          :items="transactions"
          :per-page="perPage"
          :current-page="currentPage"
          responsive
          thead-class="bg-light align-middle bg-opacity-25 thead-sm text-uppercase fs-xxs"
          class="table table-centered table-custom table-nowrap mb-0"
        >
          <template #cell(id)="data">
            <RouterLink to="#" class="link-reset fw-semibold">{{ data.item.id }}</RouterLink>
          </template>

          <template #cell(datetime)="data">
            {{ data.item.date }} <small class="text-muted">{{ data.item.time }}</small>
          </template>

          <template #cell(amount)="data">
            <span class="fw-semibold">{{ currency }}{{ data.item.amount }}</span>
          </template>

          <template #cell(statusvariant)="data">
            <span :class="`badge badge-soft-${data.item.variant} fs-xxs`">
              <Icon icon="tabler:circle-filled" /> {{ toTitleCase(data.item.status) }}
            </span>
          </template>

          <template #cell(cardImagepaymentMethodlastFour)="data">
            <img :src="data.item.cardImage" class="me-2" height="28" />
            xxxx {{ data.item.lastFour }}
          </template>
        </BTable>

        <div class="text-center mt-3">
          <RouterLink to="#" class="link-reset text-decoration-underline fw-semibold link-offset-3">
            View All Transactions
            <Icon icon="tabler:send-2" />
          </RouterLink>
        </div>
      </BCol>
      <BCol xl="6">
        <JsVectorMap
          id="world-map"
          :options="worldTransactionMapOptions"
          class="w-100 mt-4 mt-xl-0"
          :style="{ height: '297px' }"
        />
      </BCol>
    </BRow>
  </UICard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { currency } from '@/helpers'
import { toTitleCase } from '@/helpers/casing'
import type { TransactionsType } from '@/views/dashboard/components/types'
import {
  transactions as transactionsData,
  worldTransactionMapOptions,
} from '@/views/dashboard/components/data'
import JsVectorMap from '@/components/JsVectorMap.vue'
import { ref } from 'vue'

const fields = [
  { key: 'id', label: 'Tran. No.', thClass: 'text-muted' },
  { key: 'order', label: 'Order', thClass: 'text-muted' },
  { key: 'datetime', label: 'Date', thClass: 'text-muted' },
  { key: 'amount', label: 'Amount', thClass: 'text-muted' },
  { key: 'statusvariant', label: 'Status', thClass: 'text-muted' },
  { key: 'cardImagepaymentMethodlastFour', label: 'Payment Method', thClass: 'text-muted' },
]

const currentPage = ref(1)
const perPage = ref(5)

const transactions = ref<TransactionsType[]>(transactionsData)
</script>
