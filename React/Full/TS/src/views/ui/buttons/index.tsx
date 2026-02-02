import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from 'react-bootstrap'
import { LuLeaf, LuZap } from 'react-icons/lu'
import {
  TbAlertTriangle,
  TbBell,
  TbBrandStripe,
  TbChevronRight,
  TbCreditCard,
  TbHandStop,
  TbMessageCircle,
  TbMicrophone,
  TbPlane,
  TbRocket,
  TbSettings,
  TbShare,
  TbStar,
  TbTools,
  TbTrash,
  TbUser,
} from 'react-icons/tb'
import { Link } from 'react-router'

const DefaultButtons = () => {
  return (
    <ComponentCard title="Default Buttons">
      <p className="text-muted">
        Use any of the available <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> classes <code>.btn</code> to
        quickly create a styled button.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <Button variant="default">Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
        <Button variant="purple">Purple</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
      </div>
    </ComponentCard>
  )
}

const ButtonRounded = () => {
  return (
    <ComponentCard title="Button Rounded">
      <p className="text-muted">
        Use <code>.rounded-pill</code> with a default button to give it pill-shaped rounded corners.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <Button variant="default" className="rounded-pill">
          Default
        </Button>
        <Button variant="primary" className="rounded-pill">
          Primary
        </Button>
        <Button variant="secondary" className="rounded-pill">
          Secondary
        </Button>
        <Button variant="success" className="rounded-pill">
          Success
        </Button>
        <Button variant="danger" className="rounded-pill">
          Danger
        </Button>
        <Button variant="warning" className="rounded-pill">
          Warning
        </Button>
        <Button variant="info" className="rounded-pill">
          Info
        </Button>
        <Button variant="purple" className="rounded-pill">
          Purple
        </Button>
        <Button variant="light" className="rounded-pill">
          Light
        </Button>
        <Button variant="dark" className="rounded-pill">
          Dark
        </Button>
      </div>
    </ComponentCard>
  )
}

const ButtonOutline = () => {
  return (
    <ComponentCard title="Button Outline">
      <p className="text-muted">
        Use the <code>.btn-outline-**</code> classes to quickly create buttons with borders.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <Button variant="outline-primary">Primary</Button>
        <Button variant="outline-secondary">Secondary</Button>
        <Button variant="outline-success">Success</Button>
        <Button variant="outline-danger">Danger</Button>
        <Button variant="outline-warning">Warning</Button>
        <Button variant="outline-info">Info</Button>
        <Button variant="outline-purple">Purple</Button>
        <Button variant="outline-light">Light</Button>
        <Button variant="outline-dark">Dark</Button>
      </div>
    </ComponentCard>
  )
}

const ButtonOutlineRounded = () => {
  return (
    <ComponentCard title="Button Outline Rounded">
      <p className="text-muted">
        Use <code>.rounded-pill</code> with an outline button to give it pill-shaped rounded corners.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <Button variant="outline-primary" className="rounded-pill">
          Primary
        </Button>
        <Button variant="outline-secondary" className="rounded-pill">
          Secondary
        </Button>
        <Button variant="outline-success" className="rounded-pill">
          Success
        </Button>
        <Button variant="outline-danger" className="rounded-pill">
          Danger
        </Button>
        <Button variant="outline-warning" className="rounded-pill">
          Warning
        </Button>
        <Button variant="outline-info" className="rounded-pill">
          Info
        </Button>
        <Button variant="outline-purple" className="rounded-pill">
          Purple
        </Button>
        <Button variant="outline-light" className="rounded-pill">
          Light
        </Button>
        <Button variant="outline-dark" className="rounded-pill">
          Dark
        </Button>
      </div>
    </ComponentCard>
  )
}

const SoftButtons = () => {
  return (
    <ComponentCard title="Soft Buttons">
      <p className="text-muted">
        Use <code>btn-soft-**</code> class with the below-mentioned variation to create a button with the soft background.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <Button className="btn-soft-primary">Primary</Button>
        <Button className="btn-soft-secondary">Secondary</Button>
        <Button className="btn-soft-success">Success</Button>
        <Button className="btn-soft-danger">Danger</Button>
        <Button className="btn-soft-warning">Warning</Button>
        <Button className="btn-soft-info">Info</Button>
        <Button className="btn-soft-purple">Purple</Button>
        <Button className="btn-soft-dark">Dark</Button>
      </div>
    </ComponentCard>
  )
}

