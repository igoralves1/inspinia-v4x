import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import {
  getBasicRadialBarChart,
  getCircleAngleChart,
  getGuageCircularRadialChart,
  getImageRadialBarChart,
  getMultipleRadialBarChart,
  getSemiCircleGuageRadialChart,
  getStrokedGuageRadialChart,
} from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="RadialBar Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Basic RadialBar Chart">
            <CustomApexChart getOptions={getBasicRadialBarChart} series={getBasicRadialBarChart().series} type="radialBar" height={320} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Multiple RadialBars">
            <CustomApexChart getOptions={getMultipleRadialBarChart} series={getMultipleRadialBarChart().series} type="radialBar" height={320} />
          </ComponentCard>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ComponentCard title="Circle Chart - Custom Angle">
            <CustomApexChart getOptions={getCircleAngleChart} series={getCircleAngleChart().series} type="radialBar" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Circle Chart with Image">
            <CustomApexChart getOptions={getImageRadialBarChart} series={getImageRadialBarChart().series} type="radialBar" height={360} />
          </ComponentCard>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ComponentCard title="Stroked Circular Guage">
            <CustomApexChart getOptions={getStrokedGuageRadialChart} series={getStrokedGuageRadialChart().series} type="radialBar" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Gradient Circular Chart">
            <CustomApexChart getOptions={getGuageCircularRadialChart} series={getGuageCircularRadialChart().series} type="radialBar" height={330} />
          </ComponentCard>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ComponentCard title="Gradient Circular Chart">
            <CustomApexChart getOptions={getSemiCircleGuageRadialChart} series={getSemiCircleGuageRadialChart().series} type="radialBar" />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
