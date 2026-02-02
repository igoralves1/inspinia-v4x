import { Suspense } from 'react'
import { Badge, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'

import CountUp from 'react-countup'
import { DonutChart } from '@/views/dashboards/dashboard/components/charts.tsx'
import { cardData } from '../data'

const EcomStats = () => {
  return (
    <Row xs={1} md={2} xxl={4}>
      {cardData.map((item, index) => (
        <Col key={index}>
          <Card>
            <CardHeader className="d-flex border-dashed justify-content-between align-items-center">
              <CardTitle as="h5">{item.title}</CardTitle>
              <Badge bg={item.badgeColor} className={`bg-opacity-10 text-${item.badgeColor}`}>
                {item.badgeText}
              </Badge>
            </CardHeader>
            <CardBody>
              <div className="d-flex justify-content-between align-items-center text-nowrap">
                <div className="flex-grow-1">
                  <Suspense>
                    <DonutChart />
                  </Suspense>
                </div>

                <div className="text-end">
                  <h3 className="mb-2 fw-normal">
                    {item?.prefix}
                    <CountUp duration={1} end={item.targetValue} enableScrollSpy scrollSpyOnce />
                    {item?.suffix}
                  </h3>
                  <p className="mb-0 text-muted">
                    <span>{item.metric}</span>
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default EcomStats
