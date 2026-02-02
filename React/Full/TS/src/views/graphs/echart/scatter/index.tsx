import ComponentCard from '@/components/cards/ComponentCard'
import CustomEChart from '@/components/CustomEChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { ScatterChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { Col, Container, Row } from 'react-bootstrap'
import { getBubbleChart, getQuartetScatterChart, getScatterChart, getSingleAxisScatterChart } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Scatter Echart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Scatter Chart">
            <CustomEChart extensions={[ScatterChart, CanvasRenderer]} getOptions={getScatterChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Bubble Chart">
            <CustomEChart extensions={[ScatterChart, CanvasRenderer]} getOptions={getBubbleChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>

        <Col xl={12}>
          <ComponentCard title="Quartet Scatter Chart">
            <CustomEChart extensions={[ScatterChart, CanvasRenderer]} getOptions={getQuartetScatterChart} style={{ height: '600px' }} />
          </ComponentCard>
        </Col>
        <Col xl={12}>
          <ComponentCard title="Single Axis Scatter chart">
            <CustomEChart extensions={[ScatterChart, CanvasRenderer]} getOptions={getSingleAxisScatterChart} style={{ height: '450px' }} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
