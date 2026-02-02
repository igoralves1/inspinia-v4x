import { formatBytes } from '@/helpers/file'
import { Link } from 'react-router'
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
import { TbDotsVertical, TbDownload, TbEdit, TbFolder, TbLink, TbPin, TbShare, TbTrash } from 'react-icons/tb'

type FolderType = {
  name: string
  size: number
}

const folders: FolderType[] = [
  { name: 'INSPINIA Multi', size: 2300000000 },
  { name: 'Material Design', size: 105300000 },
  { name: 'DashPro UI Kit', size: 512000000 },
  { name: 'VueStudio Pack', size: 880000000 },
  { name: 'Nextify Pro', size: 1100000000 },
  { name: 'Blazor Studio', size: 780000000 },
  { name: 'Angular Prime', size: 940000000 },
  { name: 'React Kit Pro', size: 1600000000 },
]

const FolderCard = ({ folder }: { folder: FolderType }) => {
  return (
    <Card>
      <CardBody className="p-2">
        <div className="d-flex align-items-center justify-content-between gap-2">
          <div className="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2">
            <span className="avatar-title">
              <TbFolder className="fs-24" />
            </span>
          </div>
          <div className="flex-grow-1">
            <h5 className="mb-1 fs-sm">
              <Link to="" className="link-reset">
                {folder.name}
              </Link>
            </h5>
            <p className="text-muted mb-0 fs-xs">{formatBytes(folder.size)}</p>
          </div>
          <Dropdown align="end" className="flex-shrink-0 text-muted">
            <DropdownToggle as="a" role="button" className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0">
              <TbDotsVertical />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <TbShare className="me-1" /> Share
              </DropdownItem>
              <DropdownItem>
                <TbLink className="me-1" /> Get Sharable Link
              </DropdownItem>
              <DropdownItem>
                <TbDownload className="me-1" />
                Download
              </DropdownItem>
              <DropdownItem>
                <TbPin className="me-1" /> Pin
              </DropdownItem>
              <DropdownItem>
                <TbEdit className="me-1" /> Edit
              </DropdownItem>
              <DropdownItem>
                <TbTrash className="me-1" /> Delete
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </CardBody>
    </Card>
  )
}

const FolderCards = () => {
  return (
    <Row>
      {folders.map((folder, idx) => (
        <Col md={6} lg={4} xxl={3} key={idx}>
          <FolderCard folder={folder} />
        </Col>
      ))}
    </Row>
  )
}

export default FolderCards
