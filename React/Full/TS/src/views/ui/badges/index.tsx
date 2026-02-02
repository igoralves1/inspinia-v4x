import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { TbChevronRight } from 'react-icons/tb'
import { Link } from 'react-router'

const BasicBadges = () => {
  return (
    <ComponentCard title="Basic Badges">
      <p className="text-muted">
        Use the <code>.badge</code> &amp; <code>.text-bg-*</code> classes to make badges.
      </p>
      <span className="badge me-1  badge-default">Default</span>
      <span className="badge me-1 text-bg-primary">Primary</span>
      <span className="badge me-1 text-bg-secondary">Secondary</span>
      <span className="badge me-1 text-bg-success">Success</span>
      <span className="badge me-1 text-bg-danger">Danger</span>
      <span className="badge me-1 text-bg-warning">Warning</span>
      <span className="badge me-1 text-bg-info">Info</span>
      <span className="badge me-1 text-bg-light">Light</span>
      <span className="badge me-1 text-bg-dark">Dark</span>
      <span className="badge me-1 text-bg-purple">Purple</span>
    </ComponentCard>
  )
}

const BasicPillBadges = () => {
  return (
    <ComponentCard title="Basic Pill Badges">
      <p className="text-muted">
        Use the <code>.rounded-pill</code> modifier class to make badges more rounded.
      </p>
      <span className="badge badge-default rounded-pill me-1"> Default</span>
      <span className="badge text-bg-primary rounded-pill me-1">Primary</span>
      <span className="badge text-bg-secondary rounded-pill me-1">Secondary</span>
      <span className="badge text-bg-success rounded-pill me-1">Success</span>
      <span className="badge text-bg-danger rounded-pill me-1">Danger</span>
      <span className="badge text-bg-warning rounded-pill me-1">Warning</span>
      <span className="badge text-bg-info rounded-pill me-1">Info</span>
      <span className="badge text-bg-light rounded-pill me-1">Light</span>
      <span className="badge text-bg-dark rounded-pill me-1">Dark</span>
      <span className="badge text-bg-purple rounded-pill me-1">Purple</span>
    </ComponentCard>
  )
}

const OutlineBadges = () => {
  return (
    <ComponentCard title="Outline Badges">
      <p className="text-muted">
        Using the <code>.badge-outline-*</code> to quickly create a bordered badges.
      </p>
      <span className="me-1 badge badge-outline-primary">Primary</span>
      <span className="me-1 badge badge-outline-secondary">Secondary</span>
      <span className="me-1 badge badge-outline-success">Success</span>
      <span className="me-1 badge badge-outline-danger">Danger</span>
      <span className="me-1 badge badge-outline-warning">Warning</span>
      <span className="me-1 badge badge-outline-info">Info</span>
      <span className="me-1 badge badge-outline-dark">Dark</span>
      <span className="me-1 badge badge-outline-purple">Purple</span>
    </ComponentCard>
  )
}
const OutlinePillBadges = () => {
  return (
    <ComponentCard title="Outline Badges">
      <p className="text-muted">
        Use the <code>.rounded-pill</code> modifier class to make badges more rounded.
      </p>
      <span className="me-1 badge badge-outline-primary rounded-pill">Primary</span>
      <span className="me-1 badge badge-outline-secondary rounded-pill">Secondary</span>
      <span className="me-1 badge badge-outline-success rounded-pill">Success</span>
      <span className="me-1 badge badge-outline-danger rounded-pill">Danger</span>
      <span className="me-1 badge badge-outline-warning rounded-pill">Warning</span>
      <span className="me-1 badge badge-outline-info rounded-pill">Info</span>
      <span className="me-1 badge badge-outline-dark rounded-pill">Dark</span>
      <span className="me-1 badge badge-outline-purple rounded-pill">Purple</span>
    </ComponentCard>
  )
}

const LightenBadges = () => {
  return (
    <ComponentCard title="Lighten Badges">
      <p className="text-muted">
        Use the <code>.badge-soft--*</code> modifier class to make badges lighten.
      </p>
      <span className="me-1 badge badge-soft-primary">Primary</span>
      <span className="me-1 badge badge-soft-secondary">Secondary</span>
      <span className="me-1 badge badge-soft-success">Success</span>
      <span className="me-1 badge badge-soft-danger">Danger</span>
      <span className="me-1 badge badge-soft-warning">Warning</span>
      <span className="me-1 badge badge-soft-info">Info</span>
      <span className="me-1 badge badge-soft-dark">Dark</span>
      <span className="me-1 badge badge-soft-purple">Purple</span>
    </ComponentCard>
  )
}

const LightenPillBadges = () => {
  return (
    <ComponentCard title="Lighten Pill Badges">
      <p className="text-muted">
        Use the <code>.badge-soft--*</code> modifier class to make badges lighten.
      </p>
      <span className="me-1 badge rounded-pill badge-soft-primary">Primary</span>
      <span className="me-1 badge rounded-pill badge-soft-secondary">Secondary</span>
      <span className="me-1 badge rounded-pill badge-soft-success">Success</span>
      <span className="me-1 badge rounded-pill badge-soft-danger">Danger</span>
      <span className="me-1 badge rounded-pill badge-soft-warning">Warning</span>
      <span className="me-1 badge rounded-pill badge-soft-info">Info</span>
      <span className="me-1 badge rounded-pill badge-soft-dark">Dark</span>
      <span className="me-1 badge rounded-pill badge-soft-purple">Purple</span>
    </ComponentCard>
  )
}

