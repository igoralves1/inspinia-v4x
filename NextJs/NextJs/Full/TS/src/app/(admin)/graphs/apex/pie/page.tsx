'use client'
import ComponentCard from '@/components/cards/ComponentCard'
import ApexChartClient from '@/components/client-wrapper/ApexChartClient'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {
  appendData,
  getDonutOptions,
  getGradientDonutChart,
  getImagePieChart,
  getMonochromeChart,
  getPatternedDonutChart,
  getSimpleDonutChart,
  getSimplePieChart,
  initialSeries,
  randomize,
  removeData,
} from './data'

const Page = () => {
  const [series, setSeries] = useState<number[]>(initialSeries)
  return (
    <Container fluid>
      <PageBreadcrumb title="Pie Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Simple Pie Chart">
            <ApexChartClient getOptions={getSimplePieChart} series={getSimplePieChart().series} type="pie" height={320} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Simple Donut Chart">
            <ApexChartClient getOptions={getSimpleDonutChart} series={getSimpleDonutChart().series} type="pie" height={320} />
          </ComponentCard>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ComponentCard title="Monochrome Pie Chart">
            <ApexChartClient getOptions={getMonochromeChart} series={getMonochromeChart().series} type="pie" height={320} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Gradient Donut Chart">
            <ApexChartClient getOptions={getGradientDonutChart} series={getGradientDonutChart().series} type="pie" height={320} />
          </ComponentCard>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ComponentCard title="Patterned Donut Chart">
            <ApexChartClient getOptions={getPatternedDonutChart} series={getPatternedDonutChart().series} type="donut" height={320} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Pie Chart with Image fill">
            <ApexChartClient getOptions={getImagePieChart} series={getImagePieChart().series} type="pie" height={320} />
          </ComponentCard>
        </Col>
      </Row>
      <Row>
        <Col xl={12} md={6}>
          <ComponentCard title="Donut Update">
            <ApexChartClient getOptions={() => getDonutOptions(series)} series={series} type="donut" height={320} />
            <div className="text-center mt-2 d-flex justify-content-center gap-2 flex-wrap">
              <Button variant="primary" size="sm" onClick={() => setSeries(randomize(series))}>
                RANDOMIZE
              </Button>
              <Button variant="primary" size="sm" onClick={() => setSeries(appendData(series))}>
                ADD
              </Button>
              <Button variant="primary" size="sm" onClick={() => setSeries(removeData(series))}>
                REMOVE
              </Button>
              <Button variant="primary" size="sm" onClick={() => setSeries(initialSeries)}>
                RESET
              </Button>
            </div>
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
