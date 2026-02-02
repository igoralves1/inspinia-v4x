import type { Widget5Type } from '@/views/widgets/types.ts'
import CountUp from 'react-countup'

const Widget5 = ({ item }: { item: Widget5Type }) => {
  const { count, variant, title, icon: Icon } = item
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="mb-1">
              <CountUp prefix={count.prefix} suffix={count.suffix} end={count.value} duration={1} enableScrollSpy scrollSpyOnce />
            </h3>
            <p className="mb-0 text-muted">{title}</p>
          </div>
          <div className="avatar fs-60 avatar-img-size flex-shrink-0">
            <span className={`avatar-title bg-${variant}-subtle text-${variant} rounded-circle fs-32 d-flex`}>
              <Icon className="d-flex" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Widget5
