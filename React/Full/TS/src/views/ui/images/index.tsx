import small1 from '@/assets/images/stock/small-1.jpg'
import small2 from '@/assets/images/stock/small-2.jpg'
import small5 from '@/assets/images/stock/small-5.jpg'
import user1 from '@/assets/images/users/user-1.jpg'
import user10 from '@/assets/images/users/user-10.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'
import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Card, CardBody, CardHeader, CardTitle, Col, Container, Row } from 'react-bootstrap'

const ImagesShapes = () => {
  return (
    <ComponentCard title="Images Shapes">
      <p className="text-muted">Avatars with different sizes and shapes.</p>
      <Row>
        <Col sm={2} className="text-center">
          <img src={small1} alt="image" className="img-fluid" />
          <p className="mb-0 mt-2">
            <code>.img-fluid</code>
          </p>
        </Col>
        <Col sm={2} className="text-center">
          <img src={small2} alt="image" className="img-fluid rounded" />
          <p className="mb-0 mt-2">
            <code>.rounded</code>
          </p>
        </Col>
        <Col sm={2} className="text-center">
          <img src={user2} alt="image" className="img-fluid rounded" width={120} />
          <p className="mb-0 mt-2">
            <code>.rounded</code>
          </p>
        </Col>
        <Col sm={2} className="text-center">
          <img src={user7} alt="image" className="img-fluid rounded-circle" width={120} />
          <p className="mb-0 mt-2">
            <code>.rounded-circle</code>
          </p>
        </Col>
        <Col sm={2} className="text-center">
          <img src={small5} alt="image" className="img-fluid img-thumbnail" />
          <p className="mb-0 mt-2">
            <code>.img-thumbnail</code>
          </p>
        </Col>
        <Col sm={2} className="text-center">
          <img src={user8} alt="image" className="img-fluid rounded-circle img-thumbnail" width={120} />
          <p className="mb-0 mt-2">
            <code>.rounded-circle .img-thumbnail</code>
          </p>
        </Col>
      </Row>
    </ComponentCard>
  )
}

const AvatarSizes = () => {
  return (
    <ComponentCard title="Avatar Sizes">
      <Row className="text-center">
        <Col>
          <img src={user2} alt="image" className="img-fluid avatar-xs rounded" />
          <p className="mt-2">
            <code>.avatar-xs</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-xs mx-auto">
            <span className="avatar-title text-bg-primary rounded">xs</span>
          </div>
          <p className="mt-2">
            <code>.avatar-xs</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-xs mx-auto">
            <span className="avatar-title bg-primary-subtle text-primary rounded">xs</span>
          </div>
          <p className="mt-2">
            <code>.avatar-xs</code>
          </p>
        </Col>
      </Row>
      <Row className="text-center mt-3">
        <Col>
          <img src={user3} alt="image" className="img-fluid avatar-sm rounded" />
          <p className="mt-2">
            <code>.avatar-sm</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-sm mx-auto">
            <span className="avatar-title text-bg-primary rounded">sm</span>
          </div>
          <p className="mt-2">
            <code>.avatar-sm</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-sm mx-auto">
            <span className="avatar-title bg-primary-subtle text-primary rounded">sm</span>
          </div>
          <p className="mt-2">
            <code>.avatar-sm</code>
          </p>
        </Col>
      </Row>
      <Row className="text-center mt-3">
        <Col>
          <img src={user4} alt="image" className="img-fluid avatar-md rounded" />
          <p className="mt-2">
            <code>.avatar-md</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-md mx-auto">
            <span className="avatar-title text-bg-primary rounded">md</span>
          </div>
          <p className="mt-2">
            <code>.avatar-md</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-md mx-auto">
            <span className="avatar-title bg-primary-subtle text-primary rounded">md</span>
          </div>
          <p className="mt-2">
            <code>.avatar-md</code>
          </p>
        </Col>
      </Row>
      <Row className="text-center mt-3">
        <Col>
          <img src={user5} alt="image" className="img-fluid avatar-lg rounded" />
          <p className="mt-2">
            <code>.avatar-lg</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-lg mx-auto">
            <span className="avatar-title text-bg-primary rounded">LG</span>
          </div>
          <p className="mt-2">
            <code>.avatar-lg</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-lg mx-auto">
            <span className="avatar-title bg-primary-subtle text-primary rounded">LG</span>
          </div>
          <p className="mt-2">
            <code>.avatar-lg</code>
          </p>
        </Col>
      </Row>
      <Row className="text-center mt-3">
        <Col>
          <img src={user6} alt="image" className="img-fluid avatar-xl rounded" />
          <p className="mt-2">
            <code>.avatar-xl</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-xl mx-auto">
            <span className="avatar-title text-bg-primary rounded">XL</span>
          </div>
          <p className="mt-2">
            <code>.avatar-xl</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-xl mx-auto">
            <span className="avatar-title bg-primary-subtle text-primary rounded">XL</span>
          </div>
          <p className="mt-2">
            <code>.avatar-xl</code>
          </p>
        </Col>
      </Row>
    </ComponentCard>
  )
}

