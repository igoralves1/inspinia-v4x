import GeoMapWithPieChart from '@/app/(admin)/graphs/echart/geo-map/components/GeoMapWithPieChart';
import GeoSVGScatterMap from '@/app/(admin)/graphs/echart/geo-map/components/GeoSVGScatterMap';
import MorphingMapBarChart from '@/app/(admin)/graphs/echart/geo-map/components/MorphingMapBarChart';
import UsaMap from '@/app/(admin)/graphs/echart/geo-map/components/UsaMap';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Col, Container, Row } from 'react-bootstrap';
const Page = () => {
  return <Container fluid>
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
    </Container>;
};
export default Page;