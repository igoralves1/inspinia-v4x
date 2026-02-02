import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import Spinner from '@/components/Spinner'
import { Card, CardBody, CardHeader, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { TbChevronRight } from 'react-icons/tb'
import { Link } from 'react-router'

const colorVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'purple', 'pink', 'orange', 'light', 'link']

const BorderedSpinners = () => {
  return (
    <ComponentCard title="Border Spinner">
      <p className="text-muted">Use border spinners as lightweight loading indicators.</p>
      <Spinner className="m-2" />
    </ComponentCard>
  )
}

const ColorsSpinners = () => {
  return (
    <ComponentCard title="Colors">
      <p className="text-muted">
        Use text color utilities like <code>.text-primary</code>,<code>.text-success</code>, or <code>.text-danger</code> to style the spinner, which
        inherits its color from <code>currentColor</code>.
      </p>
      {colorVariants.slice(0, 10).map((color, idx) => {
        return <Spinner key={idx} className="m-2" color={color} />
      })}
    </ComponentCard>
  )
}

const AlignmentSpinner = () => {
  return (
    <ComponentCard title="Alignment">
      <p className="text-muted">
        Bootstrap spinners use <code>rem</code>,<code>currentColor</code>, and <code>inline-flex</code> for easy sizing and alignment.
      </p>
      <div className="d-flex justify-content-center">
        <Spinner />
      </div>
    </ComponentCard>
  )
}

const ButtonsSpinner = () => {
  return (
    <ComponentCard title="Buttons Spinner">
      <Row className="g-3">
        <Col lg={6}>
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-primary btn-icon" type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
              <span className="visually-hidden">Loading...</span>
            </button>
            <button className="btn btn-primary btn-icon rounded-circle" type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
              <span className="visually-hidden">Loading...</span>
            </button>
            <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
              <span className="visually-hidden">Loading...</span>
            </button>
            <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
              Loading...
            </button>
          </div>
        </Col>
        <Col lg={6}>
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-primary btn-icon" type="button" disabled>
              <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
              <span className="visually-hidden">Loading...</span>
            </button>
            <button className="btn btn-primary btn-icon rounded-circle" type="button" disabled>
              <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
              <span className="visually-hidden">Loading...</span>
            </button>
            <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
              <span className="visually-hidden">Loading...</span>
            </button>
            <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true" />
              Loading...
            </button>
          </div>
        </Col>
      </Row>
    </ComponentCard>
  )
}

const GrowingSpinners = () => {
  return (
    <ComponentCard title="Growing Spinner">
      <p className="text-muted">
        Bootstrap spinners use <code>rem</code>,<code>currentColor</code>, and <code>inline-flex</code> for easy resizing, coloring, and alignment.
      </p>
      <Spinner type="grow" className="m-2" />
    </ComponentCard>
  )
}

const ColorGrowingSpinners = () => {
  return (
    <ComponentCard title="Color Growing Spinner">
      <p className="text-muted">
        The grow spinner also uses <code>currentColor</code>, so apply classes like <code>.text-primary</code>, <code>.text-warning</code>, or
        <code>.text-info</code> to customize its color.
      </p>

      {colorVariants.slice(0, 10).map((color, idx) => {
        return <Spinner key={idx} className="m-2" type="grow" color={color} />
      })}
    </ComponentCard>
  )
}

const SpinnersSizes = () => {
  const sizes: ('lg' | 'md' | 'sm')[] = ['lg', 'md', 'sm']

  return (
    <ComponentCard title="Size">
      <Row>
        {(sizes || []).map((size, idx) => {
          return (
            <Col lg={6} key={idx}>
              <Spinner className="text-primary m-2" color="primary" size={size} />
              <Spinner color="secondary" className="text-secondary m-2" type="grow" size={size} />
            </Col>
          )
        })}
        <Col lg={6}>
          <Spinner className="spinner-border-sm m-2"></Spinner>
          <Spinner type="grow" className="spinner-grow-sm m-2"></Spinner>
        </Col>
      </Row>
    </ComponentCard>
  )
}

