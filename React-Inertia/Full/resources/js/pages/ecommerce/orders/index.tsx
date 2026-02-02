import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import OrdersList from './components/OrdersList'
import OrdersStats from '@/pages/ecommerce/orders/components/OrdersStats'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Orders" subtitle="Ecommerce" />

                <OrdersStats />

                <Row>
                    <Col cols={12}>
                        <OrdersList />
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Page
