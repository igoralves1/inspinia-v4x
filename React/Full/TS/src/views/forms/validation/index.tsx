import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import { ReactHookForm, ReactHookFormWithYup, ReactHookFormWithZod } from '@/views/forms/validation/components/ReactHookForm'
import { ReactBootstrapValidation, ReactBootstrapValidationWithTooltip } from '@/views/forms/validation/components/ReactBootstrap.tsx'

const Page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Validation" subtitle="Forms" />
      </Container>

      <Container>
        <Row>
          <Col lg={12}>
            <ReactHookForm />
          </Col>

          <Col lg={12}>
            <ReactHookFormWithYup />
          </Col>

          <Col lg={12}>
            <ReactHookFormWithZod />
          </Col>

          <Col lg={12}>
            <ReactBootstrapValidation />
          </Col>

          <Col lg={12}>
            <ReactBootstrapValidationWithTooltip />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
