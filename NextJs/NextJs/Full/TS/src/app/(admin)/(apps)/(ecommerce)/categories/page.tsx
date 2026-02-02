import { Col, Container, Row } from 'react-bootstrap'

import CategoriesTable from '@/app/(admin)/(apps)/(ecommerce)/categories/components/CategoriesTable'
import PageBreadcrumb from '@/components/PageBreadcrumb'

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
