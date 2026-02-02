import { Col, Container, Row } from 'react-bootstrap'

import BillingDetails from '@/app/(admin)/(apps)/(ecommerce)/orders/[orderId]/components/BillingDetails'
import CustomerDetails from '@/app/(admin)/(apps)/(ecommerce)/orders/[orderId]/components/CustomerDetails'
import OrderSummary from '@/app/(admin)/(apps)/(ecommerce)/orders/[orderId]/components/OrderSummary'
import ShippingActivity from '@/app/(admin)/(apps)/(ecommerce)/orders/[orderId]/components/ShippingActivity'
import ShippingAddress from '@/app/(admin)/(apps)/(ecommerce)/orders/[orderId]/components/ShippingAddress'
import PageBreadcrumb from '@/components/PageBreadcrumb'

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
