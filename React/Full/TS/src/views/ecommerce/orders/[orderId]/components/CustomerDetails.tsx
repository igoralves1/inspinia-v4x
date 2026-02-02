import { Button, Card, CardBody, CardHeader, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { TbBan, TbDotsVertical, TbEdit, TbMail, TbMapPin, TbPencil, TbPhone, TbShare, TbTrash } from 'react-icons/tb'
import { Link } from 'react-router'

import gbFlag from '@/assets/images/flags/gb.svg'
import user5 from '@/assets/images/users/user-5.jpg'

const CustomerDetails = () => {
  return (
    <Card>
      <CardHeader className="justify-content-between border-dashed">
        <CardTitle as="h4">Customer Details</CardTitle>
        <Button size="sm" className="btn-default btn-icon rounded-circle">
          <TbPencil className="fs-lg" />
        </Button>
      </CardHeader>
      <CardBody>
        <div className="d-flex align-items-center mb-4">
          <div className="me-2">
            <img src={user5} width={44} height={44} alt="avatar" className="rounded-circle avatar-lg" />
          </div>
          <div>
            <h5 className="mb-1 d-flex align-items-center">
              <Link to="/pages/profile" className="link-reset">
                Sophia Carter
              </Link>
              <img src={gbFlag} alt="UK" width={16} height={16} className="ms-2 rounded-circle" />
            </h5>
            <p className="text-muted mb-0">Since 2020</p>
          </div>
          <div className="ms-auto">
            <Dropdown align="end">
              <DropdownToggle variant="link" className="btn-icon btn-ghost-light text-muted drop-arrow-none">
                <TbDotsVertical className="fs-xl" />
              </DropdownToggle>

              <DropdownMenu>
                <DropdownItem>
                  <TbShare className="me-2" />
                  Share
                </DropdownItem>
                <DropdownItem>
                  <TbEdit className="me-2" />
                  Edit
                </DropdownItem>
                <DropdownItem>
                  <TbBan className="me-2" />
                  Block
                </DropdownItem>
                <DropdownItem className="text-danger">
                  <TbTrash className="me-2" />
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <ul className="list-unstyled text-muted mb-0">
          <li className="mb-2">
            <div className="d-flex align-items-center gap-2">
              <div className="avatar-xs avatar-img-size fs-24">
                <span className="avatar-title text-bg-light fs-sm rounded-circle">
                  <TbMail />
                </span>
              </div>
              <h5 className="fs-base mb-0 fw-medium">
                <Link to="" className="link-reset">
                  sophia@designhub.com
                </Link>
              </h5>
            </div>
          </li>
          <li className="mb-2">
            <div className="d-flex align-items-center gap-2">
              <div className="avatar-xs avatar-img-size fs-24">
                <span className="avatar-title text-bg-light fs-sm rounded-circle">
                  <TbPhone />
                </span>
              </div>
              <h5 className="fs-base mb-0 fw-medium">
                <Link to="" className="link-reset">
                  +44 7911 123456
                </Link>
              </h5>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center gap-2">
              <div className="avatar-xs avatar-img-size fs-24">
                <span className="avatar-title text-bg-light fs-sm rounded-circle">
                  <TbMapPin />
                </span>
              </div>
              <h5 className="fs-base mb-0 fw-medium">London, UK</h5>
            </div>
          </li>
        </ul>
      </CardBody>
    </Card>
  )
}

export default CustomerDetails
