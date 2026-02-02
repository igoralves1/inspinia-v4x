import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { Link } from 'react-router'

import profileBg from '@/assets/images/profile-bg.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import { TbDots } from 'react-icons/tb'

const ProfileCard = () => {
  return (
    <div className="card border-top-0">
      <div
        className="position-relative card-side-img overflow-hidden rounded-top"
        style={{
          height: '180px',
          backgroundImage: `url(${profileBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="p-4 card-img-overlay rounded-start-0 auth-overlay d-flex rounded-top align-items-center justify-content-center">
          <h5 className="text-white m-0 fst-italic">"Welcome!"</h5>
        </div>
      </div>

      <div className="card-body position-relative">
        <div className="d-flex justify-content-start gap-3">
          <div className="avatar avatar-xxl" style={{ marginTop: '-60px' }}>
            <Link to="/pages/profile">
              <img src={user2} alt="User Profile" className="img-fluid img-thumbnail rounded-circle" />
            </Link>
          </div>
          <div>
            <h4 className="text-nowrap fw-bold mb-1">
              <Link to="/pages/profile" className="text-reset text-decoration-none">
                Damian D.
              </Link>
            </h4>
            <p className="text-muted mb-0">Member since Jan 2021</p>
          </div>
          <Dropdown style={{ marginTop: '-40px' }} className="ms-auto">
            <DropdownToggle className="btn btn-icon btn-primary rounded-circle  drop-arrow-none">
              <TbDots className="fs-24" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <li>
                <DropdownItem>Edit Profile</DropdownItem>
              </li>
              <li>
                <DropdownItem className="text-danger">Report</DropdownItem>
              </li>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
export default ProfileCard
