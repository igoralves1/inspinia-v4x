import { Col, Container, Row } from 'react-bootstrap'

import OrdersStats from '@/app/(admin)/(apps)/(ecommerce)/orders/components/OrdersStats'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import OrdersList from './components/OrdersList'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Orders" subtitle="Ecommerce" />

      <OrdersStats />

      <Row>
        <Col cols={12}>
          <OrdersList />
        </Col>
      </Row>
    </Container>
  )
}

export default Page
