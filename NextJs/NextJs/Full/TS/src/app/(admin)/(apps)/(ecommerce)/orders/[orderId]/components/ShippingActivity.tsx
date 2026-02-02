import { shippingTimeline } from '@/app/(admin)/(apps)/(ecommerce)/orders/[orderId]/data'
import Link from 'next/link'
import { Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap'

const ShippingActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle as="h4">Shipping Activity</CardTitle>
      </CardHeader>
      <CardBody className="p-4">
        <div className="timeline">
          {shippingTimeline.map((item, idx) => (
            <div key={idx} className="timeline-item d-flex align-items-stretch">
              <div className="timeline-time pe-3 text-muted">{item.time ?? ''}</div>
              <div className={`timeline-dot bg-${item.variant}`} />
              <div className={`timeline-content ps-3 ${idx != shippingTimeline.length - 1 ? 'pb-5' : ''}`}>
                <h5 className="mb-1">{item.title}</h5>
                <p className="mb-1 text-muted">{item.description}</p>
                <p className="mb-1 text-muted fs-xxs">
                  Tracking No:{' '}
                  <Link href="" className="link-primary fw-semibold text-decoration-underline">
                    {item.trackingNo}
                  </Link>
                </p>
                <span className="fw-semibold fs-xxs">By {item.by}</span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

export default ShippingActivity
