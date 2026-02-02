import Dropzone from '@/app/(admin)/forms/file-uploads/components/Dropzone'
import FilePond from '@/app/(admin)/forms/file-uploads/components/FilePond'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'

const Page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="File Uploads" subtitle="Forms" />
      </Container>

      <Container>
        <Row>
          <Col cols={12}>
            <Dropzone />
            <FilePond />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
