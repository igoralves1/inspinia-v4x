import clsx from 'clsx'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { TbExternalLink, TbPointFilled } from 'react-icons/tb'

import { statsData } from '../data'

const ProductStats = () => {
  return (
    <Row className="row-cols-xxl-5 row-cols-md-3 row-cols-1 align-items-center g-1">
      {statsData.map((stat) => {
        const Icon = stat.icon
        return (
          <Col key={stat.id}>
            <Card className="mb-1">
              <CardBody>
                <a className="text-muted float-end mt-n1 fs-xl">
                  <TbExternalLink size={18} />
                </a>
                <h5 title={stat.title}>{stat.title}</h5>
                <div className="d-flex align-items-center gap-2 my-3">
                  <div className="avatar-md flex-shrink-0">
                    <span className={clsx('avatar-title fs-22 rounded-circle', 'text-bg-' + stat.iconBg)}>
                      <Icon size={22} />
                    </span>
                  </div>
                  <h3 className="mb-0">{stat.value}</h3>
                  <span className={clsx(`badge-soft-${stat.iconBg}`, 'badge fw-medium ms-2 fs-xs ms-auto')}>+{stat.newCount}%</span>
                </div>

                <p className="mb-0">
                  <span className={stat.iconColor}>
                    <TbPointFilled />
                  </span>
                  <span className="text-nowrap text-muted">{stat.metric}</span>
                  <span className="float-end">
                    <b>{stat.metricValue}</b>
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

export default ProductStats
