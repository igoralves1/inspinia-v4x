import { Link } from 'react-router'
import { Card, CardBody, CardHeader, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table } from 'react-bootstrap'
import { TbArrowRight, TbDotsVertical, TbEdit, TbEye, TbTrash } from 'react-icons/tb'

const TableVariants = () => {
  return (
    <Card>
      <CardHeader className="justify-content-between">
        <CardTitle> Variants of Table </CardTitle>
        <Link
          to="https://getbootstrap.com/docs/5.3/content/tables/#variants"
          target="_blank"
          className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold">
          View Docs <TbArrowRight className="bi align-middle fs-lg" />
        </Link>
      </CardHeader>

      <CardBody>
        <p className="text-muted">Use contextual classes to color tables, table rows or individual cells.</p>

        <Table responsive className="align-middle mb-0">
          <thead className="bg-light align-middle bg-opacity-25 thead-sm">
            <tr className="text-uppercase fs-xxs">
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Rating</th>
              <th>Status</th>
              <th style={{ width: '1%' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-primary">
              <td>Bluetooth Speaker</td>
              <td>Audio</td>
              <td>$49.00</td>
              <td>200</td>
              <td>4.6 ★</td>
              <td>
                <span className="badge badge-label badge-soft-success">Active</span>
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
            <tr>
              <td>Leather Wallet</td>
              <td>Accessories</td>
              <td>$29.99</td>
              <td>150</td>
              <td className="table-warning">4.3 ★</td>
              <td>
                <span className="badge badge-label badge-soft-success">Active</span>
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
            <tr>
              <td>Fitness Tracker</td>
              <td>Wearables</td>
              <td className="table-info">$89.00</td>
              <td>60</td>
              <td>4.1 ★</td>
              <td>
                <span className="badge badge-label badge-soft-warning">Limited Stock</span>
              </td>
              <td className="text-center table-light">
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
            <tr>
              <td>4K Monitor</td>
              <td>Electronics</td>
              <td>$349.00</td>
              <td className="table-danger">30</td>
              <td>4.8 ★</td>
              <td>
                <span className="badge badge-label badge-soft-success">Active</span>
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
            <tr>
              <td className="table-dark">Standing Desk</td>
              <td>Furniture</td>
              <td>$499.00</td>
              <td>10</td>
              <td>4.4 ★</td>
              <td>
                <span className="badge badge-label badge-soft-info">New</span>
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
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default TableVariants
