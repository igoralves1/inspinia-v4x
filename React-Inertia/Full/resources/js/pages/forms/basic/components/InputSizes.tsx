import ComponentCard from '@/components/cards/ComponentCard'
import { Col, Form, FormControl, FormLabel, Row } from 'react-bootstrap'

const InputSizes = () => {
  return (
    <ComponentCard title="Input Sizes">
      <Row>
        <Col lg={12}>
          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel htmlFor="example-input-small">Small</FormLabel>
            </Col>
            <Col lg={5}>
              <FormControl size="sm" type="text" id="example-input-small" name="example-input-small" placeholder=".input-sm" />
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel htmlFor="example-input-normal">Normal</FormLabel>
            </Col>
            <Col lg={5}>
              <FormControl type="text" id="example-input-normal" name="example-input-normal" placeholder="Normal" />
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel htmlFor="example-input-large">Large</FormLabel>
            </Col>
            <Col lg={5}>
              <FormControl size="lg" type="text" id="example-input-large" name="example-input-large" placeholder=".input-lg" />
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel htmlFor="example-gridsize">Grid Sizes</FormLabel>
            </Col>
            <Col lg={5}>
              <Row>
                <Col sm={4}>
                  <FormControl type="text" id="example-gridsize" placeholder=".col-sm-4" />
                </Col>
              </Row>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel>Large Select</FormLabel>
            </Col>
            <Col lg={5}>
              <Form.Select size="lg">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel>Small Select</FormLabel>
            </Col>
            <Col lg={5}>
              <Form.Select size="sm">
                <option>Open this select menu</option>
                mb-2
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
      </Row>
    </ComponentCard>
  )
}

export default InputSizes
