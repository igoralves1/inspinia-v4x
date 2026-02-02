import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import useToggle from '@/hooks/useToggle'
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Collapse, Container, Row } from 'react-bootstrap'
import { TbChevronRight } from 'react-icons/tb'
import { Link } from 'react-router'

const DefaultCollapse = () => {
  const { isTrue, toggle } = useToggle()
  return (
    <ComponentCard title="Collapse">
      <p>
        <Button variant="primary" onClick={toggle}>
          Collapse
        </Button>
      </p>
      <Collapse in={isTrue}>
        <div>
          <Card className="card-body mb-0">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </Card>
        </div>
      </Collapse>
    </ComponentCard>
  )
}

const MultipleTargets = () => {
  const { isTrue: isOpenFirst, toggle: toggleFirst } = useToggle(false)
  const { isTrue: isOpenSecond, toggle: toggleSecond } = useToggle(false)
  const toggleBoth = () => {
    toggleFirst()
    toggleSecond()
  }
  return (
    <ComponentCard title="Multiple Targets">
      <div className="d-flex flex-wrap gap-2 mb-3">
        <Button variant="primary" onClick={toggleFirst}>
          Toggle first element
        </Button>
        &nbsp;
        <Button variant="primary" onClick={toggleSecond}>
          Toggle second element
        </Button>
        &nbsp;
        <Button variant="primary" onClick={toggleBoth}>
          Toggle both elements
        </Button>
        &nbsp;
      </div>
      <Row>
        <Col>
          <Collapse className="multi-collapse" in={isOpenFirst}>
            <div>
              <Card className="card-body mb-0">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft
                beer labore wes anderson cred nesciunt sapiente ea proident.
              </Card>
            </div>
          </Collapse>
        </Col>
        <Col>
          <Collapse className="multi-collapse" in={isOpenSecond}>
            <div>
              <Card className="card-body mb-0">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft
                beer labore wes anderson cred nesciunt sapiente ea proident.
              </Card>
            </div>
          </Collapse>
        </Col>
      </Row>
    </ComponentCard>
  )
}

const CollapseHorizontal = () => {
  const { isTrue, toggle } = useToggle()
  return (
    <ComponentCard title="Collapse Horizontal">
      <p>
        <Button variant="primary" onClick={toggle}>
          Toggle width collapse
        </Button>
      </p>
      <div style={{ height: 100 }}>
        <Collapse dimension="width" in={isTrue}>
          <div>
            <Card className="card-body mb-0" style={{ width: 300 }}>
              This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
            </Card>
          </div>
        </Collapse>
      </div>
    </ComponentCard>
  )
}

const page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Collapse" subtitle="UI" />
        <Container fluid="xl">
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <CardTitle as={'h4'}>Examples</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="text-muted mb-2">A simple component that allows you to toggle the visibility of content.</p>
                  <Link
                    className="btn btn-link p-0 fw-semibold"
                    to="https://react-bootstrap.netlify.app/docs/components/collapse/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Collapse on React Bootstrap
                    <TbChevronRight className="ms-1" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <DefaultCollapse />
              <MultipleTargets />
            </Col>
            <Col xl={6}>
              <CollapseHorizontal />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default page
