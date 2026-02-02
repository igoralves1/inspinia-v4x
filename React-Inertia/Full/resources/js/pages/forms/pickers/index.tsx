import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import ReactDatePicker from '@/pages/forms/pickers/components/ReactDatePicker'
import ReactDayPicker from '@/pages/forms/pickers/components/ReactDayPicker'
import ReactFlatPicker from '@/pages/forms/pickers/components/ReactFlatPicker'
import ReactColorPicker from '@/pages/forms/pickers/components/ReactColorPicker'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
  return (
    <MainLayout>
      <Container fluid>
        <PageBreadcrumb title="Pickers" subtitle="Forms" />
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <ReactDatePicker />

            <ReactDayPicker />

            <ReactFlatPicker />

            <ReactColorPicker />
          </Col>
        </Row>
      </Container>
    </MainLayout>
  )
}

export default Page
