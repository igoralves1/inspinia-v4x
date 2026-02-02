import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import ProductDisplay from '@/pages/ecommerce/products/[productId]/components/ProductDisplay'
import ProductDetails from '@/pages/ecommerce/products/[productId]/components/ProductDetails'
import ProductReviews from '@/pages/ecommerce/reviews/components/ProductReviews'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Product Details" subtitle="Ecommerce" />

                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardBody>
                                <Row>
                                    <ProductDisplay />

                                    <Col xl={8}>
                                        <div className="p-4">
                                            <ProductDetails />

                                            <ProductReviews />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Page
