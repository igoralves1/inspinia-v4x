'use client'
import ComponentCard from '@/components/cards/ComponentCard'
import ApexChartClient from '@/components/client-wrapper/ApexChartClient'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import { getAllMixedChart, getLineAreaChart, getLineColumnChart, getMultipleYaxisMixedChart } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Mixed Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Line & Column Chart">
            <ApexChartClient getOptions={getLineColumnChart} series={getLineColumnChart().series} type="line" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Multiple Y-Axis Chart">
            <ApexChartClient getOptions={getMultipleYaxisMixedChart} series={getMultipleYaxisMixedChart().series} type="line" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Line & Area Chart">
            <ApexChartClient getOptions={getLineAreaChart} series={getLineAreaChart().series} type="line" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Line, Column & Area Chart">
            <ApexChartClient getOptions={getAllMixedChart} series={getAllMixedChart().series} type="line" height={380} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
