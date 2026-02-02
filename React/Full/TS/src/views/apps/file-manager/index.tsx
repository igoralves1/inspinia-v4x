import SimpleBar from 'simplebar-react'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import DataTable from '@/components/table/DataTable'
import DeleteConfirmationModal from '@/components/table/DeleteConfirmationModal'
import { formatBytes } from '@/helpers/file'
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
import { Button, Card, CardHeader, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router'
import { useState } from 'react'
import { LuFile, LuSearch } from 'react-icons/lu'
import { TbDotsVertical, TbDownload, TbEdit, TbLink, TbMenu2, TbPin, TbShare, TbStarFilled, TbTrash } from 'react-icons/tb'
import { fileRecords, type FileRecordType } from './data'
import SideBar from '@/views/apps/file-manager/components/SideBar.tsx'
import FolderCards from '@/views/apps/file-manager/components/FolderCards.tsx'

const columnHelper = createColumnHelper<FileRecordType>()

const Page = () => {
  const [show, setShow] = useState(false)
  const [favorites, setFavorites] = useState<Record<string, boolean>>({})

  const columns = [
    {
      id: 'select',
      header: ({ table }: { table: TableType<FileRecordType> }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14 file-item-check"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }: { row: TableRow<FileRecordType> }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14 file-item-check"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      enableSorting: false,
      enableColumnFilter: false,
    },
    columnHelper.accessor('name', {
      header: 'Name',
      cell: ({ row }) => (
        <div className="d-flex align-items-center gap-2">
          <div className="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2">
            <span className="avatar-title">
              <row.original.icon className="fs-xl" />
            </span>
          </div>
          <div className="flex-grow-1">
            <h5 className="mb-1 fs-base">
              <Link to="" className="link-reset">
                {row.original.name}
              </Link>
            </h5>
            <p className="text-muted mb-0 fs-xs">{formatBytes(row.original.size)}</p>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('type', { header: 'Type', filterFn: 'equalsString' }),
    columnHelper.accessor('modified', { header: 'Modified' }),
    columnHelper.accessor('email', {
      header: 'Owner',
      cell: ({ row }) => (
        <div className="d-flex align-items-center gap-2">
          <div className="flex-shrink-0 bg-light bg-opacity-50 text-muted d-inline-flex align-items-center justify-content-center rounded-2">
            <img src={row.original.avatar} height={24} width={24} alt="" className="avatar-xs rounded-circle" />
          </div>
          <h5 className="mb-0 fs-base">
            <Link to="" className="link-reset">
              {row.original.email}
            </Link>
          </h5>
        </div>
      ),
    }),
    columnHelper.accessor('sharedWith', {
      header: 'Shared With',
      cell: ({ row }) => (
        <div className="avatar-group avatar-group-xs">
          {row.original.sharedWith.map((item, index) => (
            <div className="avatar" key={index}>
              <img src={item.avatar} height={24} width={24} alt="" className="rounded-circle avatar-xs" />
            </div>
          ))}
        </div>
      ),
    }),
    {
      header: 'Actions',
      cell: ({ row }: { row: TableRow<FileRecordType> }) => {
        const fileId = row.original.id
        const isFavorite = favorites[fileId] ?? row.original.isFavorite
        return (
          <div className="d-flex align-items-center gap-2">
            <button
              type="button"
              className="btn btn-icon btn-sm btn-link"
              onClick={() => {
                setFavorites((prev) => ({
                  ...prev,
                  [fileId]: !isFavorite,
                }))
              }}>
              {isFavorite ? <TbStarFilled className="text-warning fs-lg" /> : <TbStarFilled className="text-muted fs-lg" />}
            </button>
            <Dropdown align="end" className="flex-shrink-0 text-muted">
              <DropdownToggle as="a" role="button" className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0">
                <TbDotsVertical />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <TbShare className="me-1" />
                  Share
                </DropdownItem>
                <DropdownItem>
                  <TbLink className="me-1" />
                  Get Sharable Link
                </DropdownItem>
                <DropdownItem>
                  <TbDownload className="me-1" /> Download
                </DropdownItem>
                <DropdownItem>
                  <TbPin className="me-1" /> Pin
                </DropdownItem>
                <DropdownItem>
                  <TbEdit className="me-1" />
                  Edit
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    toggleDeleteModal()
                    setSelectedRowIds({ [row.id]: true })
                  }}>
                  <TbTrash className="me-1" />
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        )
      },
    },
  ]

  const [data, setData] = useState<FileRecordType[]>(() => [...fileRecords])
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const [selectedRowIds, setSelectedRowIds] = useState<Record<string, boolean>>({})

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter, columnFilters, rowSelection: selectedRowIds },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setSelectedRowIds,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: 'includesString',
    enableColumnFilters: true,
    enableRowSelection: true,
  })

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)

  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal)
  }

  const handleDelete = () => {
    const selectedIds = new Set(Object.keys(selectedRowIds))
    setData((old) => old.filter((_, idx) => !selectedIds.has(idx.toString())))
    setSelectedRowIds({})
    setShowDeleteModal(false)
  }

  return (
    <Container fluid>
      <PageBreadcrumb title="File Manager" subtitle="Apps" />

      <div className="outlook-box outlook-box-full">
        <Offcanvas responsive="lg" show={show} onHide={() => setShow(!show)} className="outlook-left-menu outlook-left-menu-md">
          <SideBar />
        </Offcanvas>

        <Card className="h-100 mb-0 rounded-0 flex-grow-1 border-0">
          <CardHeader className="border-light justify-content-between">
            <div className="d-flex gap-2">
              <div className="d-lg-none d-inline-flex gap-2">
                <button className="btn btn-default btn-icon" type="button" onClick={() => setShow(!show)}>
                  <TbMenu2 className="fs-lg" />
                </button>
              </div>

              <div className="app-search">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search files..."
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
                  value={(table.getColumn('type')?.getFilterValue() as string) ?? 'All'}
                  onChange={(e) => table.getColumn('type')?.setFilterValue(e.target.value === 'All' ? undefined : e.target.value)}>
                  <option value="All">File Type</option>
                  <option value="Folder">Folder</option>
                  <option value="MySQL">MySQL</option>
                  <option value="MP4">MP4</option>
                  <option value="Audio">Audio</option>
                  <option value="Figma">Figma</option>
                </select>
                <LuFile className="app-search-icon text-muted" />
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

          <SimpleBar className="card-body" style={{ height: 'calc(100% - 100px)' }} data-simplebar-md>
            <FolderCards />

            <DataTable<FileRecordType> table={table} emptyMessage="No records found" />

            <DeleteConfirmationModal
              show={showDeleteModal}
              onHide={toggleDeleteModal}
              onConfirm={handleDelete}
              selectedCount={Object.keys(selectedRowIds).length}
              itemName="clients"
            />

            <div className="d-flex align-items-center justify-content-center gap-2 p-3">
              <strong>Loading...</strong>
              <div className="spinner-border spinner-border-sm text-danger" role="status" aria-hidden="true"></div>
            </div>
          </SimpleBar>
        </Card>
      </div>
    </Container>
  )
}

export default Page
