import ComponentCard from '@/components/cards/ComponentCard';
import { useState } from 'react';
import { Button, Col, Form, FormCheck, FormControl, FormGroup, FormLabel, InputGroup, Row } from 'react-bootstrap';
import Feedback from 'react-bootstrap/Feedback';
import InputGroupText from 'react-bootstrap/InputGroupText';
const ReactBootstrapValidation = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = event => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return <ComponentCard title="React Bootstrap Validation">
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="g-3">
        <Row>
          <Col md={4}>
            <FormGroup className="mb-3">
              <FormLabel>First name</FormLabel>
              <FormControl required type="text" placeholder="First name" defaultValue="Mark" />
              <Feedback>Looks good!</Feedback>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup className="mb-3">
              <FormLabel>Last name</FormLabel>
              <FormControl required type="text" placeholder="Last name" defaultValue="Otto" />
              <Feedback>Looks good!</Feedback>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup className="mb-3">
              <FormLabel>Username</FormLabel>
              <InputGroup hasValidation>
                <InputGroupText id="inputGroupPrepend">@</InputGroupText>
                <FormControl type="text" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                <Feedback type="invalid">Please choose a username.</Feedback>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormLabel>City</FormLabel>
              <FormControl type="text" placeholder="City" required />
              <Feedback type="invalid">Please provide a valid city.</Feedback>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <FormLabel>State</FormLabel>
              <FormControl type="text" placeholder="State" required />
              <Feedback type="invalid">Please provide a valid state.</Feedback>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <FormLabel>Zip</FormLabel>
              <FormControl type="text" placeholder="Zip" required />
              <Feedback type="invalid">Please provide a valid zip.</Feedback>
            </FormGroup>
          </Col>
          <Col sm={12}>
            <FormGroup className="my-3">
              <FormCheck required label="I agree to the terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
            </FormGroup>
          </Col>
          <Col sm={12}>
            <Button variant="primary" type="submit">
              Submit Form
            </Button>
          </Col>
        </Row>
      </Form>
    </ComponentCard>;
};
const ReactBootstrapValidationWithTooltip = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = event => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return <ComponentCard title="React Bootstrap Validation With Tooltip">
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="g-3">
        <Row>
          <Col md={4}>
            <FormGroup className="position-relative mb-3">
              <FormLabel>First name</FormLabel>
              <FormControl required type="text" placeholder="First name" defaultValue="Mark" />
              <Feedback tooltip>Looks good!</Feedback>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup className="position-relative mb-3">
              <FormLabel>Last name</FormLabel>
              <FormControl required type="text" placeholder="Last name" defaultValue="Otto" />
              <Feedback tooltip>Looks good!</Feedback>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup className="position-relative mb-3">
              <FormLabel>Username</FormLabel>
              <InputGroup hasValidation>
                <InputGroupText id="inputGroupPrepend">@</InputGroupText>
                <FormControl type="text" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                <Feedback type="invalid" tooltip>
                  Please choose a username.
                </Feedback>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="position-relative">
              <FormLabel>City</FormLabel>
              <FormControl type="text" placeholder="City" required />
              <Feedback type="invalid" tooltip>
                Please provide a valid city.
              </Feedback>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup className="position-relative">
              <FormLabel>State</FormLabel>
              <FormControl type="text" placeholder="State" required />
              <Feedback type="invalid" tooltip>
                Please provide a valid state.
              </Feedback>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup className="position-relative">
              <FormLabel>Zip</FormLabel>
              <FormControl type="text" placeholder="Zip" required />
              <Feedback type="invalid" tooltip>
                Please provide a valid zip.
              </Feedback>
            </FormGroup>
          </Col>
          <Col sm={12}>
            <FormGroup className="position-relative my-3">
              <FormCheck required label="I agree to the terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" feedbackTooltip />
            </FormGroup>
          </Col>
          <Col sm={12}>
            <Button variant="primary" type="submit">
              Submit Form
            </Button>
          </Col>
        </Row>
      </Form>
    </ComponentCard>;
};
export { ReactBootstrapValidation, ReactBootstrapValidationWithTooltip };