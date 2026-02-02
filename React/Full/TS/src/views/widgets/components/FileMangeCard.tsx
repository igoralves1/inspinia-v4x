import { formatBytes } from '@/helpers/file'
import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { Link } from 'react-router'
import { TbDownload, TbPlus } from 'react-icons/tb'
import { fileItems } from '@/views/widgets/data.ts'

const FileManageCard = () => {
  return (
    <Card>
      <CardHeader className="d-flex align-items-center justify-content-between">
        <h4 className="card-title mb-0">File Manage</h4>
        <Link to="#" className="btn btn-light btn-sm btn-icon rounded-circle" title="Add New">
          <TbPlus />
        </Link>
      </CardHeader>

      <CardBody>
        {fileItems.map((file, idx) => {
          const isLast = idx === fileItems.length - 1
          const Icon = file.icon
          return (
            <div key={idx} className={`d-flex justify-content-between align-items-center${!isLast ? ' pb-2' : ''}`}>
              <div className="d-flex align-items-center py-1 gap-2">
                <div className="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2 d-flex align-items-center justify-content-center">
                  <span className="avatar-title">
                    <Icon className="fs-xl" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-1 fs-base">
                    <Link to="#" className="link-reset">
                      {file.name}
                    </Link>
                  </h5>
                  <p className="text-muted mb-0 fs-xs">{formatBytes(file.size)}</p>
                </div>
              </div>

              <div className="avatar-group avatar-group-xs">
                {file.users.map((user, i) => (
                  <div className="avatar" key={i}>
                    <img src={user} className="rounded-circle avatar-xs" alt="" />
                  </div>
                ))}
              </div>

              <div>
                <Link to="#" className="btn btn-sm btn-icon btn-default" title="Download">
                  <TbDownload className="fs-lg" />
                </Link>
              </div>
            </div>
          )
        })}
      </CardBody>
    </Card>
  )
}

export default FileManageCard
