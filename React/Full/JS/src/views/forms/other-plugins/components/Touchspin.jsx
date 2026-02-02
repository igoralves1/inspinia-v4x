import TouchSpinInput from '@/components/TouchSpinInput';
import { useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const TouchSpin = () => {
  const [value, setValue] = useState(50);
  return <Card>
      <CardHeader>
        <CardTitle as="h4">TouchSpin</CardTitle>
      </CardHeader>

      <CardBody>
        <Row className="g-3">
          <Col lg={6}>
            <h5>Default</h5>
          </Col>
          <Col lg={6}>
            <TouchSpinInput value={value} setValue={setValue} />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-3">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Sizes</h5>
          </Col>
          <Col lg={6}>
            <TouchSpinInput size="sm" value={50} />

            <TouchSpinInput size="lg" value={80} className="mt-2" />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-3">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Colors</h5>
          </Col>
          <Col lg={6}>
            {['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'dark', 'purple'].map((color, idx) => <TouchSpinInput key={idx} variant={color} value={50} className="mt-2" />)}

            <TouchSpinInput value={50} buttonClassName="btn-soft-primary" className="mt-2" />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-3">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Readonly</h5>
          </Col>
          <Col lg={6}>
            <TouchSpinInput value={50} readOnly />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-3">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Disabled</h5>
          </Col>
          <Col lg={6}>
            <TouchSpinInput value={50} disabled />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-3">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Style</h5>
          </Col>
          <Col lg={6}>
            <TouchSpinInput value={50} variant="primary" buttonClassName="rounded-circle" />

            <TouchSpinInput value={50} variant="primary" buttonClassName="rounded-circle" className="rounded-pill mt-2" />
          </Col>
        </Row>
      </CardBody>
    </Card>;
};
export default TouchSpin;