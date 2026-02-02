import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import { getBasicRangeArea, getComboRangeArea } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Range Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Basic Range Area">
            <CustomApexChart getOptions={getBasicRangeArea} series={getBasicRangeArea().series} type="rangeArea" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Range Area With Line">
            <CustomApexChart getOptions={getComboRangeArea} series={getComboRangeArea().series} type="rangeArea" height={350} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
