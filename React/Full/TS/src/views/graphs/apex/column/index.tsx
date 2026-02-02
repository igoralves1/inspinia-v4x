import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import {
  getBasicColumnChart,
  getChartWithDataTabels,
  getColumnWithGroupLabelChart,
  getColumnWithMarkersChart,
  getDistributedColumnCharts,
  getDumbbellChart,
  getFullStackedColumnChart,
  getGroupedStackedColumnChart,
  getNegativeValueColumnChart,
  getRangeColumnCharts,
  getRotateLabelColumn,
  getStackedColumnChart,
} from './data'
import DynamicLoadedChart from './components/DynamicLoadedChart'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Column Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Basic Column Charts">
            <CustomApexChart getOptions={getBasicColumnChart} series={getBasicColumnChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Column Chart with Datalabels">
            <CustomApexChart getOptions={getChartWithDataTabels} series={getChartWithDataTabels().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Stacked Column Charts">
            <CustomApexChart getOptions={getStackedColumnChart} series={getStackedColumnChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="100% Stacked Column Chart">
            <CustomApexChart getOptions={getFullStackedColumnChart} series={getFullStackedColumnChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Grouped Stacked Columns Chart">
            <CustomApexChart getOptions={getGroupedStackedColumnChart} series={getGroupedStackedColumnChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Dumbbell Chart">
            <CustomApexChart getOptions={getDumbbellChart} series={getDumbbellChart().series} type="rangeBar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Column with Markers">
            <CustomApexChart getOptions={getColumnWithMarkersChart} series={getColumnWithMarkersChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Column with Group Label">
            <CustomApexChart getOptions={getColumnWithGroupLabelChart} series={getColumnWithGroupLabelChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Column Chart with rotated labels & Annotations">
            <CustomApexChart getOptions={getRotateLabelColumn} series={getRotateLabelColumn().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Column Chart with negative values">
            <CustomApexChart getOptions={getNegativeValueColumnChart} series={getNegativeValueColumnChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Distributed Column Charts">
            <CustomApexChart getOptions={getDistributedColumnCharts} series={getDistributedColumnCharts().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Range Column Charts">
            <CustomApexChart getOptions={getRangeColumnCharts} series={getRangeColumnCharts().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={12}>
          <DynamicLoadedChart />
        </Col>
      </Row>
    </Container>
  )
}

export default Page
