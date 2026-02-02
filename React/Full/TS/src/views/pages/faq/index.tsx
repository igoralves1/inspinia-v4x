import PageBreadcrumb from '@/components/PageBreadcrumb'
import {
  Accordion,
  AccordionBody,
  AccordionButton,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  FormControl,
  Row,
} from 'react-bootstrap'
import { LuSearch } from 'react-icons/lu'
import { Link } from 'react-router'
import { customizationFaqs, generalFaqs, paymentFaqs, refundFaqs } from '@/views/pages/faq/data.ts'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Faq" subtitle="Pages" />

      <Row className="justify-content-center">
        <Col xxl={9}>
          <Row className="justify-content-center my-4">
            <Col lg={5} md={8}>
              <div className="text-center">
                <h3 className="fw-bold mb-4">Frequently Asked Questions</h3>
                <div className="app-search mb-3">
                  <FormControl type="text" className="py-2 rounded-pill" placeholder="Search Questions..." />
                  <LuSearch className="app-search-icon text-muted" />
                </div>
                <div className="d-flex justify-content-center align-items-center gap-1">
                  <h5 className="text-muted mb-0">Popular Searches : </h5>
                  <Link to="#" className="badge bg-primary-subtle text-primary rounded-pill px-2 py-1 fs-6">
                    Apps
                  </Link>
                  <Link to="#" className="badge bg-primary-subtle text-primary rounded-pill px-2 py-1 fs-6">
                    Developers
                  </Link>
                  <Link to="#" className="badge bg-primary-subtle text-primary rounded-pill px-2 py-1 fs-6">
                    Repair
                  </Link>
                  <Link to="#" className="badge bg-primary-subtle text-primary rounded-pill px-2 py-1 fs-6">
                    Billing
                  </Link>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader className="d-block">
                  <CardTitle as="h4" className="mb-1">
                    General
                  </CardTitle>
                  <p className="text-muted mb-0">Here are some common questions about our templates.</p>
                </CardHeader>

                <CardBody>
                  <Accordion className="accordion-bordered">
                    {generalFaqs.map((faq, idx) => (
                      <AccordionItem eventKey={idx.toString()} key={idx} className="border-0">
                        <AccordionButton className="shadow-none bg-light bg-opacity-50">{faq.question}</AccordionButton>
                        <AccordionBody>{faq.answer}</AccordionBody>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader className="d-block">
                  <CardTitle as="h4" className="mb-1">
                    Payments
                  </CardTitle>
                  <p className="text-muted mb-0">Here are some common questions related to billing and payment.</p>
                </CardHeader>

                <CardBody>
                  <Accordion className="accordion-bordered">
                    {paymentFaqs.map((faq, idx) => (
                      <AccordionItem eventKey={idx.toString()} key={idx} className="border-0">
                        <AccordionButton className="shadow-none bg-light bg-opacity-50">{faq.question}</AccordionButton>
                        <AccordionBody>{faq.answer}</AccordionBody>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader className="d-block">
                  <CardTitle as="h4" className="mb-1">
                    Refunds
                  </CardTitle>
                  <p className="text-muted mb-0">Find answers related to our refund policy and conditions.</p>
                </CardHeader>
                <CardBody>
                  <Accordion className="accordion-bordered">
                    {refundFaqs.map((faq, idx) => (
                      <AccordionItem eventKey={idx.toString()} key={idx} className="border-0">
                        <AccordionButton className="shadow-none bg-light bg-opacity-50">{faq.question}</AccordionButton>
                        <AccordionBody>{faq.answer}</AccordionBody>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader className="d-block">
                  <CardTitle as="h4" className="mb-1">
                    Customization
                  </CardTitle>
                  <p className="text-muted mb-0">Questions about custom development and template modifications.</p>
                </CardHeader>
                <CardBody>
                  <Accordion className="accordion-bordered">
                    {customizationFaqs.map((faq, idx) => (
                      <AccordionItem eventKey={idx.toString()} key={idx} className="border-0">
                        <AccordionButton className="shadow-none bg-light bg-opacity-50">{faq.question}</AccordionButton>
                        <AccordionBody>{faq.answer}</AccordionBody>
                      </AccordionItem>
                    ))}
                  </Accordion>
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
