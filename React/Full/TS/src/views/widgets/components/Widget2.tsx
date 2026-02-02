import clsx from 'clsx'
import { ProgressBar } from 'react-bootstrap'
import type { Widget2Type } from '@/views/widgets/types.ts'

const Widget2 = ({ item }: { item: Widget2Type }) => {
  const { count, variant, isPositive, percentage, percentageIcon: Icon, title } = item
  return (
    <div
      className={clsx(
        'card rounded-0 border shadow-none border-dashed mb-0',
        item.variant ? `bg-opacity-10 bg-${item.variant} border-${item.variant}` : '',
      )}>
      <div className="card-body">
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <h5 className="fs-xl mb-0">
            {count.prefix || ''}
            {count.value}
            {count.suffix && <small className="fs-6">{count.suffix}</small>}
          </h5>
          <span>
            {percentage}%{Icon && <Icon className={isPositive ? 'text-success' : 'text-danger'} />}
          </span>
        </div>
        <p className="text-muted mb-2">
          <span>{title}</span>
        </p>
        <ProgressBar now={percentage} className="progress-sm mb-0" variant={variant ? variant : 'primary'} />
      </div>
    </div>
  )
}

export default Widget2
