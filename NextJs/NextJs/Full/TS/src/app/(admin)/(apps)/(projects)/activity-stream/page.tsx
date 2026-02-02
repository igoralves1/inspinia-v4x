import { Col, Container, Row } from 'react-bootstrap'

import BasicActivity from '@/app/(admin)/(apps)/(projects)/activity-stream/components/BasicActivity'
import ExpandedActivity from '@/app/(admin)/(apps)/(projects)/activity-stream/components/ExpandedActivity'
import PageBreadcrumb from '@/components/PageBreadcrumb'

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
