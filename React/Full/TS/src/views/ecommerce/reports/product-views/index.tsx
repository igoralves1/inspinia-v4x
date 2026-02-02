import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import ProductViews from '@/views/ecommerce/reports/product-views/components/ProductViews.tsx'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Product Views" subtitle="Ecommerce" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <ProductViews />
        </Col>
      </Row>
    </Container>
  )
}

export default Page
