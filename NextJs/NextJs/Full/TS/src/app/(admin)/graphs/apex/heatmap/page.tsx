'use client'
import ComponentCard from '@/components/cards/ComponentCard'
import ApexChartClient from '@/components/client-wrapper/ApexChartClient'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import { getHeatmapColorRange, getHeatmapSingleSeriesChart, getMultipleSeries, getRangeWithoutShades } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Heatmap Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Heatmap - Single Series">
            <ApexChartClient getOptions={getHeatmapSingleSeriesChart} series={getHeatmapSingleSeriesChart().series} type="heatmap" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Multiple Series">
            <ApexChartClient getOptions={getMultipleSeries} series={getMultipleSeries().series} type="heatmap" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Heatmap - Color Range">
            <ApexChartClient getOptions={getHeatmapColorRange} series={getHeatmapColorRange().series} type="heatmap" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Heatmap - Range without Shades">
            <ApexChartClient getOptions={getRangeWithoutShades} series={getRangeWithoutShades().series} type="heatmap" height={350} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
