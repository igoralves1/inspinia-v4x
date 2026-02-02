import ComponentCard from '@/components/cards/ComponentCard'
import { Col, FormControl, FormLabel, InputGroup, Row } from 'react-bootstrap'
import FormRange from 'react-bootstrap/FormRange'
import InputGroupText from 'react-bootstrap/InputGroupText'
import { TbEye, TbEyeClosed } from 'react-icons/tb'

const InputType = () => {
  return (
    <ComponentCard title="Input Type">
      <Row>
        <Col lg={12}>
          <Row className="g-lg-4 g-2 mb-3">
            <Col lg={2}>
              <FormLabel htmlFor="example-email">Email</FormLabel>
            </Col>
            <Col lg={5}>
              <FormControl type="email" id="example-email" name="example-email" placeholder="Email" />
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2 mb-3">
            <Col lg={2}>
              <FormLabel htmlFor="example-password">Password</FormLabel>
            </Col>
            <Col lg={5}>
              <FormControl type="password" id="example-password" value="password" onChange={() => {}} />
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2 mb-3">
            <Col lg={2}>
              <FormLabel htmlFor="password">Show/Hide Password</FormLabel>
            </Col>
            <Col lg={5}>
              <InputGroup>
                <FormControl type="password" id="password" placeholder="Enter your password" />
                <InputGroupText className="password-eye">
                  <TbEye className="d-none" />
                  <TbEyeClosed className="d-block" />
                </InputGroupText>
              </InputGroup>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2 mb-3">
            <Col lg={2}>
              <FormLabel htmlFor="example-month">Month</FormLabel>
            </Col>
            <Col lg={5}>
              <FormControl id="example-month" type="month" name="month" />
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2 mb-3">
            <Col lg={2}>
              <FormLabel htmlFor="example-time">Time</FormLabel>
            </Col>
            <Col lg={5}>
              <FormControl id="example-time" type="time" name="time" />
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2 mb-3">
            <Col lg={2}>
              <FormLabel htmlFor="example-week">Week</FormLabel>
            </Col>
            <Col lg={5}>
              <FormControl id="example-week" type="week" name="week" />
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2 mb-3">
            <Col lg={2}>
              <FormLabel htmlFor="example-number">Number</FormLabel>
            </Col>
            <Col lg={5}>
              <FormControl id="example-number" type="number" name="number" />
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2 mb-3">
            <Col lg={2}>
              <FormLabel htmlFor="example-color">Color</FormLabel>
            </Col>
            <Col lg={5}>
              <FormControl id="example-color" type="color" name="color" value="#1ab394" onChange={() => {}} />
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2 mb-3">
            <Col lg={2}>
              <FormLabel htmlFor="example-range">Range</FormLabel>
            </Col>
            <Col lg={5}>
              <FormRange id="example-range" min="0" max="100" />
            </Col>
          </Row>
        </Col>
      </Row>
    </ComponentCard>
  )
}

export default InputType
