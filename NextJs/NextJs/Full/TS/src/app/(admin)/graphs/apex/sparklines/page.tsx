'use client'
import ApexChartClient from '@/components/client-wrapper/ApexChartClient'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Card, CardBody, Col, Container, Row, Table } from 'react-bootstrap'
import {
  getChart1,
  getChart2,
  getChart3,
  getChart4,
  getChart5,
  getChart6,
  getChart7,
  getChart8,
  getSpark1Chart,
  getSpark2Chart,
  getSpark3Chart,
} from './data'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Sparkline Apexchart" subtitle="Charts" />
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              <Row className="g-3" dir="ltr">
                <Col md={4}>
                  <ApexChartClient getOptions={getSpark1Chart} series={getSpark1Chart().series} type="area" height={160} />
                </Col>
                <Col md={4}>
                  <ApexChartClient getOptions={getSpark2Chart} series={getSpark2Chart().series} type="area" height={160} />
                </Col>
                <Col md={4}>
                  <ApexChartClient getOptions={getSpark3Chart} series={getSpark3Chart().series} type="area" height={160} />
                </Col>
              </Row>
            </CardBody>

            <Row>
              <Col xs={12}>
                <div className="table-responsive">
                  <Table className="table-centered table-custom mb-0">
                    <thead className="bg-light bg-opacity-50 fs-xxs thead-sm text-uppercase">
                      <tr>
                        <th>Total Value</th>
                        <th>Percentage of Portfolio</th>
                        <th>Last 10 days</th>
                        <th>Volume</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$32,554</td>
                        <td>15%</td>
                        <td>
                          <ApexChartClient getOptions={getChart1} series={getChart1().series} type="line" height={60} width={140} />
                        </td>
                        <td>
                          <ApexChartClient getOptions={getChart1} series={getChart5().series} type="bar" height={60} width={100} />
                        </td>
                      </tr>
                      <tr>
                        <td>$23,533</td>
                        <td>7%</td>
                        <td>
                          <ApexChartClient getOptions={getChart2} series={getChart2().series} type="line" height={60} width={140} />
                        </td>
                        <td>
                          <ApexChartClient getOptions={getChart6} series={getChart6().series} type="bar" height={60} width={100} />
                        </td>
                      </tr>
                      <tr>
                        <td>$54,276</td>
                        <td>9%</td>
                        <td>
                          <ApexChartClient getOptions={getChart3} series={getChart3().series} type="line" height={60} width={100} />
                        </td>
                        <td>
                          <ApexChartClient getOptions={getChart7} series={getChart7().series} type="bar" height={60} width={100} />
                        </td>
                      </tr>
                      <tr>
                        <td>$11,533</td>
                        <td>2%</td>
                        <td>
                          <ApexChartClient getOptions={getChart4} series={getChart4().series} type="line" height={60} width={140} />
                        </td>
                        <td>
                          <ApexChartClient getOptions={getChart8} series={getChart8().series} type="bar" height={60} width={100} />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
