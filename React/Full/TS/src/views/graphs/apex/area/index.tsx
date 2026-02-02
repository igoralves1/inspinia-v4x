import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import DatetimeChart from './components/DatetimeChart'
import {
  getAreaChartWithNullValues,
  getAreaTimeSeriesChart,
  getAreawithNegativeChart,
  getBasicAreaChart,
  getSplineAreaChart,
  getStackedAreaChart,
} from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Area Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Basic Area Chart">
            <CustomApexChart getOptions={getBasicAreaChart} series={getBasicAreaChart().series} type="area" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Spline Area">
            <CustomApexChart getOptions={getSplineAreaChart} series={getSplineAreaChart().series} type="area" height={380} />
          </ComponentCard>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <DatetimeChart />
        </Col>
        <Col xl={6}>
          <ComponentCard title="Area with Negative Values">
            <CustomApexChart getOptions={getAreawithNegativeChart} series={getAreawithNegativeChart().series} type="area" height={380} />
          </ComponentCard>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ComponentCard title="Stacked Area">
            <CustomApexChart getOptions={getStackedAreaChart} series={getStackedAreaChart().series} type="area" height={422} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Irregular TimeSeries">
            <CustomApexChart getOptions={getAreaTimeSeriesChart} series={getAreaTimeSeriesChart().series} type="area" height={380} />
          </ComponentCard>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ComponentCard title="Area Chart with Null values">
            <CustomApexChart getOptions={getAreaChartWithNullValues} series={getAreaChartWithNullValues().series} type="area" height={380} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
