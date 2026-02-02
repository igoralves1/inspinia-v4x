import ComponentCard from '@/components/cards/ComponentCard'
import DataTable from '@/components/table/DataTable'
import { toPascalCase } from '@/helpers/casing'
import { createColumnHelper, getCoreRowModel, getSortedRowModel, type SortingState, useReactTable } from '@tanstack/react-table'
import { Link } from 'react-router'
import { useState } from 'react'
import { TbPencil } from 'react-icons/tb'
import { tasks, type TaskType } from '@/views/pages/profile/data.ts'

const columnHelper = createColumnHelper<TaskType>()

const Tasks = () => {
  const columns = [
    columnHelper.accessor('title', {
      header: 'Task',
      cell: ({ row }) => (
        <>
          <h5 className="fs-sm my-1">
            <Link to="#" className="text-body">
              {row.original.title}
            </Link>
          </h5>
          <span className="text-muted fs-xs">Due in {row.original.dueDays} days</span>
        </>
      ),
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: ({ row }) => (
        <span
          className={`badge ${row.original.status === 'in-progress' ? 'badge-soft-warning' : row.original.status === 'completed' ? 'badge-soft-success' : row.original.status === 'on-hold' ? 'badge-soft-dark' : 'badge-soft-danger'}`}>
          {toPascalCase(row.original.status)}
        </span>
      ),
    }),
    columnHelper.accessor('assignBy.name', {
      header: 'Assigned By',
      cell: ({ row }) => (
        <div className="d-flex justify-content-start align-items-center gap-2">
          <div className="avatar avatar-sm">
            <img src={row.original.assignBy.image} height={32} width={32} alt="avatar-3" className="img-fluid rounded-circle" />
          </div>
          <div>
            <h5 data-sort="name" className="text-nowrap fs-sm mb-0 lh-base">
              {row.original.assignBy.name}
            </h5>
            <p className="text-muted fs-xs mb-0">{row.original.assignBy.email}</p>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('startDate', { header: 'Start Date' }),
    columnHelper.accessor('priority', {
      header: 'Priority',
      cell: ({ row }) => (
        <span
          className={`badge fs-xs ${row.original.priority === 'high' ? 'badge-soft-danger' : row.original.priority === 'low' ? 'badge-soft-secondary' : 'badge-soft-primary'}`}>
          {toPascalCase(row.original.priority)}
        </span>
      ),
    }),
    columnHelper.accessor('progress', {
      header: 'Progress',
      cell: ({ row }) => <>{row.original.progress}%</>,
    }),
    columnHelper.accessor('totalTime', {
      header: 'Total Time Spent',
    }),
    columnHelper.accessor('assignBy.email', {
      header: '',
      cell: () => (
        <Link to="#" className="text-muted fs-xxl">
          <TbPencil />
        </Link>
      ),
    }),
  ]

  const [data, _setData] = useState<TaskType[]>(() => [...tasks])
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: 'includesString',
  })

  return (
    <ComponentCard title="My Tasks" bodyClassName="p-0">
      <DataTable<TaskType> table={table} emptyMessage="No records found" />
    </ComponentCard>
  )
}

export default Tasks
