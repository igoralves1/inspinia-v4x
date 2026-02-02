import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import InputTextFieldType from '@/pages/forms/basic/components/InputTextFieldType'
import InputType from '@/pages/forms/basic/components/InputType'
import InputGroups from '@/pages/forms/basic/components/InputGroups'
import FloatingLabels from '@/pages/forms/basic/components/FloatingLabels'
import InputSizes from '@/pages/forms/basic/components/InputSizes'
import ChecksRadiosSwitches from '@/pages/forms/basic/components/ChecksRadiosSwitches'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
  return (
    <MainLayout>
      <Container fluid>
        <PageBreadcrumb title="Basic Elements" subtitle="Forms" />

        <Container>
          <Row>
            <Col xl={12}>
              <InputTextFieldType />

              <InputType />

              <InputGroups />

              <FloatingLabels />

              <InputSizes />

              <ChecksRadiosSwitches />
            </Col>
          </Row>
        </Container>
      </Container>
    </MainLayout>
  )
}

export default Page
