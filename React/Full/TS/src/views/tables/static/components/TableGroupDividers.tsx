import { productsTable } from '@/views/tables/static/data.ts'
import { currency } from '@/helpers'
import { Link } from 'react-router'
import { Card, CardBody, CardHeader, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table } from 'react-bootstrap'
import { TbArrowRight, TbDotsVertical, TbEdit, TbEye, TbTrash } from 'react-icons/tb'

const TableGroupDividers = () => {
  return (
    <Card>
      <CardHeader className="justify-content-between">
        <CardTitle> Table Group Dividers </CardTitle>
        <Link
          to="https://getbootstrap.com/docs/5.3/content/tables/#table-group-dividers"
          target="_blank"
          className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold">
          View Docs <TbArrowRight className="bi align-middle fs-lg" />
        </Link>
      </CardHeader>

      <CardBody>
        <p className="text-muted">
          Add a thicker border, darker between table groups—<code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code>
          —with <code>.table-group-divider</code>. Customize the color by changing the <code>border-top-color</code> (which we don’t currently provide
          a utility class for at this time).
        </p>

        <Table responsive className="table align-middle mb-0">
          <thead className="align-middle thead-sm">
            <tr className="text-uppercase fs-xxs">
              {productsTable.header.map((header, idx) => (
                <th key={idx} style={header === 'Actions' ? { width: '1%' } : { width: 'auto' }}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {productsTable.data.map((product, idx) => (
              <tr key={idx}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>
                  {currency}
                  {product.price.toFixed(2)}
                </td>
                <td>{product.stock}</td>
                <td>{product.rating} ★</td>
                <td>
                  <span className={`badge badge-label badge-soft-${product.status === 'Active' ? 'success' : 'warning'}`}>{product.status}</span>
                </td>
                <td className="text-center">
                  <Dropdown align="end" className="text-muted">
                    <DropdownToggle variant="link" className="drop-arrow-none fs-xxl link-reset p-0">
                      <TbDotsVertical />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem as={Link} to="#">
                        <TbEye className="me-1" /> View
                      </DropdownItem>
                      <DropdownItem as={Link} to="#">
                        <TbEdit className="me-1" /> Edit
                      </DropdownItem>
                      <DropdownItem as={Link} to="#" className="text-danger">
                        <TbTrash className="me-1" /> Delete
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default TableGroupDividers
