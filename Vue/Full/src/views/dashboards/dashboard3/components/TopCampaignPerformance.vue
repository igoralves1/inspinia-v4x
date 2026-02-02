<template>
    <UICard title="Top Campaign Performance" body-class="p-0" footer-class="border-0" isCloseable isCollapsable
        isReloadable>

        <BTable thead-class="bg-light align-middle bg-opacity-25 thead-sm" hover :fields="fields" :items="products"
            :per-page="perPage" :current-page="currentPage" responsive
            class="table table-custom table-nowrap table-centered mb-0">
            <template #head()="data">
                <span class="text-muted text-uppercase fs-xxs">{{ data.label }}</span>
            </template>
            <template #cell(campaign)="data">
                <span class="d-flex align-items-center gap-1">
                    <Icon :icon="data.item.icon" :class="data.item.iconProps.className" /> {{ data.item.name }}
                </span>
            </template>
        </BTable>
        <template #card-footer>
            <div class="align-items-center justify-content-between row text-center text-sm-start">
                <BCol class="col-sm">
                    <span class="text-muted">Showing <span class="fw-semibold">{{ start }}</span> to <span
                            class="fw-semibold">{{ end }}</span> of <span class="fw-semibold">{{ totalItems }}</span>
                        entries</span>
                </BCol>
                <BCol class="col-sm-auto mt-3 mt-sm-0">
                    <BPagination v-model="currentPage" :total-rows="products.length" :per-page="perPage" align="end"
                        first-number last-number class="m-0 pagination-boxed">
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
import { BTable, } from 'bootstrap-vue-next';
import type { CampaignDataType } from './types';
import { campaignsData } from './data';
import { computed, ref } from 'vue';
import { Icon } from '@iconify/vue';

const fields = [
    { key: 'campaign', label: 'Campaign' },
    { key: 'visitors', label: 'Visitors', sortable: true },
    { key: 'newUsers', label: 'New Users', sortable: true },
    { key: 'sessions', label: 'Sessions', sortable: true },
    { key: 'bounceRate', label: 'Bounce Rate', sortable: true },
    { key: 'pagesPerVisit', label: 'Pages/Visit', sortable: true },
    { key: 'avgDuration', label: 'Avg. Duration', sortable: true },
    { key: 'leads', label: 'Leads', sortable: true },
    { key: 'revenue', label: 'Revenue', sortable: true },
    { key: 'conversion', label: 'Conversion', sortable: true },
]


const currentPage = ref(1)
const perPage = ref(5)

const products = ref<CampaignDataType[]>(campaignsData)

const totalItems = computed(() => products.value.length)

const start = computed(() =>
    totalItems.value === 0 ? 0 : (currentPage.value - 1) * perPage.value + 1
)

const end = computed(() =>
    Math.min(currentPage.value * perPage.value, totalItems.value)
)
</script>

<style scoped></style>