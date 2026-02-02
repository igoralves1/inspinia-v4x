import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import SellersCard from './components/SellersCard'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Sellers" subtitle="Ecommerce" />
                <Row className="justify-content-center">
                    <Col xxl={10}>
                        <SellersCard />
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Page