const SoftRoundedButtons = () => {
  return (
    <ComponentCard title="Soft Rounded Buttons">
      <p className="text-muted">
        Use the <code>btn-soft-**</code> class along with <code>.rounded-pill</code> to create a softly styled button with rounded corners.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <Button className="btn-soft-primary rounded-pill">Primary</Button>
        <Button className="btn-soft-secondary rounded-pill">Secondary</Button>
        <Button className="btn-soft-success rounded-pill">Success</Button>
        <Button className="btn-soft-danger rounded-pill">Danger</Button>
        <Button className="btn-soft-warning rounded-pill">Warning</Button>
        <Button className="btn-soft-info rounded-pill">Info</Button>
        <Button className="btn-soft-purple rounded-pill">Purple</Button>
        <Button className="btn-soft-dark rounded-pill">Dark</Button>
      </div>
    </ComponentCard>
  )
}

const GhostButtons = () => {
  return (
    <ComponentCard title="Ghost Buttons">
      <p className="text-muted">
        Use the <code>btn-ghost-**</code> class to create buttons with a transparent background that highlight with color on hover.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <Button className="btn-ghost-primary">Primary</Button>
        <Button className="btn-ghost-secondary">Secondary</Button>
        <Button className="btn-ghost-success">Success</Button>
        <Button className="btn-ghost-danger">Danger</Button>
        <Button className="btn-ghost-warning">Warning</Button>
        <Button className="btn-ghost-info">Info</Button>
        <Button className="btn-ghost-purple">Purple</Button>
        <Button className="btn-ghost-dark">Dark</Button>
      </div>
    </ComponentCard>
  )
}

const GhostRoundedButtons = () => {
  return (
    <ComponentCard title="Ghost Rounded Buttons">
      <p className="text-muted">
        Combine <code>btn-ghost-**</code> with <code>.rounded-pill</code> to create ghost-style buttons with rounded corners that highlight on hover.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <Button className="btn-ghost-primary rounded-pill">Primary</Button>
        <Button className="btn-ghost-secondary rounded-pill">Secondary</Button>
        <Button className="btn-ghost-success rounded-pill">Success</Button>
        <Button className="btn-ghost-danger rounded-pill">Danger</Button>
        <Button className="btn-ghost-warning rounded-pill">Warning</Button>
        <Button className="btn-ghost-info rounded-pill">Info</Button>
        <Button className="btn-ghost-purple rounded-pill">Purple</Button>
        <Button className="btn-ghost-dark rounded-pill">Dark</Button>
      </div>
    </ComponentCard>
  )
}

const ButtonSizes = () => {
  return (
    <ComponentCard title="Button Sizes">
      <p className="text-muted">
        Want larger or smaller buttons? Use <code>.btn-lg</code> or <code>.btn-sm</code> to adjust the button size.
      </p>
      <div className="d-flex flex-wrap align-items-center gap-2">
        <Button variant="primary" size="lg">
          Large
        </Button>
        <Button variant="info" className="">
          Normal
        </Button>
        <Button variant="purple" size="sm">
          Small
        </Button>
      </div>
    </ComponentCard>
  )
}

const DisabledSizes = () => {
  return (
    <ComponentCard title="Disabled Sizes">
      <p className="text-muted">
        Use the <code>disabled</code> attribute on a <code>&lt;button&gt;</code> to make it inactive and non-interactive.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <Button variant="info" disabled>
          Info
        </Button>
        <Button variant="purple" disabled>
          Purple
        </Button>
        <Button variant="danger" disabled>
          Danger
        </Button>
        <Button variant="dark" disabled>
          Dark
        </Button>
      </div>
    </ComponentCard>
  )
}

const BlockButton = () => {
  return (
    <ComponentCard title="Block Button">
      <p className="text-muted font-14">
        To create block-level buttons, add the <code>.d-grid</code> class to the parent <code>&lt;div&gt;</code>.
      </p>
      <div className="d-grid gap-2">
        <Button variant="primary" size="sm">
          Block Button
        </Button>
        <Button variant="success" size="lg">
          Block Button
        </Button>
      </div>
    </ComponentCard>
  )
}

