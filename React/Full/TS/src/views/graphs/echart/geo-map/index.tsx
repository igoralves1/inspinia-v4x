import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import GeoMapWithPieChart from './components/GeoMapWithPieChart'
import GeoSVGScatterMap from './components/GeoSVGScatterMap'
import MorphingMapBarChart from './components/MorphingMapBarChart'
import UsaMap from './components/UsaMap'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="GEO Maps" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <UsaMap />
        </Col>

        <Col xl={6}>
          <MorphingMapBarChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <GeoMapWithPieChart />
        </Col>

        <Col xl={6}>
          <GeoSVGScatterMap />
        </Col>
      </Row>
    </Container>
  )
}

export default Page
