import { Card, CardBody, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { TbDownload, TbLink } from 'react-icons/tb'
import { widget2Data } from '@/views/widgets/data.ts'
import Widget2 from '@/views/widgets/components/Widget2.tsx'
import { Link } from 'react-router'

const SalesPerformanceOverview = () => {
  return (
    <Card>
      <CardBody className="p-0">
        <div className="p-3 bg-light-subtle border-bottom border-dashed">
          <Row>
            <Col>
              <h4 className="fs-sm mb-1">Would you like the full report?</h4>
              <small className="text-muted fs-xs mb-0">All 120 orders have been successfully delivered</small>
            </Col>
            <Col xs={'auto'} className="align-self-center">
              <OverlayTrigger overlay={<Tooltip>Download</Tooltip>}>
                <button type="button" className="btn btn-sm btn-default rounded-circle btn-icon">
                  <TbDownload className="fs-xl" />
                </button>
              </OverlayTrigger>
            </Col>
          </Row>
        </div>
        <Row className="row-cols-xxl-2 row-cols-md-2 row-cols-1 g-1 p-1">
          {widget2Data.map((item, idx) => (
            <Col key={idx}>
              <Widget2 item={item} />
            </Col>
          ))}
        </Row>

        <div className="text-center my-2">
          <Link to="#" className="link-reset text-decoration-underline fw-semibold link-offset-3">
            View all Links <TbLink />
          </Link>
        </div>
      </CardBody>
    </Card>
  )
}

export default SalesPerformanceOverview
