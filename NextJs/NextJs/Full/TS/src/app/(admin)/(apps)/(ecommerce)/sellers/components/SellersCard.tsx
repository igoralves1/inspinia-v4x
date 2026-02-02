'use client'
import {
  ColumnFiltersState,
  createColumnHelper,
  FilterFn,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  Row as TableRow,
  Table as TableType,
  useReactTable,
} from '@tanstack/react-table'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button, Card, CardFooter, CardHeader } from 'react-bootstrap'
import { LuDollarSign, LuSearch, LuShoppingCart, LuStar } from 'react-icons/lu'

import { getSellerReportChartOptions, sellers, SellerType } from '@/app/(admin)/(apps)/(ecommerce)/sellers/data'
import Rating from '@/components/Rating'
import ApexChartClient from '@/components/client-wrapper/ApexChartClient'
import DataTable from '@/components/table/DataTable'
import DeleteConfirmationModal from '@/components/table/DeleteConfirmationModal'
import TablePagination from '@/components/table/TablePagination'
import { currency } from '@/helpers'

const orderRangeFilterFn: FilterFn<any> = (row, columnId, value) => {
  const order = row.getValue<number>(columnId)
  if (!value) return true
  if (value === '0') return false
  if (value === '20000+') return order > 20000
  const [min, max] = value.split('-').map(Number)
  return order >= min && order <= max
}

const revenueFilterFn: FilterFn<any> = (row, columnId, value) => {
  const revenue = row.getValue<number>(columnId)
  if (!value) return true
  if (value === '0') return false
  if (value === '100k+') return revenue > 100
  if (value === '50k-100k') return revenue > 0 && revenue < 100
  const [min, max] = value.split('-').map(Number)
  return revenue >= min && revenue <= max
}

const ratingFilterFn: FilterFn<any> = (row, columnId, value) => {
  const rating = row.getValue<number>(columnId)
  if (!value) return true
  if (value === '0') return false
  if (value === '4-5') return rating >= 4
  if (value === '1-3') return rating >= 0 && rating < 4
  const [min, max] = value.split('-').map(Number)
  return rating >= min && rating <= max
}

const columnHelper = createColumnHelper<SellerType>()

const SellersCard = () => {
  const columns = [
    {
      id: 'select',
      header: ({ table }: { table: TableType<SellerType> }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14 mt-0"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }: { row: TableRow<SellerType> }) => (
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
      header: 'Seller',
      cell: ({ row }) => (
        <div className="d-flex align-items-center">
          <div className="avatar-md me-3">
            <Image src={row.original.image} alt="Product" className="img-fluid rounded" />
          </div>
          <div>
            <h5 className="mb-1">
              <Link href="/sellers/1" className="link-reset">
                {row.original.name}
              </Link>
            </h5>
            <p className="text-muted mb-0 fs-xxs">Since {row.original.sinceYear}</p>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('products', { header: 'Products' }),
    columnHelper.accessor('orders', { header: 'Orders', filterFn: orderRangeFilterFn }),

    columnHelper.accessor('rating', {
      header: 'Rating',
      filterFn: ratingFilterFn,
      cell: ({ row }) => (
        <>
          <Rating rating={row.original.rating} className={'d-inline-flex align-items-center gap-1'}/>
          <span className="ms-1">
            <Link href="" className="link-reset fw-semibold">
              ({row.original.rating})
            </Link>
          </span>
        </>
      ),
    }),
    columnHelper.accessor('location', {
      header: 'Location',
      cell: ({ row }) => (
        <span className="badge p-1 text-bg-light fs-sm">
          <Image src={row.original.flag} alt="flag" className="rounded-circle me-1" height={12} /> {row.original.location}
        </span>
      ),
    }),
    columnHelper.accessor('balance', {
      header: 'Balance',
      filterFn: revenueFilterFn,
      cell: ({ row }) => (
        <>
          {currency}
          {row.original.balance}k
        </>
      ),
    }),
    columnHelper.accessor('id', {
      header: 'Rank',
      cell: ({ row }) => (
        <>
          {row.original.id}
          {row.original.id === 1 ? 'st' : row.original.id === 2 ? 'nd' : row.original.id === 3 ? 'rd' : 'th'}
        </>
      ),
    }),
    columnHelper.accessor('chartType', {
      header: 'Report',
      cell: ({ row }) => (
        <ApexChartClient
          getOptions={() => getSellerReportChartOptions(row.original.chartType)}
          series={getSellerReportChartOptions(row.original.chartType).series}
          type={row.original.chartType}
          width={100}
          height={30}
        />
      ),
    }),
  ]

  const [data, setData] = useState<SellerType[]>(() => [...sellers])
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
      orderRange: orderRangeFilterFn,
      revenueRange: revenueFilterFn,
      ratingFilter: ratingFilterFn,
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
              value={globalFilter ?? ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
              type="search"
              className="form-control"
              placeholder="Search seller..."
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
              value={(table.getColumn('orders')?.getFilterValue() as string) ?? 'All'}
              onChange={(e) => table.getColumn('orders')?.setFilterValue(e.target.value === 'All' ? undefined : e.target.value)}
              className="form-select form-control my-1 my-md-0">
              <option value="All">Orders</option>
              <option value="20000+">Top Orders</option>
              <option value="0-20000">Low Orders</option>
              <option value={0}>No Orders</option>
            </select>
            <LuShoppingCart className="app-search-icon text-muted" />
          </div>
          <div className="app-search">
            <select
              value={(table.getColumn('balance')?.getFilterValue() as string) ?? 'All'}
              onChange={(e) => table.getColumn('balance')?.setFilterValue(e.target.value === 'All' ? undefined : e.target.value)}
              className="form-select form-control my-1 my-md-0">
              <option value="All">Revenue</option>
              <option value="100k+">Top Revenue</option>
              <option value="50k-100k">Low Revenue</option>
              <option value={0}>No Revenue</option>
            </select>
            <LuDollarSign className="app-search-icon text-muted" />
          </div>
          <div className="app-search">
            <select
              value={(table.getColumn('rating')?.getFilterValue() as string) ?? 'All'}
              onChange={(e) => table.getColumn('rating')?.setFilterValue(e.target.value === 'All' ? undefined : e.target.value)}
              className="form-select form-control my-1 my-md-0">
              <option value="All">Ratings</option>
              <option value="4-5">Top Rated</option>
              <option value="1-3">Low Rated</option>
              <option value={0}>No Ratings</option>
            </select>
            <LuStar className="app-search-icon text-muted" />
          </div>
          <div>
            <select data-table-set-rows-per-page className="form-select form-control my-1 my-md-0">
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <DataTable<SellerType> table={table} emptyMessage="No records found" />

      {table.getRowModel().rows.length > 0 && (
        <CardFooter className="border-0">
          <TablePagination
            totalItems={totalItems}
            start={start}
            end={end}
            itemsName="sellers"
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
        itemName="row"
      />
    </Card>
  )
}

export default SellersCard
