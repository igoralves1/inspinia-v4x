'use client'
import RealTimeChart from '@/app/(admin)/graphs/apex/line/components/RealTimeChart'
import ComponentCard from '@/components/cards/ComponentCard'
import ApexChartClient from '@/components/client-wrapper/ApexChartClient'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import {
  getBrushChart,
  getBrushChart2,
  getDashedLineChart, getLineChart,
  getMissingLineChart,
  getSimpleLineChart,
  getSteplineChart,
  getSyncingCharts,
  getSyncingCharts2, getZoomableTimeseriesChart,
} from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Line Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Simple line chart">
            <ApexChartClient getOptions={getSimpleLineChart} series={getSimpleLineChart().series} type="line" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Line with Data Labels">
            <ApexChartClient getOptions={getLineChart} series={getLineChart().series} type="line" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Zoomable Timeseries">
            <ApexChartClient getOptions={getZoomableTimeseriesChart} series={getZoomableTimeseriesChart().series} type="area" height={360} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Syncing charts">
            <ApexChartClient getOptions={getSyncingCharts2} series={getSyncingCharts2().series} type="line" height={200} />
            <ApexChartClient getOptions={getSyncingCharts} series={getSyncingCharts().series} type="line" height={160} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Missing / Null values">
            <ApexChartClient getOptions={getMissingLineChart} series={getMissingLineChart().series} type="line" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Dashed Line Chart">
            <ApexChartClient getOptions={getDashedLineChart} series={getDashedLineChart().series} type="line" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Stepline Chart">
            <ApexChartClient getOptions={getSteplineChart} series={getSteplineChart().series} type="line" height={360} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Brush Chart">
            <ApexChartClient getOptions={getBrushChart} series={getBrushChart().series} type="line" height={230} />
            <ApexChartClient getOptions={getBrushChart2} series={getBrushChart2().series} type="area" height={130} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Realtime Chart">
            <RealTimeChart />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
