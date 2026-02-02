import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import ReactDropzone from '@/pages/forms/file-uploads/components/ReactDropzone'
import ReactFilePond from '@/pages/forms/file-uploads/components/ReactFilePond'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
  return (
    <MainLayout>
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
    </MainLayout>
  )
}

export default Page
