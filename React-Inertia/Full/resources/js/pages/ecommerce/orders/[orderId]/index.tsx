import { Col, Container, Row } from 'react-bootstrap'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import OrderSummary from '@/pages/ecommerce/orders/[orderId]/components/OrderSummary'
import CustomerDetails from '@/pages/ecommerce/orders/[orderId]/components/CustomerDetails'
import BillingDetails from '@/pages/ecommerce/orders/[orderId]/components/BillingDetails'
import ShippingAddress from '@/pages/ecommerce/orders/[orderId]/components/ShippingAddress'
import ShippingActivity from '@/pages/ecommerce/orders/[orderId]/components/ShippingActivity'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
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
        </MainLayout>
    )
}

export default Page
