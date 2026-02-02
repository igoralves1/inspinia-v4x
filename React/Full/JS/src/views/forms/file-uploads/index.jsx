import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Col, Container, Row } from 'react-bootstrap';
import ReactDropzone from '@/views/forms/file-uploads/components/ReactDropzone';
import ReactFilePond from '@/views/forms/file-uploads/components/ReactFilePond';
const Page = () => {
  return <>
      <Container fluid>
        <PageBreadcrumb title="File Uploads" subtitle="Forms" />
      </Container>

      <Container>
        <Row>
          <Col cols={12}>
            <ReactDropzone />
            <ReactFilePond />
          </Col>
        </Row>
      </Container>
    </>;
};
export default Page;