const ToggleButton = () => {
  return (
    <ComponentCard title="Toggle Button">
      <p className="text-muted">
        Add <code>data-bs-toggle="button"</code> to toggle a button’s <code>active</code> state. For pre-toggled buttons, also add
        <code>.active</code> and <code>aria-pressed="true"</code>.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <Button variant="primary">Toggle button</Button>
        <Button variant="primary" active>
          Active toggle button
        </Button>
        <Button variant="primary" disabled>
          Disabled toggle button
        </Button>
      </div>
    </ComponentCard>
  )
}

const ButtonTags = () => {
  return (
    <ComponentCard title="Button Tags">
      <p className="text-muted">
        Use <code>.btn</code> classes with <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code>, or <code>&lt;input&gt;</code> elements, though
        rendering may vary slightly across browsers.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <Button variant="primary">Toggle button</Button>
        <Button variant="primary" active>
          Active toggle button
        </Button>
        <Button variant="primary">Disabled toggle button</Button>
      </div>
    </ComponentCard>
  )
}

const FocusRingUtilities = () => {
  return (
    <ComponentCard title="Focus Ring Utilities">
      <p className="text-muted">
        Click directly on the link below to see the focus ring in action, or into the example below and then press <kbd>Tab</kbd>.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <a href="#!" className="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">
          Primary focus
        </a>
        <a href="#!" className="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">
          Secondary focus
        </a>
        <a href="#!" className="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">
          Success focus
        </a>
        <a href="#!" className="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">
          Danger focus
        </a>
        <a href="#!" className="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">
          Warning focus
        </a>
        <a href="#!" className="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">
          Info focus
        </a>
        <a href="#!" className="d-inline-flex focus-ring focus-ring-purple py-1 px-2 text-decoration-none border rounded-2">
          Purple focus
        </a>
        <a href="#!" className="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">
          Light focus
        </a>
        <a href="#!" className="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">
          Dark focus
        </a>
      </div>
    </ComponentCard>
  )
}

const IconButtons = () => {
  return (
    <ComponentCard title="Icon Buttons">
      <p className="text-muted">
        Icon only button. Use it when you want a button with just an icon and no text, ideal for compact UI elements or toolbars.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <Button variant="primary" className="btn-icon">
          <TbStar className="fs-lg" />
        </Button>
        <Button variant="purple" className="btn-icon">
          <LuLeaf className="avatar-xxs" />
        </Button>
        <Button variant="warning" className="btn-icon">
          <TbSettings className="fs-xl" />
        </Button>
        <Button className="btn-soft-info rounded-circle btn-icon">
          <TbBell className="fs-xxl" />
        </Button>
        <Button variant="secondary" className="rounded-circle btn-icon">
          <TbRocket className="fs-xxl" />
        </Button>
        <Button variant="outline-dark" className="rounded-circle btn-icon">
          <TbPlane className="fs-xl" />
        </Button>
        <Button className="btn btn-soft-secondary btn-icon">
          <TbMicrophone className="fs-xl" />
        </Button>
        <Button variant="light">
          <TbHandStop className="align-middle me-1 fs-xl" /> Stop
        </Button>
        <Button variant="dark">
          <LuZap className="avatar-xxs me-1" /> Boost
        </Button>
        <Button variant="outline-info">
          <TbCreditCard className="align-middle me-1 fs-xl" /> Payment
        </Button>
        <Button variant="outline-warning">
          <TbBrandStripe className="align-middle me-1 fs-xl" /> Stripe
        </Button>
        <Button variant="danger">
          <TbTools className="fs-xl me-1" /> <span>Tools</span>
        </Button>
      </div>

      <div className="d-flex flex-wrap gap-2 mt-3">
        <Button size="sm" variant="outline-secondary" className="btn-icon">
          <TbUser />
        </Button>
        <Button size="sm" variant="primary" className="btn-icon">
          <TbMessageCircle />
        </Button>
        <Button size="sm" variant="success" className="btn-icon rounded-circle">
          <TbShare />
        </Button>
        <Button variant="info" className="btn-icon rounded-circle">
          <TbBell />
        </Button>
        <Button variant="warning" className="btn-icon">
          <TbAlertTriangle />
        </Button>
        <Button variant="outline-danger" className="btn-icon">
          <TbTrash />
        </Button>
        <Button variant="outline-purple" className="btn-icon rounded-circle">
          <TbStar />
        </Button>
        <Button variant="outline-secondary" size="lg" className="btn-icon">
          <TbUser />
        </Button>
        <Button variant="primary" size="lg" className="btn-icon rounded-circle">
          <TbMessageCircle />
        </Button>
        <Button variant="success" size="lg" className="btn-icon rounded-circle">
          <TbShare />
        </Button>
        <Button variant="info" size="lg" className="btn-icon">
          <TbBell />
        </Button>
        <Button variant="warning" size="lg" className="btn-icon">
          <TbAlertTriangle />
        </Button>
        <Button variant="danger" size="lg" className="btn-icon">
          <TbTrash />
        </Button>
        <Button variant="outline-danger" size="lg" className="btn-icon">
          <TbStar />
        </Button>
      </div>
    </ComponentCard>
  )
}

