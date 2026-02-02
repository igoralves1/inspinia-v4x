import PageBreadcrumb from '@/components/PageBreadcrumb'
import ComponentCard from '@/components/cards/ComponentCard'
import { Link } from 'react-router'
import { useState } from 'react'
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  FormText,
  InputGroup,
  Modal,
  ModalBody,
  Row,
} from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/InputGroupText'
import { TbUserShield } from 'react-icons/tb'

const BasicForm = () => {
  return (
    <ComponentCard title="Basic Form">
      <Row className="g-4 align-items-center">
        <Col sm={6} className="border-end border-dashed">
          <div className="p-4">
            <h4 className="mb-1 fw-bold text-uppercase">Sign in</h4>
            <p className="text-muted mb-4">Let’s get you signed in. Enter your email and password to continue.</p>

            <Form>
              <div className="mb-3">
                <FormLabel htmlFor="userEmail">
                  Email address <span className="text-danger">*</span>
                </FormLabel>
                <div className="input-group">
                  <FormControl type="email" id="userEmail" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="mb-3">
                <FormLabel htmlFor="userPassword">
                  Password <span className="text-danger">*</span>
                </FormLabel>
                <div className="input-group">
                  <FormControl type="password" id="userPassword" placeholder="••••••••" required />
                </div>
              </div>

              <div className="d-flex flex-wrap justify-content-between">
                <FormCheck type="checkbox" label="Keep me signed in" className="fw-semibold fst-italic text-muted fs-base" />

                <Button variant="primary" className="rounded-pill" type="submit">
                  <strong>Log in</strong>
                </Button>
              </div>
            </Form>
          </div>
        </Col>

        <Col sm={6} className="text-center">
          <div className="avatar avatar-xl mx-auto">
            <span className="avatar-title bg-purple-subtle text-purple rounded-circle fw-bold">
              <TbUserShield className="text-purple fs-28 fill-purple" />
            </span>
          </div>
          <h4 className="mt-3">Don't Have an Account Yet?</h4>
          <p className="text-muted mb-3">Join us today and unlock access to personalized features, updates, and more!</p>
          <Link to="/auth-1/sign-up" className="link-primary text-decoration-underline fw-semibold link-offset-3">
            Create Your Account
          </Link>
        </Col>
      </Row>
    </ComponentCard>
  )
}

const ModalForm = () => {
  const [show, setShow] = useState(false)

  const toggle = () => setShow(!show)

  return (
    <ComponentCard title="Modal Form">
      <div className="text-center">
        <Button variant="primary" onClick={toggle}>
          Form in simple modal box
        </Button>
      </div>
      <Modal show={show} onHide={toggle} size="lg">
        <ModalBody>
          <Row className="g-4 align-items-center">
            <Col sm={6} className="border-end border-dashed">
              <div className="p-4">
                <h4 className="mb-1 fw-bold text-uppercase">Sign in</h4>
                <p className="text-muted mb-4">Let’s get you signed in. Enter your email and password to continue.</p>
                <Form>
                  <div className="mb-3">
                    <FormLabel htmlFor="userEmail1">
                      Email address <span className="text-danger">*</span>
                    </FormLabel>
                    <div className="input-group">
                      <FormControl type="email" id="userEmail1" placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div className="mb-3">
                    <FormLabel htmlFor="userPassword1">
                      Password <span className="text-danger">*</span>
                    </FormLabel>
                    <div className="input-group">
                      <FormControl type="password" id="userPassword1" placeholder="••••••••" required />
                    </div>
                  </div>

                  <div className="d-flex flex-wrap justify-content-between">
                    <FormCheck type="checkbox" label="Keep me signed in" className="fw-semibold fst-italic text-muted fs-base" />

                    <Button variant="primary" className="rounded-pill" type="submit">
                      <strong>Log in</strong>
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>

            <Col sm={6} className="text-center">
              <div className="avatar avatar-xl mx-auto">
                <span className="avatar-title bg-purple-subtle text-purple rounded-circle fw-bold">
                  <TbUserShield className="text-purple fs-28 fill-purple" />
                </span>
              </div>
              <h4 className="mt-3">Don't Have an Account Yet?</h4>
              <p className="text-muted mb-3">Join us today and unlock access to personalized features, updates, and more!</p>
              <Link to="/auth-1/sign-up" className="link-primary text-decoration-underline fw-semibold link-offset-3">
                Create Your Account
              </Link>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </ComponentCard>
  )
}