const LabelBadges = () => {
  return (
    <ComponentCard title="Label Badges">
      <p className="text-muted">
        Using the <code>.badge-label</code> to quickly create a square based badges.
      </p>
      <span className="me-1 badge badge-label badge-default">Default</span>
      <span className="me-1 badge badge-label text-bg-primary">Primary</span>
      <span className="me-1 badge badge-label text-bg-secondary">Secondary</span>
      <span className="me-1 badge badge-label text-bg-success">Success</span>
      <span className="me-1 badge badge-label text-bg-danger">Danger</span>
      <span className="me-1 badge badge-label text-bg-warning">Warning</span>
      <span className="me-1 badge badge-label text-bg-info">Info</span>
      <span className="me-1 badge badge-label text-bg-light">Light</span>
      <span className="me-1 badge badge-label text-bg-dark">Dark</span>
      <span className="me-1 badge badge-label text-bg-purple">Purple</span>
    </ComponentCard>
  )
}

const SquareBadges = () => {
  return (
    <ComponentCard title="Square Badges">
      <p className="text-muted">
        Using the <code>.badge-square</code> to quickly create a square based badges.
      </p>
      <span className="me-1 badge badge-square badge-default">0</span>
      <span className="me-1 badge badge-square text-bg-primary">1</span>
      <span className="me-1 badge badge-square text-bg-secondary">2</span>
      <span className="me-1 badge badge-square text-bg-success">3</span>
      <span className="me-1 badge badge-square text-bg-danger">4</span>
      <span className="me-1 badge badge-square text-bg-warning">5</span>
      <span className="me-1 badge badge-square text-bg-info">6</span>
      <span className="me-1 badge badge-square text-bg-light">7</span>
      <span className="me-1 badge badge-square text-bg-dark">8</span>
      <span className="me-1 badge badge-square text-bg-purple">9</span>
    </ComponentCard>
  )
}

const CircleBadges = () => {
  return (
    <ComponentCard title="Circle Badges">
      <p className="text-muted">
        Using the <code>.badge-circle</code> to quickly create a circle based badges.
      </p>
      <span className="me-1 badge badge-circle badge-default">0</span>
      <span className="me-1 badge badge-circle text-bg-primary">1</span>
      <span className="me-1 badge badge-circle text-bg-secondary">2</span>
      <span className="me-1 badge badge-circle text-bg-success">3</span>
      <span className="me-1 badge badge-circle text-bg-danger">4</span>
      <span className="me-1 badge badge-circle text-bg-warning">5</span>
      <span className="me-1 badge badge-circle text-bg-info">6</span>
      <span className="me-1 badge badge-circle text-bg-light">7</span>
      <span className="me-1 badge badge-circle text-bg-dark">8</span>
      <span className="me-1 badge badge-circle text-bg-purple">9</span>
    </ComponentCard>
  )
}

const Positioned = () => {
  return (
    <ComponentCard title="Positioned">
      <p className="text-muted">
        Use utilities to modify a <code>.badge</code> and position it in the corner of a link or button.
      </p>
      <div className="d-flex flex-wrap gap-3">
        <Button variant="primary" className="position-relative">
          Inbox
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span className="visually-hidden">unread messages</span>
          </span>
        </Button>
        <Button variant="primary" className="position-relative">
          Profile
          <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
            <span className="visually-hidden">New alerts</span>
          </span>
        </Button>
        <Button variant="success">
          Notifications <span className="badge text-bg-light ms-1">4</span>
        </Button>
      </div>
    </ComponentCard>
  )
}

const HeadingswithBadges = () => {
  return (
    <ComponentCard title="Headings with Badges">
      <h1>
        h1.Example heading <span className="badge text-bg-primary">New</span>
      </h1>
      <h2>
        h2.Example heading <span className="badge text-bg-primary">New</span>
      </h2>
      <h3>
        h3.Example heading <span className="badge text-bg-primary">New</span>
      </h3>
      <h4>
        h4.Example heading <span className="badge text-bg-primary">New</span>
      </h4>
      <h5>
        h5.Example heading <span className="badge text-bg-primary">New</span>
      </h5>
      <h6>
        h6.Example heading <span className="badge text-bg-primary">New</span>
      </h6>
    </ComponentCard>
  )
}

const page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Badges" subtitle="UI" />
        <Container fluid="xl">
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <CardTitle as={'h4'}>Examples</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="text-muted mb-2">Documentation and examples for badges, our small count and labeling component.</p>
                  <Link className="btn btn-link p-0 fw-semibold" to="https://getbootstrap.com/docs/5.3/components/badge/" target="_blank">
                    Badges on React Bootstrap
                    <TbChevronRight className="ms-1" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <BasicBadges />
            </Col>
            <Col xl={6}>
              <BasicPillBadges />
            </Col>
            <Col xl={6}>
              <OutlineBadges />
            </Col>
            <Col xl={6}>
              <OutlinePillBadges />
            </Col>
            <Col xl={6}>
              <LightenBadges />
            </Col>
            <Col xl={6}>
              <LightenPillBadges />
            </Col>
            <Col xl={6}>
              <LabelBadges />
            </Col>
            <Col xl={6}>
              <SquareBadges />
            </Col>
            <Col xl={6}>
              <CircleBadges />
              <Positioned />
            </Col>
            <Col xl={6}>
              <HeadingswithBadges />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default page
