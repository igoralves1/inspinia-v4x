<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Sales Reports" subTitle="Ecommerce" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BCard no-body>
                        <BCardHeader class="border-light justify-content-between">
                            <h5 class="card-title mb-0">Products - 2025</h5>
                            <div class="d-flex align-items-center gap-2">
                                <div class="app-search">
                                    <input v-model="searchQuery" type="search" class="form-control"
                                        placeholder="Search reports...">
                                    <Icon  icon="lucide:search" class="app-search-icon text-muted" />
                                </div>

                                <div class="app-search">
                                    <flatPickr v-model="date" :options="config" type="text" style="min-width: 250px;"
                                        class="form-control" />
                                    <Icon  icon="lucide:calendar" class="app-search-icon text-muted" />
                                </div>

                                <button type="submit" class="btn btn-secondary">
                                    <Icon icon="tabler:download" class="me-2" />
                                    Export Report
                                </button>
                            </div>
                        </BCardHeader>

                        <BCardBody>
                            <CustomApexChart :get-options="getSalesChartOptions"
                                :series="getSalesChartOptions().series" />
                        </BCardBody>

                        <BTable show-empty :filter="searchQuery" empty-text="Nothing found."
                            v-model:selected-rows="selected" thead-class="bg-light align-middle bg-opacity-25 thead-sm"
                            hover :fields="fields" :items="sales" :per-page="perPage" :current-page="currentPage"
                            @filtered="onFiltered" responsive
                            class="table table-custom table-nowrap table-centered mb-0 w-100">
                            <template #head()="data">
                                <span class="text-uppercase fs-xxs">{{ data.label }}</span>
                            </template>
                            <template #head(id)>
                                <input class="form-check-input form-check-input-light fs-14 mt-0" type="checkbox"
                                    id="select-all-products" value="option" :checked="allSelected"
                                    :indeterminate="isIndeterminate" @change="toggleSelectAll" />
                            </template>
                            <template #head(action)>
                                <span class="text-uppercase d-flex justify-content-center fs-xxs">Actions</span>
                            </template>
                            <template #cell(id)="data">
                                <input class="form-check-input form-check-input-light fs-14 product-item-check mt-0"
                                    type="checkbox" :value="data.item" :checked="selected.includes(data.item)"
                                    @change="onToggleRow(data.item, $event)" />
                            </template>

                        </BTable>
                        <BCardFooter class="border-0">
                            <TablePagination v-model:currentPage="currentPage" :per-page="perPage"
                                :total-items="totalRows" label="categories" />
                        </BCardFooter>
                    </BCard>
                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardFooter, BCardHeader, BCol, BContainer, BRow, BTable, type TableFieldRaw } from 'bootstrap-vue-next';
import CustomApexChart from '@/components/CustomApexChart.vue';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import { getSalesChartOptions, salesData, type SalesDataType } from './data';
import TablePagination from '@/components/TablePagination.vue';
import { ref } from 'vue';
import { usePageMeta } from '@/composables/usePageMeta';
import { useTableActions } from '@/composables/useTableActions';
import { Icon } from '@iconify/vue';
import { getCurrentMonthRange } from '@/helpers/generators';
import MainLayout from '@/layouts/MainLayout.vue';
import flatPickr from 'vue-flatpickr-component'

const date = ref<string | Date | null>('')

const config = ref({
    dateFormat: 'd M, Y',
    mode: 'range',
    defaultDate: getCurrentMonthRange(),
})

const fields: Exclude<TableFieldRaw<SalesDataType>, string>[] = [
    { key: 'id', label: 'Id' },
    { key: 'date', label: 'Date', sortable: true },
    { key: 'orders', label: 'Orders', sortable: true },
    { key: 'refunds', label: 'Refunds', sortable: true },
    { key: 'averageRevenuePerOrder', label: 'Avr. Revenue per Order', sortable: true },
    { key: 'tax', label: 'Tax', sortable: true },
    { key: 'revenue', label: 'Revenue', sortable: true },
    { key: 'balance', label: 'Balance', sortable: true },
]

const searchQuery = ref('')

const currentPage = ref(1)
const perPage = ref(8)
const totalRows = ref(salesData.length)
const sales = ref<SalesDataType[]>(salesData)

function onFiltered(filteredItems: SalesDataType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}

const { selected, toggleSelectAll, onToggleRow, allSelected, isIndeterminate } = useTableActions(sales)

usePageMeta('Sales Reports')

</script>

<style scoped></style>