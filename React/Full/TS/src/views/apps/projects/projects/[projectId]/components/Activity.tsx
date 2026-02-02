import { TbLink } from 'react-icons/tb'
import { activities } from '@/views/apps/projects/projects/[projectId]/data.ts'
import { Link } from 'react-router'

const Activity = () => {
  return (
    <>
      {activities.map((activity, idx) => (
        <div key={idx} className={`d-flex gap-1 border-bottom ${idx === 0 ? 'pb-3' : 'py-3'} border-dashed`}>
          <div className="me-2 flex-shrink-0">
            <img src={activity.avatar} className="avatar-md rounded-circle" alt={activity.name} />
          </div>
          <div className="flex-grow-1 text-muted position-relative">
            <span className="fw-medium text-body">{activity.name}</span> {activity.action}
            <p className="fs-xs mb-0 text-body-secondary">{activity.datetime}</p>
            {activity.extra?.type === 'button' && (
              <Link to={activity.extra.url ?? '#'} className="btn btn-default border px-1 py-0 mt-2">
                <TbLink className="me-1" />
                {activity.extra.label}
              </Link>
            )}
            {activity.extra?.type === 'message' && <div className="py-2 px-3 bg-light bg-opacity-50 mt-2">&quot;{activity.extra.message}&quot;</div>}
          </div>
          <p className="fs-xs flex-shrink-0 text-body-secondary">{activity.timeAgo}</p>
        </div>
      ))}

      <div className="d-flex align-items-center justify-content-center gap-2 p-3">
        <strong>Loading...</strong>
        <div className="spinner-border spinner-border-sm text-danger" role="status" aria-hidden="true"></div>
      </div>
    </>
  )
}
export default Activity
