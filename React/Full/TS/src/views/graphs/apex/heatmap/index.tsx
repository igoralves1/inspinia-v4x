import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart.tsx'
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
            <CustomApexChart getOptions={getHeatmapSingleSeriesChart} series={getHeatmapSingleSeriesChart().series} type="heatmap" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Multiple Series">
            <CustomApexChart getOptions={getMultipleSeries} series={getMultipleSeries().series} type="heatmap" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Heatmap - Color Range">
            <CustomApexChart getOptions={getHeatmapColorRange} series={getHeatmapColorRange().series} type="heatmap" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Heatmap - Range without Shades">
            <CustomApexChart getOptions={getRangeWithoutShades} series={getRangeWithoutShades().series} type="heatmap" height={350} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
