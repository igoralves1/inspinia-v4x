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
import { LuCalendar, LuCreditCard, LuPlus, LuSearch, LuTruck } from 'react-icons/lu'
import { TbEdit, TbEye, TbPointFilled, TbTrash } from 'react-icons/tb'

import DataTable from '@/components/table/DataTable'
import DeleteConfirmationModal from '@/components/table/DeleteConfirmationModal'
import TablePagination from '@/components/table/TablePagination'
import { currency } from '@/helpers'
import { toPascalCase } from '@/helpers/casing'
import { orders, type OrderType } from '../data'

const columnHelper = createColumnHelper<OrderType>()

const dateRangeFilterFn: FilterFn<any> = (row, columnId, selectedRange) => {
  if (!selectedRange || selectedRange === 'All') return true

  const text = row.getValue<string>(columnId)
  if (!text) return false

  const cellDate = new Date(text)
  if (isNaN(cellDate.getTime())) return false

  const now = new Date()
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
  let rangeStart, rangeEnd

  switch (selectedRange) {
    case 'Today':
      return cellDate >= startOfToday && cellDate < endOfToday
    case 'Last 7 Days':
      rangeStart = new Date(now)
      rangeStart.setDate(now.getDate() - 7)
      rangeEnd = endOfToday
      return cellDate >= rangeStart && cellDate < rangeEnd
    case 'Last 30 Days':
      rangeStart = new Date(now)
      rangeStart.setDate(now.getDate() - 30)
      rangeEnd = endOfToday
      return cellDate >= rangeStart && cellDate < rangeEnd
    case 'This Year':
      rangeStart = new Date(now.getFullYear(), 0, 1)
      rangeEnd = new Date(now.getFullYear() + 1, 0, 1)
      return cellDate >= rangeStart && cellDate < rangeEnd
    default:
      return true
  }
}

const OrdersList = () => {
  const columns = [
    {
      id: 'select',
      header: ({ table }: { table: TableType<OrderType> }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }: { row: TableRow<OrderType> }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      enableSorting: false,
      enableColumnFilter: false,
    },
    columnHelper.accessor('id', {
      header: 'Order ID',
      cell: ({ row }) => (
        <h5 className="fs-sm mb-0 fw-medium">
          <Link to="" className="link-reset">
            #{row.original.id}
          </Link>
        </h5>
      ),
    }),
    columnHelper.accessor('date', {
      header: 'Date',
      filterFn: dateRangeFilterFn,
      enableColumnFilter: true,
      cell: ({ row }) => (
        <>
          {row.original.date} <small className="text-muted">{row.original.time}</small>
        </>
      ),
    }),
    columnHelper.accessor('customer', {
      header: 'Customer',
      cell: ({ row }) => (
        <div className="d-flex justify-content-start align-items-center gap-2">
          <div className="avatar avatar-sm">
            <img src={row.original.customer.avatar} alt="" height={32} width={32} className="img-fluid rounded-circle" />
          </div>
          <div>
            <h5 className="text-nowrap fs-base mb-0 lh-base">{row.original.customer.name}</h5>
            <p className="text-muted fs-xs mb-0">{row.original.customer.email}</p>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('amount', {
      header: 'Amount',
      cell: ({ row }) => (
        <>
          {currency}
          {row.original.amount}
        </>
      ),
    }),
    columnHelper.accessor('paymentStatus', {
      header: 'Payment Status',
      filterFn: 'equalsString',
      enableColumnFilter: true,
      cell: ({ row }) => (
        <span
          className={`fw-semibold text-${row.original.paymentStatus === 'paid' ? 'success' : row.original.paymentStatus === 'pending' ? 'warning' : 'danger'}`}>
          <TbPointFilled className="fs-sm" /> {toPascalCase(row.original.paymentStatus)}
        </span>
      ),
    }),
    columnHelper.accessor('orderStatus', {
      header: 'Order Status',
      filterFn: 'equalsString',
      enableColumnFilter: true,
      cell: ({ row }) => (
        <span
          className={`badge fs-xxs badge-soft-${row.original.orderStatus === 'cancelled' ? 'danger' : row.original.orderStatus === 'processing' ? 'warning' : 'success'}`}>
          {toPascalCase(row.original.orderStatus)}
        </span>
      ),
    }),
    columnHelper.accessor('paymentMethod', {
      header: 'Payment Method',
      cell: ({ row }) => (
        <>
          <img src={row.original.paymentMethod.image} alt="" className="me-2" height={28} width={28} />{' '}
          {row.original.paymentMethod.type === 'card'
            ? row.original.paymentMethod.cardNumber
            : row.original.paymentMethod.type === 'upi'
              ? row.original.paymentMethod.upiId
              : row.original.paymentMethod.email}
        </>
      ),
    }),
    {
      header: 'Actions',
      cell: ({ row }: { row: TableRow<OrderType> }) => (
        <div className="d-flex  gap-1">
          <Button variant="light" size="sm" className="btn-icon rounded-circle">
            <TbEye className="fs-lg" />
          </Button>
          <Button variant="light" size="sm" className="btn-icon rounded-circle">
            <TbEdit className="fs-lg" />
          </Button>
          <Button
            variant="light"
            size="sm"
            className="btn-icon rounded-circle"
            onClick={() => {
              toggleDeleteModal()
              setSelectedRowIds({ [row.id]: true })
            }}>
            <TbTrash className="fs-lg" />
          </Button>
        </div>
      ),
    },
  ]

  const [data, setData] = useState<OrderType[]>(() => [...orders])
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
      dateRange: dateRangeFilterFn,
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
              placeholder="Search order..."
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
              value={(table.getColumn('paymentStatus')?.getFilterValue() as string) ?? 'All'}
              onChange={(e) => table.getColumn('paymentStatus')?.setFilterValue(e.target.value === 'All' ? undefined : e.target.value)}>
              <option value="All">Payment Status</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
              <option value="refunded">Refunded</option>
            </select>
            <LuCreditCard className="app-search-icon text-muted" />
          </div>

          <div className="app-search">
            <select
              className="form-select form-control my-1 my-md-0"
              value={(table.getColumn('orderStatus')?.getFilterValue() as string) ?? 'All'}
              onChange={(e) => table.getColumn('orderStatus')?.setFilterValue(e.target.value === 'All' ? undefined : e.target.value)}>
              <option value="All">Delivery Status</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <LuTruck className="app-search-icon text-muted" />
          </div>

          <div className="app-search">
            <select
              className="form-select form-control my-1 my-md-0"
              value={(table.getColumn('date')?.getFilterValue() as string) ?? ''}
              onChange={(e) => table.getColumn('date')?.setFilterValue(e.target.value || undefined)}>
              <option value="All">Date Range</option>
              <option value="Today">Today</option>
              <option value="Last 7 Days">Last 7 Days</option>
              <option value="Last 30 Days">Last 30 Days</option>
              <option value="This Year">This Year</option>
            </select>
            <LuCalendar className="app-search-icon text-muted" />
          </div>

          <div>
            <select
              className="form-select form-control my-1 my-md-0"
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}>
              {[5, 8, 10, 15, 20].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="d-flex gap-1">
          <Button variant="danger" className="ms-1">
            <LuPlus className="fs-sm me-2" /> Add Order
          </Button>
        </div>
      </CardHeader>

      <DataTable<OrderType> table={table} emptyMessage="No records found" />

      {table.getRowModel().rows.length > 0 && (
        <CardFooter className="border-0">
          <TablePagination
            totalItems={totalItems}
            start={start}
            end={end}
            itemsName="orders"
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
        itemName="orders"
      />
    </Card>
  )
}

export default OrdersList
