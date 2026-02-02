import { Card, CardBody } from 'react-bootstrap'
import { TbPointFilled } from 'react-icons/tb'
import type { Widget1Type } from '@/views/ecommerce/sellers/[sellerId]/data.ts'

const SellerStatisticWidget = ({ item }: { item: Widget1Type }) => {
  const { title, icon: Icon, totalCount, count, variant, description } = item
  return (
    <Card className={`border-0 bg-${variant} bg-opacity-10`}>
      <CardBody>
        <h5 title="Number of Orders">{title}</h5>
        <div className="d-flex align-items-center gap-2 my-3">
          <div className="avatar-md flex-shrink-0">
            <span className={`avatar-title text-bg-${variant} bg-opacity-90 rounded-circle fs-22`}>
              <Icon />
            </span>
          </div>
          <h3 className="mb-0">
            {count.prefix && count.prefix}
            {count.value}
            {count.suffix && count.suffix}
          </h3>
        </div>
        <p className="mb-0">
          <span className={`text-${variant}`}>
            <TbPointFilled className="me-1" />
          </span>
          <span className="text-nowrap text-muted">{description}</span>
          <span className="float-end">
            <b>{totalCount}</b>
          </span>
        </p>
      </CardBody>
    </Card>
  )
}

export default SellerStatisticWidget
