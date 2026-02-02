import { Col, Container, Row } from 'react-bootstrap'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import OrderSummary from '@/views/ecommerce/orders/[orderId]/components/OrderSummary'
import CustomerDetails from '@/views/ecommerce/orders/[orderId]/components/CustomerDetails.tsx'
import BillingDetails from '@/views/ecommerce/orders/[orderId]/components/BillingDetails.tsx'
import ShippingAddress from '@/views/ecommerce/orders/[orderId]/components/ShippingAddress.tsx'
import ShippingActivity from '@/views/ecommerce/orders/[orderId]/components/ShippingActivity.tsx'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Order Details" subtitle="Ecommerce" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <Row>
            <Col xl={9}>
              <OrderSummary />

              <ShippingActivity />
            </Col>
            <Col xl={3}>
              <CustomerDetails />

              <ShippingAddress />

              <BillingDetails />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
