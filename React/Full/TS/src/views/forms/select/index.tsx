import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import ReactSelect from '@/views/forms/select/components/ReactSelect.tsx'

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
