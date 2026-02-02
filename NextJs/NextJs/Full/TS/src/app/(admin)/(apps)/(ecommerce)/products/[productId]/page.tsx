import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

import ProductDetails from '@/app/(admin)/(apps)/(ecommerce)/products/[productId]/components/ProductDetails'
import ProductDisplay from '@/app/(admin)/(apps)/(ecommerce)/products/[productId]/components/ProductDisplay'
import ProductReviews from '@/app/(admin)/(apps)/(ecommerce)/products/[productId]/components/ProductReviews'
import PageBreadcrumb from '@/components/PageBreadcrumb'

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
