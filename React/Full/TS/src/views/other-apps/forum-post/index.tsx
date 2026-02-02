import { Button, Card, CardBody, Col, Container, Form, FormControl, Pagination, Row } from 'react-bootstrap'
import { Link } from 'react-router'
import { LuSearch } from 'react-icons/lu'
import { TbArrowBackUp, TbChevronLeft, TbChevronRight, TbClock, TbMessageReply, TbSend2, TbUsers } from 'react-icons/tb'

import PageBreadcrumb from '@/components/PageBreadcrumb'

import user10 from '@/assets/images/users/user-10.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user8 from '@/assets/images/users/user-8.jpg'

type QuickLinkType = {
  title: string
  url: string
}

const categories: QuickLinkType[] = [
  { title: 'Development Talk', url: '' },
  { title: 'AI & Ethics', url: '' },
  { title: 'Product Design', url: '' },
  { title: 'Career Growth', url: '' },
  { title: 'Open Source', url: '' },
]

const questions: QuickLinkType[] = [
  { title: 'Unlocking the Secrets of Modern UI Design', url: '' },
  { title: 'How to Build a Portfolio with Tailwind CSS', url: '' },
  { title: 'Boost Productivity with These Web Dev Tools', url: '' },
  { title: 'The Future of Frontend: Trends to Watch in 2025', url: '' },
  { title: 'Essential Tips for Clean and Maintainable Code', url: '' },
]

