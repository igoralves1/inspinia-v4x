import PageBreadcrumb from '@/components/PageBreadcrumb'
import DataTable from '@/components/table/DataTable'
import DeleteConfirmationModal from '@/components/table/DeleteConfirmationModal'
import TablePagination from '@/components/table/TablePagination'
import { toPascalCase } from '@/helpers/casing'
import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type Row as TableRow,
  useReactTable,
} from '@tanstack/react-table'
import { Button, Card, CardBody, CardHeader, Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { Link } from 'react-router'
import { useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import { TbCalendar, TbClock, TbEdit, TbEye, TbMessageCircle, TbPaperclip, TbTrash } from 'react-icons/tb'
import { issues, type IssueType } from '@/views/other-apps/issue-tracker/data.ts'

const columnHelper = createColumnHelper<IssueType>()

const Page = () => {
  const columns = [
    columnHelper.accessor('status', {
      header: () => null,
      cell: ({ row }) => (
        <span
          className={`badge ${row.original.status === 'resolved' ? 'text-bg-success' : row.original.status === 'in-progress' ? 'text-bg-warning' : row.original.status === 'review' ? 'text-bg-info' : row.original.status === 'pending' ? 'text-bg-secondary' : 'text-bg-danger'} fs-xxs badge-label`}>
          {toPascalCase(row.original.status)}
        </span>
      ),
    }),
    columnHelper.accessor('issueID', {
      header: () => null,
      cell: ({ row }) => (
        <>
          <Link to="#" className="link-reset text-uppercase fw-semibold">
            {row.original.issueID}
          </Link>
          <p className="mb-0 text-muted">{row.original.description}</p>
        </>
      ),
    }),
    columnHelper.accessor('name', {
      header: () => null,
      cell: ({ row }) => (
        <div className="d-flex justify-content-start align-items-center gap-2">
          <div className="avatar avatar-xs">
            <img src={row.original.image} height={24} width={24} alt="" className="img-fluid rounded-circle" />
          </div>
          <div>
            <h5 className="text-nowrap mb-0 lh-base">{row.original.name}</h5>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('createdAt', {
      header: () => null,
      cell: ({ row }) => (
        <>
          <p className="mb-0 d-flex align-items-center gap-1">
            <TbCalendar /> <span className="fw-semibold">Created:</span> {row.original.createdAt}
          </p>
          <p className="mb-0 d-flex align-items-center gap-1">
            <TbClock /> <span className="fw-semibold">Due:</span>
            {row.original.dueDate}
          </p>
        </>
      ),
    }),
    columnHelper.accessor('tags', {
      header: () => null,
      cell: ({ row }) => (
        <>
          {row.original.tags.map((tag, idx) => (
            <span key={idx} className="badge badge-label badge-default me-1">
              {tag}
            </span>
          ))}
        </>
      ),
    }),
    columnHelper.accessor('progress', {
      header: () => null,
      cell: ({ row }) => (
        <>
          <ProgressBar
            now={row.original.progress}
            variant={row.original.progress <= 25 ? 'danger' : row.original.progress <= 75 ? 'warning' : 'success'}
            style={{ height: '6px' }}
          />
          <small className="text-muted">{row.original.progress}% Complete</small>
        </>
      ),
    }),
    columnHelper.accessor('comments', {
      header: () => null,
      cell: ({ row }) => (
        <span className="d-flex align-items-center gap-1">
          <TbMessageCircle className="text-muted" />
          <span>{row.original.comments} comments</span>
        </span>
      ),
    }),
    columnHelper.accessor('files', {
      header: () => null,
      cell: ({ row }) => (
        <span className="d-flex align-items-center gap-1">
          <TbPaperclip className="text-muted" />
          <span>{row.original.files} files</span>
        </span>
      ),
    }),
    columnHelper.accessor('id', {
      header: () => null,
      cell: ({ row }: { row: TableRow<IssueType> }) => (
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
    }),
  ]

  const [data, setData] = useState<IssueType[]>(() => [...issues])
  const [globalFilter, setGlobalFilter] = useState('')
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 8 })

  const [selectedRowIds, setSelectedRowIds] = useState<Record<string, boolean>>({})

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter, pagination, rowSelection: selectedRowIds },
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
      <PageBreadcrumb title="Issue Tracker" subtitle="Apps" />

      <Row>
        <Col cols={12}>
          <Card>
            <CardHeader className="border-light justify-content-between">
              <div className="app-search">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search issues..."
                  value={globalFilter ?? ''}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                />
                <LuSearch className="app-search-icon text-muted" />
              </div>

              <Button variant="success">Add New Issues</Button>
            </CardHeader>

            <CardBody>
              <DataTable<IssueType> table={table} emptyMessage="No records found" showHeaders={false} className="mb-3" />
              {table.getRowModel().rows.length > 0 && (
                <TablePagination
                  totalItems={totalItems}
                  start={start}
                  end={end}
                  itemsName="issues"
                  showInfo
                  previousPage={table.previousPage}
                  canPreviousPage={table.getCanPreviousPage()}
                  pageCount={table.getPageCount()}
                  pageIndex={table.getState().pagination.pageIndex}
                  setPageIndex={table.setPageIndex}
                  nextPage={table.nextPage}
                  canNextPage={table.getCanNextPage()}
                />
              )}
            </CardBody>

            <DeleteConfirmationModal
              show={showDeleteModal}
              onHide={toggleDeleteModal}
              onConfirm={handleDelete}
              selectedCount={Object.keys(selectedRowIds).length}
              itemName="issue"
            />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
