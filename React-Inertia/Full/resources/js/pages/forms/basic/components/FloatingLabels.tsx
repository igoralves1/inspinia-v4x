import ComponentCard from '@/components/cards/ComponentCard'
import { Col, FloatingLabel, Form, FormControl, FormLabel, Row } from 'react-bootstrap'

const FloatingLabels = () => {
  return (
    <ComponentCard title="Floating labels">
      <Row>
        <Col lg={12}>
          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel>Email address</FormLabel>
            </Col>
            <Col lg={5}>
              <FloatingLabel label="Email address">
                <FormControl type="email" id="floatingInputEmail" placeholder="name@example.com" />
              </FloatingLabel>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel htmlFor="floatingPassword">Password</FormLabel>
            </Col>
            <Col lg={5}>
              <FloatingLabel label="Password">
                <FormControl type="password" id="floatingPassword" placeholder="Password" />
              </FloatingLabel>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel htmlFor="floatingTextarea">Comments</FormLabel>
            </Col>
            <Col lg={5}>
              <FloatingLabel label="Comments">
                <FormControl as="textarea" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: '100px' }}></FormControl>
              </FloatingLabel>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel htmlFor="floatingSelect">Select Menu</FormLabel>
            </Col>
            <Col lg={5}>
              <FloatingLabel label="Works with selects">
                <Form.Select id="floatingSelect" aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
        </Col>
      </Row>
    </ComponentCard>
  )
}

export default FloatingLabels
