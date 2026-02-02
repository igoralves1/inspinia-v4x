import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import SellerContact from '@/pages/ecommerce/sellers/[sellerId]/components/SellerContact'
import SellerOverview from '@/pages/ecommerce/sellers/[sellerId]/components/SellerOverview'
import SellerProducts from '@/pages/ecommerce/sellers/[sellerId]/components/SellerProducts'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Seller Details" subtitle="Ecommerce" />
                <Row>
                    <Col xl={4}>
                        <SellerContact />
                    </Col>
                    <Col xl={8}>
                        <SellerOverview />
                        <h4 className="my-4">My Products</h4>
                        <Row>
                            <Col xs={12}>
                                <SellerProducts />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Page
