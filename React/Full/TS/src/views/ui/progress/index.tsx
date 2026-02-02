import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { TbChevronRight } from 'react-icons/tb'
import { Link } from 'react-router'

const Example = () => {
  return (
    <ComponentCard title="Examples">
      <p className="text-muted">A progress bar can be used to show a user how far along he/she is in a process.</p>
      <ProgressBar className="mb-2" now={0} />
      <ProgressBar className="mb-2" now={25} />
      <ProgressBar className="mb-2" now={50} />
      <ProgressBar className="mb-2" now={75} />
      <ProgressBar className="progress" now={100} />
    </ComponentCard>
  )
}

const HeightProgressBar = () => {
  return (
    <ComponentCard title="Height">
      <p className="text-muted">
        We only set a <code>height</code> value on the <code>.progress</code>, so if you change that value the inner <code>.progress-bar</code> will
        automatically resize accordingly. Use <code>.progress-sm</code>,<code>.progress-md</code>,<code>.progress-lg</code>,<code>.progress-xl</code>
        classes.
      </p>
      <ProgressBar now={25} variant="danger" className="mb-2" style={{ height: 1 }} />
      <ProgressBar now={25} variant="primary" className="mb-2" style={{ height: 3 }} />
      <ProgressBar now={25} variant="success" className="mb-2 progress-sm" />
      <ProgressBar now={50} variant="info" className="mb-2 progress-md" />
      <ProgressBar now={75} variant="warning" className="progress-lg mb-2" />
      <ProgressBar now={38} variant="success" className="progress-xl" />
    </ComponentCard>
  )
}

const MultipleBars = () => {
  return (
    <ComponentCard title="Multiple bars">
      <p className="text-muted">Include multiple progress bars in a progress component if you need.</p>
      <ProgressBar className="progress">
        <ProgressBar now={15}></ProgressBar>
        <ProgressBar now={30} variant="success" className="bg-success" />
        <ProgressBar now={20} variant="info" className="bg-info" />
      </ProgressBar>
    </ComponentCard>
  )
}

const AnimatedStripes = () => {
  return (
    <ComponentCard title="Animated stripes">
      <p className="text-muted">
        The striped gradient can also be animated. Add
        <code>.progress-bar-animated</code> to <code>.progress-bar</code> to animate the stripes right to left via CSS3 animations.
      </p>
      <ProgressBar now={75} animated className="progress" />
    </ComponentCard>
  )
}

const LabelsBar = () => {
  return (
    <ComponentCard title="Labels">
      <p className="text-muted">
        Add labels to your progress bars by placing text within the
        <code>.progress-bar</code>.
      </p>
      <ProgressBar now={25} className="mb-3" label="25%" />
      <ProgressBar now={10} className="text-dark overflow-visible" label="Long label text for the progress bar, set to a dark color" />
    </ComponentCard>
  )
}

const BackgroundBar = () => {
  return (
    <ComponentCard title="Backgrounds">
      <p className="text-muted">Use background utility classes to change the appearance of individual progress bars.</p>
      <ProgressBar now={25} variant="success" className="mb-2" />
      <ProgressBar now={50} variant="info" className="mb-2" />
      <ProgressBar now={75} variant="warning" className="mb-2" />
      <ProgressBar now={100} variant="danger" className="mb-2" />
      <ProgressBar now={65} variant="dark" className="mb-2" />
      <ProgressBar now={50} variant="secondary" />
    </ComponentCard>
  )
}

const StripedBar = () => {
  return (
    <ComponentCard title="Striped">
      <p className="text-muted">
        Add <code>.progress-bar-striped</code> to any
        <code>.progress-bar</code> to apply a stripe via CSS gradient over the progress bar’s background color.
      </p>
      <ProgressBar now={10} striped className="mb-2" />
      <ProgressBar now={25} striped variant="success" className="mb-2" />
      <ProgressBar now={50} striped variant="info" className="mb-2" />
      <ProgressBar now={75} striped variant="warning" className="mb-2" />
      <ProgressBar now={100} striped variant="danger" className="mb-2" />
    </ComponentCard>
  )
}

const StepsProgressBar = () => {
  return (
    <ComponentCard title="Steps">
      <div className="position-relative m-4">
        <ProgressBar now={50} style={{ height: 2 }} className="bg-light" />
        <Button variant="primary" className="position-absolute top-0 start-0 translate-middle btn-icon rounded-pill">
          1
        </Button>
        <Button variant="primary" className="position-absolute top-0 start-50 translate-middle btn-icon rounded-pill">
          2
        </Button>
        <Button variant="light" className="position-absolute top-0 start-100 translate-middle btn-icon rounded-pill">
          3
        </Button>
      </div>
    </ComponentCard>
  )
}

const page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Progress" subtitle="UI" />
        <Container fluid="xl">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle as={'h4'}>Examples</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="text-muted mb-2">
                    Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and
                    text labels.
                  </p>
                  <Link className="btn btn-link p-0 fw-semibold" to="https://react-bootstrap.netlify.app/docs/components/progress" target="_blank">
                    Progress on React Bootstrap
                    <TbChevronRight className="ms-1" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Example />
              <HeightProgressBar />
              <MultipleBars />
              <AnimatedStripes />
            </Col>
            <Col xl={6}>
              <LabelsBar />
              <BackgroundBar />
              <StripedBar />
              <StepsProgressBar />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default page
