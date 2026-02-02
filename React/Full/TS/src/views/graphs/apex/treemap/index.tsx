import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import { getBasicTreemapChart, getColorRangeTreemapChart, getDistributedTreemapChart, getTreemapMultipleChart } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Treemap Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Basic Treemap">
            <CustomApexChart getOptions={getBasicTreemapChart} series={getBasicTreemapChart().series} type="treemap" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Treemap Multiple Series">
            <CustomApexChart getOptions={getTreemapMultipleChart} series={getTreemapMultipleChart().series} type="treemap" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Distributed Treemap">
            <CustomApexChart getOptions={getDistributedTreemapChart} series={getDistributedTreemapChart().series} type="treemap" height={350} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Color Range Treemaps">
            <CustomApexChart getOptions={getColorRangeTreemapChart} series={getColorRangeTreemapChart().series} type="treemap" height={350} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
