import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import ExamplesCard from './components/ExamplesCard'

const Page = () => {
  return (
    <>
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
    </>
  )
}

export default Page
