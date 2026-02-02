import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import { getSimpleBubbleChart, getThreeBubbleChart, getThreedBubbleChart } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Bubble Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Simple Bubble Charts">
            <CustomApexChart getOptions={getSimpleBubbleChart} series={getSimpleBubbleChart().series} type="bubble" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="3D Bubble Charts">
            <CustomApexChart getOptions={getThreedBubbleChart} series={getThreedBubbleChart().series} type="bubble" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Bubble Charts">
            <CustomApexChart getOptions={getThreeBubbleChart} series={getThreeBubbleChart().series} type="bubble" height={350} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
