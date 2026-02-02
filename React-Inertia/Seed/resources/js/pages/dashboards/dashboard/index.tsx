import { Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import EcomStats from './components/EcomStats'
import OrdersStatics from './components/OrdersStatics'
import ProductInventory from './components/ProductInventory'
import RecentOrders from './components/RecentOrders'
import TransactionsWorldwide from './components/TransactionsWorldwide'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Dashboard 2" />

                <EcomStats />

                <OrdersStatics />

                <Row>
                    <ProductInventory />

                    <RecentOrders />
                </Row>

                <TransactionsWorldwide />
            </Container>
        </MainLayout>
    )
}

export default Page
