import { Button, Card, CardBody, CardHeader, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { LuCalendar, LuSearch } from 'react-icons/lu'
import { TbDownload } from 'react-icons/tb'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import { getCurrentMonthRange } from '@/helpers/generators'
import Flatpickr from 'react-flatpickr'
import SalesChart from '@/views/ecommerce/reports/sales/components/SalesChart.tsx'
import SalesTable from '@/views/ecommerce/reports/sales/components/SalesTable.tsx'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Sales Reports" subtitle="Ecommerce" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <Card data-table data-table-rows-per-page={8}>
            <CardHeader className="border-light justify-content-between">
              <CardTitle className="mb-0">Products - 2025</CardTitle>
              <div className="d-flex align-items-center gap-2">
                <div className="app-search">
                  <input type="search" className="form-control" placeholder="Search reports..." />
                  <LuSearch className="text-muted app-search-icon" />
                </div>
                <div className="app-search">
                  <Flatpickr
                    className="form-control"
                    style={{ minWidth: 250 }}
                    options={{
                      dateFormat: 'd M, Y',
                      mode: 'range',
                      defaultDate: getCurrentMonthRange(),
                    }}
                  />
                  <LuCalendar className="text-muted app-search-icon" />
                </div>
                <Button type="submit" variant="secondary">
                  <TbDownload className="me-2" />
                  Export Report
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <SalesChart />
            </CardBody>

            <SalesTable />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
