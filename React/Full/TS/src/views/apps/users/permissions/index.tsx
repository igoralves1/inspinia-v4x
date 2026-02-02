import PageBreadcrumb from '@/components/PageBreadcrumb'
import DataTable from '@/components/table/DataTable'
import DeleteConfirmationModal from '@/components/table/DeleteConfirmationModal'
import TablePagination from '@/components/table/TablePagination'
import {
  type ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type Row as TableRow,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'
import { Button, Card, CardFooter, CardHeader, Col, Container, Row } from 'react-bootstrap'
import { LuSearch } from 'react-icons/lu'
import { TbEye, TbTrash } from 'react-icons/tb'
import { type ManagementType, permissionManagementData } from '@/views/apps/users/permissions/data.ts'

const Page = () => {
  const columnHelper = createColumnHelper<ManagementType>()

  const columns: ColumnDef<ManagementType, any>[] = [
    columnHelper.accessor('name', {
      header: 'Name',
    }),
    columnHelper.accessor('roles', {
      header: 'Assign To',
      cell: ({ row }) => (
        <div className="d-flex gap-1 flex-wrap">
          {row.original.roles.map((role, idx) => (
            <span key={idx} className={`badge bg-${role.variant}-subtle text-${role.variant} badge-label fs-xxs fw-semibold`}>
              {role.label}
            </span>
          ))}
        </div>
      ),
      enableSorting: false,
    }),
    columnHelper.accessor('date', {
      header: 'Status',
      cell: ({ row }) => (
        <>
          {row.original.date}, <span className="text-muted">{row.original.time}</span>
        </>
      ),
    }),
    columnHelper.accessor('users', {
      header: 'Users',
    }),
    {
      header: 'Actions',
      cell: ({ row }: { row: TableRow<ManagementType> }) => (
        <div className="d-flex  gap-1">
          <Button variant="light" size="sm" className="btn-icon rounded-circle">
            <TbEye className="fs-lg" />
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

  const [data, setData] = useState<ManagementType[]>(() => [...permissionManagementData])
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 8 })
  const [selectedRowIds, setSelectedRowIds] = useState<Record<string, boolean>>({})

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
    globalFilterFn: 'includesString',
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
      <PageBreadcrumb title="Permissions" subtitle="Users" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <Card>
            <CardHeader className="border-light justify-content-between">
              <div className="d-flex gap-2">
                <div className="app-search">
                  <input data-table-search type="search" className="form-control" placeholder="Search permissions..." />
                  <LuSearch className="app-search-icon text-muted" />
                </div>
                {Object.keys(selectedRowIds).length > 0 && (
                  <Button variant="danger" onClick={toggleDeleteModal}>
                    Delete
                  </Button>
                )}
              </div>
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
            </CardHeader>
            <DataTable<ManagementType> table={table} emptyMessage="No records found" />
            {table.getRowModel().rows.length > 0 && (
              <CardFooter className="border-0">
                <TablePagination
                  totalItems={totalItems}
                  start={start}
                  end={end}
                  itemsName="permissions"
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
        </Col>
      </Row>
    </Container>
  )
}

export default Page
