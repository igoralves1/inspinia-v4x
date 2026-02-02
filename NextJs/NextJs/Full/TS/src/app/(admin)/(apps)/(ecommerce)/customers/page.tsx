import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import CustomersCard from './components/CustomersCard'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Customers" subtitle="Ecommerce" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <CustomersCard />
        </Col>
      </Row>
    </Container>
  )
}

export default Page