const ButtonGroup = () => {
  return (
    <ComponentCard title="Button Group">
      <p className="text-muted">
        Group multiple buttons together by wrapping them with the <code>.btn</code> class inside a <code>.btn-group</code> container. This helps align
        buttons side by side with consistent spacing and styling.
      </p>
      <div className="btn-group mb-2">
        <Button variant="light">Left</Button>
        <Button variant="light">Middle</Button>
        <Button variant="light">Right</Button>
      </div>
      <br />
      <div className="btn-group mb-2">
        <Button variant="light">1</Button>
        <Button variant="light">2</Button>
        <Button variant="light">3</Button>
        <Button variant="light">4</Button>
      </div>
      &nbsp;
      <div className="btn-group mb-2">
        <Button variant="light">5</Button>
        <Button variant="light">6</Button>
        <Button variant="light">7</Button>
      </div>
      &nbsp;
      <div className="btn-group mb-2">
        <Button variant="light">8</Button>
      </div>
      <br />
      <div className="btn-group mb-2">
        <Button variant="light">1</Button>
        <Button variant="primary">2</Button>
        <Button variant="light">3</Button>
        <div className="btn-group">
          <Dropdown>
            <DropdownToggle variant="light">
              Dropdown <span className="caret" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#">Dropdown link</DropdownItem>
              <DropdownItem href="#">Dropdown link</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <Row>
        <Col md={3}>
          <div className="btn-group-vertical mb-2">
            <Button variant="light">Top</Button>
            <Button variant="light">Middle</Button>
            <Button variant="light">Bottom</Button>
          </div>
        </Col>
        <Col md={3}>
          <div className="btn-group-vertical mb-2">
            <Button variant="light">Button 1</Button>
            <Button variant="light">Button 2</Button>
            <Dropdown>
              <DropdownToggle type="button" variant="light">
                Button 3 <span className="caret" />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#">Dropdown link</DropdownItem>
                <DropdownItem href="#">Dropdown link</DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
        <PageBreadcrumb title="Buttons" subtitle="UI" />
        <Container fluid="xl">
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <CardTitle as={'h4'}>Examples</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="text-muted mb-2">
                    Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
                  </p>
                  <Link className="btn btn-link p-0 fw-semibold" to="https://react-bootstrap.netlify.app/docs/components/buttons" target="_blank">
                    Buttons on React Bootstrap
                    <TbChevronRight className="ms-1" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col xl={12}>
              <DefaultButtons />
            </Col>
            <Col xl={12}>
              <ButtonRounded />
            </Col>
            <Col xl={12}>
              <ButtonOutline />
            </Col>
            <Col xl={12}>
              <ButtonOutlineRounded />
            </Col>
            <Col xl={12}>
              <SoftButtons />
            </Col>
            <Col xl={12}>
              <SoftRoundedButtons />
            </Col>
            <Col xl={12}>
              <GhostButtons />
            </Col>
            <Col xl={12}>
              <GhostRoundedButtons />
            </Col>
            <Col xl={12}>
              <ButtonSizes />
            </Col>
            <Col xl={12}>
              <DisabledSizes />
            </Col>
            <Col xl={12}>
              <BlockButton />
            </Col>
            <Col xl={12}>
              <ToggleButton />
            </Col>
            <Col xl={12}>
              <ButtonTags />
            </Col>
            <Col xl={12}>
              <FocusRingUtilities />
            </Col>
            <Col xl={12}>
              <IconButtons />
            </Col>
            <Col xl={12}>
              <ButtonGroup />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default page
