import DataTable from '@/components/table/DataTable'
import TablePagination from '@/components/table/TablePagination'
import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type Row as TableRow,
  type SortingState,
  type Table as TableType,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'
import { CardFooter } from 'react-bootstrap'
import { salesData, type SalesDataType } from '../data'

const columnHelper = createColumnHelper<SalesDataType>()

const SalesTable = () => {
  const [data, _setData] = useState<SalesDataType[]>(() => [...salesData])
  const [selectedRowIds, setSelectedRowIds] = useState<Record<string, boolean>>({})
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 8 })

  const columns = [
    {
      id: 'select',
      header: ({ table }: { table: TableType<SalesDataType> }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14 mt-0"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }: { row: TableRow<SalesDataType> }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14 mt-0"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      enableSorting: false,
      enableColumnFilter: false,
    },
    columnHelper.accessor('date', { header: 'Date' }),
    columnHelper.accessor('orders', { header: 'Orders' }),
    columnHelper.accessor('refunds', { header: 'Refunds' }),
    columnHelper.accessor('averageRevenuePerOrder', { header: 'Average Revenue per Order' }),
    columnHelper.accessor('tax', { header: 'Tax' }),
    columnHelper.accessor('revenue', { header: 'Revenue' }),
    columnHelper.accessor('balance', { header: 'Balance' }),
  ]

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter, pagination, rowSelection: selectedRowIds },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onRowSelectionChange: setSelectedRowIds,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true,
  })

  const pageIndex = table.getState().pagination.pageIndex
  const pageSize = table.getState().pagination.pageSize
  const totalItems = table.getFilteredRowModel().rows.length

  const start = pageIndex * pageSize + 1
  const end = Math.min(start + pageSize - 1, totalItems)

  return (
    <>
      <DataTable<SalesDataType> table={table} emptyMessage="No data found" />
      {table.getRowModel().rows.length > 0 && (
        <CardFooter className="border-0">
          <TablePagination
            totalItems={totalItems}
            start={start}
            end={end}
            itemsName="products"
            showInfo
            previousPage={table.previousPage}
            canPreviousPage={table.getCanPreviousPage()}
            pageCount={table.getPageCount()}
            pageIndex={table.getState().pagination.pageIndex}
            setPageIndex={table.setPageIndex}
            nextPage={table.nextPage}
            canNextPage={table.getCanNextPage()}
          />
        </CardFooter>
      )}
    </>
  )
}

export default SalesTable
