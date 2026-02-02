import { Link } from 'react-router'
import { Badge, Button, Col, Row } from 'react-bootstrap'
import { TbStarFilled } from 'react-icons/tb'

import { orderDetails, productDetails } from '../data'

const ProductDetails = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <Badge bg="success" className="bg-success-subtle text-success px-2 py-1 fs-base rounded-pill">
          In Stock
        </Badge>
        <div className="d-inline-flex align-items-center">
          {[...Array(5)].map((_, index) => (
            <TbStarFilled key={index} size={16} className="text-warning" />
          ))}
          <span className="ms-1">
            <Link to="/reviews" className="link-reset fw-medium">
              (859 Reviews)
            </Link>
          </span>
        </div>
      </div>

      <div className="mt-3 mb-5">
        <h4 className="fs-xl">Monterey Velvet Blue Luxury Relaxation Single Seater Sofa</h4>
      </div>

      <Row className="mb-4">
        {productDetails.map((item, index) => (
          <Col key={index} md={4} xl={3}>
            <h6 className="mb-1 text-muted text-uppercase">{item.label}:</h6>
            <p className="fw-medium mb-0">
              {item.value} {item.smallText && <small className="text-muted">{item.smallText}</small>}
            </p>
          </Col>
        ))}
      </Row>

      <Row className="mb-4">
        {orderDetails.map((item, index) => (
          <Col key={index} md={4} xl={3}>
            <h6 className="mb-1 text-muted text-uppercase">{item.label}:</h6>
            <p className="fw-medium mb-0">{item.value}</p>
          </Col>
        ))}
      </Row>

      <h3 className="text-muted d-flex align-items-center gap-2 mb-4">
        <small className="text-decoration-line-through">$899.00</small>
        <span className="fw-bold text-danger">$764.15</span>
        <small>(22%)</small>
      </h3>

      <h5 className="text-uppercase text-muted fs-xs mb-2">Product Info:</h5>
      <p>
        Relax in style with the Azure Comfort Single Sofa. Crafted with premium materials and a rich blue fabric, this single-seater is designed for
        both luxury and durability. Its sleek, modern profile fits perfectly in living rooms, reading nooks, or stylish lounges.
      </p>
      <p>
        Experience superior comfort with its deep cushioning and supportive backrest. The finely tailored upholstery and sturdy wood frame ensure
        long-lasting beauty and relaxation for years to come.
      </p>

      <h6 className="mt-3 fs-base">Details: </h6>
      <ul className="d-flex flex-column gap-1 mb-3">
        <li>Solid Mahogany frame from certified sustainable sources.</li>
        <li>Upholstered in premium blue fabric.</li>
        <li>Available with matte or polished wood finishes.</li>
        <li>High-density foam seat and back for exceptional comfort.</li>
      </ul>

      <Button variant="link" className="p-0 fw-semibold">
        Read More...
      </Button>
    </>
  )
}

export default ProductDetails
