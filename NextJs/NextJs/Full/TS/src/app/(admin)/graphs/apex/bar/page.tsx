'use client'
import ComponentCard from '@/components/cards/ComponentCard'
import ApexChartClient from '@/components/client-wrapper/ApexChartClient'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import {
  getBasicBarChart,
  getCustomDataLabelsBarChart,
  getFullStackedBarChart,
  getGroupedBarChart,
  getGroupedStackedBarChart,
  getImageFillBarChart,
  getMarkersBarChart,
  getNegativeBarChart,
  getPatternedBarChart,
  getReversedBarChart,
  getStackedBarChart,
} from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Bar Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Basic Bar Chart">
            <ApexChartClient getOptions={getBasicBarChart} series={getBasicBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Grouped Bar Chart">
            <ApexChartClient getOptions={getGroupedBarChart} series={getGroupedBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Stacked Bar Chart">
            <ApexChartClient getOptions={getFullStackedBarChart} series={getFullStackedBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="100% Stacked Bar Chart">
            <ApexChartClient getOptions={getStackedBarChart} series={getStackedBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Grouped Stacked Bars">
            <ApexChartClient getOptions={getGroupedStackedBarChart} series={getGroupedStackedBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Bar with Negative Values">
            <ApexChartClient getOptions={getNegativeBarChart} series={getNegativeBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Reversed Bar Chart">
            <ApexChartClient getOptions={getReversedBarChart} series={getReversedBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Bar with Image Fill">
            <ApexChartClient getOptions={getImageFillBarChart} series={getImageFillBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Custom DataLabels Bar">
            <ApexChartClient getOptions={getCustomDataLabelsBarChart} series={getCustomDataLabelsBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Patterned Bar Chart">
            <ApexChartClient getOptions={getPatternedBarChart} series={getPatternedBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Bar with Markers">
            <ApexChartClient getOptions={getMarkersBarChart} series={getMarkersBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
