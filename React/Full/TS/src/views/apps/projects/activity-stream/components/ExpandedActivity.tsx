import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { Link } from 'react-router'
import { expandedActivities } from '@/views/apps/projects/activity-stream/data.ts'

export const ExpandedActivity = () => {
  return (
    <Card className="card-h-100">
      <CardHeader>
        <h4 className="card-title">Expanded Activity Stream</h4>
      </CardHeader>
      <CardBody>
        <div className="timeline timeline-icon-bordered">
          {expandedActivities.map((event, idx) => {
            const Icon = event.icon
            return (
              <div className="timeline-item d-flex align-items-stretch" key={idx}>
                <div className="timeline-dot">
                  <Icon className={`fs-xl text-${event.variant}`} />
                </div>
                <div className="timeline-content ps-3 pb-3">
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-1">
                      {event.title}
                      <span className={`badge badge-label badge-soft-${event.variant} ms-2`}>{event.label}</span>
                    </h5>
                    <span className="text-muted fs-xs">{event.time}</span>
                  </div>
                  <p className="mb-1 text-muted">{event.description}</p>
                  <div className="d-flex align-items-center gap-2">
                    <img src={event.avatar} alt={event.name} className="rounded-circle avatar-xxs" />
                    <Link to={event.profileUrl} className="fw-semibold link-reset">
                      {event.name}
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardBody>
    </Card>
  )
}

export default ExpandedActivity
