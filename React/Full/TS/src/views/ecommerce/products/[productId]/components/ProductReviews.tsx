import { Badge, Button, Card, CardBody, CardHeader, CardTitle, Col, ProgressBar, Row, Table } from 'react-bootstrap'
import { TbEdit, TbEye, TbStarFilled, TbTrash } from 'react-icons/tb'

import { ratings, reviewsData } from '../data'

import ratingsImg from '@/assets/images/ratings.svg'
import Rating from '@/components/Rating'

const ProductReviews = () => {
  return (
    <Card className="mt-5 border-dashed border-light">
      <CardHeader className="border-light">
        <CardTitle>Manage Reviews</CardTitle>
      </CardHeader>
      <CardBody className="p-0">
        <Row className="align-items-center g-0">
          <Col xl={7}>
            <div className="d-flex align-items-center gap-4 p-4">
              <img src={ratingsImg} alt="Product" width={95} height={80} />
              <div>
                <h3 className="text-primary d-flex align-items-center gap-2 mb-2 fw-bold">
                  4.92 <TbStarFilled />
                </h3>
                <p className="mb-2">Based on 245 verified reviews</p>
                <p className="pe-2 h6 text-muted mb-2 lh-base">Feedback collected from real customers who purchased our templates</p>
                <Badge bg="success">+12 new this week</Badge>
              </div>
            </div>
          </Col>
          <Col xl={5}>
            <div className="p-3">
              {ratings.map((rating, index) => (
                <div key={index} className="d-flex align-items-center gap-2 mb-2">
                  <div className="flex-shrink-0" style={{ width: 50 }}>
                    {rating.stars} Star
                  </div>
                  <ProgressBar now={rating.progress} className="w-100" style={{ height: 8 }} />
                  <div className="flex-shrink-0 text-end" style={{ width: 30 }}>
                    <Badge bg="light" className="text-bg-light">
                      {rating.count}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </CardBody>

      <div className="table-responsive">
        <Table className="table-custom table-centered table-select table-hover mb-0">
          <thead className="bg-light align-middle bg-opacity-25">
            <tr className="text-uppercase fs-xxs">
              <th>Reviewer</th>
              <th style={{ width: '18rem' }}>Review</th>
              <th>Date</th>
              <th>Status</th>
              <th className="text-center" style={{ width: '1%' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {reviewsData.map((review) => (
              <tr key={review.id}>
                <td>
                  <div className="d-flex justify-content-start align-items-center gap-2">
                    <div className="avatar avatar-sm">
                      <img src={review.userAvatar} alt={`avatar-${review.id}`} width={32} height={32} className="img-fluid rounded-circle" />
                    </div>
                    <div>
                      <h5 className="text-nowrap fs-sm mb-0 lh-base">{review.userName}</h5>
                      <p className="text-muted fs-xs mb-0">{review.userEmail}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-warning fs-lg">
                    <Rating rating={review.rating} />
                  </span>
                  <h5 className="mt-2">{review.title}</h5>
                  <p className="text-muted fst-italic mb-0">"{review.comment}"</p>
                </td>
                <td>
                  {review.date} <small className="text-muted">{review.time}</small>
                </td>
                <td>
                  <span className={`badge fs-xxs ${review.status === 'Published' ? 'badge-soft-success' : 'badge-soft-warning'}`}>
                    {review.status}
                  </span>
                </td>
                <td>
                  <div className="d-flex justify-content-center gap-1">
                    <Button size="sm" variant="light" className="btn-icon rounded-circle">
                      <TbEye className="fs-lg" />
                    </Button>
                    <Button size="sm" variant="light" className="btn-icon rounded-circle">
                      <TbEdit className="fs-lg" />
                    </Button>
                    <Button size="sm" variant="light" className="btn-icon rounded-circle">
                      <TbTrash className="fs-lg" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  )
}

export default ProductReviews
