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
  useReactTable,
} from '@tanstack/react-table'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { LuSearch } from 'react-icons/lu'
import { TbEdit, TbEye, TbTrash } from 'react-icons/tb'

import { products, type ProductType } from '@/app/(admin)/tables/tanstack/data'
import ComponentCard from '@/components/cards/ComponentCard'
import Rating from '@/components/Rating'
import DataTable from '@/components/table/DataTable'
import { currency } from '@/helpers'
import { toPascalCase } from '@/helpers/casing'

const priceRangeFilterFn: FilterFn<any> = (row, columnId, value) => {
  const price = row.getValue<number>(columnId)
  if (!value) return true

  if (value === '500+') return price > 500

  const [min, max] = value.split('-').map(Number)
  return price >= min && price <= max
}

const columnHelper = createColumnHelper<ProductType>()

const TableWithSearch = () => {
  const columns = [
    columnHelper.accessor('name', {
      header: 'Product',
      cell: ({ row }) => (
        <div className="d-flex">
          <div className="avatar-md me-3">
            <Image src={row.original.image.src} alt="Product" height={36} width={36} className="img-fluid rounded" />
          </div>
          <div>
            <h5 className="mb-1">
              <Link href={row.original.url} className="link-reset">
                {row.original.name}
              </Link>
            </h5>
            <p className="text-muted mb-0 fs-xxs">by: {row.original.brand}</p>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('code', { header: 'Code' }),
    columnHelper.accessor('category', {
      header: 'Category',
      filterFn: 'equalsString',
      enableColumnFilter: true,
    }),
    columnHelper.accessor('stock', { header: 'Stock' }),
    columnHelper.accessor('price', {
      header: 'Price',
      filterFn: priceRangeFilterFn,
      enableColumnFilter: true,
      cell: ({ row }) => (
        <>
          {currency}
          {row.original.price}
        </>
      ),
    }),
    columnHelper.accessor('sold', { header: 'Sold' }),
    columnHelper.accessor('rating', {
      header: 'Rating',
      cell: ({ row }) => (
        <>
          <Rating rating={row.original.rating} />
          <span className="ms-1">
            <Link href="" className="link-reset fw-semibold">
              ({row.original.reviews})
            </Link>
          </span>
        </>
      ),
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      filterFn: 'equalsString',
      enableColumnFilter: true,
      cell: ({ row }) => (
        <span
          className={`badge ${row.original.status === 'published' ? 'badge-soft-success' : row.original.status === 'pending' ? 'badge-soft-warning' : 'badge-soft-danger'} fs-xxs`}>
          {toPascalCase(row.original.status)}
        </span>
      ),
    }),
    columnHelper.accessor('date', {
      header: 'Date',
      cell: ({ row }) => (
        <>
          {row.original.date} <small className="text-muted">{row.original.time}</small>
        </>
      ),
    }),
    {
      header: 'Actions',
      cell: () => (
        <div className="d-flex  gap-1">
          <Button variant="light" size="sm" className="btn-icon rounded-circle">
            <TbEye className="fs-lg" />
          </Button>
          <Button variant="light" size="sm" className="btn-icon rounded-circle">
            <TbEdit className="fs-lg" />
          </Button>
          <Button variant="light" size="sm" className="btn-icon rounded-circle">
            <TbTrash className="fs-lg" />
          </Button>
        </div>
      ),
    },
  ]

  const [data] = useState<ProductType[]>(() => [...products])
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 })

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter, columnFilters, pagination },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
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

  return (
    <Row>
      <Col sm={12}>
        <ComponentCard title="Custom Table with Search" bodyClassName="p-0">
          <div className="card-header border-light justify-content-between">
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
            </div>
          </div>

          <DataTable<ProductType> table={table} emptyMessage="No records found" />
        </ComponentCard>
      </Col>
    </Row>
  )
}

export default TableWithSearch
