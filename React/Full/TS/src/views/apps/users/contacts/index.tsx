import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import { LuLayers, LuLayoutGrid, LuList, LuMapPin, LuSearch, LuUserCheck } from 'react-icons/lu'
import ContactCard from '@/views/apps/users/contacts/components/ContactCard.tsx'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import { contacts } from '@/views/apps/users/contacts/data.ts'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Contacts" subtitle="Apps" />
      <Row className="mb-3">
        <Col lg={12}>
          <form className="bg-light-subtle rounded border p-3">
            <Row className="gap-3">
              <Col lg={4}>
                <div className="app-search">
                  <input type="text" className="form-control" placeholder="Search contact name..." />
                  <LuSearch className="app-search-icon text-muted" />
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-wrap align-items-center gap-2">
                  <span className="me-2 fw-semibold">Filter By:</span>

                  <div className="app-search">
                    <select className="form-select form-control my-1 my-md-0">
                      <option>Designation</option>
                      <option value="Manager">Manager</option>
                      <option value="Developer">Developer</option>
                      <option value="Designer">Designer</option>
                      <option value="Sales">Sales</option>
                      <option value="Support">Support</option>
                    </select>
                    <LuUserCheck className="app-search-icon text-muted" />
                  </div>

                  <div className="app-search">
                    <select className="form-select form-control my-1 my-md-0">
                      <option>Location</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Germany">Germany</option>
                      <option value="India">India</option>
                      <option value="Canada">Canada</option>
                    </select>
                    <LuMapPin className="app-search-icon text-muted" />
                  </div>

                  <div className="app-search">
                    <select className="form-select form-control my-1 my-md-0">
                      <option>Department</option>
                      <option value="UI/UX">UI/UX</option>
                      <option value="Engineering">Engineering</option>
                      <option value="HR">HR</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Finance">Finance</option>
                    </select>
                    <LuLayers className="app-search-icon text-muted" />
                  </div>
                  <button type="submit" className="btn btn-secondary">
                    Apply
                  </button>
                  <div role="group" aria-label="Layout toggle button group" className="ms-auto flex-shrink-0">
                    <input type="radio" className="btn-check " name="btnradio" id="btnradio1" defaultChecked />
                    <label className="btn btn-soft-primary btn-icon me-1" htmlFor="btnradio1">
                      <LuLayoutGrid className="fs-lg" />
                    </label>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                    <label className="btn btn-soft-primary btn-icon" htmlFor="btnradio2">
                      <LuList className="fs-lg" />
                    </label>
                  </div>
                </div>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
      <Row>
        {contacts.map((contact, idx) => (
          <Col xxl={3} md={6} key={idx}>
            <ContactCard contact={contact} />
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
