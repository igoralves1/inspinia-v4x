'use client'
import ComponentCard from '@/components/cards/ComponentCard'
import ApexChartClient from '@/components/client-wrapper/ApexChartClient'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import { getBasicSlopeChart, getMultiSlopeChart } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Slope Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Basic Slope">
            <ApexChartClient getOptions={getBasicSlopeChart} series={getBasicSlopeChart().series} type="line" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Multi Slope">
            <ApexChartClient getOptions={getMultiSlopeChart} series={getMultiSlopeChart().series} type="line" height={350} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
