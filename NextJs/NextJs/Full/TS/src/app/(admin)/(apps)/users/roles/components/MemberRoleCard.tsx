import { MemberRoleType } from '@/app/(admin)/(apps)/users/roles/types'
import Image from 'next/image'
import { Fragment } from 'react'
import { Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { TbCheck, TbClock, TbDotsVertical, TbEdit, TbEye, TbTrash } from 'react-icons/tb'

const MemberRoleCard = ({ member }: { member: MemberRoleType }) => {
  const { icon: Icon, title, users, features, description, updatedTime } = member
  return (
    <Card>
      <CardBody className="d-flex flex-column justify-content-between">
        <div className="d-flex align-items-center mb-4">
          <div className="flex-shrink-0">
            <div className="avatar-xl rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center">
              <Icon className="fs-24 text-primary" />
            </div>
          </div>
          <div className="ms-3">
            <h5 className="mb-2">{title}</h5>
            <p className="text-muted mb-0 fs-base">{description}</p>
          </div>
          <div className="ms-auto">
            <Dropdown align="end">
              <DropdownToggle as="a" href="#" className="text-muted fs-xl drop-arrow-none">
                <TbDotsVertical />
              </DropdownToggle>

              <DropdownMenu>
                <DropdownItem href="#">
                  <TbEye className="me-2" />
                  View
                </DropdownItem>
                <DropdownItem href="#">
                  <TbEdit className="me-2" />
                  Edit
                </DropdownItem>
                <DropdownItem href="#" className="text-danger">
                  <TbTrash className="me-2" />
                  Remove
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <ul className="list-unstyled mb-3">
          {features.map((feature, idx) => (
            <li className={`d-flex align-items-center ${idx !== features.length - 1 ? 'mb-2' : ''}`} key={idx}>
              <TbCheck className="fs-lg text-success me-2" /> {feature}
            </li>
          ))}
        </ul>
        <p className="mb-2 text-muted">Total {users.length} users</p>
        <div className="avatar-group avatar-group-sm mb-3">
          {users.map((user, idx) => (
            <Fragment key={idx}>
              {idx < 4 && (
                <div className="avatar">
                  <Image src={user} className="rounded-circle avatar-sm" alt={`user-${idx + 1}`} />
                </div>
              )}
            </Fragment>
          ))}
          {users.length > 4 && (
            <OverlayTrigger overlay={<Tooltip>{users.length - 4} More</Tooltip>}>
              <div className="avatar avatar-sm">
                <span className="avatar-title text-bg-primary rounded-circle fw-bold"> +{users.length - 4}</span>
              </div>
            </OverlayTrigger>
          )}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-muted fs-xs">
            <TbClock className="me-1" />
            Updated {updatedTime}
          </span>
          <a href="#" className="btn btn-sm btn-outline-primary rounded-pill">
            Details
          </a>
        </div>
      </CardBody>
    </Card>
  )
}

export default MemberRoleCard
