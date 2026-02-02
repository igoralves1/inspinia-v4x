import { Button, Card, CardFooter, CardHeader, Col, Container, FormControl, Row } from 'react-bootstrap'
import { useState } from 'react'
import { LuCircleCheck, LuGlobe, LuSearch } from 'react-icons/lu'
import { TbCopy, TbEdit, TbEye, TbPlus, TbTrash } from 'react-icons/tb'

import {
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

import PageBreadcrumb from '@/components/PageBreadcrumb'
import DataTable from '@/components/table/DataTable'
import DeleteConfirmationModal from '@/components/table/DeleteConfirmationModal'
import TablePagination from '@/components/table/TablePagination'

import { toPascalCase } from '@/helpers/casing'
import { useCopyToClipboard } from 'usehooks-ts'
import { apiClients, type ApiClientType, apiStatistics } from './data'
import StatisticWidget from '@/views/other-apps/api-keys/components/StatisticWidget.tsx'

const columnHelper = createColumnHelper<ApiClientType>()

const Page = () => {
  const [_copiedText, copy] = useCopyToClipboard()

  const columns = [
    {
      id: 'select',
      header: ({ table }: { table: TableType<ApiClientType> }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }: { row: TableRow<ApiClientType> }) => (
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
    columnHelper.accessor('name', { header: 'Name' }),
    columnHelper.accessor('author', {
      header: 'Created By',
      cell: ({ row }) => (
        <div className="d-flex justify-content-start align-items-center gap-2">
          <div className="avatar avatar-xs">
            <img src={row.original.image} height={24} width={24} alt="" className="img-fluid rounded-circle" />
          </div>
          <div>
            <h5 data-sort="name" className="text-nowrap fs-sm mb-0 lh-base">
              {row.original.author}
            </h5>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('apiKey', {
      header: 'Api Key',
      cell: ({ row }) => (
        <div className="input-group">
          <FormControl size="sm" type="text" readOnly defaultValue={row.original.apiKey} />
          <Button size="sm" variant="light" className="btn-icon" type="button" onClick={() => copy(row.original.apiKey)}>
            <TbCopy className="fs-lg" />
          </Button>
        </div>
      ),
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      filterFn: 'equalsString',
      enableColumnFilter: true,
      cell: ({ row }) => (
        <span
          className={`badge ${row.original.status === 'active' ? 'bg-success-subtle text-success' : row.original.status === 'pending' ? 'bg-warning-subtle text-warning' : 'bg-danger-subtle text-danger'} badge-label`}>
          {toPascalCase(row.original.status)}
        </span>
      ),
    }),
    columnHelper.accessor('createdAt', {
      header: 'Created At',
    }),
    columnHelper.accessor('expiresAt', {
      header: 'Expires At',
    }),
    columnHelper.accessor('region', {
      header: 'Region',
      filterFn: 'equalsString',
      enableColumnFilter: true,
      cell: ({ row }) => (
        <span className="badge p-1 text-bg-light fs-sm">
          <img src={row.original.regionFlag} height={12} width={12} alt="" className="rounded-circle me-1" /> {row.original.region}
        </span>
      ),
    }),
    {
      header: 'Actions',
      cell: ({ row }: { row: TableRow<ApiClientType> }) => (
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

  const [data, setData] = useState<ApiClientType[]>(() => [...apiClients])
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
    <Container fluid>
      <PageBreadcrumb title="API Keys" subtitle="Apps" />

      <Row className="g-3">
        {apiStatistics.map((item, idx) => (
          <Col md={6} lg={3} key={idx}>
            <StatisticWidget item={item} />
          </Col>
        ))}
      </Row>

      <Row>
        <Col cols={12}>
          <Card>
            <CardHeader className="border-light justify-content-between">
              <div className="d-flex gap-2">
                <div className="app-search">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search API clients..."
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

                <Button className="btn-purple rounded-circle btn-icon">
                  <TbPlus className="fs-lg" />
                </Button>
              </div>

              <div className="d-flex align-items-center gap-2">
                <span className="me-2 fw-semibold">Filter By:</span>

                <div className="app-search">
                  <select
                    className="form-select form-control my-1 my-md-0"
                    value={(table.getColumn('status')?.getFilterValue() as string) ?? 'All'}
                    onChange={(e) => table.getColumn('status')?.setFilterValue(e.target.value === 'All' ? undefined : e.target.value)}>
                    <option value="All">Status</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="revoked">Revoked</option>
                    <option value="suspended">Suspended</option>
                    <option value="expired">Expired</option>
                  </select>
                  <LuCircleCheck className="app-search-icon text-muted" />
                </div>

                <div className="app-search">
                  <select
                    className="form-select form-control my-1 my-md-0"
                    value={(table.getColumn('region')?.getFilterValue() as string) ?? 'All'}
                    onChange={(e) => table.getColumn('region')?.setFilterValue(e.target.value === 'All' ? undefined : e.target.value)}>
                    <option value="All">Region</option>
                    <option value="US">USA</option>
                    <option value="UK">UK</option>
                    <option value="IN">India</option>
                    <option value="DE">Germany</option>
                    <option value="AU">Australia</option>
                  </select>
                  <LuGlobe className="app-search-icon text-muted" />
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
            </CardHeader>

            <DataTable<ApiClientType> table={table} emptyMessage="No records found" />

            {table.getRowModel().rows.length > 0 && (
              <CardFooter className="border-0">
                <TablePagination
                  totalItems={totalItems}
                  start={start}
                  end={end}
                  itemsName="apies"
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
              itemName="apies"
            />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
