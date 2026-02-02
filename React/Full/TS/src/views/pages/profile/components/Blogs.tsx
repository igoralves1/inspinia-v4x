import { Card, CardBody, CardFooter, CardTitle, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router'
import { TbArrowRight, TbCalendar, TbEye, TbMessageCircle } from 'react-icons/tb'
import { blogs, type BlogType } from '@/views/pages/profile/data.ts'

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <Card className="rounded-3">
      <div className="badge text-bg-dark badge-label position-absolute top-0 start-0 m-3">{blog.category}</div>

      <img className="card-img-top" src={blog.image} alt="" />

      <CardBody>
        <CardTitle as="h6" className="fs-lg lh-base mb-2">
          <Link to="" className="link-reset">
            {blog.title}
          </Link>
        </CardTitle>
        <p className="mb-3 text-muted">{blog.description}</p>

        <div>
          {blog.tags.map((tag, idx) => (
            <Link key={idx} to="#" className={`badge badge-label badge-default ${idx != blog.tags!.length - 1 ? 'me-1' : ''}`}>
              {tag}
            </Link>
          ))}
        </div>

        <p className="d-flex flex-wrap gap-3 mb-0 mt-3 align-items-center fs-base text-muted">
          <span className="d-flex align-items-center gap-1">
            <TbCalendar className="fs-md" />
            <span>{blog.date}</span>
          </span>
          <span className="d-flex align-items-center gap-1">
            <TbMessageCircle className="fs-md" />
            <Link to="#" className="link-reset">
              {blog.comments}
            </Link>
          </span>
          <span className="d-flex align-items-center gap-1">
            <TbEye className="fs-md" />
            <span>{blog.views}</span>
          </span>
        </p>
      </CardBody>

      <CardFooter className="bg-transparent d-flex justify-content-between">
        <div className="d-flex justify-content-start align-items-center gap-2">
          <div className="avatar avatar-xs">
            <img src={blog.author.image} height={24} width={24} alt="" className="img-fluid rounded-circle" />
          </div>
          <div>
            <h5 className="text-nowrap fs-sm mb-0 lh-base">
              <Link to="#" className="link-reset">
                {blog.author.name}
              </Link>
            </h5>
          </div>
        </div>
        <Link to="" className="fw-semibold link-primary">
          Read more <TbArrowRight />
        </Link>
      </CardFooter>
    </Card>
  )
}

const Blogs = () => {
  return (
    <>
      <h4 className="my-4">My Blog Posts</h4>

      <Row>
        {blogs.map((blog, idx) => (
          <Col xl={4} md={6} key={idx}>
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Blogs
