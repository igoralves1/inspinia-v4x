import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Card, CardBody, CardHeader, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { TbChevronRight } from 'react-icons/tb'
import { Link } from 'react-router'

const colorVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'purple', 'pink', 'orange', 'light', 'link']

const ColoredLinks = () => {
  return (
    <ComponentCard title="Colored links">
      <p className="text-muted">
        You can use the <code>.link-*</code> classes to colorize links. Unlike the
        <Link to="/ui/utilities">
          <code>.text-*</code> classes
        </Link>
        , these classes have a <code>:hover</code> and <code>:focus</code> state. Some of the link styles use a relatively light foreground color, and
        should only be used on a dark background in order to have sufficient contrast.
      </p>
      {colorVariants.slice(0, 6).map((item, idx) => (
        <p key={idx}>
          <Link to="" className={`link-${item}`}>
            {item.charAt(0).toUpperCase() + item.slice(1)} link
          </Link>
        </p>
      ))}
      <p>
        <Link to="" className="link-light">
          Light link
        </Link>
      </p>
      <p>
        <Link to="" className="link-dark">
          Dark link
        </Link>
      </p>
      <p className="mb-0">
        <Link to="" className="link-body-emphasis">
          Emphasis link
        </Link>
      </p>
    </ComponentCard>
  )
}

const LinkUtilities = () => {
  return (
    <ComponentCard title="Link utilities">
      <p className="text-muted">
        <Link to="/ui/utilities">Colored link helpers</Link> have been updated to pair with our link utilities. Use the new utilities to modify the
        link opacity, underline opacity, and underline offset.
      </p>
      {colorVariants.slice(0, 6).map((item, idx) => (
        <p key={idx}>
          <Link to="" className={`link-${item} text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover`}>
            {item.charAt(0).toUpperCase() + item.slice(1)} link
          </Link>
        </p>
      ))}
      <p>
        <Link to="" className="link-light text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
          Light link
        </Link>
      </p>
      <p>
        <Link to="" className="link-dark text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
          Dark link
        </Link>
      </p>
      <p>
        <Link to="" className="link-body-emphasis text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">
          Emphasis link
        </Link>
      </p>
    </ComponentCard>
  )
}

const LinkOpacity = () => {
  return (
    <ComponentCard title="Link opacity">
      <p className="text-muted">
        Change the alpha opacity of the link <code>rgba()</code> color value with utilities. Please be aware that changes to a color’s opacity can
        lead to links with <em>insufficient</em> contrast.
      </p>
      <p>
        <Link className="link-opacity-10" to="">
          Link opacity 10
        </Link>
      </p>
      <p>
        <Link className="link-opacity-25" to="">
          Link opacity 25
        </Link>
      </p>
      <p>
        <Link className="link-opacity-50" to="">
          Link opacity 50
        </Link>
      </p>
      <p>
        <Link className="link-opacity-75" to="">
          Link opacity 75
        </Link>
      </p>
      <p className="mb-0">
        <Link className="link-opacity-100" to="">
          Link opacity 100
        </Link>
      </p>
    </ComponentCard>
  )
}

const LinkHoverOpacity = () => {
  return (
    <ComponentCard title="Link hover opacity">
      <p className="text-muted">You can even change the opacity level on hover.</p>
      <p>
        <Link className="link-opacity-10-hover" to="">
          Link hover opacity 10
        </Link>
      </p>
      <p>
        <Link className="link-opacity-25-hover" to="">
          Link hover opacity 25
        </Link>
      </p>
      <p>
        <Link className="link-opacity-50-hover" to="">
          Link hover opacity 50
        </Link>
      </p>
      <p>
        <Link className="link-opacity-75-hover" to="">
          Link hover opacity 75
        </Link>
      </p>
      <p className="mb-0">
        <Link className="link-opacity-100-hover" to="">
          Link hover opacity 100
        </Link>
      </p>
    </ComponentCard>
  )
}

