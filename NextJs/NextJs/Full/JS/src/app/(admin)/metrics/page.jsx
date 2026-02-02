'use client';

import OrdersCard from '@/app/(admin)/metrics/components/OrdersCard';
import ProductsChart from '@/app/(admin)/metrics/components/ProductsChart';
import ProfitOverviewChart from '@/app/(admin)/metrics/components/ProfitOverviewChart';
import QuarterlyReports from '@/app/(admin)/metrics/components/QuarterlyReports';
import StatisticCard from '@/app/(admin)/metrics/components/StatisticCard';
import StatisticWidgetChartLeft from '@/app/(admin)/metrics/components/StatisticWidgetChartLeft';
import StatisticWidgetChartRight from '@/app/(admin)/metrics/components/StatisticWidgetChartRight';
import { statisticCardData, statisticsData } from '@/app/(admin)/metrics/data';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Col, Container, Row } from 'react-bootstrap';
const Page = () => {
  return <Container fluid>
      <PageBreadcrumb title="Metrics" />

      <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1">
        {statisticCardData.map((item, idx) => <Col key={idx}>
            <StatisticCard item={item} />
          </Col>)}
      </Row>

      <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1">
        {statisticsData.slice(0, 4).map((item, idx) => <Col key={idx}>{idx % 2 === 0 ? <StatisticWidgetChartRight item={item} /> : <StatisticWidgetChartLeft item={item} />}</Col>)}
      </Row>

      <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1">
        {statisticsData.slice(4, 8).map((item, idx) => <Col key={idx}>{idx % 2 === 0 ? <StatisticWidgetChartRight item={item} /> : <StatisticWidgetChartLeft item={item} />}</Col>)}
      </Row>

      <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1">
        {statisticsData.slice(8, 12).map((item, idx) => <Col key={idx}>{idx % 2 === 0 ? <StatisticWidgetChartRight item={item} /> : <StatisticWidgetChartLeft item={item} />}</Col>)}
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
    </Container>;
};
export default Page;