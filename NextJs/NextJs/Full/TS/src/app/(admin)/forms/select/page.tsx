import ReactSelect from '@/app/(admin)/forms/select/components/ReactSelect'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Select" subtitle="Forms" />

      <Row className="justify-content-center">
        <Col lg={8}>
          <ReactSelect />
        </Col>
      </Row>
    </Container>
  )
}

export default Page