const AvatarSizeswithRounded = () => {
  return (
    <ComponentCard title="Avatar Sizes with Rounded">
      <Row className="text-center">
        <Col>
          <img src={user7} alt="image" className="img-fluid avatar-xs rounded-circle" />
          <p className="mt-2">
            <code>.avatar-xs</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-xs mx-auto">
            <span className="avatar-title text-bg-info rounded-circle">xs</span>
          </div>
          <p className="mt-2">
            <code>.avatar-xs</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-xs mx-auto">
            <span className="avatar-title bg-info-subtle text-info rounded-circle">xs</span>
          </div>
          <p className="mt-2">
            <code>.avatar-xs</code>
          </p>
        </Col>
      </Row>
      <Row className="text-center mt-3">
        <Col>
          <img src={user8} alt="image" className="img-fluid avatar-sm rounded-circle" />
          <p className="mt-2">
            <code>.avatar-sm</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-sm mx-auto">
            <span className="avatar-title text-bg-info rounded-circle">sm</span>
          </div>
          <p className="mt-2">
            <code>.avatar-sm</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-sm mx-auto">
            <span className="avatar-title bg-info-subtle text-info rounded-circle">sm</span>
          </div>
          <p className="mt-2">
            <code>.avatar-sm</code>
          </p>
        </Col>
      </Row>
      <Row className="text-center mt-3">
        <Col>
          <img src={user9} alt="image" className="img-fluid avatar-md rounded-circle" />
          <p className="mt-2">
            <code>.avatar-md</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-md mx-auto">
            <span className="avatar-title text-bg-info rounded-circle">md</span>
          </div>
          <p className="mt-2">
            <code>.avatar-md</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-md mx-auto">
            <span className="avatar-title bg-info-subtle text-info rounded-circle">md</span>
          </div>
          <p className="mt-2">
            <code>.avatar-md</code>
          </p>
        </Col>
      </Row>
      <Row className="text-center mt-3">
        <Col>
          <img src={user10} alt="image" className="img-fluid avatar-lg rounded-circle" />
          <p className="mt-2">
            <code>.avatar-lg</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-lg mx-auto">
            <span className="avatar-title text-bg-info rounded-circle">LG</span>
          </div>
          <p className="mt-2">
            <code>.avatar-lg</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-lg mx-auto">
            <span className="avatar-title bg-info-subtle text-info rounded-circle">LG</span>
          </div>
          <p className="mt-2">
            <code>.avatar-lg</code>
          </p>
        </Col>
      </Row>
      <Row className="text-center mt-3">
        <Col>
          <img src={user1} alt="image" className="img-fluid avatar-xl rounded-circle" />
          <p className="mt-2">
            <code>.avatar-xl</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-xl mx-auto">
            <span className="avatar-title text-bg-info rounded-circle">XL</span>
          </div>
          <p className="mt-2">
            <code>.avatar-xl</code>
          </p>
        </Col>
        <Col>
          <div className="avatar-xl mx-auto">
            <span className="avatar-title bg-info-subtle text-info rounded-circle">XL</span>
          </div>
          <p className="mt-2">
            <code>.avatar-xl</code>
          </p>
        </Col>
      </Row>
    </ComponentCard>
  )
}

