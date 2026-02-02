import { Col, Container, Row } from 'react-bootstrap'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import BasicActivity from '@/views/apps/projects/activity-stream/components/BasicActivity.tsx'
import ExpandedActivity from '@/views/apps/projects/activity-stream/components/ExpandedActivity.tsx'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Activity Stream" subtitle="Projects" />

      <Row>
        <Col xxl={6}>
          <BasicActivity />
        </Col>

        <Col xxl={6}>
          <ExpandedActivity />
        </Col>
      </Row>
    </Container>
  )
}

export default Page
