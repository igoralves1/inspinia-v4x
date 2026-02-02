import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import RealTimeChart from './components/RealTimeChart'
import {
  getBrushChart,
  getBrushChart2,
  getDashedLineChart,
  getHeatmapSingleSeriesChart,
  getLineChart,
  getMissingLineChart,
  getSteplineChart,
  getSyncingCharts,
  getSyncingCharts2,
  getZoomableTimeseriesChart,
} from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Line Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Simple line chart">
            <CustomApexChart getOptions={getHeatmapSingleSeriesChart} series={getHeatmapSingleSeriesChart().series} type="line" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Line with Data Labels">
            <CustomApexChart getOptions={getLineChart} series={getLineChart().series} type="line" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Zoomable Timeseries">
            <CustomApexChart getOptions={getZoomableTimeseriesChart} series={getZoomableTimeseriesChart().series} type="area" height={360} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Syncing charts">
            <CustomApexChart getOptions={getSyncingCharts2} series={getSyncingCharts2().series} type="line" height={200} />
            <CustomApexChart getOptions={getSyncingCharts} series={getSyncingCharts().series} type="line" height={160} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Missing / Null values">
            <CustomApexChart getOptions={getMissingLineChart} series={getMissingLineChart().series} type="line" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Dashed Line Chart">
            <CustomApexChart getOptions={getDashedLineChart} series={getDashedLineChart().series} type="line" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Stepline Chart">
            <CustomApexChart getOptions={getSteplineChart} series={getSteplineChart().series} type="line" height={360} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Brush Chart">
            <CustomApexChart getOptions={getBrushChart} series={getBrushChart().series} type="line" height={230} />
            <CustomApexChart getOptions={getBrushChart2} series={getBrushChart2().series} type="area" height={130} />
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
