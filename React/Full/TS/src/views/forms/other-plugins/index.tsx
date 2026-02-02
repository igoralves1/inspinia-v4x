import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import ReactInputMask from '@/views/forms/other-plugins/components/ReactInputMask'
import ReactTypeahead from '@/views/forms/other-plugins/components/ReactTypeahead.tsx'
import TouchSpin from '@/views/forms/other-plugins/components/Touchspin.tsx'

const Page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Other Plugins" subtitle="Forms" />
      </Container>

      <Container>
        <Row>
          <Col cols={12}>
            <ReactInputMask />
            <ReactTypeahead />
            <TouchSpin />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
