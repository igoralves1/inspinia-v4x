import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import ProductViews from '@/pages/ecommerce/reports/product-views/components/ProductViews'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Product Views" subtitle="Ecommerce" />

                <Row className="justify-content-center">
                    <Col xxl={10}>
                        <ProductViews />
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Page
