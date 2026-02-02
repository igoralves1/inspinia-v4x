import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import ExamplesCard from './components/ExamplesCard'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
  return (
    <MainLayout>
      <Container fluid>
        <PageBreadcrumb title="Vector Maps" />
      </Container>

      <Container>
        <Row>
          <Col sm={12}>
            <ExamplesCard />
          </Col>
        </Row>
      </Container>
    </MainLayout>
  )
}

export default Page
