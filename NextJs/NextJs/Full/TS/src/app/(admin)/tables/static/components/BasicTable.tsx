import { productsTable } from '@/app/(admin)/tables/static/data'
import { currency } from '@/helpers'
import Link from 'next/link'
import { Button, Card, CardBody, CardHeader, CardTitle, Table } from 'react-bootstrap'
import { TbArrowRight } from 'react-icons/tb'

const BasicTable = () => {
  return (
    <Card>
      <CardHeader className="justify-content-between">
        <CardTitle> Basic Table </CardTitle>
        <Link
          href="https://react-bootstrap.netlify.app/docs/components/table"
          target="_blank"
          className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold">
          View Docs
          <TbArrowRight className="bi align-middle fs-lg" />
        </Link>
      </CardHeader>

      <CardBody>
        <Table responsive className="align-middle mb-0">
          <thead className="fs-xs">
            <tr>
              {productsTable.header.map((header, idx) => (
                <th key={idx}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
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
                <td>
                  <Button size="sm" variant="primary" className="me-1">
                    Edit
                  </Button>
                  <Button size="sm" variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default BasicTable
