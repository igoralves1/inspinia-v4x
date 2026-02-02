import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'

import ProductReviews from './components/ProductReviews'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Reviews" subtitle="Ecommerce" />
                <Row className="justify-content-center">
                    <Col xxl={10}>
                        <ProductReviews />
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Page
