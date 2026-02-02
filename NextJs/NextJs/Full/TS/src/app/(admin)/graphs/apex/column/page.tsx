'use client'
import DynamicLoadedChart from '@/app/(admin)/graphs/apex/column/components/DynamicLoadedChart'
import ComponentCard from '@/components/cards/ComponentCard'
import ApexChartClient from '@/components/client-wrapper/ApexChartClient'
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

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Column Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Basic Column Charts">
            <ApexChartClient getOptions={getBasicColumnChart} series={getBasicColumnChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Column Chart with Datalabels">
            <ApexChartClient getOptions={getChartWithDataTabels} series={getChartWithDataTabels().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Stacked Column Charts">
            <ApexChartClient getOptions={getStackedColumnChart} series={getStackedColumnChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="100% Stacked Column Chart">
            <ApexChartClient getOptions={getFullStackedColumnChart} series={getFullStackedColumnChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Grouped Stacked Columns Chart">
            <ApexChartClient getOptions={getGroupedStackedColumnChart} series={getGroupedStackedColumnChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Dumbbell Chart">
            <ApexChartClient getOptions={getDumbbellChart} series={getDumbbellChart().series} type="rangeBar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Column with Markers">
            <ApexChartClient getOptions={getColumnWithMarkersChart} series={getColumnWithMarkersChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Column with Group Label">
            <ApexChartClient getOptions={getColumnWithGroupLabelChart} series={getColumnWithGroupLabelChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Column Chart with rotated labels & Annotations">
            <ApexChartClient getOptions={getRotateLabelColumn} series={getRotateLabelColumn().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Column Chart with negative values">
            <ApexChartClient getOptions={getNegativeValueColumnChart} series={getNegativeValueColumnChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Distributed Column Charts">
            <ApexChartClient getOptions={getDistributedColumnCharts} series={getDistributedColumnCharts().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Range Column Charts">
            <ApexChartClient getOptions={getRangeColumnCharts} series={getRangeColumnCharts().series} type="bar" height={350} />
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
