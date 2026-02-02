import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import InputTextFieldType from '@/views/forms/basic/components/InputTextFieldType.tsx'
import InputType from '@/views/forms/basic/components/InputType.tsx'
import InputGroups from '@/views/forms/basic/components/InputGroups.tsx'
import FloatingLabels from '@/views/forms/basic/components/FloatingLabels.tsx'
import InputSizes from '@/views/forms/basic/components/InputSizes.tsx'
import ChecksRadiosSwitches from '@/views/forms/basic/components/ChecksRadiosSwitches.tsx'

const Page = () => {
  return (
    <>
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
    </>
  )
}

export default Page
