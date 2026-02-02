import { Badge, Card, CardBody, CardHeader } from 'react-bootstrap'
import { Link } from 'react-router'

import { timelineEvents } from '../data'

const ProjectUpdates = () => {
  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">Latest Project Updates</h5>
        <Badge bg="warning" className="fs-xxs p-1">
          8 Notifications
        </Badge>
      </CardHeader>
      <CardBody>
        <div className="timeline timeline-icon-bordered">
          {timelineEvents.map((event) => {
            const IconComponent = event.icon
            return (
              <div key={event.id} className="timeline-item d-flex align-items-stretch">
                <div className="timeline-dot">
                  <IconComponent className={`text-${event.iconColor}`} size={18} />
                </div>
                <div className="timeline-content ps-3">
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-1 fs-base">
                      {event.title}
                      <span className={`badge badge-label badge-soft-${event.tagVariant} ms-2`}>{event.tag}</span>
                    </h5>
                    <span className="text-muted fs-xxs">{event.time}</span>
                  </div>
                  <p className="mb-1 text-muted">{event.description}</p>
                  <div className="d-flex align-items-center gap-2">
                    <img src={event.userImage} alt={event.userName} className="rounded-circle avatar-xxs" />
                    <Link to={event.userLink} className="fw-medium link-reset text-muted">
                      {event.userName}
                    </Link>
                  </div>
                  {event.hasDivider && <hr className="border-dashed" />}
                </div>
              </div>
            )
          })}
        </div>
      </CardBody>
    </Card>
  )
}

export default ProjectUpdates
