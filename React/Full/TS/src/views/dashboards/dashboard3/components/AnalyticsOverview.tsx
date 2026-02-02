import clsx from 'clsx'
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'
import { TbDownload } from 'react-icons/tb'

import CountUp from 'react-countup'
import { analyticsCardsData } from '../data'
import { AnalyticsOverViewChart } from './charts'

const AnalyticsOverview = () => {
  return (
    <Card>
      <CardBody className="p-0">
        <Row className="g-0">
          <Col xxl={3} className="order-2 order-xxl-1">
            <Row className="g-0">
              {analyticsCardsData.map(({ icon: Icon, isPositive, percentage, title, unit, value, percentageIcon: PercentageIcon }, idx) => (
                <Col lg={6} xl={6} xxl={12} key={title}>
                  <div className={clsx('p-3 rounded m-1 border border-dashed', idx !== 0 && 'mt-xxl-0 ')}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h3 className="mb-1">
                          <span>
                            <CountUp duration={1} end={value} enableScrollSpy scrollSpyOnce />
                          </span>
                          {unit}
                          <span className={clsx('fs-base', isPositive ? 'text-success' : 'text-danger')}>
                            {isPositive ? '+' : '-'}
                            {percentage}% <PercentageIcon size={13} />
                          </span>
                        </h3>
                        <p className="mb-0 text-muted">{title}</p>
                      </div>
                      <div className="avatar-xl">
                        <span className="avatar-title text-bg-light rounded-circle">
                          <Icon size={27} className="text-muted" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col xxl={9} className="order-1 order-xxl-2 border-start border-dashed">
            <CardHeader className="justify-content-between border-dashed">
              <CardTitle as="h4" className="mb-0">
                Analytics Overview
              </CardTitle>

              <div className="d-flex flex-wrap gap-1">
                <Button variant="primary" size="sm">
                  <TbDownload size={13} className="fs-2 me-1" /> Export CSV
                </Button>
              </div>
            </CardHeader>
            <CardBody className="pb-0">
              <div dir="ltr">
                <AnalyticsOverViewChart />
              </div>
            </CardBody>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default AnalyticsOverview
