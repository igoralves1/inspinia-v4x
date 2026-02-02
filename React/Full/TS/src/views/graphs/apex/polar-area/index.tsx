import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import { getBasicPolarAreaChart, getMonochromePolarAreaChart } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Ploar Area Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Basic Polar Area Chart">
            <CustomApexChart getOptions={getBasicPolarAreaChart} series={getBasicPolarAreaChart().series} type="polarArea" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Monochrome Polar Area">
            <CustomApexChart getOptions={getMonochromePolarAreaChart} series={getMonochromePolarAreaChart().series} type="polarArea" height={380} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
