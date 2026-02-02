<template>
    <MainLayout>
        <div class="container-fluid">
            <PageBreadcrumb title="Table With Search" />

            <UICard title="Table With Search" body-class="p-0">
                <div class="card-header justify-content-between d-flex flex-wrap gap-2 align-items-center">
                    <div class="app-search">
                        <input v-model="globalFilter" type="search" class="form-control"
                            placeholder="Search company name..." />
                        <Icon  icon="lucide:search" class="app-search-icon text-muted" />
                    </div>

                    <div class="d-flex align-items-center gap-2">

                        <div>
                            <BFormSelect v-model="perPage" :options="perPageOptions"
                                class="form-control my-1 my-md-0" />
                        </div>
                    </div>
                </div>

                <TanstackTable :table="table" class-name="my-custom-table" />
                <BCardFooter class="border-0">
                    <TablePagination v-model:currentPage="currentPage" :per-page="perPage" :total-items="totalRows"
                        label="companies" />
                </BCardFooter>
            </UICard>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed, h } from 'vue'
import {
    useVueTable,
    createColumnHelper,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
} from '@tanstack/vue-table'

import UICard from '@/components/UICard.vue'
import TanstackTable from '@/components/TanstackTable.vue'
import { tableData as tablesData, type CompanyType } from '../data'
import TablePagination from '@/components/TablePagination.vue'
import { BCardFooter } from 'bootstrap-vue-next'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { Icon } from '@iconify/vue'
import { usePageMeta } from '@/composables/usePageMeta'
import MainLayout from '@/layouts/MainLayout.vue'

const tableData = ref<CompanyType[]>(tablesData)
const rowSelection = ref({})

const perPageOptions = [5, 8, 10, 20, 50]

const columnHelper = createColumnHelper<CompanyType>()


const columns = [
    columnHelper.accessor('id', { header: 'ID', enableSorting: false }),
    columnHelper.accessor('company', { header: 'Company', enableSorting: false }),
    columnHelper.accessor('symbol', { header: 'Symbol', enableSorting: false }),
    columnHelper.accessor('price', { header: 'Price', enableSorting: false }),
    columnHelper.accessor('change', { header: 'Change', enableSorting: false }),
    columnHelper.accessor('volume', { header: 'Volume', enableSorting: false }),
    columnHelper.accessor('marketCap', { header: 'MarketCap', enableSorting: false }),
    columnHelper.accessor('rating', { header: 'Rating', enableSorting: false }),
    columnHelper.accessor('status', { header: 'Status', enableSorting: false }),
]

const globalFilter = ref('')

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
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
})

// We now control pagination directly via table methods
const perPage = computed({
    get: () => table.getState().pagination.pageSize,
    set: (value: number) => {
        table.setPageSize(Number(value))
    },
})

perPage.value = 8

const currentPage = computed({
    get: () => table.getState().pagination.pageIndex + 1,
    set: (val: number) => {
        table.setPageIndex(val - 1)
    },
})


const totalRows = computed(() => table.getFilteredRowModel().rows.length)

usePageMeta('Tanstack Table with Search')
</script>
