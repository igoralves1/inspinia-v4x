'use client'
import ComponentCard from '@/components/cards/ComponentCard'
import EChartClient from '@/components/client-wrapper/EChartClient'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { PieChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { Col, Container, Row } from 'react-bootstrap'
import {
  getBasicPieChart,
  getDoughnutPieChart,
  getDoughnutRoundedPieChart,
  getMultiplePieChart,
  getNightingaleMap,
  getPieEdgeAlignChart,
  getPieLabelAlignChart,
} from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Pie Echart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title=" Pie Chart">
            <EChartClient extensions={[PieChart, CanvasRenderer]} getOptions={getBasicPieChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Doughnut Pie Chart">
            <EChartClient extensions={[PieChart, CanvasRenderer]} getOptions={getDoughnutPieChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Doughnut Rounded Pie Chart">
            <EChartClient extensions={[PieChart, CanvasRenderer]} getOptions={getDoughnutRoundedPieChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Multiple Pie Chart">
            <EChartClient extensions={[PieChart, CanvasRenderer]} getOptions={getMultiplePieChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Pie Label Align Chart">
            <EChartClient extensions={[PieChart, CanvasRenderer]} getOptions={getPieLabelAlignChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Nightingale Map">
            <EChartClient extensions={[PieChart, CanvasRenderer]} getOptions={getNightingaleMap} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Pie Edge Align Chart">
            <EChartClient extensions={[PieChart, CanvasRenderer]} getOptions={getPieEdgeAlignChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
