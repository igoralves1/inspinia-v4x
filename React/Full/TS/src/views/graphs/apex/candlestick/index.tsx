import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart.tsx'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import {
  getCandlestickChart,
  getCandlestickwithLineChart,
  getComboBarCandlestickChart,
  getComboCandlestickCharts,
  getXaxisCandlestickChart,
} from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Candlestick Apexchart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Simple Candlestick Charts">
            <CustomApexChart getOptions={getCandlestickChart} series={getCandlestickChart().series} type="candlestick" height={350} />
          </ComponentCard>
        </Col>

        <Col xl={6}>
          <ComponentCard title="Combo Candlestick Charts">
            <CustomApexChart getOptions={getComboCandlestickCharts} series={getComboCandlestickCharts().series} type="candlestick" height={220} />
            <CustomApexChart getOptions={getComboBarCandlestickChart} series={getComboBarCandlestickChart().series} type="bar" height={130} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Category X-Axis">
            <CustomApexChart getOptions={getXaxisCandlestickChart} series={getXaxisCandlestickChart().series} type="candlestick" height={380} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Candlestick with Line">
            <CustomApexChart getOptions={getCandlestickwithLineChart} series={getCandlestickwithLineChart().series} type="candlestick" height={380} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
