import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import StatisticCard from '@/pages/metrics/components/StatisticCard'
import StatisticWidgetChartRight from '@/pages/metrics/components/StatisticWidgetChartRight'
import StatisticWidgetChartLeft from '@/pages/metrics/components/StatisticWidgetChartLeft'
import QuarterlyReports from '@/pages/metrics/components/QuarterlyReports'
import OrdersCard from '@/pages/metrics/components/OrdersCard'
import ProductsChart from '@/pages/metrics/components/ProductsChart'
import ProfitOverviewChart from '@/pages/metrics/components/ProfitOverviewChart'
import { statisticCardData, statisticsData } from '@/pages/metrics/data'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
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
        </MainLayout>
    )
}

export default Page
