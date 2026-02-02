import { Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'
import { TbPencil } from 'react-icons/tb'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import ProjectTabs from './components/ProjectTabs'

import starbucks from '@/assets/images/logos/starbucks.svg'
import { Link } from 'react-router'
import Sidebar from '@/views/apps/projects/projects/[projectId]/components/Sidebar.tsx'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Project Overview" subtitle="Projects" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <Row className="g-0">
            <Col xl={9}>
              <Card className="card-h-100 rounded-0 rounded-start">
                <CardHeader className="align-items-start p-4">
                  <div className="avatar-xxl me-3">
                    <span className="avatar-title text-bg-light rounded">
                      <img src={starbucks} height="48" alt="Brand-img" />
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-1 d-flex fs-xl align-items-center">Starbucks - AI Analytics Dashboard</h3>
                    <p className="text-muted mb-2 fs-xxs">Updated 5 minutes ago</p>
                    <span className="badge badge-soft-success fs-xxs badge-label">In Progress</span>
                  </div>
                  <div className="ms-auto">
                    <Link to="#" className="btn btn-light">
                      <TbPencil className="me-1" /> Edit
                    </Link>
                  </div>
                </CardHeader>
                <CardBody className="px-4">
                  <div className="mb-4">
                    <h5 className="fs-base mb-2">Project Description:</h5>
                    <p className="text-muted">
                      This dashboard provides AI-powered insights and analytics for Starbucks business data. It includes sales performance, customer
                      behavior, and predictive trends to assist in data-driven decision-making.
                    </p>
                    <p className="text-muted">
                      Customizable reports and role-based dashboards ensure relevant insights for marketing teams, financial analysts, and executive
                      decision-makers. The system is built with scalability and responsiveness in mind, supporting both desktop and mobile views for
                      seamless access.
                    </p>
                  </div>
                  <Row className="mb-4">
                    <Col md={4} xl={3}>
                      <h6 className="mb-1 text-muted text-uppercase">Created Date:</h6>
                      <p className="fw-medium mb-0">March 15, 2025</p>
                    </Col>
                    <Col md={4} xl={3}>
                      <h6 className="mb-1 text-muted text-uppercase">Deadline:</h6>
                      <p className="fw-medium mb-0">June 30, 2025</p>
                    </Col>
                    <Col md={4} xl={3}>
                      <h6 className="mb-1 text-muted text-uppercase">Created By:</h6>
                      <p className="fw-medium mb-0">John Smith</p>
                    </Col>
                    <Col md={4} xl={3}>
                      <h6 className="mb-1 text-muted text-uppercase">Client Name:</h6>
                      <p className="fw-medium mb-0">Starbucks Corporation</p>
                    </Col>
                  </Row>

                  <ProjectTabs />
                </CardBody>
              </Card>
            </Col>

            <Col xl={3}>
              <Sidebar />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
