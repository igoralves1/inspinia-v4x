import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Button, Card, CardBody, CardFooter, Col, Container, FormControl, Pagination, Row } from 'react-bootstrap'
import { Link } from 'react-router'
import { LuSearch } from 'react-icons/lu'
import { TbChevronLeft, TbChevronRight, TbClock, TbMessageReply, TbUsers } from 'react-icons/tb'
import { forumPosts, type ForumPostType } from '@/views/other-apps/forum-view/data.ts'

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

const ForumCard = ({ item, className }: { item: ForumPostType; className?: string }) => {
  return (
    <Card className={className}>
      <CardBody>
        <div className="d-flex gap-4 align-items-center">
          <div className="flex-grow-1">
            <p className="text-muted text-uppercase mb-2 fw-semibold">{item.category}</p>

            <h4 className="fs-lg mb-2">
              <Link to={item.url} className="link-reset">
                {item.title}
              </Link>
            </h4>

            <p className="text-muted mb-0">{item.description}</p>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <p className="d-flex flex-wrap gap-3 text-muted mb-0 align-items-center justify-content-between fs-sm">
          <span className="d-flex align-items-center gap-2">
            <img src={item.image} height={32} width={32} alt="" className="img-fluid avatar-sm rounded" />
            <span>
              <a href="#" className="link-dark fw-semibold lh-sm d-block">
                {item.author}
              </a>
              <span className="text-muted small">{item.timeAgo}</span>
            </span>
          </span>
          <span className="d-flex align-items-center gap-1">
            <TbMessageReply />
            <a href="#" className="link-reset">
              Answers: {item.answers}
            </a>
          </span>
          <span className="d-flex align-items-center gap-1">
            <TbClock />
            <span>Ends in: {item.endsIn}</span>
          </span>
          <span className="d-flex align-items-center gap-1">
            <TbUsers />
            <span>Votes: {item.votes}</span>
          </span>
          <span className="d-flex align-items-center gap-1">
            <span className={`badge text-bg-${item.variant}`}>{item.badge}</span>
          </span>
        </p>
      </CardFooter>
    </Card>
  )
}

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Forum View" subtitle="Apps" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <Row>
            <Col xl={9}>
              <h4 className="mb-3">All Questions</h4>
              {forumPosts.map((item, idx) => (
                <ForumCard key={item.id} item={item} className={idx !== forumPosts.length - 1 ? 'mb-1' : ''} />
              ))}

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
