import {
  type ColumnFiltersState,
  createColumnHelper,
  type FilterFn,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type Row as TableRow,
  type SortingState,
  type Table as TableType,
  useReactTable,
} from '@tanstack/react-table'
import { Button, Card, CardFooter, CardHeader } from 'react-bootstrap'
import { Link } from 'react-router'
import { useState } from 'react'
import { LuBox, LuSearch } from 'react-icons/lu'

import Rating from '@/components/Rating'
import DataTable from '@/components/table/DataTable'
import DeleteConfirmationModal from '@/components/table/DeleteConfirmationModal'
import TablePagination from '@/components/table/TablePagination'
import { getReportsChartOptions, productsData, type ProductType } from '../data'
import CustomApexChart from '@/components/CustomApexChart.tsx'

const priceRangeFilterFn: FilterFn<any> = (row, columnId, value) => {
  const price = row.getValue<number>(columnId)
  if (!value) return true

  if (value === '500+') return price > 500

  const [min, max] = value.split('-').map(Number)
  return price >= min && price <= max
}

const columnHelper = createColumnHelper<ProductType>()

const ProductViews = () => {
  const columns = [
    {
      id: 'select',
      header: ({ table }: { table: TableType<ProductType> }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14 mt-0"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }: { row: TableRow<ProductType> }) => (
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
    columnHelper.accessor('name', {
      header: 'Product',
      cell: ({ row }) => (
        <div className="d-flex align-items-center">
          <div className="avatar-md me-3">
            <img src={row.original.image} alt={row.original.name} height={36} width={36} className="img-fluid rounded" />
          </div>
          <div>
            <h5 className="mb-1">
              <Link to="" className="link-reset">
                {row.original.name}
              </Link>
            </h5>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('sku', { header: 'SKU' }),
    columnHelper.accessor('price', {
      header: 'Price',
      filterFn: priceRangeFilterFn,
      enableColumnFilter: true,
    }),
    columnHelper.accessor('rating', {
      header: 'Rating',
      cell: ({ row }) => (
        <>
          <Rating rating={row.original.rating} />
          <span className="ms-1">
            <Link to="" className="link-reset fw-semibold">
              ({row.original.reviews})
            </Link>
          </span>
        </>
      ),
    }),
    columnHelper.accessor('views', { header: 'Views' }),
    columnHelper.accessor('orders', { header: 'Orders' }),
    columnHelper.accessor('conversion', {
      header: 'Conversion',
    }),
    columnHelper.accessor('chartType', {
      header: 'Report',
      cell: ({ row }) => (
        <CustomApexChart
          getOptions={() => getReportsChartOptions(row.original.chartType)}
          series={getReportsChartOptions(row.original.chartType).series}
          type={row.original.chartType}
          width={100}
          height={30}
        />
      ),
    }),
  ]

  const [data, setData] = useState<ProductType[]>(() => [...productsData])
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 8 })

  const [selectedRowIds, setSelectedRowIds] = useState<Record<string, boolean>>({})

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter, columnFilters, pagination, rowSelection: selectedRowIds },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    onRowSelectionChange: setSelectedRowIds,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: 'includesString',
    enableColumnFilters: true,
    enableRowSelection: true,
    filterFns: {
      priceRange: priceRangeFilterFn,
    },
  })

  const pageIndex = table.getState().pagination.pageIndex
  const pageSize = table.getState().pagination.pageSize
  const totalItems = table.getFilteredRowModel().rows.length
  const start = pageIndex * pageSize + 1
  const end = Math.min(start + pageSize - 1, totalItems)

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)

  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal)
  }

  const handleDelete = () => {
    const selectedIds = new Set(Object.keys(selectedRowIds))
    setData((old) => old.filter((_, idx) => !selectedIds.has(idx.toString())))
    setSelectedRowIds({})
    setPagination({ ...pagination, pageIndex: 0 })
    setShowDeleteModal(false)
  }

  return (
    <Card>
      <CardHeader className="border-light justify-content-between">
        <div className="d-flex gap-2">
          <div className="app-search">
            <input
              type="search"
              className="form-control"
              placeholder="Search product name..."
              value={globalFilter ?? ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
            <LuSearch className="app-search-icon text-muted" />
          </div>
          {Object.keys(selectedRowIds).length > 0 && (
            <Button variant="danger" size="sm" onClick={toggleDeleteModal}>
              Delete
            </Button>
          )}
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="me-2 fw-semibold">Filter By:</span>

          <div className="app-search">
            <select
              className="form-select form-control my-1 my-md-0"
              value={(table.getColumn('orders')?.getFilterValue() as string) ?? 'All'}
              onChange={(e) => table.getColumn('orders')?.setFilterValue(e.target.value === 'All' ? undefined : e.target.value)}>
              <option value="All">Sales Performance</option>
              <option value="published">Top Selling</option>
              <option value="pending">Low Selling</option>
              <option value="rejected">No Sales</option>
            </select>
            <LuBox className="app-search-icon text-muted" />
          </div>

          <div>
            <select
              className="form-select form-control my-1 my-md-0"
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}>
              {[5, 10, 15, 20].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardHeader>

      <DataTable<ProductType> table={table} emptyMessage="No records found" />

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

      <DeleteConfirmationModal
        show={showDeleteModal}
        onHide={toggleDeleteModal}
        onConfirm={handleDelete}
        selectedCount={Object.keys(selectedRowIds).length}
        itemName="report"
      />
    </Card>
  )
}

export default ProductViews