const SpinKitCSSBasedPlugin = () => {
  return (
    <ComponentCard title="SpinKit">
      <Row className="mb-5">
        <Col>
          <div className="sk-plane mx-auto" />
        </Col>
        <Col>
          <div className="sk-chase mx-auto">
            <div className="sk-chase-dot" />
            <div className="sk-chase-dot" />
            <div className="sk-chase-dot" />
            <div className="sk-chase-dot" />
            <div className="sk-chase-dot" />
            <div className="sk-chase-dot" />
          </div>
        </Col>
        <Col>
          <div className="sk-bounce mx-auto">
            <div className="sk-bounce-dot" />
            <div className="sk-bounce-dot" />
          </div>
        </Col>
        <Col>
          <div className="sk-wave mx-auto">
            <div className="sk-wave-rect" />
            <div className="sk-wave-rect" />
            <div className="sk-wave-rect" />
            <div className="sk-wave-rect" />
            <div className="sk-wave-rect" />
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <div className="sk-pulse mx-auto" />
        </Col>
        <Col>
          <div className="sk-swing mx-auto">
            <div className="sk-swing-dot" />
            <div className="sk-swing-dot" />
          </div>
        </Col>
        <Col>
          <div className="sk-circle mx-auto">
            <div className="sk-circle-dot" />
            <div className="sk-circle-dot" />
            <div className="sk-circle-dot" />
            <div className="sk-circle-dot" />
            <div className="sk-circle-dot" />
            <div className="sk-circle-dot" />
            <div className="sk-circle-dot" />
            <div className="sk-circle-dot" />
            <div className="sk-circle-dot" />
            <div className="sk-circle-dot" />
            <div className="sk-circle-dot" />
            <div className="sk-circle-dot" />
          </div>
        </Col>
        <Col>
          <div className="sk-circle-fade mx-auto">
            <div className="sk-circle-fade-dot" />
            <div className="sk-circle-fade-dot" />
            <div className="sk-circle-fade-dot" />
            <div className="sk-circle-fade-dot" />
            <div className="sk-circle-fade-dot" />
            <div className="sk-circle-fade-dot" />
            <div className="sk-circle-fade-dot" />
            <div className="sk-circle-fade-dot" />
            <div className="sk-circle-fade-dot" />
            <div className="sk-circle-fade-dot" />
            <div className="sk-circle-fade-dot" />
            <div className="sk-circle-fade-dot" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <div className="sk-grid mx-auto">
            <div className="sk-grid-cube" />
            <div className="sk-grid-cube" />
            <div className="sk-grid-cube" />
            <div className="sk-grid-cube" />
            <div className="sk-grid-cube" />
            <div className="sk-grid-cube" />
            <div className="sk-grid-cube" />
            <div className="sk-grid-cube" />
            <div className="sk-grid-cube" />
          </div>
        </Col>
        <Col xs={3}>
          <div className="sk-fold mx-auto">
            <div className="sk-fold-cube" />
            <div className="sk-fold-cube" />
            <div className="sk-fold-cube" />
            <div className="sk-fold-cube" />
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
        <PageBreadcrumb title="Spinners" subtitle="UI" />
        <Container fluid="xl">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle as={'h4'}>Examples</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="text-muted mb-2">
                    Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.
                  </p>
                  <Link className="btn btn-link p-0 fw-semibold" to="https://react-bootstrap.netlify.app/docs/components/spinners" target="_blank">
                    Spinners on React Bootstrap
                    <TbChevronRight className="ms-1" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <BorderedSpinners />
              <ColorsSpinners />
              <AlignmentSpinner />
              <ButtonsSpinner />
            </Col>
            <Col xl={6}>
              <GrowingSpinners />
              <ColorGrowingSpinners />
              <SpinnersSizes />
            </Col>
            <Col xs={12}>
              <SpinKitCSSBasedPlugin />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default page
