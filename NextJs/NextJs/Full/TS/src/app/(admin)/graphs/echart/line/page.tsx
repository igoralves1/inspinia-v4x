'use client'
import DynamicLineChart from '@/app/(admin)/graphs/echart/line/components/DynamicLineChart'
import ComponentCard from '@/components/cards/ComponentCard'
import EChartClient from '@/components/client-wrapper/EChartClient'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { LinesChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { Col, Container, Row } from 'react-bootstrap'
import { getLineChart, getLineMarkerChart, getLineYCategory, getStackedLineChart, getStepLine } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Line Chart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Line Chart">
            <EChartClient extensions={[LinesChart, CanvasRenderer]} getOptions={getLineChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Line Stacked Chart">
            <EChartClient extensions={[LinesChart, CanvasRenderer]} getOptions={getStackedLineChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Line Marker">
            <EChartClient extensions={[LinesChart, CanvasRenderer]} getOptions={getLineMarkerChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <DynamicLineChart />
        </Col>

        <Col xl={6}>
          <ComponentCard title="Step Line">
            <EChartClient extensions={[LinesChart, CanvasRenderer]} getOptions={getStepLine} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Line Y Category">
            <EChartClient extensions={[LinesChart, CanvasRenderer]} getOptions={getLineYCategory} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
