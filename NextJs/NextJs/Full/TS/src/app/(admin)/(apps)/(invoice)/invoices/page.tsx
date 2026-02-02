import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import Invoices from './components/Invoices'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Invoice List" subtitle="Invoices" />

      <Row>
        <Col cols={12}>
          <Invoices />
        </Col>
      </Row>
    </Container>
  )
}

export default Page