const AvatarGroups = () => {
  return (
    <ComponentCard title="Avatar Groups">
      <Row className="">
        <Col xl={3}>
          <div className="avatar-group">
            <div className="avatar">
              <img src={user4} alt="" className="rounded-circle avatar-sm" />
            </div>
            <div className="avatar">
              <img src={user5} alt="" className="rounded-circle avatar-sm" />
            </div>
            <div className="avatar">
              <img src={user3} alt="" className="rounded-circle avatar-sm" />
            </div>
            <div className="avatar">
              <img src={user8} alt="" className="rounded-circle avatar-sm" />
            </div>
            <div className="avatar">
              <img src={user2} alt="" className="rounded-circle avatar-sm" />
            </div>
          </div>
        </Col>
        <Col xl={3}>
          <div className="avatar-group">
            <div className="avatar avatar-md">
              <span className="avatar-title text-bg-purple rounded-circle fw-bold">D</span>
            </div>
            <div className="avatar avatar-md">
              <span className="avatar-title text-bg-primary rounded-circle fw-bold">K</span>
            </div>
            <div className="avatar avatar-md">
              <span className="avatar-title text-bg-secondary rounded-circle fw-bold">H</span>
            </div>
            <div className="avatar avatar-md">
              <span className="avatar-title text-bg-warning rounded-circle fw-bold">L</span>
            </div>
            <div className="avatar avatar-md">
              <span className="avatar-title text-bg-info rounded-circle fw-bold">G</span>
            </div>
          </div>
        </Col>
        <Col xl={3}>
          <div className="avatar-group">
            <div className="avatar avatar-lg">
              <span className="avatar-title bg-purple-subtle text-purple rounded-circle fw-bold shadow">D</span>
            </div>
            <div className="avatar avatar-lg">
              <span className="avatar-title bg-primary-subtle text-primary rounded-circle fw-bold shadow">K</span>
            </div>
            <div className="avatar avatar-lg">
              <span className="avatar-title bg-secondary-subtle text-secondary rounded-circle fw-bold shadow">H</span>
            </div>
            <div className="avatar avatar-lg">
              <span className="avatar-title bg-warning-subtle text-warning rounded-circle fw-bold shadow">L</span>
            </div>
            <div className="avatar avatar-lg">
              <span className="avatar-title bg-info-subtle text-info rounded-circle fw-bold shadow">G</span>
            </div>
          </div>
        </Col>
        <Col xl={3}>
          <div className="avatar-group">
            <div className="avatar">
              <img src={user10} alt="" className="rounded-circle avatar-xl" />
            </div>
            <div className="avatar avatar-xl">
              <span className="avatar-title text-bg-info rounded-circle fs-xl fw-bold">D</span>
            </div>
            <div className="avatar">
              <img src={user7} alt="" className="rounded-circle avatar-xl" />
            </div>
            <div className="avatar">
              <img src={user1} alt="" className="rounded-circle avatar-xl" />
            </div>
            <div className="avatar avatar-xl">
              <span className="avatar-title fs-xl text-bg-danger rounded-circle fw-bold">9+</span>
            </div>
          </div>
        </Col>
      </Row>
    </ComponentCard>
  )
}

const page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Images" subtitle="UI" />
        <Container fluid="xl">
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <CardTitle as={'h4'}>Images &amp; Avatars</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="text-muted mb-0">Here are custom examples of images and avatars for your reference.</p>
                </CardBody>
              </Card>
            </Col>
            <Col xl={12}>
              <ImagesShapes />
            </Col>
            <Col xxl={6}>
              <AvatarSizes />
            </Col>
            <Col xxl={6}>
              <AvatarSizeswithRounded />
            </Col>
            <Col xxl={12}>
              <AvatarGroups />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default page
