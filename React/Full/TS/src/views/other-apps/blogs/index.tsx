import PageBreadcrumb from '@/components/PageBreadcrumb'
import clsx from 'clsx'
import { Masonry } from 'masonic'
import { Card, CardBody, CardFooter, CardTitle, Container } from 'react-bootstrap'
import { Link } from 'react-router'
import { TbArrowRight, TbCalendar, TbEye, TbMessageCircle } from 'react-icons/tb'
import { blogs, type BlogType } from '@/views/other-apps/blogs/data.ts'

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <Card className={clsx(blog.variant && `bg-${blog.variant} bg-gradient`, 'mb-0')}>
      {blog.image && blog.category && <div className="badge text-bg-dark badge-label position-absolute top-0 start-0 m-3">{blog.category}</div>}

      {blog.image && <img className="card-img-top" src={blog.image} alt="" />}

      {blog.title && blog.description && (
        <CardBody>
          {!blog.image && blog.category && <div className="badge bg-white text-white bg-opacity-25 badge-label mb-3">{blog.category}</div>}

          <CardTitle as="h6" className="fs-lg lh-base mb-2">
            <Link to="" className={blog.variant ? 'text-white' : 'link-reset'}>
              {blog.title}
            </Link>
          </CardTitle>
          <p className={`mb-3 ${blog.variant ? 'text-white-50' : 'text-muted'}`}>{blog.description}</p>

          {blog.tags && (
            <div>
              {blog.tags.map((tag, idx) => (
                <Link key={idx} to="#" className={`badge badge-label  ${blog.variant ? ' border rounded border-white border-opacity-25' : 'badge-default'}  ${idx != blog.tags!.length - 1 ? 'me-1' : ''}`}>
                  {tag}
                </Link>
              ))}
            </div>
          )}
          {blog.date && blog.comments && blog.views && (
            <p className={`d-flex flex-wrap gap-3 mb-0 mt-3 align-items-center fs-base ${blog.variant ? 'text-white-50' : 'text-muted'}`}>
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
          )}
        </CardBody>
      )}

      <CardFooter className={`bg-transparent d-flex justify-content-between ${blog.variant && 'border-light border-opacity-25'}`}>
        <div className="d-flex justify-content-start align-items-center gap-2">
          <div className="avatar avatar-xs">
            <img src={blog.user.avatar} height={24} width={24} alt="" className="img-fluid rounded-circle" />
          </div>
          <div>
            <h5 className="text-nowrap fs-sm mb-0 lh-base">
              <Link to="#" className={blog.variant ? 'text-white' : 'link-reset'}>
                {blog.user.name}
              </Link>
            </h5>
          </div>
        </div>
        <Link to="" className={`fw-semibold ${blog.variant ? 'text-white' : 'link-primary'}`}>
          Read more <TbArrowRight />
        </Link>
      </CardFooter>
    </Card>
  )
}

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Blogs" subtitle="Apps" />

      <div style={{ width: '100%' }}>
        <Masonry items={blogs} columnGutter={20} columnWidth={350} overscanBy={2} render={({ data }) => <BlogCard blog={data} />} />
      </div>
    </Container>
  )
}

export default Page
