import { Link } from 'react-router'
import { Card, CardBody } from 'react-bootstrap'
import { TbExternalLink, TbPointFilled } from 'react-icons/tb'
import type { Widget3Type } from '@/views/widgets/types.ts'
import CountUp from 'react-countup'

const Widget3 = ({ item }: { item: Widget3Type }) => {
  const { count, totalCount, label, description, variant, title, icon: Icon } = item
  return (
    <Card>
      <CardBody>
        <Link to="#" className="text-muted float-end mt-n1 fs-xl">
          <TbExternalLink />
        </Link>
        <h5 title="Number of Tasks">{title}</h5>
        <div className="d-flex align-items-center gap-2 my-3">
          <div className="avatar-md flex-shrink-0">
            <span className={`avatar-title text-bg-${variant} rounded-circle fs-22 d-flex align-items-center justify-content-center`}>
              {Icon && <Icon className="d-flex align-items-center" />}
            </span>
          </div>
          <h3 className="mb-0">
            <CountUp prefix={count.prefix} suffix={count.suffix} end={count.value} duration={1} enableScrollSpy scrollSpyOnce />
          </h3>
          <span className={`badge badge-soft-${variant} fw-medium ms-2 fs-xs ms-auto`}>{label}</span>
        </div>
        <p className="d-flex align-items-center gap-1 mb-0">
          <TbPointFilled className={`text-${variant}`} />
          <span className="text-nowrap text-muted"> {description}</span>
          <span className="ms-auto">
            <b>{totalCount}</b>
          </span>
        </p>
      </CardBody>
    </Card>
  )
}
export default Widget3
