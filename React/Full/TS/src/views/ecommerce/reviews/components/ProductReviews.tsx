import {
  type ColumnDef,
  type ColumnFiltersState,
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
import clsx from 'clsx'
import { Button, Card, CardFooter, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ProgressBar, Row } from 'react-bootstrap'
import { Link } from 'react-router'
import { useState } from 'react'
import { LuChevronDown, LuDownload, LuSearch } from 'react-icons/lu'
import { TbChevronDown, TbEdit, TbEye, TbStarFilled, TbTrash } from 'react-icons/tb'

import Rating from '@/components/Rating'
import DataTable from '@/components/table/DataTable'
import DeleteConfirmationModal from '@/components/table/DeleteConfirmationModal'
import TablePagination from '@/components/table/TablePagination'
import { toPascalCase } from '@/helpers/casing'

import ratingsImg from '@/assets/images/ratings.svg'
import { getReviewChartOptions, productReviews, type ProductReviewType, reviews } from '../data'
import CustomApexChart from '@/components/CustomApexChart.tsx'

const columnHelper = createColumnHelper<ProductReviewType>()

const ProductReviews = () => {
  const columns: ColumnDef<ProductReviewType, any>[] = [
    {
      id: 'select',
      maxSize: 45,
      size: 45,
      header: ({ table }: { table: TableType<ProductReviewType> }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }: { row: TableRow<ProductReviewType> }) => (
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
    columnHelper.accessor('productName', {
      header: 'Product',
      cell: ({ row }) => (
        <div className="d-flex align-items-center">
          <div className="avatar-lg me-3">
            <img src={row.original.image} alt="Product" className="img-fluid rounded" />
          </div>
          <div>
            <h5 className="mb-0">
              <Link to="/ecommerce/products/1" className="link-reset">
                {row.original.productName}
              </Link>
            </h5>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('name', {
      header: 'Reviewer',
      cell: ({ row }) => (
        <div className="d-flex justify-content-start align-items-center gap-2">
          <div className="avatar avatar-sm">
            <img src={row.original.avatar} alt="avatar-8" className="img-fluid rounded-circle" />
          </div>
          <div>
            <h5 className="text-nowrap fs-sm mb-0 lh-base">{row.original.name}</h5>
            <p className="text-muted fs-xs mb-0">{row.original.email}</p>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('rating', {
      header: 'Review',
      cell: ({ row }) => (
        <>
          <Rating rating={row.original.rating} className="fs-lg" />

          <h5 className="mt-2">{row.original.message}</h5>
          <p className="text-muted fst-italic mb-0">"{row.original.description}"</p>
        </>
      ),
      enableSorting: false,
    }),
    columnHelper.accessor('date', {
      header: 'Last Updated',
      cell: ({ row }) => (
        <>
          {row.original.date} <small className="text-muted">{row.original.time}</small>
        </>
      ),
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      filterFn: 'equalsString',
      enableColumnFilter: true,
      cell: ({ row }) => (
        <span className={`badge ${row.original.status === 'pending' ? 'badge-soft-warning' : 'badge-soft-success'} fs-xxs`}>
          {toPascalCase(row.original.status)}
        </span>
      ),
    }),

    {
      header: 'Actions',
      cell: ({ row }: { row: TableRow<ProductReviewType> }) => (
        <div className="d-flex justify-content-center gap-1">
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

  const [data, setData] = useState<ProductReviewType[]>(() => [...productReviews])
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 })

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

  const statusFilterValue = (table.getColumn('status')?.getFilterValue() as string) ?? 'All'
  const handleStatusChange = (value: string) => {
    table.getColumn('status')?.setFilterValue(value === 'All' ? undefined : value)
  }

  return (
    <Card>
      <CardHeader className="p-0 d-block">
        <Row className="g-0 align-items-center">
          <Col xl={6} className="border-end border-dashed">
            <Row className="align-items-center g-0">
              <Col xl={7}>
                <div className="d-flex align-items-center gap-4 p-4">
                  <img src={ratingsImg} alt="Product" height={80} />
                  <div>
                    <h3 className="text-primary d-flex align-items-center gap-2 mb-2 fw-bold">
                      4.92 <TbStarFilled />
                    </h3>
                    <p className="mb-2">Based on 245 verified reviews</p>
                    <p className="pe-2 h6 text-muted mb-2 lh-base">Feedback collected from real customers who purchased our templates</p>
                    <span className="badge badge-label text-bg-success">+12 new this week</span>
                  </div>
                </div>
              </Col>
              <Col xl={5}>
                <div className="p-3">
                  {reviews.map((review, idx) => {
                    return (
                      <div key={idx} className={clsx('d-flex align-items-center gap-2', { 'mb-2': idx != reviews.length - 1 })}>
                        <div className="flex-shrink-0" style={{ width: 50 }}>
                          {reviews.length - idx} Star
                        </div>
                        <ProgressBar now={review.progress} variant="primary" className="w-100" style={{ height: 8 }} />
                        <div className="flex-shrink-0 text-end" style={{ width: 30 }}>
                          <span className="badge text-bg-light">{review.count}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={6}>
            <div className="pe-3 ps-1">
              <CustomApexChart getOptions={getReviewChartOptions} series={getReviewChartOptions().series} type="area" height={185} />
            </div>
          </Col>
        </Row>
      </CardHeader>
      <CardHeader className="border-light d-flex align-items-center justify-content-between flex-wrap gap-2">
        <div className="d-flex gap-2">
          <div className="app-search">
            <input
              type="search"
              value={globalFilter ?? ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="form-control"
              placeholder="Search reviews..."
            />
            <LuSearch className="app-search-icon text-muted" />
          </div>
          {Object.keys(selectedRowIds).length > 0 && (
            <Button variant="danger" onClick={toggleDeleteModal}>
              Delete
            </Button>
          )}
        </div>
        <div className="d-flex align-items-center gap-2">
          <div>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
              className="form-select form-control my-1 my-md-0">
              {[5, 10, 15, 20].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <Dropdown>
            <DropdownToggle className="btn btn-default dropdown-toggle drop-arrow-none" type="button">
              <LuDownload className="me-1" /> Export <LuChevronDown className="align-middle ms-1" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem>Export as PDF</DropdownItem>
              <DropdownItem>Export as CSV</DropdownItem>
              <DropdownItem>Export as Excel</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <DropdownToggle className="btn btn-default  drop-arrow-none" type="button">
              {statusFilterValue === 'All' ? 'View All' : statusFilterValue} <TbChevronDown className="align-middle ms-1" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              {['All', 'Pending', 'Published', 'disabled'].map((option) => (
                <Dropdown.Item as="button" key={option} active={statusFilterValue === option} onClick={() => handleStatusChange(option)}>
                  {option}
                </Dropdown.Item>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </CardHeader>
      <DataTable<ProductReviewType> table={table} emptyMessage="No records found" />
      {table.getRowModel().rows.length > 0 && (
        <CardFooter className="border-0">
          <TablePagination
            totalItems={totalItems}
            start={start}
            end={end}
            itemsName="reviews"
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

export default ProductReviews
