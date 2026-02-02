'use client'
import ComponentCard from '@/components/cards/ComponentCard'
import EChartClient from '@/components/client-wrapper/EChartClient'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { RadarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { Col, Container, Row } from 'react-bootstrap'
import { getBasicBasicHeatmapChart, getHeatmapChart, getHeatmapDataChart } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Heatmap Echart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Basic Heatmap Chart">
            <EChartClient extensions={[RadarChart, CanvasRenderer]} getOptions={getBasicBasicHeatmapChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Heatmap Chart">
            <EChartClient extensions={[RadarChart, CanvasRenderer]} getOptions={getHeatmapChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Heatmap - 20K Data Chart">
            <EChartClient extensions={[RadarChart, CanvasRenderer]} getOptions={getHeatmapDataChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
