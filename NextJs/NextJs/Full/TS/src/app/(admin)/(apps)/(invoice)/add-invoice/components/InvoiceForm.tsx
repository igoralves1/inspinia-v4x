'use client'
import { Button, CardBody, Col, Form, FormControl, FormGroup, FormLabel, FormSelect, InputGroup, Row, Table } from 'react-bootstrap'
import { TbPlus, TbUpload } from 'react-icons/tb'

import logoDark from '@/assets/images/logo-black.png'
import FlatpickrClient from '@/components/client-wrapper/FlatpickrClient'

const InvoiceForm = () => {
  return (
    <Form>
      <CardBody className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div
            className="border rounded position-relative d-flex text-center align-items-center justify-content-between px-2"
            style={{ height: '60px', width: '260px' }}>
            <label htmlFor="invoiceLogo" className="position-absolute top-0 start-0 end-0 bottom-0"></label>
            <FormControl type="file" className="d-none" id="invoiceLogo" accept="image/*" />
            <img id="preview" src={logoDark.src} alt="Company Logo" height="28" />
            <TbUpload className="fs-xxl text-muted" role="button" />
          </div>

          <div className="text-end">
            <Row className="g-2 align-items-center">
              <Col className="col-auto">
                <label htmlFor="invoiceNumber" className="form-label fw-semibold">
                  Invoice #
                </label>
                <FormControl type="text" id="invoiceNumber" placeholder="e.g. INV-0001" />
              </Col>
              <Col className="col-auto">
                <label htmlFor="currency" className="form-label fw-semibold">
                  Currency
                </label>
                <FormSelect id="currency">
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="INR">INR (₹)</option>
                  <option value="JPY">JPY (¥)</option>
                  <option value="AUD">AUD (A$)</option>
                  <option value="CAD">CAD (C$)</option>
                  <option value="CNY">CNY (¥)</option>
                </FormSelect>
              </Col>
            </Row>
          </div>
        </div>

        <Row>
          <FormGroup as={Col} md={4}>
            <FormLabel>Invoice Date</FormLabel>
            <FlatpickrClient className="form-control" placeholder="Select Date" />
          </FormGroup>

          <FormGroup as={Col} md={4}>
            <FormLabel>Due Date</FormLabel>
            <FlatpickrClient className="form-control" placeholder="Select Date" />
          </FormGroup>

          <FormGroup as={Col} md={4}>
            <FormLabel>Payment Method</FormLabel>
            <FormSelect>
              <option>Select</option>
              <option>Credit / Debit Card</option>
              <option>Bank Transfer</option>
              <option>PayPal</option>
              <option>UPI (GPay)</option>
              <option>Cash</option>
            </FormSelect>
          </FormGroup>
        </Row>

        <Row className="mt-4">
          <Col md={6}>
            <FormLabel>Billing Address</FormLabel>
            <FormControl type="text" className="mb-2" placeholder="Name" />
            <FormControl as="textarea" rows={3} className="mb-2" placeholder="Address" />
            <InputGroup>
              <FormSelect style={{ maxWidth: '120px' }}>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (IN)</option>
                <option value="+61">+61 (AU)</option>
                <option value="+971">+971 (UAE)</option>
              </FormSelect>
              <FormControl type="text" placeholder="Phone Number" />
            </InputGroup>
          </Col>

          <Col md={6}>
            <FormLabel>Shipping Address</FormLabel>
            <FormControl type="text" className="mb-2" placeholder="Name" />
            <FormControl as="textarea" rows={3} className="mb-2" placeholder="Address" />
            <InputGroup>
              <FormSelect style={{ maxWidth: '120px' }}>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (IN)</option>
                <option value="+61">+61 (AU)</option>
                <option value="+971">+971 (UAE)</option>
              </FormSelect>
              <FormControl type="text" placeholder="Phone Number" />
            </InputGroup>
          </Col>
        </Row>

        <Table responsive bordered className="table-nowrap text-center align-middle mt-4">
          <thead className="bg-light align-middle bg-opacity-25 thead-sm">
            <tr className="text-uppercase fs-xxs">
              <th>#</th>
              <th className="text-start">Item Description</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <FormControl type="text" placeholder="Description" />
              </td>
              <td>
                <FormControl type="number" placeholder="1" />
              </td>
              <td>
                <FormControl type="number" placeholder="0.00" />
              </td>
              <td>
                <FormControl type="number" placeholder="0.00" />
              </td>
              <td>
                <Button variant="danger" size="sm" type="button">
                  ×
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Button variant="primary" className="mt-2">
          <TbPlus /> Add Item
        </Button>

        <Row className="justify-content-end mt-4">
          <Col md={4}>
            <Table borderless>
              <tbody>
                <tr>
                  <td className="text-end">Subtotal</td>
                  <td>
                    <FormControl type="number" placeholder="0.00" />
                  </td>
                </tr>
                <tr>
                  <td className="text-end">Tax (%)</td>
                  <td>
                    <FormControl type="number" placeholder="0.00" />
                  </td>
                </tr>
                <tr>
                  <td className="text-end">Discount</td>
                  <td>
                    <FormControl type="number" placeholder="0.00" />
                  </td>
                </tr>
                <tr className="fw-bold">
                  <td className="text-end">Total</td>
                  <td>
                    <FormControl type="number" readOnly placeholder="0.00" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <div className="mt-4">
          <FormLabel>Additional Notes</FormLabel>
          <FormControl as="textarea" rows={3} placeholder="e.g. Thank you for your business!" />
        </div>
      </CardBody>
    </Form>
  )
}

export default InvoiceForm
