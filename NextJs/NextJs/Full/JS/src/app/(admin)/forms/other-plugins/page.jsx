import ReactInputMask from '@/app/(admin)/forms/other-plugins/components/ReactInputMask';
import ReactTypeahead from '@/app/(admin)/forms/other-plugins/components/ReactTypeahead';
import TouchSpin from '@/app/(admin)/forms/other-plugins/components/Touchspin';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Col, Container, Row } from 'react-bootstrap';
const Page = () => {
  return <>
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
    </>;
};
export default Page;