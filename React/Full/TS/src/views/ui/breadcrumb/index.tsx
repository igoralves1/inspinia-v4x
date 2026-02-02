import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { TbChevronRight, TbSmartHome } from 'react-icons/tb'
import { Link } from 'react-router'

const Basic = () => {
  return (
    <ComponentCard title="Basic">
      <Breadcrumb className="mb-0 py-2">
        <BreadcrumbItem active aria-current="page">
          Home
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb className="mb-0 py-2">
        <BreadcrumbItem className="m-0">Home</BreadcrumbItem>
        <div className="mx-1" style={{ height: 24 }}>
          <TbChevronRight height={16} width={16} />
        </div>
        <BreadcrumbItem active aria-current="page">
          Library
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb className="mb-0 py-2">
        <BreadcrumbItem className="m-0">Home</BreadcrumbItem>
        <div className="mx-1" style={{ height: 24 }}>
          <TbChevronRight height={16} width={16} />
        </div>
        <BreadcrumbItem className="m-0">Library</BreadcrumbItem>
        <div className="mx-1" style={{ height: 24 }}>
          <TbChevronRight height={16} width={16} />
        </div>
        <BreadcrumbItem active aria-current="page">
          Data
        </BreadcrumbItem>
      </Breadcrumb>
    </ComponentCard>
  )
}

const WithIcons = () => {
  return (
    <ComponentCard title="Basic">
      <Breadcrumb className="bg-light bg-opacity-50 p-2 mb-2">
        <BreadcrumbItem active aria-current="page">
          <TbSmartHome className="fs-16 me-1" />
          Home
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb className="bg-light bg-opacity-50 p-2 mb-2">
        <BreadcrumbItem>
          <TbSmartHome className="fs-16 me-1" />
          Home
        </BreadcrumbItem>
        <div className="mx-1" style={{ height: 20 }}>
          <TbChevronRight height={16} width={16} />
        </div>
        <BreadcrumbItem active aria-current="page">
          Library
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb className="bg-light bg-opacity-50 p-2 mb-0">
        <BreadcrumbItem>
          <TbSmartHome className="fs-16 me-1" />
          Home
        </BreadcrumbItem>
        <div className="mx-1" style={{ height: 20 }}>
          <TbChevronRight height={16} width={16} />
        </div>
        <BreadcrumbItem>Library</BreadcrumbItem>
        <div className="mx-1" style={{ height: 20 }}>
          <TbChevronRight height={16} width={16} />
        </div>
        <BreadcrumbItem active aria-current="page">
          Data
        </BreadcrumbItem>
        <div className="mx-1" style={{ height: 20 }}>
          <TbChevronRight height={16} width={16} />
        </div>
      </Breadcrumb>
    </ComponentCard>
  )
}

const page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Breadcrumb" subtitle="UI" />
        <Container fluid="xl">
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <CardTitle as={'h4'}>Examples</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="text-muted mb-2">
                    Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.
                  </p>
                  <Link className="btn btn-link p-0 fw-semibold" to="https://react-bootstrap.netlify.app/docs/components/breadcrumb" target="_blank">
                    Breadcrumb on React Bootstrap
                    <TbChevronRight className="ms-1" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col xl={12}>
              <Basic />
            </Col>
            <Col xl={12}>
              <WithIcons />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default page
