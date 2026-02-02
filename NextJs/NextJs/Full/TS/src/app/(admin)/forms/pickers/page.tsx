import ColorPicker from '@/app/(admin)/forms/pickers/components/ColorPicker'
import DatePicker from '@/app/(admin)/forms/pickers/components/DatePicker'
import DayPicker from '@/app/(admin)/forms/pickers/components/DayPicker'
import FlatPicker from '@/app/(admin)/forms/pickers/components/FlatPicker'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'

const Page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Pickers" subtitle="Forms" />
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <DatePicker />

            <DayPicker />

            <FlatPicker />

            <ColorPicker />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
