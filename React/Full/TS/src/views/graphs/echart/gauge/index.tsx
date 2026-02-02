import ComponentCard from '@/components/cards/ComponentCard'
import CustomEChart from '@/components/CustomEChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { GaugeChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { CardBody, Col, Container, Row } from 'react-bootstrap'
import MultiGaugeChart from './components/MultiGaugeChart'
import TemperatureChart from './components/TemperatureChart'
import { getGaugeChart, getMultiRingGaugeChart, getRingGaugeChart, getSpeedStageGaugeChart } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Gauge Echart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Gauge Chart">
            <CardBody>
              <CustomEChart extensions={[GaugeChart, CanvasRenderer]} getOptions={getGaugeChart} style={{ height: '260px' }} />
            </CardBody>
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Speed Stage Gauge Chart">
            <CustomEChart extensions={[GaugeChart, CanvasRenderer]} getOptions={getSpeedStageGaugeChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Ring Gauge Chart">
            <CustomEChart extensions={[GaugeChart, CanvasRenderer]} getOptions={getRingGaugeChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Temperature Chart">
            <TemperatureChart />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Multi Ring Gauge Chart">
            <CustomEChart extensions={[GaugeChart, CanvasRenderer]} getOptions={getMultiRingGaugeChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Multi Gauge Chart">
            <MultiGaugeChart />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
