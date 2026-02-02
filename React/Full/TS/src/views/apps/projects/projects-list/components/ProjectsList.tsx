import {
  type ColumnDef,
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
import { isAfter, isSameDay, isSameYear, parse, startOfDay, subDays } from 'date-fns'
import { Button, Card, CardFooter, CardHeader, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router'
import { useState } from 'react'
import { LuActivity, LuCalendarClock, LuLayoutGrid, LuList, LuSearch } from 'react-icons/lu'
import { TbEdit, TbEye, TbTrash } from 'react-icons/tb'

import DataTable from '@/components/table/DataTable'
import DeleteConfirmationModal from '@/components/table/DeleteConfirmationModal'
import TablePagination from '@/components/table/TablePagination'
import { toPascalCase } from '@/helpers/casing'
import { projects, type ProjectType } from '../data'

function getStatusVariant(status: ProjectType['status']) {
  if (status === 'in-progress') {
    return 'warning'
  } else if (status === 'in-review') {
    return 'info'
  } else if (status === 'overdue') {
    return 'danger'
  } else if (status === 'on-hold') {
    return 'dark'
  } else {
    return 'success'
  }
}

const dueDateFilterFn: FilterFn<any> = (row, columnId, value) => {
  if (!value || value === 'All') return true

  const dueDateString = row.getValue<string>(columnId)
  const dueDate = parse(dueDateString, 'd MMM, yyyy', new Date())
  if (isNaN(dueDate.getTime())) return false

  const today = startOfDay(new Date())

  if (value === 'Today') {
    return isSameDay(dueDate, today)
  } else if (value === 'Last 7 Days') {
    return isAfter(dueDate, subDays(today, 7))
  } else if (value === 'Last 30 Days') {
    return isAfter(dueDate, subDays(today, 30))
  } else if (value === 'This Year') {
    return isSameYear(dueDate, today)
  }
  return true
}

const columnHelper = createColumnHelper<ProjectType>()
const ProjectsList = () => {
  const columns: ColumnDef<ProjectType, any>[] = [
    {
      id: 'select',
      maxSize: 45,
      size: 45,
      header: ({ table }: { table: TableType<ProjectType> }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }: { row: TableRow<ProjectType> }) => (
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
    columnHelper.accessor('title', {
      header: 'Project',
      cell: ({ row }) => {
        const Icon = row.original.icon
        return (
          <div className="d-flex">
            <div className="avatar-md me-3">
              <span className="avatar-title text-bg-light rounded">
                <Icon className={`fs-24 text-${row.original.variant}`} />
              </span>
            </div>
            <div>
              <h5 className="mb-1 d-flex align-items-center">
                <Link to="/projects" className="link-reset">
                  {row.original.title}
                </Link>
              </h5>
              <p className="text-muted mb-0 fs-xxs">Updated {row.original.updatedTime}</p>
            </div>
          </div>
        )
      },
    }),
    columnHelper.accessor('members', {
      header: 'Members',
      cell: ({ row }) => (
        <div className="avatar-group avatar-group-xs">
          {row.original.members.map((member, idx) => (
            <div className="avatar" key={idx}>
              <img src={member} alt="user" className="rounded-circle avatar-xs" height={24} width={24} />
            </div>
          ))}
        </div>
      ),
      enableSorting: false,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      filterFn: 'equalsString',
      enableColumnFilter: true,
      cell: ({ row }) => (
        <span className={`badge badge-soft-${getStatusVariant(row.original.status)} fs-xxs badge-label`}>{toPascalCase(row.original.status)}</span>
      ),
    }),
    columnHelper.accessor('task', {
      header: 'Tasks',
      cell: ({ row }) => (
        <h5 className="fs-base mb-0 fw-medium">
          {row.original.task.completed}/{row.original.task.total}&nbsp;
          {row.original.task.new && (
            <span className="badge bg-secondary">
              +{row.original.task.new}
              New
            </span>
          )}
          {row.original.status === 'completed' && <span className="badge bg-success">✓</span>}
        </h5>
      ),
      enableSorting: false,
    }),
    columnHelper.accessor('progress', {
      header: 'Progress',
      cell: ({ row }) => <ProgressBar variant={row.original.variant} now={row.original.progress} style={{ height: '5px' }} />,
      enableSorting: false,
    }),
    columnHelper.accessor('attachments', {
      header: 'Attechments',
      cell: ({ row }) => <>{row.original.attachments} files</>,
      enableSorting: false,
    }),
    columnHelper.accessor('comments', {
      header: 'Comments',
      cell: ({ row }) => <>{row.original.comments} comments</>,
      enableSorting: false,
    }),
    columnHelper.accessor('dueDate', { header: 'Due Date', filterFn: dueDateFilterFn }),
    {
      header: 'Actions',
      cell: ({ row }: { row: TableRow<ProjectType> }) => (
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

  const [data, setData] = useState<ProjectType[]>(() => [...projects])
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
      priceRange: dueDateFilterFn,
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
              onChange={(e) => setGlobalFilter(e.target.value)}
              value={globalFilter ?? ''}
              type="search"
              className="form-control"
              placeholder="Search project name..."
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
          <span className="me-2 fw-semibold">Filter By:</span>

          <div className="app-search">
            <select
              value={(table.getColumn('status')?.getFilterValue() as string) ?? 'All'}
              onChange={(e) => table.getColumn('status')?.setFilterValue(e.target.value === 'All' ? undefined : e.target.value)}
              className="form-select form-control my-1 my-md-0">
              <option value="All">Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Pending Review">Pending Review</option>
              <option value="Overdue">Overdue</option>
              <option value="In Review">In Review</option>
              <option value="Completed">Completed</option>
              <option value="Scheduled">Scheduled</option>
              <option value="On Hold">On Hold</option>
              <option value="Pending">Pending</option>
            </select>
            <LuActivity className="app-search-icon text-muted" />
          </div>

          <div className="app-search">
            <select
              value={(table.getColumn('dueDate')?.getFilterValue() as string) ?? ''}
              onChange={(e) => table.getColumn('dueDate')?.setFilterValue(e.target.value || undefined)}
              className="form-select form-control my-1 my-md-0">
              <option value="All">Deadline</option>
              <option value="Today">Today</option>
              <option value="Last 7 Days">Last 7 Days</option>
              <option value="Last 30 Days">Last 30 Days</option>
              <option value="This Year">This Year</option>
            </select>
            <LuCalendarClock className="app-search-icon text-muted" />
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
        </div>

        <div className="d-flex gap-1">
          <Link to="/projects" className="btn btn-soft-primary btn-icon">
            <LuLayoutGrid className="fs-lg" />
          </Link>
          <Link to="/projects-list" className="btn btn-primary btn-icon">
            <LuList className="fs-lg" />
          </Link>
        </div>
      </CardHeader>

      <DataTable<ProjectType> table={table} emptyMessage="No records found" />
      {table.getRowModel().rows.length > 0 && (
        <CardFooter className="border-0">
          <TablePagination
            totalItems={totalItems}
            start={start}
            end={end}
            itemsName="projects"
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

export default ProjectsList
