import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Col, Container, Row } from 'react-bootstrap';
import InputTextFieldType from '@/views/forms/basic/components/InputTextFieldType';
import InputType from '@/views/forms/basic/components/InputType';
import InputGroups from '@/views/forms/basic/components/InputGroups';
import FloatingLabels from '@/views/forms/basic/components/FloatingLabels';
import InputSizes from '@/views/forms/basic/components/InputSizes';
import ChecksRadiosSwitches from '@/views/forms/basic/components/ChecksRadiosSwitches';
const Page = () => {
  return <>
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
    </>;
};
export default Page;