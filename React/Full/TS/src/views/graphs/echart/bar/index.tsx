import ComponentCard from '@/components/cards/ComponentCard'
import CustomEChart from '@/components/CustomEChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { Col, Container, Row } from 'react-bootstrap'
import RaceChart from './components/RaceChart'
import {
  getBarChartWithSeries,
  getBasicBarChart,
  getGradientChart,
  getHorizontalBarChart,
  getHorizontalStackedBarChar,
  getMixedBarChart,
  getNegativeBarChart,
  getProgressBarChart,
  getStackedBar,
  getTimelineBarChart,
  getTwoBarChart,
} from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Bar Echart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Basic Bar Chart">
            <CustomEChart extensions={[BarChart, CanvasRenderer]} getOptions={getBasicBarChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Two Bar Chart">
            <CustomEChart extensions={[BarChart, CanvasRenderer]} getOptions={getTwoBarChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Progress Bar Chart">
            <CustomEChart extensions={[BarChart, CanvasRenderer]} getOptions={getProgressBarChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Horizontal Bar Chart">
            <CustomEChart extensions={[BarChart, CanvasRenderer]} getOptions={getHorizontalBarChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Negative Chart">
            <CustomEChart extensions={[BarChart, CanvasRenderer]} getOptions={getNegativeBarChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Bar Chart with Series">
            <CustomEChart extensions={[BarChart, CanvasRenderer]} getOptions={getBarChartWithSeries} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Stacked Bar">
            <CustomEChart extensions={[BarChart, CanvasRenderer]} getOptions={getStackedBar} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Horizontal Stacked Bar">
            <CustomEChart extensions={[BarChart, CanvasRenderer]} getOptions={getHorizontalStackedBarChar} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Bar Race Chart">
            <RaceChart />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Bar Gradient Chart">
            <CustomEChart extensions={[BarChart, CanvasRenderer]} getOptions={getGradientChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Mixded Bar Chart">
            <CustomEChart extensions={[BarChart, CanvasRenderer]} getOptions={getMixedBarChart} style={{ height: '300px' }} />
          </ComponentCard>
        </Col>
        <Col xl={12}>
          <ComponentCard title="Timeline Bar Chart">
            <CustomEChart extensions={[BarChart, CanvasRenderer]} getOptions={getTimelineBarChart} style={{ height: '500px' }} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
