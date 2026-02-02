import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import ProjectsList from './components/ProjectsList'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Projects List" subtitle="Apps" />

      <Row>
        <Col xs={12}>
          <ProjectsList />
        </Col>
      </Row>
    </Container>
  )
}

export default Page
