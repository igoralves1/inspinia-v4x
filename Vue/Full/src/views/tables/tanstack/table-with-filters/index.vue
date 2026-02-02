<template>
    <MainLayout>
        <div class="container-fluid">
            <PageBreadcrumb title="Table With Filters" />
            <UICard title="Table With Filters" body-class="p-0">
                <div class="card-header justify-content-between d-flex flex-wrap gap-2 align-items-center">
                    <div class="app-search">
                        <input v-model="globalFilter" type="search" class="form-control"
                            placeholder="Search company name..." />
                        <Icon  icon="lucide:search" class="app-search-icon text-muted" />
                    </div>

                    <div class="d-flex align-items-center gap-2">

                        <span class="me-2 fw-semibold text-nowrap">Filter By:</span>

                        <div class="app-search">
                            <select v-model="statusFilter" class="form-select form-control my-1 my-md-0">
                                <option value="All">Status</option>
                                <option value="Bearish">Bearish</option>
                                <option value="Bullish">Bullish</option>
                            </select>
                            <Icon icon="lucide:tag" class="app-search-icon text-muted" />
                        </div>

                        <div class="app-search ">
                            <select v-model="priceRangeFilter" class="form-select form-control my-1 my-md-0">
                                <option value="All">Price Range</option>
                                <option value="0-500">$0 - $500</option>
                                <option value="551-1500">$500 - $1500</option>
                                <option value="1501-3000">$1500 - $3000</option>
                                <option value="3000+">$3000+</option>
                            </select>
                            <Icon icon="lucide:dollar-sign" class="app-search-icon text-muted" />
                        </div>
                        <div>
                            <BFormSelect v-model="perPage" :options="perPageOptions"
                                class="form-control my-1 my-md-0" />
                        </div>
                    </div>
                </div>

                <TanstackTable :table="table" class-name="my-custom-table" :delete-item="deleteRow" />
                <BCardFooter class="border-0">
                    <TablePagination v-model:currentPage="currentPage" :per-page="perPage" :total-items="totalRows"
                        label="companies" />
                </BCardFooter>
            </UICard>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed, h, watch } from 'vue'
import {
    useVueTable,
    createColumnHelper,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
} from '@tanstack/vue-table'

import UICard from '@/components/UICard.vue'
import TanstackTable from '@/components/TanstackTable.vue'
import { tableData as tablesData, type CompanyType } from '../data'
import TablePagination from '@/components/TablePagination.vue'
import { BCardFooter } from 'bootstrap-vue-next'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { Icon } from '@iconify/vue'

const tableData = ref<CompanyType[]>(tablesData)
const rowSelection = ref({})

const perPageOptions = [5, 8, 10, 20, 50]

const columnHelper = createColumnHelper<CompanyType>()


const columns = [
    columnHelper.display({
        id: 'select',
        header: ({ table }) =>
            h('input', {
                type: 'checkbox',
                class: 'form-check-input form-check-input-light fs-14',
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler(),
            }),
        cell: ({ row }) =>
            h('input', {
                type: 'checkbox',
                class: 'form-check-input form-check-input-light fs-14',
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                onChange: row.getToggleSelectedHandler(),
            }),
    }),
    columnHelper.accessor('id', { header: 'ID', }),
    columnHelper.accessor('company', { header: 'Company', }),
    columnHelper.accessor('symbol', { header: 'Symbol', }),
    columnHelper.accessor('price', {
        header: 'Price', filterFn: (row: any, columnId: any, filterValue: string | undefined) => {
            if (!filterValue || filterValue === 'All') return true

            const value = row.getValue(columnId)

            if (filterValue === '3000+') {
                return value > 3000
            }

            const [min, max] = filterValue.split('-').map(Number)
            return value >= min! && value <= max!
        },
    }),
    columnHelper.accessor('change', { header: 'Change', }),
    columnHelper.accessor('volume', { header: 'Volume', }),
    columnHelper.accessor('marketCap', { header: 'MarketCap', }),
    columnHelper.accessor('rating', { header: 'Rating', }),
    columnHelper.accessor('status', {
        header: 'Status', filterFn: (row: any, columnId: any, filterValue: CompanyType['status'] | undefined) => {
            if (!filterValue || filterValue === 'All') return true
            return row.getValue(columnId) === filterValue
        },
    }),
]

const globalFilter = ref('')

const statusFilter = ref('All')
const priceRangeFilter = ref('All')

// Watchers to apply filters to table
watch(statusFilter, (val: string) => {
    table.getColumn('status')?.setFilterValue(val || undefined)
})

watch(priceRangeFilter, (val: string) => {
    table.getColumn('price')?.setFilterValue(val || undefined)
})
const table = useVueTable({
    data: computed(() => tableData.value),
    columns,
    state: {
        get globalFilter() {
            return globalFilter.value
        },
        get rowSelection() {
            return rowSelection.value
        },
    },
    enableRowSelection: true,
    onRowSelectionChange: (updater: any) => {
        rowSelection.value = typeof updater === 'function' ? updater(rowSelection.value) : updater
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
})


const currentPage = computed({
    get: () => table.getState().pagination.pageIndex + 1,
    set: (val: number) => {
        table.setPageIndex(val - 1)
    },
})

const perPage = computed({
    get: () => table.getState().pagination.pageSize,
    set: (val: number) => {
        table.setPageSize(val)
    },
})

perPage.value = 8

const totalRows = computed(() => table.getFilteredRowModel().rows.length)
function deleteRow(id: number) {
    tableData.value = tableData.value.filter((c: CompanyType) => c.id !== id)
}

usePageMeta('Tanstack Table with Filters')
</script>
