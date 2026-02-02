import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import { getBasicScatter, getDateTimeScatterChart, getImageScatterChart } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Scatter Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Scatter (XY) Chart">
            <CustomApexChart getOptions={getBasicScatter} series={getBasicScatter().series} type="scatter" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Scatter Chart - Datetime">
            <CustomApexChart getOptions={getDateTimeScatterChart} series={getDateTimeScatterChart().series} type="scatter" height={380} />
          </ComponentCard>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ComponentCard title="Scatter - Images">
            <CustomApexChart getOptions={getImageScatterChart} series={getImageScatterChart().series} type="scatter" height={380} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