const BasicExample = () => {
  return (
    <ComponentCard title="Basic Example">
      <Form>
        <FormGroup className="mb-3">
          <FormLabel htmlFor="exampleInputEmail1">Email address</FormLabel>
          <FormControl type="email" placeholder="Enter email" id="exampleInputEmail1" />
          <FormText className=" text-muted">We'll never share your email with anyone else.</FormText>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel htmlFor="exampleInputPassword1">Password</FormLabel>
          <FormControl type="password" placeholder="Enter Password" id="exampleInputPassword1" />
        </FormGroup>
        <FormCheck type="checkbox" label="Check me out !" className="mb-3" />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </ComponentCard>
  )
}

const HorizontalForm = () => {
  return (
    <ComponentCard title="Horizontal Form">
      <Form className="form-horizontal">
        <FormGroup as={Row} className="mb-3">
          <FormLabel column sm={3}>
            Email
          </FormLabel>
          <Col sm={9}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup as={Row} className="mb-3">
          <FormLabel column sm={3}>
            Password
          </FormLabel>
          <Col sm={9}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup as={Row} className="mb-3">
          <FormLabel column sm={3}>
            Confirm Password
          </FormLabel>
          <Col sm={9}>
            <FormControl type="password" placeholder="Confirm Password" />
          </Col>
        </FormGroup>

        <FormGroup as={Row} className="mb-3">
          <Col sm={{ span: 9, offset: 3 }}>
            <FormCheck label="Check me out !" />
          </Col>
        </FormGroup>

        <FormGroup as={Row}>
          <Col sm={{ span: 9, offset: 3 }}>
            <Button variant="info" type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </ComponentCard>
  )
}

const HorizontalFormLabelSize = () => {
  return (
    <ComponentCard title="Horizontal Form Label Sizing">
      <Form>
        <Row className="mb-2">
          <FormLabel sm={2} column="sm">
            Email
          </FormLabel>
          <Col sm={10}>
            <FormControl size="sm" type="email" placeholder="col-form-label-sm" />
          </Col>
        </Row>
        <Row className="mb-2">
          <FormLabel sm={2} column>
            Email
          </FormLabel>
          <Col sm={10}>
            <FormControl type="email" placeholder="col-form-label" />
          </Col>
        </Row>
        <Row>
          <FormLabel sm={2} column="lg">
            Email
          </FormLabel>
          <Col sm={10}>
            <FormControl size="lg" type="email" placeholder="col-form-label-lg" />
          </Col>
        </Row>
      </Form>
    </ComponentCard>
  )
}

const InlineForm = () => {
  return (
    <ComponentCard title="Inline Form">
      <div>
        <Form>
          <Row className="row-cols-lg-auto g-3 align-items-center">
            <Col sm={12}>
              <FormLabel className="visually-hidden">Email</FormLabel>
              <FormControl plaintext type="text" readOnly value="email@example.com" />
            </Col>
            <Col sm={12}>
              <FormLabel htmlFor="inputPassword2" className="visually-hidden">
                Password
              </FormLabel>
              <FormControl type="password" id="inputPassword2" placeholder="Password" />
            </Col>
            <Col sm={12}>
              <Button variant="primary" type="submit">
                Confirm identity
              </Button>
            </Col>
          </Row>
        </Form>

        <h6 className="fs-base mt-3">Auto-sizing</h6>
        <Form>
          <Row className="gy-2 gx-2 align-items-center">
            <Col xs="auto">
              <FormLabel className="visually-hidden" htmlFor="inlineFormInput">
                Name
              </FormLabel>
              <FormControl type="text" className="mb-2" id="inlineFormInput" placeholder="Jane Doe" />
            </Col>
            <Col xs="auto">
              <FormLabel className="visually-hidden" htmlFor="inlineFormInputGroup">
                Username
              </FormLabel>
              <InputGroup className="mb-2">
                <InputGroupText>@</InputGroupText>
                <FormControl type="text" id="inlineFormInputGroup" placeholder="Username" />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <FormCheck type="checkbox" className="mb-2" label="Remember me" />
            </Col>
            <Col xs="auto">
              <Button variant="primary" type="submit" className="mb-2">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </ComponentCard>
  )
}

