import { Col, Container, Row } from 'react-bootstrap';
import ProductViews from '@/app/(admin)/(apps)/(ecommerce)/reports/product-views/components/ProductViews';
import PageBreadcrumb from '@/components/PageBreadcrumb';
const Page = () => {
  return <Container fluid>
      <PageBreadcrumb title="Product Views" subtitle="Ecommerce" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <ProductViews />
        </Col>
      </Row>
    </Container>;
};
export default Page;