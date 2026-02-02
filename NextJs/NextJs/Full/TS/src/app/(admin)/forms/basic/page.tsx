import ChecksRadiosSwitches from '@/app/(admin)/forms/basic/components/ChecksRadiosSwitches'
import FloatingLabels from '@/app/(admin)/forms/basic/components/FloatingLabels'
import InputGroups from '@/app/(admin)/forms/basic/components/InputGroups'
import InputSizes from '@/app/(admin)/forms/basic/components/InputSizes'
import InputTextFieldType from '@/app/(admin)/forms/basic/components/InputTextFieldType'
import InputType from '@/app/(admin)/forms/basic/components/InputType'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'

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
