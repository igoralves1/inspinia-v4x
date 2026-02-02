import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Button, Card, CardBody, CardHeader, Col, Container, FormControl, Pagination, Row } from 'react-bootstrap'
import { Link } from 'react-router'
import { LuCircleDollarSign, LuLayers, LuSearch } from 'react-icons/lu'
import { TbCalendar, TbChevronLeft, TbChevronRight, TbMessageCircle, TbSearch, TbShoppingCart, TbThumbUp } from 'react-icons/tb'
import { searchResults, users } from '@/views/pages/search-results/data.ts'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Search Results" subtitle="Pages" />

      <Row>
        <Col cols={12}>
          <Card>
            <CardHeader className="d-block">
              <div className="text-center w-md-75 w-xl-50 mx-auto py-3">
                <div className="app-search app-search-pill input-group mb-3 rounded-pill">
                  <FormControl
                    type="text"
                    className="bg-light-subtle border-light py-2 fw-semibold"
                    defaultValue="React Dashboard"
                    placeholder="Search templates..."
                  />
                  <LuSearch className="app-search-icon text-muted" />
                  <Button variant="secondary" type="button">
                    Explore
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-1">
                  <h5 className="text-muted mb-0">Popular Searches :</h5>
                  <Link to="#" className="badge bg-primary-subtle text-primary rounded-pill px-2 py-1 fs-6">
                    Analytics
                  </Link>
                  <Link to="#" className="badge bg-primary-subtle text-primary rounded-pill px-2 py-1 fs-6">
                    SaaS
                  </Link>
                  <Link to="#" className="badge bg-primary-subtle text-primary rounded-pill px-2 py-1 fs-6">
                    Ecommerce
                  </Link>
                  <Link to="#" className="badge bg-primary-subtle text-primary rounded-pill px-2 py-1 fs-6">
                    CRM
                  </Link>
                </div>
              </div>
            </CardHeader>

            <CardHeader className="border-light justify-content-between">
              <h4 className="fst-italic text-muted mb-0">
                Found <span className="fw-bold badge badge-soft-danger">89</span> results for <span className="text-dark">"React Dashboard"</span>
              </h4>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <span className="fw-semibold">Filter By:</span>

                <div className="app-search">
                  <select className="form-select form-control my-1 my-md-0">
                    <option>Template Type</option>
                    <option value="admin">Admin</option>
                    <option value="landing">Landing Page</option>
                    <option value="dashboard">Dashboard</option>
                    <option value="ecommerce">eCommerce</option>
                    <option value="email">Email Template</option>
                  </select>
                  <LuLayers className="app-search-icon text-muted" />
                </div>

                <div className="app-search">
                  <select className="form-select form-control my-1 my-md-0">
                    <option>Pricing</option>
                    <option value="free">Free</option>
                    <option value="premium">Premium</option>
                    <option value="subscription">Subscription</option>
                  </select>
                  <LuCircleDollarSign className="app-search-icon text-muted" />
                </div>
              </div>
            </CardHeader>

            <CardBody className="p-0">
              {searchResults.map((item, idx) => (
                <div key={idx} className="border-bottom border-dashed px-4 py-3">
                  <h4 className="fs-md mb-1">
                    <Link to={item.url} target="_blank" className="text-reset">
                      {item.title}
                    </Link>
                  </h4>
                  <p className="text-success mb-2">{item.url}</p>
                  <p className="text-muted mb-2">{item.description}</p>
                  <p className="d-flex flex-wrap gap-3 text-muted mb-1 align-items-center fs-base">
                    <span className="d-flex align-items-center gap-1">
                      <img src={item.image} height={24} width={24} alt="" className="img-fluid avatar-xs rounded-circle" />
                      <Link to="#" className="link-reset fw-semibold">
                        {item.author}
                      </Link>
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <TbCalendar />
                      <span>Published on: {item.publishedDate}</span>
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <TbShoppingCart />
                      <span>Sales: {item.sales}</span>
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <TbMessageCircle />
                      <Link to="#" className="link-reset">
                        Comments: {item.comments}
                      </Link>
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <TbThumbUp />
                      <span>Likes: {item.likes}</span>
                    </span>
                  </p>
                </div>
              ))}

              <div className="border-bottom border-dashed px-4 py-3">
                <h4 className="fs-md mb-3">Found some users:</h4>

                <div className="d-flex gap-2">
                  {users.map((img, idx) => (
                    <div key={idx} className="avatar">
                      <img src={img} alt="" height={48} width={48} className="rounded avatar-xl" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-bottom border-dashed px-4 py-3">
                <h4 className="fs-md mb-3">People also search for:</h4>

                <div className="d-flex gap-2 flex-wrap">
                  <div className="px-3 py-2 bg-light bg-opacity-50 rounded">
                    <Link to="#" className="text-reset fs-md fw-semibold">
                      Minimal Admin Templates <TbSearch className="ms-2" />
                    </Link>
                  </div>
                  <div className="px-3 py-2 bg-light bg-opacity-50 rounded">
                    <Link to="#" className="text-reset fs-md fw-semibold">
                      Bootstrap 5 Admin Panels <TbSearch className="ms-2" />
                    </Link>
                  </div>
                  <div className="px-3 py-2 bg-light bg-opacity-50 rounded">
                    <Link to="#" className="text-reset fs-md fw-semibold">
                      SaaS Dashboard UI Kits <TbSearch className="ms-2" />
                    </Link>
                  </div>
                  <div className="px-3 py-2 bg-light bg-opacity-50 rounded">
                    <Link to="#" className="text-reset fs-md fw-semibold">
                      Dark Mode Admin Themes <TbSearch className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>

              <Pagination className="pagination-rounded pagination-boxed justify-content-center mb-0 py-3">
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
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
