import { toPascalCase } from '@/helpers/casing'
import clsx from 'clsx'
import { Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ProgressBar, Row } from 'react-bootstrap'
import { Link } from 'react-router'
import { TbBan, TbCalendarTime, TbDotsVertical, TbEdit, TbListCheck, TbMessage2, TbPaperclip, TbShare, TbTrash } from 'react-icons/tb'
import type { ProjectType } from '@/views/apps/projects/projects/data.ts'

const ProjectCard2 = ({ project }: { project: ProjectType }) => {
  const { comments, date, icon: Icon, progress, members, status, task, title, updatedTime, variant, files } = project
  return (
    <Card>
      <CardHeader className="bg-light-subtle border-light p-3">
        <div className="avatar-xl me-3">
          <span className="avatar-title text-bg-light rounded-circle">
            <Icon className={`fs-24 text-${variant}`} />
          </span>
        </div>
        <div>
          <h5 className="mb-1 d-flex align-items-center">
            <Link to="/projects/" className="link-reset">
              {title}
            </Link>
          </h5>
          <p className="text-muted mb-2 fs-xxs">Updated {updatedTime}</p>
          <span
            className={clsx(
              'badge fs-xxs badge-label',
              status === 'delayed' ? 'badge-soft-danger' : status === 'pending-review' ? 'badge-soft-warning' : 'badge-soft-success',
            )}>
            {toPascalCase(status)}
          </span>
        </div>
        <div className="ms-auto">
          <Dropdown>
            <DropdownToggle className="btn btn-icon btn-ghost-light text-muted drop-arrow-none">
              <TbDotsVertical className="fs-xl" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <li>
                <DropdownItem>
                  <TbShare className="me-2" />
                  Share
                </DropdownItem>
              </li>
              <li>
                <DropdownItem>
                  <TbEdit className="me-2" />
                  Edit
                </DropdownItem>
              </li>
              <li>
                <DropdownItem>
                  <TbBan className="me-2" />
                  Block
                </DropdownItem>
              </li>
              <li>
                <DropdownItem className="text-danger">
                  <TbTrash className="me-2" />
                  Delete
                </DropdownItem>
              </li>
            </DropdownMenu>
          </Dropdown>
        </div>
      </CardHeader>
      <CardBody>
        <Row>
          <Col sm={6}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <TbListCheck className="text-muted fs-lg" />
              <h5 className="fs-base mb-0 fw-medium">
                {task.completed}/{task.total}&nbsp;
                {task.new && <span className="badge bg-secondary">+{task.new} New</span>}
              </h5>
            </div>
          </Col>
          <Col sm={6}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <TbPaperclip className="text-muted fs-lg" />
              <h5 className="fs-base mb-0 fw-medium">{files} Files</h5>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <TbMessage2 className="text-muted fs-lg" />
              <h5 className="fs-base mb-0 fw-medium">{comments} Comments</h5>
            </div>
          </Col>
          <Col sm={6}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <TbCalendarTime className="text-muted fs-lg" />
              <h5 className="fs-base mb-0 fw-medium">{date}</h5>
            </div>
          </Col>
        </Row>

        <p className="my-2 text-muted fw-semibold fs-xxs">Team Members:</p>
        <div className="avatar-group avatar-group-xs mb-3">
          {members.map((member, idx) => (
            <div className="avatar" key={idx}>
              <img src={member} alt="" className="rounded-circle avatar-xs" />
            </div>
          ))}
        </div>

        <div className="mt-3">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <p className="mb-0 text-muted fw-semibold fs-xxs">Progress</p>
            <p className="fw-semibold mb-0">{progress}%</p>
          </div>
          <ProgressBar variant={variant} now={progress} style={{ height: '5px' }} />
        </div>
      </CardBody>
    </Card>
  )
}
export default ProjectCard2
