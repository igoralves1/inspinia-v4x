import { type ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, type SortingState, useReactTable } from '@tanstack/react-table'
import { useState } from 'react'
import { CardFooter, Col, Table } from 'react-bootstrap'
import { TbArrowDown, TbArrowsSort, TbArrowUp } from 'react-icons/tb'

import ComponentCard from '@/components/cards/ComponentCard'
import TablePagination from '@/components/table/TablePagination'
import { type CampaignDataType, campaignsData } from '../data'

const columns: ColumnDef<CampaignDataType>[] = [
  {
    accessorKey: 'name',
    header: 'Campaign',
    cell: ({ row }) => (
      <div className="d-flex align-items-center">
        <row.original.icon {...row.original.iconProps} />
        {row.original.name}
      </div>
    ),
  },
  {
    accessorKey: 'visitors',
    header: 'Visitors',
  },
  {
    accessorKey: 'newUsers',
    header: 'New Users',
  },
  {
    accessorKey: 'sessions',
    header: 'Sessions',
  },
  {
    accessorKey: 'bounceRate',
    header: 'Bounce Rate',
    cell: ({ getValue }) => <span className="text-success">{getValue() as number}%</span>,
  },
  {
    accessorKey: 'pagesPerVisit',
    header: 'Pages/Visit',
  },
  {
    accessorKey: 'avgDuration',
    header: 'Avg. Duration',
  },
  {
    accessorKey: 'leads',
    header: 'Leads',
  },
  {
    accessorKey: 'revenue',
    header: 'Revenue',
    cell: ({ getValue }) => <span className="text-success">{getValue() as string}</span>,
  },
  {
    accessorKey: 'conversion',
    header: 'Conversion',
    cell: ({ getValue }) => `${getValue() as number}%`,
  },
]

const TopCampaignPerformance = () => {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: campaignsData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    debugTable: true,
  })

  return (
    <Col xs={12}>
      <ComponentCard title="Top Campaign Performance" bodyClassName="p-0" isCloseable isCollapsible isRefreshable>
        <div className="table-responsive">
          <Table className="table-custom table-nowrap table-hover table-centered mb-0">
            <thead className="bg-light align-middle bg-opacity-25 thead-sm">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="text-uppercase fs-xxs">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      role="button"
                      className="text-muted"
                      onClick={() => header.column.getCanSort() && header.column.toggleSorting()}>
                      <div className="d-flex align-items-center">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getCanSort() ? (
                          <span className="ms-1">
                            {header.column.getIsSorted() === 'asc' ? (
                              <TbArrowUp className="fs-sm text-success" />
                            ) : header.column.getIsSorted() === 'desc' ? (
                              <TbArrowDown className="fs-sm text-danger" />
                            ) : (
                              <TbArrowsSort className="fs-sm text-muted" />
                            )}
                          </span>
                        ) : null}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="text-sm">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <CardFooter className="border-0">
          <TablePagination
            totalItems={5}
            start={1}
            end={5}
            itemsName="products"
            showInfo
            previousPage={() => {}}
            canPreviousPage={false}
            pageCount={1}
            pageIndex={0}
            setPageIndex={() => {}}
            nextPage={() => {}}
            canNextPage={false}
          />
        </CardFooter>
      </ComponentCard>
    </Col>
  )
}

export default TopCampaignPerformance
