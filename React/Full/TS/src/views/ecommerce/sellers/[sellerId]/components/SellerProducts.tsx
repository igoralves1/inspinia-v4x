import DataTable from '@/components/table/DataTable'
import DeleteConfirmationModal from '@/components/table/DeleteConfirmationModal'
import TablePagination from '@/components/table/TablePagination'
import { currency } from '@/helpers'
import { toPascalCase } from '@/helpers/casing'
import {
  type ColumnDef,
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
import { Button, Card, CardFooter, CardHeader } from 'react-bootstrap'
import { Link } from 'react-router'
import { useState } from 'react'
import { LuPlus, LuSearch } from 'react-icons/lu'
import { TbEdit, TbEye, TbTrash } from 'react-icons/tb'
import { sellerProducts, type SellerProductType } from '../data'

const columnHelper = createColumnHelper<SellerProductType>()

const SellerProducts = () => {
  const columns: ColumnDef<SellerProductType, any>[] = [
    {
      id: 'select',
      maxSize: 45,
      size: 45,
      header: ({ table }: { table: TableType<SellerProductType> }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14 mt-0"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }: { row: TableRow<SellerProductType> }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14 mt-0"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      enableSorting: false,
      enableColumnFilter: false,
    },
    columnHelper.accessor('name', {
      header: 'Product',
      cell: ({ row }) => (
        <div className="d-flex align-items-center">
          <div className="avatar-md me-3">
            <img src={row.original.image} alt="Product" className="img-fluid rounded" />
          </div>
          <div>
            <h5 className="mb-0">
              <Link data-sort="product" to="/product/1" className="link-reset">
                {row.original.name}
              </Link>
            </h5>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('category', { header: 'Category' }),
    columnHelper.accessor('stock', {
      header: 'Stock',
      cell: ({ row }) => <h5 className="fs-base mb-0 fw-medium">{row.original.stock}</h5>,
    }),
    columnHelper.accessor('price', {
      header: 'Price',
      cell: ({ row }) => (
        <>
          {currency}
          {row.original.price}
        </>
      ),
    }),
    columnHelper.accessor('orders', { header: 'Orders' }),
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
    {
      header: 'Actions',
      cell: ({ row }: { row: TableRow<SellerProductType> }) => (
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

  const [data, setData] = useState<SellerProductType[]>(() => [...sellerProducts])
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
    <Card>
      <CardHeader className="border-light justify-content-between">
        <div className="d-flex gap-2">
          <div className="app-search">
            <input
              value={globalFilter ?? ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
              type="search"
              className="form-control"
              placeholder="Search product name..."
            />
            <LuSearch className="app-search-icon text-muted" />
          </div>
          {Object.keys(selectedRowIds).length > 0 && (
            <Button variant="danger" size="sm" onClick={toggleDeleteModal}>
              Delete
            </Button>
          )}
        </div>
        <div className="d-flex gap-1">
          <div>
            <select
              className="form-select form-control my-1 my-md-0"
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}>
              {[5, 10, 15, 20].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <Link to="/add-product" className="btn btn-danger ms-1">
            <LuPlus className="fs-sm me-2" /> Add Product
          </Link>
        </div>
      </CardHeader>
      <DataTable<SellerProductType> table={table} emptyMessage="No records found" />

      {table.getRowModel().rows.length > 0 && (
        <CardFooter className="border-0">
          <TablePagination
            totalItems={totalItems}
            start={start}
            end={end}
            itemsName="products"
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
        itemName="product"
      />
    </Card>
  )
}

export default SellerProducts
