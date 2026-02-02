import PageBreadcrumb from '@/components/PageBreadcrumb'
import Rating from '@/components/Rating'
import { Link } from 'react-router'
import { Button, Card, Col, Container, Form, FormControl, Pagination, Row } from 'react-bootstrap'
import { LuBriefcase, LuLayoutGrid, LuList, LuMapPin, LuSearch, LuStar } from 'react-icons/lu'
import { TbChevronLeft, TbChevronRight, TbHeart, TbMapPin } from 'react-icons/tb'
import { companies, type CompanyProfileType } from '@/views/other-apps/companies/data.ts'

const CompanyCard = ({ company }: { company: CompanyProfileType }) => {
  return (
    <Card className="d-flex flex-row p-3">
      <img src={company.logo} alt="" className="avatar-xl me-3" />

      <div className="flex-grow-1">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h4 className="mb-1 fw-bold">Amazon Inc.</h4>
            <Link to={company.website} className="text-muted text-decoration-none">
              {company.website}
            </Link>
          </div>
          <Button variant="sm" className="btn-outline-danger rounded-pill">
            <TbHeart className="me-1" /> Follow
          </Button>
        </div>

        <div className="mt-2 mb-3 d-flex flex-wrap gap-2">
          <span className="badge bg-light text-primary p-1 fs-xxs d-flex align-items-center">
            <TbMapPin className="me-1"></TbMapPin>
            {company.location}
          </span>
          <span className="badge bg-light text-success p-1 fs-xxs d-flex align-items-center">
            <company.category.icon className="me-1" />
            {company.category.label}
          </span>
        </div>

        <p className="text-muted mb-3">{company.description}</p>

        <div className="d-flex justify-content-between flex-wrap mt-2 gap-3">
          <div>
            <h6 className="text-muted">Employees</h6>
            <span className="fw-semibold fs-lg">{company.employees}</span>
          </div>
          <div>
            <h6 className="text-muted">Revenue</h6>
            <span className="fw-semibold fs-lg">{company.revenue}</span>
          </div>
          <Rating rating={company.rating} className="d-flex gap-1 align-self-center fs-lg" />
        </div>
      </div>
    </Card>
  )
}

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Companies" subtitle="Apps" />

      <Row className="mb-3">
        <Col lg={12}>
          <Form className="bg-light-subtle rounded border p-3">
            <Row className="gap-3">
              <Col>
                <Row className="gap-3">
                  <Col lg={4}>
                    <div className="app-search">
                      <FormControl type="text" placeholder="Search company name..." />
                      <LuSearch className="app-search-icon text-muted" />
                    </div>
                  </Col>
                  <Col className="col-auto">
                    <div className="d-flex align-items-center gap-2">
                      <span className="me-2 fw-semibold">Filter By:</span>

                      <div className="app-search">
                        <select className="form-select form-control my-1 my-md-0">
                          <option>Location</option>
                          <option value="USA">USA</option>
                          <option value="Canada">Canada</option>
                          <option value="Germany">Germany</option>
                          <option value="India">India</option>
                          <option value="UK">United Kingdom</option>
                        </select>
                        <LuMapPin className="app-search-icon text-muted" />
                      </div>

                      <div className="app-search">
                        <select className="form-select form-control my-1 my-md-0">
                          <option>Category</option>
                          <option value="Tech">Tech</option>
                          <option value="Finance">Finance</option>
                          <option value="eCommerce">eCommerce</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Automotive">Automotive</option>
                        </select>
                        <LuBriefcase className="app-search-icon text-muted" />
                      </div>

                      <div className="app-search">
                        <select className="form-select form-control my-1 my-md-0">
                          <option>Rating</option>
                          <option value="5">5 Stars</option>
                          <option value="4">4 Stars & Up</option>
                          <option value="3">3 Stars & Up</option>
                          <option value="2">2 Stars & Up</option>
                          <option value="1">1 Star & Up</option>
                        </select>
                        <LuStar className="app-search-icon text-muted" />
                      </div>

                      <Button variant="secondary" type="submit">
                        Apply
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col className="col-auto">
                <div role="group" aria-label="Layout toggle button group">
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
                  <label className="btn btn-soft-primary btn-icon me-1" htmlFor="btnradio1">
                    <LuLayoutGrid className="fs-lg" />
                  </label>

                  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                  <label className="btn btn-soft-primary btn-icon" htmlFor="btnradio2">
                    <LuList className="fs-lg" />
                  </label>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <Row>
        {companies.map((company, idx) => (
          <Col key={idx} xl={4} md={6}>
            <CompanyCard company={company} />
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
