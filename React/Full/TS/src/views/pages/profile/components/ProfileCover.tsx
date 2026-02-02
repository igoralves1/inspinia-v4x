import profileBg from '@/assets/images/profile-bg.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import { Button, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { TbDots } from 'react-icons/tb'

const ProfileCover = () => {
  return (
    <article className="card card-out-of-container border-top-0">
      <div className="position-relative card-side-img overflow-hidden" style={{ height: '250px', backgroundImage: `url(${profileBg})` }}>
        <div className="p-4 card-img-overlay rounded-start-0 auth-overlay d-flex align-items-center justify-content-center">
          <h3 className="text-white mb-0 fst-italic">"Designing the future, one template at a time"</h3>
        </div>
      </div>

      <CardBody>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-start align-items-center gap-3">
            <div className="avatar avatar-xxl">
              <img src={user2} width={80} height={80} alt="avatar-2" className="img-fluid img-thumbnail rounded-circle" />
            </div>
            <div>
              <h4 className="text-nowrap fw-bold mb-1"> Damian D. </h4>
              <p className="text-muted mb-1">Product Designer</p>
              <span className="badge badge-soft-primary fw-medium ms-2 fs-xs ms-auto">Author</span>
            </div>
          </div>
          <div className="d-flex gap-2">
            <Button className="btn-outline-primary">Follow</Button>
            <Button variant="primary">Message</Button>
            <Dropdown align="end">
              <DropdownToggle variant="dark" className="btn-icon  drop-arrow-none">
                <TbDots className="fs-24" />
              </DropdownToggle>

              <DropdownMenu>
                <DropdownItem>Edit Profile</DropdownItem>
                <DropdownItem>Report</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </CardBody>
    </article>
  )
}

export default ProfileCover
