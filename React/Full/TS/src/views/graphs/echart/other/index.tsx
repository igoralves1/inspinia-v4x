import ComponentCard from '@/components/cards/ComponentCard'
import CustomEChart from '@/components/CustomEChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { PictorialBarChart, SunburstChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { Col, Container, Row } from 'react-bootstrap'
import { getBasicSunburstChart, getNestedPieChart, getPictorialbarDottedChart } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Other Echart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Pictorialbar Dotted Chart">
            <CustomEChart extensions={[PictorialBarChart, CanvasRenderer]} getOptions={getPictorialbarDottedChart} style={{ height: '400px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Basic Sunburst Chart">
            <CustomEChart extensions={[SunburstChart, CanvasRenderer]} getOptions={getBasicSunburstChart} style={{ height: '400px' }} />
          </ComponentCard>
        </Col>
        <Col xl={12}>
          <ComponentCard title="Nested Pie Chart">
            <CustomEChart extensions={[SunburstChart, CanvasRenderer]} getOptions={getNestedPieChart} style={{ height: '600px' }} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
