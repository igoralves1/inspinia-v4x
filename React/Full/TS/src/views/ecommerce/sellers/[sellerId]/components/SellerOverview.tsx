import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'
import { getSellerChartOptions, sellerStatistics } from '../data'
import SellerStatisticWidget from '@/views/ecommerce/sellers/[sellerId]/components/SellerStatisticWidget.tsx'
import CustomApexChart from '@/components/CustomApexChart.tsx'

const SellerOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle as={'h4'}>Seller Overview</CardTitle>
      </CardHeader>
      <CardBody>
        <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1 align-items-center">
          {sellerStatistics.map((item, idx) => (
            <Col key={idx}>
              <SellerStatisticWidget item={item} />
            </Col>
          ))}
        </Row>
        <div className="mb-1">
          <CustomApexChart getOptions={getSellerChartOptions} series={getSellerChartOptions().series} type="bar" height={370} />
        </div>
      </CardBody>
    </Card>
  )
}

export default SellerOverview
