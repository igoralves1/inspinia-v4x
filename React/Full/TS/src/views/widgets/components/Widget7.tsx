import { Card, CardBody } from 'react-bootstrap'
import CountUp from 'react-countup'
import type { Widget7Type } from '@/views/widgets/types.ts'

const Widget7 = ({ item }: { item: Widget7Type }) => {
  const { count, variant, title, icon: Icon } = item
  return (
    <Card>
      <CardBody>
        <div className="avatar-xl mb-3">
          <span className={`avatar-title bg-${variant}-subtle text-${variant} rounded-circle fs-24 d-flex`}>
            <Icon className="d-flex" />
          </span>
        </div>
        <h3 className="mb-1">
          <CountUp prefix={count.prefix} suffix={count.suffix} end={count.value} duration={1} enableScrollSpy scrollSpyOnce />
        </h3>
        <p className="mb-0 text-muted">{title}</p>
      </CardBody>
    </Card>
  )
}
export default Widget7
