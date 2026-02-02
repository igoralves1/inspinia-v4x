import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import StatisticCard from '@/views/metrics/components/StatisticCard'
import StatisticWidgetChartRight from '@/views/metrics/components/StatisticWidgetChartRight'
import StatisticWidgetChartLeft from '@/views/metrics/components/StatisticWidgetChartLeft'
import QuarterlyReports from '@/views/metrics/components/QuarterlyReports.tsx'
import OrdersCard from '@/views/metrics/components/OrdersCard.tsx'
import ProductsChart from '@/views/metrics/components/ProductsChart.tsx'
import ProfitOverviewChart from '@/views/metrics/components/ProfitOverviewChart.tsx'
import { statisticCardData, statisticsData } from '@/views/metrics/data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Metrics" />

      <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1">
        {statisticCardData.map((item, idx) => (
          <Col key={idx}>
            <StatisticCard item={item} />
          </Col>
        ))}
      </Row>

      <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1">
        {statisticsData.slice(0, 4).map((item, idx) => (
          <Col key={idx}>{idx % 2 === 0 ? <StatisticWidgetChartRight item={item} /> : <StatisticWidgetChartLeft item={item} />}</Col>
        ))}
      </Row>

      <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1">
        {statisticsData.slice(4, 8).map((item, idx) => (
          <Col key={idx}>{idx % 2 === 0 ? <StatisticWidgetChartRight item={item} /> : <StatisticWidgetChartLeft item={item} />}</Col>
        ))}
      </Row>

      <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1">
        {statisticsData.slice(8, 12).map((item, idx) => (
          <Col key={idx}>{idx % 2 === 0 ? <StatisticWidgetChartRight item={item} /> : <StatisticWidgetChartLeft item={item} />}</Col>
        ))}
      </Row>
      <Row>
        <Col xxl={4}>
          <QuarterlyReports />
        </Col>
        <Col xxl={8}>
          <Row>
            <Col xl={4}>
              <OrdersCard />
            </Col>

            <Col xl={4}>
              <ProductsChart />
            </Col>

            <Col xl={4}>
              <ProfitOverviewChart />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
