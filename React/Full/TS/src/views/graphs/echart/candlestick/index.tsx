import ComponentCard from '@/components/cards/ComponentCard'
import CustomEChart from '@/components/CustomEChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { CandlestickChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { Col, Container, Row } from 'react-bootstrap'
import { getBasicCandlestickChart, getMixedCandlestickChart } from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Candlestick Echart" subtitle="Charts" />
      <Row>
        <Col xl={12}>
          <ComponentCard title="Basic Candlestick Chart">
            <CustomEChart extensions={[CandlestickChart, CanvasRenderer]} getOptions={getBasicCandlestickChart} style={{ height: '400px' }} />
          </ComponentCard>
        </Col>

        <Col xl={12}>
          <ComponentCard title="Mixed Candlestick Chart">
            <CustomEChart extensions={[CandlestickChart, CanvasRenderer]} getOptions={getMixedCandlestickChart} style={{ height: '400px' }} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
