import { Suspense } from 'react'
import { Badge, Button, Card, CardBody, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { TbArrowRight, TbTrendingUp } from 'react-icons/tb'
import { Link } from 'react-router'
import CountUp from 'react-countup'
import { ProjectProgressChart, RevenueChart } from '@/views/dashboards/dashboard/components/charts.tsx'
import { activityItems } from '../data'

const WelcomeRevenueProgress = () => {
  return (
    <Card>
      <CardBody className="p-0">
        <Row className="g-0">
          <Col xxl={3} xl={6} className="order-xl-1 order-xxl-0">
            <div className="p-4 border-end border-dashed">
              <h4 className="fs-lg mb-1">Welcome to INSPINIA+ Admin Theme.</h4>
              <span className="text-muted">
                You have <span className="text-primary fw-semibold">42</span> messages and 6 notifications.
              </span>
              <ListGroup variant="flush" className="mt-3">
                {activityItems.map((item) => (
                  <ListGroupItem key={item.id} className="d-flex justify-content-between align-items-center border-0 px-0">
                    <div>
                      <Badge bg={item.badgeVariant} text={item.badgeText as 'dark' | 'light' | undefined} className="avatar-xs me-2">
                        <span className="avatar-title fw-medium fs-sm">{item.id}</span>
                      </Badge>
                      {item.text}
                    </div>
                    <span className="text-muted">{item.time}</span>
                  </ListGroupItem>
                ))}
              </ListGroup>
              <div className="text-center mt-2">
                <Button variant="secondary" className="rounded-pill">
                  View Messages
                </Button>
              </div>
            </div>
            <hr className="d-xxl-none border-light m-0" />
          </Col>
          <Col xxl={6} className="order-xl-3 order-xxl-1">
            <div className="px-4 py-3 border-end border-dashed">
              <div className="d-flex justify-content-between mb-3">
                <h4 className="card-title">Revenue</h4>
                <Link to="" className="link-reset text-decoration-underline fw-semibold link-offset-3">
                  View Reports <TbArrowRight />
                </Link>
              </div>
              <Row className="text-center mb-3">
                <Col>
                  <div className="bg-light bg-opacity-50 p-2">
                    <h5 className="m-0">
                      <span className="text-muted">Total Revenue:</span>
                      &nbsp;
                      <CountUp end={40} prefix="$" suffix="M" enableScrollSpy scrollSpyOnce />
                    </h5>
                  </div>
                </Col>
                <Col>
                  <div className="bg-light bg-opacity-50 p-2">
                    <h5 className="m-0">
                      <span className="text-muted">Total Orders:</span>
                      &nbsp;
                      <CountUp end={50.90} decimals={2} suffix="k" enableScrollSpy scrollSpyOnce />
                    </h5>
                  </div>
                </Col>
              </Row>
              <div dir="ltr" className="position-relative">
                <div className="py-2 px-3 rounded-3 bg-light-subtle border text-primary z-1 position-absolute" style={{ top: '4.5%', left: '12%' }}>
                  <p className="mb-2 text-uppercase fs-xxs fw-semibold">Growth Rate</p>
                  <h4 className="mb-0 fw-bold text-primary">
                    89.24% <TbTrendingUp />
                  </h4>
                </div>

                <Suspense>
                  <RevenueChart />
                </Suspense>
              </div>
            </div>
          </Col>
          <Col xxl={3} xl={6} className="order-xl-2 order-xxl-2">
            <div className="p-3">
              <h4 className="card-title mb-1">Project Progress</h4>
              <p className="text-muted fs-xs">You have 21 projects with not completed task.</p>
              <Row className="mt-4">
                <Col lg={12}>
                  <div dir="ltr">
                    <Suspense>
                      <ProjectProgressChart />
                    </Suspense>
                  </div>
                </Col>
              </Row>
            </div>
            <hr className="d-xxl-none border-light m-0" />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default WelcomeRevenueProgress
