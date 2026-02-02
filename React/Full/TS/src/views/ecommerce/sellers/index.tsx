import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import SellersCard from './components/SellersCard'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Sellers" subtitle="Ecommerce" />
      <Row className="justify-content-center">
        <Col xxl={10}>
          <SellersCard />
        </Col>
      </Row>
    </Container>
  )
}

export default Page
