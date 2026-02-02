'use client'
import ComponentCard from '@/components/cards/ComponentCard'
import ApexChartClient from '@/components/client-wrapper/ApexChartClient'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import { getBasicFunnelChart, getPyramidFunnelChart } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Funnel Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Basic Funnel">
            <ApexChartClient getOptions={getBasicFunnelChart} series={getBasicFunnelChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Pyramid Funnel">
            <ApexChartClient getOptions={getPyramidFunnelChart} series={getPyramidFunnelChart().series} type="bar" height={350} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
