import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { TbCirclePlus, TbDownload, TbEye } from 'react-icons/tb'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import InvoiceForm from './components/InvoiceForm'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Create Invoice" subtitle="Invoices" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <Row>
            <Col xl={9}>
              <Card>
                <InvoiceForm />
              </Card>
            </Col>

            <Col xl={3} className="d-print-none">
              <Card className="card-top-sticky">
                <CardBody>
                  <div className="justify-content-center d-flex flex-column gap-2">
                    <Button variant="light">
                      <TbEye className="me-1" /> Preview
                    </Button>
                    <Button variant="light">
                      <TbDownload className="me-1" /> Download
                    </Button>
                    <Button variant="danger">
                      <TbCirclePlus className="me-1" /> Create
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
