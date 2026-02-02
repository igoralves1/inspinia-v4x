'use client';

import SellerStatisticWidget from '@/app/(admin)/(apps)/(ecommerce)/sellers/[sellerId]/components/SellerStatisticWidget';
import { getSellerChartOptions, sellerStatistics } from '@/app/(admin)/(apps)/(ecommerce)/sellers/[sellerId]/data';
import ApexChartClient from '@/components/client-wrapper/ApexChartClient';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const SellerOverview = () => {
  return <Card>
      <CardHeader>
        <CardTitle as={'h4'}>Seller Overview</CardTitle>
      </CardHeader>
      <CardBody>
        <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1 align-items-center">
          {sellerStatistics.map((item, idx) => <Col key={idx}>
              <SellerStatisticWidget item={item} />
            </Col>)}
        </Row>
        <div className="mb-1">
          <ApexChartClient getOptions={getSellerChartOptions} series={getSellerChartOptions().series} type="bar" height={370} />
        </div>
      </CardBody>
    </Card>;
};
export default SellerOverview;