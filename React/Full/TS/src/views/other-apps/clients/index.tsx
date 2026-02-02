import PageBreadcrumb from '@/components/PageBreadcrumb'
import DataTable from '@/components/table/DataTable'
import DeleteConfirmationModal from '@/components/table/DeleteConfirmationModal'
import TablePagination from '@/components/table/TablePagination'
import { toPascalCase } from '@/helpers/casing'
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
import { Button, Card, CardFooter, CardHeader, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router'
import { useState } from 'react'
import { LuGlobe, LuLayoutTemplate, LuSearch } from 'react-icons/lu'
import { TbEdit, TbEye, TbPlus, TbTrash } from 'react-icons/tb'
import { clients, type ClientType } from './data'

const columnHelper = createColumnHelper<ClientType>()

const Page = () => {
  const columns = [
    {
      id: 'select',
      header: ({ table }: { table: TableType<ClientType> }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }: { row: TableRow<ClientType> }) => (
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
    columnHelper.accessor('name', {
      header: 'Clients Name',
      cell: ({ row }) => (
        <div className="d-flex justify-content-start align-items-center gap-2">
          <div className="avatar avatar-sm">
            <img src={row.original.image} height={32} width={32} alt="" className="img-fluid rounded-circle" />
          </div>
          <div>
            <h5 className="text-nowrap mb-0 lh-base fs-base">
              <Link to={row.original.url} className="link-reset">
                {row.original.name}
              </Link>
            </h5>
            <p className="text-muted fs-xs mb-0">{row.original.email}</p>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('phone', { header: 'Phone' }),
    columnHelper.accessor('countryCode', {
      header: 'Country',
      filterFn: 'equalsString',
      enableColumnFilter: true,
      cell: ({ row }) => (
        <span className="badge p-1 text-bg-light fs-sm">
          <img src={row.original.flag} alt="" className="rounded-circle me-1" height={12} width={12} /> {row.original.countryCode}
        </span>
      ),
    }),
    columnHelper.accessor('enrollDate', { header: 'Enrolled' }),
    columnHelper.accessor('type', {
      header: 'Type',
      filterFn: 'equalsString',
      enableColumnFilter: true,
    }),
    columnHelper.accessor('role', { header: 'Job Title' }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: ({ row }) => (
        <span
          className={`badge ${row.original.status === 'active' ? 'bg-success-subtle text-success' : row.original.status === 'pending' ? 'bg-warning-subtle text-warning' : 'bg-danger-subtle text-danger'} badge-label`}>
          {toPascalCase(row.original.status)}
        </span>
      ),
    }),
    {
      header: 'Actions',
      cell: ({ row }: { row: TableRow<ClientType> }) => (
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

  const [data, setData] = useState<ClientType[]>(() => [...clients])
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
      <PageBreadcrumb title="Clients" subtitle="Apps" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <Card>
            <CardHeader className="card-header border-light justify-content-between">
              <div className="d-flex gap-2">
                <div className="app-search">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search clients..."
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

                <Button type="submit" className="btn-purple rounded-circle btn-icon">
                  <TbPlus className="fs-lg" />
                </Button>
              </div>

              <div className="d-flex align-items-center gap-2">
                <span className="me-2 fw-semibold">Filter By:</span>

                <div className="app-search">
                  <select
                    className="form-select form-control my-1 my-md-0"
                    value={(table.getColumn('countryCode')?.getFilterValue() as string) ?? 'All'}
                    onChange={(e) => table.getColumn('countryCode')?.setFilterValue(e.target.value === 'All' ? undefined : e.target.value)}>
                    <option value="All">Country</option>
                    <option value="US">USA</option>
                    <option value="UK">UK</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="IN">India</option>
                  </select>
                  <LuGlobe className="app-search-icon text-muted" />
                </div>

                <div className="app-search">
                  <select
                    className="form-select form-control my-1 my-md-0"
                    value={(table.getColumn('type')?.getFilterValue() as string) ?? 'All'}
                    onChange={(e) => table.getColumn('type')?.setFilterValue(e.target.value === 'All' ? undefined : e.target.value)}>
                    <option value="All">Project Type</option>
                    <option value="Project">Project</option>
                    <option value="Contract">Contract</option>
                    <option value="Retainer">Retainer</option>
                    <option value="Dashboard">Dashboard</option>
                  </select>
                  <LuLayoutTemplate className="app-search-icon text-muted" />
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

            <DataTable<ClientType> table={table} emptyMessage="No records found" />

            {table.getRowModel().rows.length > 0 && (
              <CardFooter className="border-0">
                <TablePagination
                  totalItems={totalItems}
                  start={start}
                  end={end}
                  itemsName="clients"
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
              itemName="clients"
            />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
