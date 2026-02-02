import ComponentCard from '@/components/cards/ComponentCard'
import CustomEChart from '@/components/CustomEChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { Col, Container, Row } from 'react-bootstrap'
import { getAreaChart, getAreawithMarkerChart, getStackedAreaChart, getStepAreaChart } from './data'
import DynamicAreaChart from './components/DynamicAreaChart'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Area Echart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Area Chart">
            <CustomEChart extensions={[LineChart, CanvasRenderer]} getOptions={getAreaChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Stacked Area Chart">
            <CustomEChart extensions={[LineChart, CanvasRenderer]} getOptions={getStackedAreaChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Area with Marker">
            <CustomEChart extensions={[LineChart, CanvasRenderer]} getOptions={getAreawithMarkerChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <DynamicAreaChart />
        </Col>
        <Col xl={6}>
          <ComponentCard title="Step Area">
            <CustomEChart extensions={[LineChart, CanvasRenderer]} getOptions={getStepAreaChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
