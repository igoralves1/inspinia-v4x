import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import CategoriesTable from '@/views/ecommerce/categories/components/CategoriesTable.tsx'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Categories" subtitle="Ecommerce" />

      <Row className="row">
        <Col xs={12}>
          <CategoriesTable />
        </Col>
      </Row>
    </Container>
  )
}

export default Page
