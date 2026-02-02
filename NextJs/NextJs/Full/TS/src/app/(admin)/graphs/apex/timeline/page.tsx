'use client'
import ComponentCard from '@/components/cards/ComponentCard'
import ApexChartClient from '@/components/client-wrapper/ApexChartClient'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import { getAdvanceTimelineChart, getDistributedTimelineChart, getGroupRowTimelineChart, getMultiSeriesTimelineChart, getTimelineChart } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Timeline Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Basic Timeline">
            <ApexChartClient getOptions={getTimelineChart} series={getTimelineChart().series} type="rangeBar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Distributed Timeline">
            <ApexChartClient getOptions={getDistributedTimelineChart} series={getDistributedTimelineChart().series} type="rangeBar" height={350} />
          </ComponentCard>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ComponentCard title="Multi Series Timeline">
            <ApexChartClient getOptions={getMultiSeriesTimelineChart} series={getMultiSeriesTimelineChart().series} type="rangeBar" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Advanced Timeline">
            <ApexChartClient getOptions={getAdvanceTimelineChart} series={getAdvanceTimelineChart().series} type="rangeBar" height={350} />
          </ComponentCard>
        </Col>
      </Row>
      <Col xl={6}>
        <ComponentCard title="Multiple Series - Group Rows">
          <ApexChartClient getOptions={getGroupRowTimelineChart} series={getGroupRowTimelineChart().series} type="rangeBar" height={350} />
        </ComponentCard>
      </Col>
    </Container>
  )
}

export default Page
