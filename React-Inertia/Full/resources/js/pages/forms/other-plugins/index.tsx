import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import ReactInputMask from '@/pages/forms/other-plugins/components/ReactInputMask'
import ReactTypeahead from '@/pages/forms/other-plugins/components/ReactTypeahead'
import TouchSpin from '@/pages/forms/other-plugins/components/Touchspin'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
  return (
    <MainLayout>
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
    </MainLayout>
  )
}

export default Page
