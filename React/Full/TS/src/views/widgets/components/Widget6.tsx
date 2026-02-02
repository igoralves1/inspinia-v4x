import { toPascalCase } from '@/helpers/casing'
import { Link } from 'react-router'
import { Card, CardBody, ProgressBar } from 'react-bootstrap'
import type { Widget6Type } from '@/views/widgets/types.ts'

const Widget6 = ({ item }: { item: Widget6Type }) => {
  const { title, progress, status, description } = item
  return (
    <Card>
      <CardBody>
        <div>
          <Link to="#" className="link-reset text-uppercase fw-semibold">
            {title}
          </Link>
          <div className="py-2">
            <span className="fs-xl fw-bold me-2">{progress}%</span>
            <span className="fw-semibold text-muted fs-7">{toPascalCase(status)}</span>
          </div>
        </div>
        <ProgressBar now={progress} variant="success" className="progress-md bg-opacity-25" />
        <div className="mt-2 text-muted">{description}</div>
      </CardBody>
    </Card>
  )
}

export default Widget6