const UnderlineColor = () => {
  return (
    <ComponentCard title="Underline color">
      <p className="text-muted">Change the underline’s color independent of the link text color.</p>
      <p>
        <Link to="" className="text-decoration-underline link-underline-primary">
          Primary underline
        </Link>
      </p>
      <p>
        <Link to="" className="text-decoration-underline link-underline-secondary">
          Secondary underline
        </Link>
      </p>
      <p>
        <Link to="" className="text-decoration-underline link-underline-success">
          Success underline
        </Link>
      </p>
      <p>
        <Link to="" className="text-decoration-underline link-underline-danger">
          Danger underline
        </Link>
      </p>
      <p>
        <Link to="" className="text-decoration-underline link-underline-warning">
          Warning underline
        </Link>
      </p>
      <p>
        <Link to="" className="text-decoration-underline link-underline-info">
          Info underline
        </Link>
      </p>
      <p>
        <Link to="" className="text-decoration-underline link-underline-light">
          Light underline
        </Link>
      </p>
      <p className="mb-0">
        <Link to="" className="text-decoration-underline link-underline-dark">
          Dark underline
        </Link>
      </p>
    </ComponentCard>
  )
}

const UnderlineOpacity = () => {
  return (
    <ComponentCard title="Underline opacity">
      <p className="text-muted">
        Change the underline’s opacity. Requires adding
        <code>.link-underline</code> to first set an <code>rgba()</code> color we use to then modify the alpha opacity.
      </p>
      <p>
        <Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0" to="#">
          Underline opacity 0
        </Link>
      </p>
      <p>
        <Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10" to="#">
          Underline opacity 10
        </Link>
      </p>
      <p>
        <Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25" to="#">
          Underline opacity 25
        </Link>
      </p>
      <p>
        <Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50" to="#">
          Underline opacity 50
        </Link>
      </p>
      <p>
        <Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75" to="#">
          Underline opacity 75
        </Link>
      </p>
      <p className="mb-0">
        <Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100" to="#">
          Underline opacity 100
        </Link>
      </p>
    </ComponentCard>
  )
}

const UnderlineOffset = () => {
  return (
    <ComponentCard title="Underline offset">
      <p className="text-muted">
        Change the underline’s opacity. Requires adding
        <code>.link-underline</code> to first set an <code>rgba()</code> color we use to then modify the alpha opacity.
      </p>
      <p>
        <Link to="">Default link</Link>
      </p>
      <p>
        <Link className="text-decoration-underline link-offset-1" to="">
          Offset 1 link
        </Link>
      </p>
      <p>
        <Link className="text-decoration-underline link-offset-2" to="">
          Offset 2 link
        </Link>
      </p>
      <p className="mb-0">
        <Link className="text-decoration-underline link-offset-3" to="">
          Offset 3 link
        </Link>
      </p>
    </ComponentCard>
  )
}

const HoverVariants = () => {
  return (
    <ComponentCard title="Hover variants">
      <p className="text-muted">
        Just like the <code>.link-opacity-*-hover</code> utilities,
        <code>.link-offset</code> and <code>.link-underline-opacity</code> utilities include
        <code>:hover</code> variants by default. Mix and match to create unique link styles.
      </p>
      <Link
        className="link-offset-2 link-offset-3-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        to="">
        Underline opacity 0
      </Link>
    </ComponentCard>
  )
}

const page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Links" subtitle="UI" />
        <Container fluid="xl">
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <CardTitle as={'h4'}>Examples</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="text-muted mb-2">Documentation and examples for Colored links with hover states.</p>
                  <Link className="btn btn-link p-0 fw-semibold" to="https://getbootstrap.com/docs/5.3/helpers/colored-links/" target="_blank">
                    Links on Bootstrap
                    <TbChevronRight className="ms-1" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <ColoredLinks />
            </Col>
            <Col xl={6}>
              <LinkUtilities />
            </Col>
            <Col xl={6}>
              <LinkOpacity />
            </Col>
            <Col xl={6}>
              <LinkHoverOpacity />
            </Col>
            <Col xl={6}>
              <UnderlineColor />
            </Col>
            <Col xl={6}>
              <UnderlineOpacity />
            </Col>
            <Col xl={6}>
              <UnderlineOffset />
            </Col>
            <Col xl={6}>
              <HoverVariants />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default page
