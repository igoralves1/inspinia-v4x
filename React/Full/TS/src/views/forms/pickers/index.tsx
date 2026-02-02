import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import ReactDatePicker from '@/views/forms/pickers/components/ReactDatePicker.tsx'
import ReactDayPicker from '@/views/forms/pickers/components/ReactDayPicker.tsx'
import ReactFlatPicker from '@/views/forms/pickers/components/ReactFlatPicker.tsx'
import ReactColorPicker from '@/views/forms/pickers/components/ReactColorPicker.tsx'

const Page = () => {
  return (
    <>
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
    </>
  )
}

export default Page
