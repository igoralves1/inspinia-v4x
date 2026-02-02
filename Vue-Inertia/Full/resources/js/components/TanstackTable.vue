<template>
    <div :class="['table-responsive', className]">
        <table class="table table-hover table-custom table-centered table-select w-100 mb-0">
            <thead v-if="showHeaders" class="bg-light align-middle bg-opacity-25 thead-sm">
                <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id" class="text-uppercase fs-xxs">
                    <th v-for="header in headerGroup.headers" :key="header.id"
                        :style="{ cursor: header.column.getCanSort() ? 'pointer' : 'default', userSelect: 'none' }"
                        @click="header.column.getCanSort() ? header.column.toggleSorting() : null">
                        <div class="d-flex align-items-center">
                            <FlexRender :render="header.column.columnDef.header" :props="header.getContext()" />
                            <Icon v-if="header.column.getCanSort()" :icon="getSortIcon(header.column)" class="ms-1" />
                        </div>
                    </th>
                    <th v-if="props.deleteItem">Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr v-if="table.getRowModel().rows.length === 0">
                    <td :colspan="table.getAllColumns().length + (props.deleteItem ? 1 : 0)"
                        class="text-center py-3 text-muted">
                        {{ emptyMessage }}
                    </td>
                </tr>
                <tr v-for="row in table.getRowModel().rows" :key="row.id">
                    <td v-for="cell in row.getVisibleCells()" :key="cell.id">
                        <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                    </td>

                    <td v-if="props.deleteItem">
                        <div class="d-flex  gap-1">
                            <BButton variant="light" class="btn-icon btn-sm rounded-circle">
                                <Icon icon="tabler:eye" class="fs-lg" />
                            </BButton>
                            <BButton variant="light" class="btn-icon btn-sm rounded-circle">
                                <Icon icon="tabler:edit" class="fs-lg" />
                            </BButton>
                            <BButton variant="danger" class="btn-icon btn-sm rounded-circle" @click="props.deleteItem(row.original.id)">
                                <Icon icon="tabler:trash" class="fs-lg" />
                            </BButton>
                        </div>
         
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts" generic="T extends { id: number }">
import { computed } from 'vue'
import type { Table, Column } from '@tanstack/vue-table'
import { FlexRender, createColumnHelper } from '@tanstack/vue-table'
import { BButton } from 'bootstrap-vue-next';
import { Icon } from '@iconify/vue';

// Props interface
interface Props {
    table: Table<T>
    className?: string
    deleteItem?: (id: number) => void
    emptyMessage?: string
    showHeaders?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    className: '',
    emptyMessage: 'Nothing found.',
    showHeaders: true,
})

const columnHelper = createColumnHelper<T>()

// --- Helper Functions ---
function getSortIcon(column: Column<any>) {
    switch (column.getIsSorted()) {
        case 'asc':
            return 'tabler:arrow-up'
        case 'desc':
            return 'tabler:arrow-down'
        default:
            return 'tabler:arrows-sort'
    }
}
</script>
