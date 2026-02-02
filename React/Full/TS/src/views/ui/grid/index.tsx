import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Card, CardBody, CardHeader, CardTitle, Col, Container, Row, Table } from 'react-bootstrap'
import { TbChevronRight } from 'react-icons/tb'
import { Link } from 'react-router'

const GridOptions = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle as={'h4'} className="mb-1">
          Grid Options
        </CardTitle>
        <p className="text-muted">See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>
        <div className="table-responsive">
          <Table className="table-bordered table-striped mb-0">
            <thead>
              <tr>
                <th />
                <th className="text-center">
                  Extra small
                  <br />
                  <small>&lt;576px</small>
                </th>
                <th className="text-center">
                  Small
                  <br />
                  <small>≥576px</small>
                </th>
                <th className="text-center">
                  Medium
                  <br />
                  <small>≥768px</small>
                </th>
                <th className="text-center">
                  Large
                  <br />
                  <small>≥992px</small>
                </th>
                <th className="text-center">
                  Extra Large
                  <br />
                  <small>≥1200px</small>
                </th>
                <th className="text-center">
                  Extra Large
                  <br />
                  <small>≥1400px</small>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-nowrap" scope="row">
                  Container <code className="fw-normal">max-width</code>
                </th>
                <td>None (auto)</td>
                <td>540px</td>
                <td>720px</td>
                <td>960px</td>
                <td>1140px</td>
                <td>1320px</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  Class prefix
                </th>
                <td>
                  <code>.col-</code>
                </td>
                <td>
                  <code>.col-sm-</code>
                </td>
                <td>
                  <code>.col-md-</code>
                </td>
                <td>
                  <code>.col-lg-</code>
                </td>
                <td>
                  <code>.col-xl-</code>
                </td>
                <td>
                  <code>.col-xxl-</code>
                </td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  # of columns
                </th>
                <td colSpan={6}>12</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  Gutter width
                </th>
                <td colSpan={6}>1.25rem (0.625rem on left and right)</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  Custom gutters
                </th>
                <td colSpan={6}>Yes</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  Nestable
                </th>
                <td colSpan={6}>Yes</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  Column ordering
                </th>
                <td colSpan={6}>Yes</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  )
}

const page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Grids" subtitle="UI" />
        <Container fluid="xl">
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <CardTitle as={'h4'}>Options</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="text-muted mb-2">
                    Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default
                    responsive tiers, Sass variables and mixins, and dozens of predefined classes.
                  </p>
                  <Link className="btn btn-link p-0 fw-semibold" to="https://getbootstrap.com/docs/5.3/layout/grid/" target="_blank">
                    Grid Options on Bootstrap
                    <TbChevronRight className="ms-1" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12}>
              <GridOptions />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default page
