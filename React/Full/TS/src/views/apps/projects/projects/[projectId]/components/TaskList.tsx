import { toPascalCase } from '@/helpers/casing'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router'
import { TbCalendar, TbListDetails, TbMessage } from 'react-icons/tb'
import { tasks } from '@/views/apps/projects/projects/[projectId]/data.ts'
import type { TaskType } from '@/views/apps/projects/projects/[projectId]/types.ts'

const TaskList = () => {
  const getStatusVariant = (status: TaskType['status']) =>
    status === 'in-progress'
      ? 'warning'
      : status === 'review'
        ? 'info'
        : status === 'delayed'
          ? 'danger'
          : status === 'pending'
            ? 'primary'
            : status === 'planned'
              ? 'secondary'
              : 'success'
  return (
    <>
      {tasks.map((task, idx) => (
        <Card className="mb-1" key={idx}>
          <CardBody className="p-2">
            <Row className="g-3 align-items-center justify-content-between">
              <Col md={6}>
                <div className="d-flex align-items-center gap-2">
                  <input type="checkbox" className="form-check-input rounded-circle mt-0 fs-xl" id={`task${task.id}`} />
                  <Link to="#" className="link-reset fw-medium">
                    {task.title}
                  </Link>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-center gap-3 justify-content-md-end">
                  <div className="d-flex align-items-center gap-1">
                    <div className="avatar avatar-xs">
                      <img src={task.avatar} alt={task.name} className="img-fluid rounded-circle" />
                    </div>
                    <div>
                      <h5 className="text-nowrap mb-0 lh-base">
                        <Link to="/pages/profile" className="link-reset">
                          {task.name}
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className={`badge badge-label text-bg-${getStatusVariant(task.status)}`}>{toPascalCase(task.status)}</span>
                  </div>
                  <ul className="list-inline fs-base text-end flex-shrink-0 mb-0">
                    <li className="list-inline-item">
                      <div className="d-flex align-items-center gap-1">
                        <TbCalendar className="text-muted fs-lg me-1" />
                        <span className="fw-semibold">{task.time}</span>
                      </div>
                    </li>
                    <li className="list-inline-item ms-1">
                      <div className="d-flex align-items-center gap-1">
                        <TbListDetails className="text-muted fs-lg me-1" />
                        <span className="fw-medium">
                          {task.tasks.completed}/{task.tasks.total}
                        </span>
                      </div>
                    </li>
                    <li className="list-inline-item ms-1">
                      <div className="d-flex align-items-center gap-1">
                        <TbMessage className="text-muted fs-lg me-1" />
                        <span className="fw-medium">{task.comments}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      ))}
    </>
  )
}

export default TaskList
