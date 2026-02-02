import { Link } from 'react-router'
import { Button, Col, Container, Pagination, Row } from 'react-bootstrap'
import { LuActivity, LuCalendarClock, LuLayoutGrid, LuList, LuSearch, LuUsers } from 'react-icons/lu'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { projects } from '@/views/apps/projects/projects/data.ts'
import ProjectCard1 from '@/views/apps/projects/projects/components/ProjectCard1.tsx'
import ProjectCard2 from '@/views/apps/projects/projects/components/ProjectCard2.tsx'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Projects" subtitle="Apps" />

      <Row className="mb-3">
        <Col lg={12}>
          <form className="bg-light-subtle rounded border p-3">
            <Row className="gap-3">
              <Col>
                <Row className="gap-3">
                  <Col lg={4}>
                    <div className="app-search">
                      <input type="text" className="form-control" placeholder="Search project name..." />
                      <LuSearch className="app-search-icon text-muted" />
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className="me-2 fw-semibold">Filter By:</span>

                      <div className="app-search">
                        <select className="form-select form-control my-1 my-md-0">
                          <option>Status</option>
                          <option value="On Track">On Track</option>
                          <option value="Delayed">Delayed</option>
                          <option value="At Risk">At Risk</option>
                          <option value="Completed">Completed</option>
                        </select>
                        <LuActivity className="app-search-icon text-muted" />
                      </div>

                      <div className="app-search">
                        <select className="form-select form-control my-1 my-md-0">
                          <option>Team</option>
                          <option value="Design">Design</option>
                          <option value="Development">Development</option>
                          <option value="Marketing">Marketing</option>
                          <option value="QA">QA</option>
                        </select>
                        <LuUsers className="app-search-icon text-muted" />
                      </div>

                      <div className="app-search">
                        <select className="form-select form-control my-1 my-md-0">
                          <option>Deadline</option>
                          <option value="This Week">This Week</option>
                          <option value="This Month">This Month</option>
                          <option value="Next Month">Next Month</option>
                          <option value="No Deadline">No Deadline</option>
                        </select>
                        <LuCalendarClock className="app-search-icon text-muted" />
                      </div>

                      <Button variant="secondary" type="submit">
                        Apply
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col xs="auto">
                <div className="d-flex gap-1">
                  <Link to="/projects" className="btn btn-primary btn-icon">
                    <LuLayoutGrid className="fs-lg" />
                  </Link>
                  <Link to="/projects-list" className="btn btn-soft-primary btn-icon">
                    <LuList className="fs-lg" />
                  </Link>
                </div>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>

      <Row>
        {projects.slice(0, 4).map((project, idx) => (
          <Col md={6} xxl={3} key={idx}>
            <ProjectCard1 project={project} />
          </Col>
        ))}
        {projects.slice(4, 8).map((project, idx) => (
          <Col md={6} xxl={3} key={idx}>
            <ProjectCard2 project={project} />
          </Col>
        ))}
      </Row>

      <Pagination className="pagination-rounded pagination-boxed justify-content-center">
        <Pagination.Prev disabled>
          <TbChevronLeft />
        </Pagination.Prev>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next>
          <TbChevronRight />
        </Pagination.Next>
      </Pagination>
    </Container>
  )
}

export default Page
