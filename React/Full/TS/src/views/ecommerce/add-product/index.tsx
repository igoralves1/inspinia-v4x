import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { LuClipboardX, LuPlus, LuSave } from 'react-icons/lu'
import ProductInformation from '@/views/ecommerce/add-product/components/ProductInformation.tsx'
import ProductImage from '@/views/ecommerce/add-product/components/ProductImage'
import Pricing from '@/views/ecommerce/add-product/components/Pricing'
import Organize from '@/views/ecommerce/add-product/components/Organize.tsx'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Add Product" subtitle="Ecommerce" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <Row>
            <Col xxl={8}>
              <ProductInformation />

              <ProductImage />
            </Col>

            <Col xxl={4}>
              <Pricing />

              <Organize />
            </Col>
          </Row>

          <div className="mt-2 mb-4 d-flex gap-2 justify-content-center">
            <Button variant="link" className="text-danger fw-semibold">
              <LuClipboardX className="fs-sm me-2" /> Discard
            </Button>
            <Button variant="outline-primary" className="btn-soft-purple">
              <LuSave className="fs-sm me-2" /> Save as Draft
            </Button>
            <Button variant="success">
              <LuPlus className="fs-sm me-2" /> Publish
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
