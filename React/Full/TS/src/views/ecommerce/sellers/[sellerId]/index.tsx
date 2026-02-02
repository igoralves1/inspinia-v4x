import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import SellerContact from '@/views/ecommerce/sellers/[sellerId]/components/SellerContact.tsx'
import SellerOverview from '@/views/ecommerce/sellers/[sellerId]/components/SellerOverview.tsx'
import SellerProducts from '@/views/ecommerce/sellers/[sellerId]/components/SellerProducts.tsx'

const Page = () => {
  return (
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
  )
}

export default Page
