import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { TbExternalLink, TbPointFilled } from 'react-icons/tb'
import { Link } from 'react-router'

import CountUp from 'react-countup'
import { statCards } from '../data'

const StatCards = () => {
  return (
    <Row className="row-cols-xxl-5 row-cols-md-3 row-cols-1 align-items-center">
      {statCards.map((card) => {
        const IconComponent = card.icon
        return (
          <Col key={card.id} lg={card.id === 5 ? true : undefined} md={card.id === 5 ? 'auto' : undefined}>
            <Card>
              <CardBody>
                <Link to="" className="text-muted float-end mt-n1 fs-xl">
                  <TbExternalLink />
                </Link>
                <h5 title={card.title}>{card.title}</h5>
                <div className="d-flex align-items-center gap-2 my-3">
                  <div className="avatar-md flex-shrink-0">
                    <span className="avatar-title text-bg-light rounded-circle fs-22">
                      <IconComponent />
                    </span>
                  </div>
                  <h3 className="mb-0">
                    <CountUp
                      end={typeof card.value === 'number' ? card.value : 0}
                      prefix={card.prefix}
                      suffix={card.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </h3>
                  <span
                    className={`badge ${card.badgeVariant === 'light' ? 'text-bg-light' : `badge-soft-${card.badgeVariant}`} fw-medium ms-2 fs-xs ms-auto`}>
                    {card.badgeText}
                  </span>
                </div>
                <p className="mb-0">
                  <span className={`text-${card.pointColor}`}>
                    <TbPointFilled />
                  </span>
                  <span className="text-nowrap text-muted">{card.description}</span>
                  <span className="float-end">
                    <b>{card.total}</b>
                  </span>
                </p>
              </CardBody>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default StatCards
