import ComponentCard from '@/components/cards/ComponentCard'
import CustomEChart from '@/components/CustomEChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { RadarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { Col, Container, Row } from 'react-bootstrap'
import { getBasicBasicRadarChart, getCustomizedRadarChart, getMultipleRadarChart, getProportionofBrowsersChart } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Radar Echart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Basic Radar Chart">
            <CustomEChart extensions={[RadarChart, CanvasRenderer]} getOptions={getBasicBasicRadarChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Proportion of Browsers">
            <CustomEChart extensions={[RadarChart, CanvasRenderer]} getOptions={getProportionofBrowsersChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>

        <Col xl={12}>
          <ComponentCard title="Customized Radar Chart">
            <CustomEChart extensions={[RadarChart, CanvasRenderer]} getOptions={getCustomizedRadarChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={12}>
          <ComponentCard title="Multiple Radar Chart">
            <CustomEChart extensions={[RadarChart, CanvasRenderer]} getOptions={getMultipleRadarChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
