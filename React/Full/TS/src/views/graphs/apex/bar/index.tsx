import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart.tsx'
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
            <CustomApexChart getOptions={getBasicBarChart} series={getBasicBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Grouped Bar Chart">
            <CustomApexChart getOptions={getGroupedBarChart} series={getGroupedBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Stacked Bar Chart">
            <CustomApexChart getOptions={getFullStackedBarChart} series={getFullStackedBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="100% Stacked Bar Chart">
            <CustomApexChart getOptions={getStackedBarChart} series={getStackedBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Grouped Stacked Bars">
            <CustomApexChart getOptions={getGroupedStackedBarChart} series={getGroupedStackedBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Bar with Negative Values">
            <CustomApexChart getOptions={getNegativeBarChart} series={getNegativeBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Reversed Bar Chart">
            <CustomApexChart getOptions={getReversedBarChart} series={getReversedBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Bar with Image Fill">
            <CustomApexChart getOptions={getImageFillBarChart} series={getImageFillBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Custom DataLabels Bar">
            <CustomApexChart getOptions={getCustomDataLabelsBarChart} series={getCustomDataLabelsBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Patterned Bar Chart">
            <CustomApexChart getOptions={getPatternedBarChart} series={getPatternedBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Bar with Markers">
            <CustomApexChart getOptions={getMarkersBarChart} series={getMarkersBarChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
