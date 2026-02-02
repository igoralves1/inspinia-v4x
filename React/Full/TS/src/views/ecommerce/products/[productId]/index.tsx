import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import ProductDisplay from '@/views/ecommerce/products/[productId]/components/ProductDisplay.tsx'
import ProductDetails from '@/views/ecommerce/products/[productId]/components/ProductDetails.tsx'
import ProductReviews from '@/views/ecommerce/reviews/components/ProductReviews.tsx'

const Page = () => {
  return (
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
  )
}

export default Page
