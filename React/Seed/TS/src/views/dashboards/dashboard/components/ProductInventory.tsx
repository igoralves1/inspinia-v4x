import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
} from 'react-bootstrap'
import { Link } from 'react-router'
import { TbCircleFilled, TbDotsVertical, TbFileExport, TbPlus } from 'react-icons/tb'

import Rating from '@/components/Rating'
import TablePagination from '@/components/table/TablePagination'
import { products } from '../data'

const ProductInventory = () => {
  return (
    <Col xxl={6}>
      <Card>
        <CardHeader className="justify-content-between align-items-center border-dashed">
          <CardTitle as="h4" className="mb-0">
            Product Inventory
          </CardTitle>
          <div className="d-flex gap-2">
            <Link to="/ecommerce-add-product">
              <Button variant="soft-secondary" size="sm">
                <TbPlus className="me-1" /> Add Product
              </Button>
            </Link>
            <Button variant="primary" size="sm">
              <TbFileExport className="me-1" /> Export CSV
            </Button>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <div className="table-responsive">
            <Table className="table-centered table-custom table-sm table-nowrap table-hover mb-0">
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={product.image} className="avatar-sm rounded-circle me-2" alt={product.name} />
                        <div>
                          <h5 className="fs-base my-1">
                            <Link to="/products/1" className="text-body">
                              {product.name}
                            </Link>
                          </h5>
                          <span className="text-muted fs-xs">{product.category}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-muted fs-xs">Stock</span>
                      <h5 className="fs-base mt-1 fw-normal">{product.stock}</h5>
                    </td>
                    <td>
                      <span className="text-muted fs-xs">Price</span>
                      <h5 className="fs-base mt-1 fw-normal">{product.price}</h5>
                    </td>
                    <td>
                      <span className="text-muted fs-xs">Ratings</span>
                      <h5 className="fs-base mt-1 fw-normal">
                        <Rating rating={product.ratings} />
                        <span className="ms-1">
                          <Link to="/reviews" className="link-reset fw-semibold">
                            ({product.reviews})
                          </Link>
                        </span>
                      </h5>
                    </td>
                    <td>
                      <span className="text-muted fs-xs">Status</span>
                      <h5 className="fs-base mt-1 fw-normal">
                        <TbCircleFilled className={`fs-xs text-${product.statusVariant}`} /> {product.status}
                      </h5>
                    </td>
                    <td style={{ width: 30 }}>
                      <Dropdown>
                        <DropdownToggle as="a" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0">
                          <TbDotsVertical className="fs-lg" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                          <DropdownItem>Edit Product</DropdownItem>
                          <DropdownItem>Remove</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
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
      </Card>
    </Col>
  )
}

export default ProductInventory
