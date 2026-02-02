import { ContactType } from '@/app/(admin)/(apps)/users/contacts/data'
import { generateInitials } from '@/helpers/casing'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { TbBan, TbDotsVertical, TbEdit, TbLink, TbMail, TbMapPin, TbPhone, TbRefresh, TbShare, TbStar, TbTrash } from 'react-icons/tb'

const ContactCard = ({ contact }: { contact: ContactType }) => {
  const { flag, email, variant, location, mobileNo, position, name, url, role, avatar, updatedTime } = contact
  return (
    <Card className="card-h-100">
      <CardBody>
        <div className="d-flex align-items-center mb-4">
          <div className="me-3 position-relative">
            {avatar ? (
              <Image src={avatar} alt="avatar" className="rounded-circle" width={72} height={72} />
            ) : (
              <div className="avatar rounded-circle flex-shrink-0" style={{ width: '72px', height: '72px' }}>
                <span className={`avatar-title text-bg-primary fw-semibold rounded-circle fs-22`}>{generateInitials(name)}</span>
              </div>
            )}
            <span className={`position-absolute bottom-0 end-0 badge bg-${variant} rounded-circle p-1 shadow-sm`} title="Rating 4.8">
              <TbStar className="text-white" />
            </span>
          </div>
          <div>
            <h5 className="mb-1 d-flex align-items-center">
              <Link href="/pages/profile" className="link-reset">
                {name}
              </Link>
              <Image src={flag} alt="UK" className="ms-2 rounded-circle" height={16} />
            </h5>
            <p className="text-muted mb-1">{position}</p>
            <span className="badge text-bg-light badge-label">{role}</span>
          </div>
          <div className="ms-auto">
            <Dropdown placement="right-start">
              <DropdownToggle className="btn btn-icon btn-ghost-light text-muted drop-arrow-none">
                <TbDotsVertical className="fs-xl" />
              </DropdownToggle>
              <DropdownMenu as="ul">
                <li>
                  <DropdownItem href="#">
                    <TbShare className="me-2" />
                    Share
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem href="#">
                    <TbEdit className="me-2" />
                    Edit
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem href="#">
                    <TbBan className="me-2" />
                    Block
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem className="text-danger" href="#">
                    <TbTrash className="me-2" />
                    Delete
                  </DropdownItem>
                </li>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <ul className="list-unstyled text-muted mb-4">
          <li className="mb-2">
            <div className="d-flex align-items-center gap-2">
              <div className="avatar-xs avatar-img-size fs-24">
                <span className="avatar-title text-bg-light fs-sm rounded-circle">
                  <TbMail />
                </span>
              </div>
              <h5 className="fs-base mb-0 fw-medium">
                <a href="#" className="link-reset">
                  {email}
                </a>
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
                <a href="#" className="link-reset">
                  {mobileNo}
                </a>
              </h5>
            </div>
          </li>
          <li className="mb-2">
            <div className="d-flex align-items-center gap-2">
              <div className="avatar-xs avatar-img-size fs-24">
                <span className="avatar-title text-bg-light fs-sm rounded-circle">
                  <TbMapPin />
                </span>
              </div>
              <h5 className="fs-base mb-0 fw-medium">{location}</h5>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center gap-2">
              <div className="avatar-xs avatar-img-size fs-24">
                <span className="avatar-title text-bg-light fs-sm rounded-circle">
                  <TbLink />
                </span>
              </div>
              <h5 className="fs-base mb-0 fw-medium">
                <a href="#">{url}</a>
              </h5>
            </div>
          </li>
        </ul>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-muted fs-xs">
            <TbRefresh className="me-1" />
            Updated {updatedTime}
          </span>
          <Link href="/pages/profile" className="btn btn-soft-primary btn-sm rounded-pill">
            View Profile
          </Link>
        </div>
      </CardBody>
    </Card>
  )
}
export default ContactCard
