import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Button, Card, CardBody, Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router'
import { TbDownload, TbPencil, TbPrinter, TbSend } from 'react-icons/tb'

import logoDark from '@/assets/images/logo-black.png'
import logoLight from '@/assets/images/logo.png'
import sign from '@/assets/images/sign.png'

import qrImg from '@/assets/images/qr.png'
import { currency } from '@/helpers'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Invoice Details" subtitle="Invoices" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <Row>
            <Col xl={9}>
              <Card>
                <CardBody className="px-4">
                  <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                    <div className="auth-brand mb-0">
                      <Link to="/" className="logo-dark">
                        <img src={logoDark} alt="dark logo" height={36} width={127.8} />
                      </Link>
                      <Link to="/" className="logo-light">
                        <img src={logoLight} alt="logo" height={36} width={127.8} />
                      </Link>
                    </div>
                    <div className="text-end">
                      <span className="badge bg-warning-subtle text-warning mb-2 fs-xs px-2 py-1">Pending</span>
                      <h4 className="fw-bold text-dark m-0">Invoice #INS-0120001</h4>
                    </div>
                  </div>

                  <Row>
                    <Col cols={4}>
                      <h6 className="text-uppercase text-muted mb-2">From</h6>
                      <p className="mb-1 fw-semibold">Alina Thompson</p>
                      <p className="text-muted mb-1">
                        88 Crescent Ave,
                        <br />
                        Boston, MA - 02125
                      </p>
                      <p className="text-muted mb-0">Phone: 617-452-0099</p>
                      <div className="mt-4">
                        <h6 className="text-uppercase text-muted">Invoice Date</h6>
                        <p className="mb-0 fw-medium">20 Apr 2025</p>
                      </div>
                    </Col>

                    <Col cols={4}>
                      <h6 className="text-uppercase text-muted mb-2">To</h6>
                      <p className="mb-1 fw-semibold">Daniel Moore</p>
                      <p className="text-muted mb-1">
                        790 Westwood Blvd,
                        <br />
                        Los Angeles, CA - 90024
                      </p>
                      <p className="text-muted mb-0">Phone: 310-555-1022</p>
                      <div className="mt-4">
                        <h6 className="text-uppercase text-muted">Due Date</h6>
                        <p className="mb-0 fw-medium">05 May 2025</p>
                      </div>
                    </Col>

                    <Col cols={4} className="text-end">
                      <img src={qrImg} alt="Barcode" className="img-fluid" height={80} width={80} style={{ maxHeight: '80px' }} />
                    </Col>
                  </Row>

                  <Table responsive bordered className="table-nowrap text-center align-middle mt-4">
                    <thead className="bg-light align-middle bg-opacity-25 thead-sm">
                      <tr className="text-uppercase fs-xxs">
                        <th style={{ width: '50px' }}>#</th>
                        <th className="text-start">Product Details</th>
                        <th>Qty</th>
                        <th>Unit Price</th>
                        <th className="text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>01</td>
                        <td className="text-start">
                          <div className="d-flex align-items-center gap-2">
                            <div>
                              <strong>Figma Design System</strong>
                              <div className="text-muted small">(Desktop & Mobile UI Kit)</div>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td>{currency}350.00</td>
                        <td className="text-end">{currency}350.00</td>
                      </tr>
                      <tr>
                        <td>02</td>
                        <td className="text-start">
                          <div className="d-flex align-items-center gap-2">
                            <div>
                              <strong>Node.js API Development</strong>
                              <div className="text-muted small">(User auth, dashboard APIs)</div>
                            </div>
                          </div>
                        </td>
                        <td>12</td>
                        <td>{currency}50.00</td>
                        <td className="text-end">{currency}600.00</td>
                      </tr>
                      <tr>
                        <td>03</td>
                        <td className="text-start">
                          <div className="d-flex align-items-center gap-2">
                            <div>
                              <strong>Bootstrap UI Setup</strong>
                              <div className="text-muted small">(Homepage, blog layout)</div>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td>{currency}220.00</td>
                        <td className="text-end">{currency}220.00</td>
                      </tr>
                      <tr>
                        <td>04</td>
                        <td className="text-start">
                          <div className="d-flex align-items-center gap-2">
                            <div>
                              <strong>Firebase Setup</strong>
                              <div className="text-muted small">(Hosting & config)</div>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td>{currency}100.00</td>
                        <td className="text-end">{currency}100.00</td>
                      </tr>
                    </tbody>
                  </Table>

                  <div className="d-flex justify-content-end">
                    <table className="table w-auto table-borderless text-end">
                      <tbody>
                        <tr>
                          <td className="fw-medium">Subtotal</td>
                          <td>{currency}1,270.00</td>
                        </tr>
                        <tr>
                          <td className="fw-medium">Shipping</td>
                          <td>Free</td>
                        </tr>
                        <tr>
                          <td className="fw-medium">Discount (5%)</td>
                          <td className="text-danger">- {currency}63.50</td>
                        </tr>
                        <tr>
                          <td className="fw-medium">Tax (7%)</td>
                          <td>{currency}84.42</td>
                        </tr>
                        <tr className="border-top pt-2 fs-5 fw-bold">
                          <td>Total</td>
                          <td>{currency}1,290.92</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-lg-4 mt-2 bg-light bg-opacity-50 rounded px-3 py-2">
                    <p className="mb-0 text-muted">
                      <strong>Note:</strong> Please make payment within 10 days. For any billing inquiries, contact{' '}
                      <Link to="mailto:billing@alinadesignco.com" className="fw-medium">
                        billing@alinadesignco.com
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="fw-semibold mb-3">Thank you for your business!</p>
                    <img src={sign} alt="Company Logo" height={42} width={176.14} />
                    <p className="text-muted fs-xxs fst-italic">Authorized Signature</p>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={3} className="d-print-none">
              <Card className="card-top-sticky">
                <CardBody>
                  <div className="justify-content-center d-flex flex-column gap-2">
                    <Button variant="light">
                      <TbPencil className="me-1" /> Edit
                    </Button>
                    <Button variant="primary">
                      <TbPrinter className="me-1" /> Print
                    </Button>
                    <Button variant="info">
                      <TbDownload className="me-1" /> Download
                    </Button>
                    <Button variant="danger">
                      <TbSend className="me-1" /> Send
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