const tags = ['Web Design', 'Frontend', 'Tailwind CSS', 'JavaScript', 'React', 'Startup', 'DevTools', 'Open Source', 'Performance', 'UX/UI', 'SEO']

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Forum Post" subtitle="Apps" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <Row>
            <Col xl={9}>
              <Card>
                <CardBody>
                  <div className="d-flex gap-4 align-items-center">
                    <div className="flex-grow-1">
                      <div className="text-center">
                        <p className="text-muted text-uppercase my-2 fw-semibold">#Development Talk</p>

                        <h4 className="fs-xxl mb-3">What's the best JavaScript framework in 2025?</h4>
                      </div>

                      <div className="fs-sm">
                        <p>
                          With the ever-evolving front-end landscape, JavaScript frameworks are at the heart of most web development stacks. In 2025,
                          options like React, Vue 3, Angular, Svelte, SolidJS, and even newer players continue to battle for dominance in terms of
                          performance, developer experience, ecosystem, and community support.
                        </p>
                        <p>
                          React remains a popular choice due to its strong community, wide adoption, and extensive tooling, while Vue 3 continues to
                          grow thanks to its approachable syntax and composition API. On the other hand, Svelte and SolidJS are gaining attention for
                          their compile-time optimization and ultra-fast runtime performance.
                        </p>
                        <p>
                          We'd love to hear your experience: Which framework do you use and why? Are you prioritizing performance, learning curve,
                          community support, or integration capabilities? Share your insights, real-world comparisons, and predictions for the future!
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="d-flex flex-wrap gap-3 text-muted mt-3 mb-0 pb-3 align-items-center justify-content-between fs-sm">
                    <span className="d-flex align-items-center gap-2">
                      <img src={user5} width={32} height={32} alt="avatar-5" className="img-fluid avatar-sm rounded" />
                      <span className="text-body">
                        <a href="#" className="link-reset fw-semibold lh-sm d-block">
                          James Milton
                        </a>
                        <span className="text-muted small">1 hour ago</span>
                      </span>
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <TbMessageReply />
                      <a href="#" className="link-reset">
                        Answers: 45
                      </a>
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <TbClock />
                      <span>Ends in: 3 days</span>
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <TbUsers />
                      <span>Votes: 732</span>
                    </span>
                  </p>

                  <div className="border-bottom border-dashed mb-3"></div>

                  <Form className="mb-3">
                    <div className="mb-3">
                      <FormControl as="textarea" className="bg-light-subtle" rows={4} placeholder="Enter your messages..." />
                    </div>
                    <div className="text-end">
                      <Button variant="secondary" type="submit">
                        Submit <TbSend2 className="align-baseline ms-1" />
                      </Button>
                    </div>
                  </Form>

                  <h4>Replies(15)</h4>

                  <div className="border-bottom border-dashed my-3"></div>

                  <div className="d-flex mb-2 border border-dashed rounded p-3">
                    <div className="flex-shrink-0">
                      <img height={32} width={32} src={user8} alt="" className="avatar-sm rounded-circle shadow-sm" />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h5 className="mb-1">
                        Liam Carter <small className="text-muted">15 Apr 2025 · 09:20AM</small>
                      </h5>
                      <p className="mb-2">Customers are reporting that the checkout page freezes after submitting their payment information.</p>
                      <a href="#" className="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                        <TbArrowBackUp className="fs-lg" /> Reply
                      </a>

                      <div className="d-flex mt-4">
                        <div className="flex-shrink-0">
                          <img height={32} width={32} src={user10} alt="" className="avatar-sm rounded-circle shadow-sm" />
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <h5 className="mb-1">
                            Nina Bryant <small className="text-muted">15 Apr 2025 · 11:47AM</small>
                          </h5>
                          <p className="mb-2">
                            That might be caused by the third-party payment gateway. I recommend testing in incognito mode and checking for any JS
                            errors in the console.
                          </p>
                          <a href="#" className="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                            <TbArrowBackUp className="fs-lg" /> Reply
                          </a>
                        </div>
                      </div>

                      <div className="d-flex mt-4">
                        <div className="flex-shrink-0">
                          <img height={32} width={32} src={user3} alt="" className="avatar-sm rounded-circle shadow-sm" />
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <h5 className="mb-1">
                            Sophie Allen <small className="text-muted">16 Apr 2025 · 10:15AM</small>
                          </h5>
                          <p className="mb-2">
                            We’ve noticed this issue before when the CDN cache hasn't been cleared properly. Try purging the cache and reloading the
                            page.
                          </p>
                          <a href="#" className="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                            <TbArrowBackUp className="fs-lg" /> Reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex mb-2 border border-dashed rounded p-3">
                    <div className="flex-shrink-0">
                      <img height={32} width={32} src={user6} alt="" className="avatar-sm rounded-circle shadow-sm" />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h5 className="mb-1">
                        Daniel West <small className="text-muted">14 Apr 2025 · 04:15PM</small>
                      </h5>
                      <p className="mb-2">
                        You can also clear the browser cache or try a different browser. We had a similar issue with Chrome extensions interfering
                        before.
                      </p>
                      <a href="#" className="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                        <TbArrowBackUp className="fs-lg" /> Reply
                      </a>
                    </div>
                  </div>

                  <div className="d-flex mb-3 border border-dashed rounded p-3">
                    <div className="flex-shrink-0">
                      <img height={32} width={32} src={user10} alt="" className="avatar-sm rounded-circle shadow-sm" />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h5 className="mb-1">
                        Nina Bryant <small className="text-muted">16 Apr 2025 · 08:04AM</small>
                      </h5>
                      <p>
                        The{' '}
                        <a href="#" className="text-decoration-underline">
                          System Status Page
                        </a>{' '}
                        has been updated. We're actively monitoring and will release a patch within 24 hours.
                      </p>

                      <a href="#" className="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                        <TbArrowBackUp className="fs-lg" /> Reply
                      </a>

                      <div className="d-flex mt-4">
                        <div className="flex-shrink-0">
                          <img height={32} width={32} src={user6} alt="" className="avatar-sm rounded-circle shadow-sm" />
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <h5 className="mb-1">
                            Daniel West <small className="text-muted">16 Apr 2025 · 08:30AM</small>
                          </h5>
                          <p>Thanks for the update! We'll notify the customers and let them know the issue is being resolved.</p>
                          <a href="#" className="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                            <TbArrowBackUp className="fs-lg" /> Reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Pagination className="pagination-rounded pagination-boxed justify-content-center mb-0">
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

            <Col lg={3}>
              <Button variant="primary" size="lg" className="mb-3 w-100">
                Ask Question
              </Button>

              <Card>
                <CardBody className="border-bottom border-dashed">
                  <h5 className="mb-3 text-uppercase fw-bold">Search</h5>

                  <div className="app-search">
                    <FormControl type="text" className="bg-light-subtle" placeholder="Search issues..." />
                    <LuSearch className="app-search-icon text-muted" />
                  </div>
                </CardBody>
                <CardBody className="border-bottom border-dashed">
                  <h5 className="mb-3 text-uppercase fw-bold">Category:</h5>

                  <ul className="list-group list-group-flush fs-sm">
                    {categories.map((item, idx) => (
                      <li key={idx} className="list-group-item ps-0">
                        <Link to={item.url} className="link-reset fw-medium">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardBody>
                <CardBody className="border-bottom border-dashed">
                  <h5 className="mb-3 text-uppercase fw-bold">Popular Questions:</h5>

                  <ul className="list-group list-group-flush fs-sm">
                    {questions.map((question, idx) => (
                      <li className="list-group-item ps-0" key={idx}>
                        <Link to={question.url} className="link-reset fw-medium">
                          {question.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardBody>
                <CardBody>
                  <h5 className="mb-3 text-uppercase fw-bold">Popular Tags:</h5>
                  <div className="d-flex flex-wrap gap-1">
                    {tags.map((tag, idx) => (
                      <Button variant="light" size="sm" key={idx}>
                        {tag}
                      </Button>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
