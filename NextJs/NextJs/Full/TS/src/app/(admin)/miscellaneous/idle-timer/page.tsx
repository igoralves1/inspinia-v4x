import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import IdleTracker from './components/IdleTracker'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Idle Timer" subtitle="Miscellaneous" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <IdleTracker />
        </Col>
      </Row>
    </Container>
  )
}

export default Page
