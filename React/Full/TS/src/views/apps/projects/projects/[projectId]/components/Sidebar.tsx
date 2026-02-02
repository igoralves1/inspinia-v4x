import clsx from 'clsx'
import { Card, CardBody } from 'react-bootstrap'
import { Link } from 'react-router'
import { LuCalendarClock } from 'react-icons/lu'
import { TbDownload, TbMessage, TbPlus } from 'react-icons/tb'
import { formatBytes } from '@/helpers/file'
import { files, teamMembers } from '@/views/apps/projects/projects/[projectId]/data.ts'

const Sidebar = () => {
  return (
    <Card className="card-h-100 rounded-0 rounded-end">
      <CardBody className="p-0">
        <div className="p-3 border-bottom border-dashed">
          <h5 className="mb-2">Status</h5>
          <div className="app-search">
            <select className="form-select form-control my-1 my-md-0">
              <option>Status</option>
              <option value="On Track">On Track</option>
              <option value="Delayed">Delayed</option>
              <option value="At Risk">At Risk</option>
              <option value="Completed">Completed</option>
            </select>
            <LuCalendarClock className="app-search-icon text-muted" />
          </div>
        </div>

        <div className="p-3 border-bottom border-dashed">
          <div className="d-flex mb-3 justify-content-between align-items-center">
            <h5 className="mb-0">Team Members:</h5>
            <Link to="#" className="btn btn-light btn-sm btn-icon rounded-circle">
              <TbPlus />
            </Link>
          </div>

          {teamMembers.map((member, idx) => (
            <div className={clsx('d-flex justify-content-between align-items-center', { 'pb-2': idx !== teamMembers.length - 1 })} key={idx}>
              <div className="d-flex align-items-center py-1 gap-2">
                <div className="avatar avatar-sm">
                  <img src={member.avatar} alt="avatar-3" className="img-fluid rounded-circle" />
                </div>
                <div>
                  <h5 className="text-nowrap mb-0 lh-base">
                    <Link to="/pages/profile" className="link-reset">
                      {member.name}
                    </Link>
                  </h5>
                  <p className="text-muted fs-xxs mb-0">{member.role}</p>
                </div>
              </div>
              <div>
                <Link to="#" className="btn btn-sm btn-icon btn-default" title="Message">
                  <TbMessage className="fs-lg" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="px-3 pt-3 border-bottom border-dashed">
          <div className="d-flex mb-3 justify-content-between align-items-center">
            <h5 className="mb-0">Files:</h5>
            <Link to="#" className="btn btn-light btn-sm btn-icon rounded-circle">
              <TbPlus />
            </Link>
          </div>

          {files.map(({ name, size, icon: Icon }, idx) => (
            <div className="d-flex justify-content-between align-items-center pb-2" key={idx}>
              <div className="d-flex align-items-center py-1 gap-2">
                <div className="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2">
                  <span className="avatar-title">
                    <Icon className="fs-xl" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-1 fs-base">
                    <Link to="#" className="link-reset">
                      {name}
                    </Link>
                  </h5>
                  <p className="text-muted mb-0 fs-xs">{formatBytes(size)}</p>
                </div>
              </div>
              <div>
                <Link to="#" className="btn btn-sm btn-icon btn-default" title="Download">
                  <TbDownload className="fs-lg" />
                </Link>
              </div>
            </div>
          ))}

          <div className="d-flex align-items-center justify-content-center gap-2 p-3">
            <strong>Loading...</strong>
            <div className="spinner-border spinner-border-sm text-danger" role="status" aria-hidden="true"></div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default Sidebar
