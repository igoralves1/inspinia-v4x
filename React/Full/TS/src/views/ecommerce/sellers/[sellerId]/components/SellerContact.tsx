import sellerProfile from '@/assets/images/seller-profile.jpg'
import seller4 from '@/assets/images/sellers/4.png'
import { Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { TbBriefcase, TbCalendarEvent, TbDots, TbLink, TbMail, TbMapPin, TbUser } from 'react-icons/tb'
import { Link } from 'react-router'

const SellerContact = () => {
  return (
    <Card className="card-top-sticky">
      <CardBody className="pt-0">
        <article className="card card-out-of-container border-top-0">
          <div
            className="position-relative card-side-img overflow-hidden rounded-top"
            style={{ height: 180, backgroundImage: `url(${sellerProfile})` }}>
            <div className="p-4 card-img-overlay rounded-start-0 auth-overlay d-flex rounded-top align-items-center justify-content-center"></div>
          </div>
          <CardBody className="pt-0 position-relative" style={{ marginTop: '-40px' }}>
            <div className="d-flex justify-content-between align-items-center rounded border-light p-3 bg-light-subtle border">
              <div className="d-flex justify-content-start align-items-center gap-3">
                <div className="avatar avatar-xxl">
                  <img src={seller4} alt="avatar-2" className="img-fluid img-thumbnail rounded-circle" />
                </div>
                <div>
                  <h4 className="text-nowrap fw-bold mb-1"> TechTonic Store</h4>
                  <p className="text-muted mb-0">Since 2014</p>
                </div>
              </div>
              <div className="d-flex gap-2">
                <Dropdown placement="bottom-end">
                  <DropdownToggle variant="dark" className="btn-icon drop-arrow-none">
                    <TbDots className="fs-24" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Edit Profile</DropdownItem>
                    <DropdownItem className="text-danger">Report</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </CardBody>
        </article>
        <div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
              <TbUser className="fs-xl text-secondary" />
            </div>
            <p className="mb-0 fs-sm">
              Owner: <span className="fw-semibold">Alex Johnson</span>
            </p>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
              <TbBriefcase className="fs-xl text-secondary" />
            </div>
            <p className="mb-0 fs-sm">
              Business Type: <span className="fw-semibold">E-commerce Electronics</span>
            </p>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
              <TbCalendarEvent className="fs-xl text-secondary" />
            </div>
            <p className="mb-0 fs-sm">
              Founded: <span className="fw-semibold">2010</span>
            </p>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
              <TbMapPin className="fs-xl text-secondary" />
            </div>
            <p className="mb-0 fs-sm">
              Location: <span className="fw-semibold">New York, USA</span>
            </p>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
              <TbMail className="fs-xl text-secondary" />
            </div>
            <p className="mb-0 fs-sm">
              Support:{' '}
              <Link to="mailto:support@example.com" className="text-primary fw-semibold">
                support@example.com
              </Link>
            </p>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
              <TbLink className="fs-xl text-secondary" />
            </div>
            <p className="mb-0 fs-sm">
              Website:{' '}
              <Link to="https://www.example.com" className="text-primary fw-semibold">
                www.example.com
              </Link>
            </p>
          </div>
        </div>
      </CardBody>
      <CardBody className="border-top border-dashed">
        <h5 className="mb-3">Contact Seller</h5>
        <form action="#">
          <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={4} placeholder="Enter your messages..." defaultValue={''} />
          </div>
          <div className="text-end">
            <Button variant="primary" type="submit">
              Send Messages
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}

export default SellerContact