const FormRow = () => {
  return (
    <ComponentCard title="Form Row">
      <Form>
        <Row className="g-2">
          <FormGroup as={Col} md={6} className="mb-3">
            <FormLabel>Email address</FormLabel>
            <FormControl type="email" placeholder="Email" />
          </FormGroup>

          <FormGroup as={Col} md={6} className="mb-3">
            <FormLabel>Password</FormLabel>
            <FormControl type="password" placeholder="Password" />
          </FormGroup>
        </Row>

        <FormGroup className="mb-3">
          <FormLabel>Address</FormLabel>
          <FormControl type="text" placeholder="1234 Main St" />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel>Address 2</FormLabel>
          <FormControl type="text" placeholder="Apartment, studio, or floor" />
        </FormGroup>

        <Row className="g-2">
          <FormGroup as={Col} md={6} className="mb-3">
            <FormLabel>City</FormLabel>
            <FormControl type="text" placeholder="Password" />
          </FormGroup>

          <FormGroup as={Col} md={4} className="mb-3">
            <FormLabel>State</FormLabel>
            <FormSelect>
              <option>Choose</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </FormSelect>
          </FormGroup>

          <FormGroup as={Col} md={2} className="mb-3">
            <FormLabel>Zip</FormLabel>
            <FormControl type="text" placeholder="Password" />
          </FormGroup>
        </Row>

        <FormGroup className="mb-2">
          <FormCheck type="checkbox" label="Check this custom checkbox" />
        </FormGroup>

        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
    </ComponentCard>
  )
}

const FloatingLabelForm = () => {
  return (
    <ComponentCard title="Floating Labels">
      <Form>
        <Row className="g-3">
          <Col lg={6}>
            <FloatingLabel label="Username">
              <FormControl type="text" placeholder="Enter username" />
            </FloatingLabel>
          </Col>

          <Col lg={6}>
            <FloatingLabel label="Full Name">
              <FormControl type="text" placeholder="Enter full name" />
            </FloatingLabel>
          </Col>

          <Col lg={4}>
            <FloatingLabel label="Phone Number">
              <FormControl type="tel" placeholder="Enter phone number" />
            </FloatingLabel>
          </Col>

          <Col lg={4}>
            <FloatingLabel label="Date of Birth">
              <FormControl type="date" />
            </FloatingLabel>
          </Col>

          <Col lg={4}>
            <FloatingLabel label="Gender">
              <FormSelect>
                <option>Choose...</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </FormSelect>
            </FloatingLabel>
          </Col>

          <Col lg={8}>
            <FloatingLabel label="Street Address">
              <FormControl type="text" placeholder="Enter your address" />
            </FloatingLabel>
          </Col>

          <Col lg={4}>
            <FloatingLabel label="State">
              <FormSelect>
                <option>Choose...</option>
                <option value="1">California</option>
                <option value="2">Texas</option>
                <option value="3">Florida</option>
              </FormSelect>
            </FloatingLabel>
          </Col>

          <Col lg={6}>
            <FloatingLabel label="Website (optional)">
              <FormControl type="url" placeholder="Enter website URL" />
            </FloatingLabel>
          </Col>

          <Col lg={6}>
            <FloatingLabel label="Short Bio">
              <FormControl as="textarea" placeholder="Tell us about yourself" style={{ height: '100px' }} />
            </FloatingLabel>
          </Col>

          <Col lg={12}>
            <Button variant="success" type="submit">
              Create Account
            </Button>
          </Col>
        </Row>
      </Form>
    </ComponentCard>
  )
}

const Page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Layouts" subtitle="Forms" />
      </Container>

      <Container>
        <Row>
          <Col lg={12}>
            <BasicForm />

            <ModalForm />

            <BasicExample />

            <HorizontalForm />

            <HorizontalFormLabelSize />

            <InlineForm />

            <FormRow />

            <FloatingLabelForm />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
