import { Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap'
import { Link } from 'react-router'
import { basicActivities } from '@/views/apps/projects/activity-stream/data.ts'

const BasicActivity = () => {
  return (
    <Card className="card-h-100">
      <CardHeader>
        <CardTitle as="h4">Basic Activity Stream</CardTitle>
      </CardHeader>
      <CardBody>
        {basicActivities.map((activity, idx) => (
          <div className="py-1 d-flex gap-3 align-items-center" key={idx}>
            <span className={`badge badge-label text-bg-${activity.variant}`}>{activity.status}</span>
            <span className="text-muted">{activity.time}</span>
            <Link to="/pages/profile" className="link-reset fw-semibold d-flex align-items-center gap-1">
              <img src={activity.avatar} alt={activity.name} className="rounded-circle avatar-xxs" />
              {activity.name}
            </Link>
            <span>{activity.action}</span>
          </div>
        ))}
      </CardBody>
    </Card>
  )
}
export default BasicActivity
