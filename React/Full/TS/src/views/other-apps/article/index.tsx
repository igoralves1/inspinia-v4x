import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Button, Card, CardBody, Col, Container, FormControl, Row } from 'react-bootstrap'
import { TbBrandX, TbCalendar, TbEye, TbMessageCircle, TbThumbDown, TbThumbUp } from 'react-icons/tb'

import blogPost from '@/assets/images/blog/blog-post.jpg'
import user1 from '@/assets/images/users/user-1.jpg'
import { Link } from 'react-router'
import type { JSX } from 'react'
import { LuDribbble, LuFacebook, LuInstagram, LuLinkedin, LuSearch, LuYoutube } from 'react-icons/lu'

type SocialLinkType = {
  icon: JSX.Element
  title: string
  link: string
  variant: string
}

const socialLinks: SocialLinkType[] = [
  {
    icon: <LuFacebook className="fs-xl" />,
    title: 'Facebook',
    link: '',
    variant: 'purple',
  },
  {
    icon: <TbBrandX className="fs-xl" />,
    title: 'Twitter-x',
    link: '',
    variant: 'info',
  },
  {
    icon: <LuInstagram className="fs-xl" />,
    title: 'Instagram',
    link: '',
    variant: 'danger',
  },
  {
    icon: <LuDribbble className="fs-xl" />,
    title: 'Dribbble',
    link: '',
    variant: 'success',
  },
  {
    icon: <LuLinkedin className="fs-xl" />,
    title: 'Linkedin',
    link: '',
    variant: 'secondary',
  },
  {
    icon: <LuYoutube className="fs-xl" />,
    title: 'Youtube',
    link: '',
    variant: 'danger',
  },
]

const relatedPosts = [
  {
    title: 'Unlocking the Secrets of Modern UI Design',
    url: '',
  },
  {
    title: 'How to Build a Portfolio with Tailwind CSS',
    url: '',
  },
  {
    title: 'Boost Productivity with These Web Dev Tools',
    url: '',
  },
  {
    title: 'The Future of Frontend: Trends to Watch in 2025',
    url: '',
  },
  {
    title: 'Essential Tips for Clean and Maintainable Code',
    url: '',
  },
]

const tags = ['Web Design', 'Frontend', 'Tailwind CSS', 'JavaScript', 'React', 'Startup', 'DevTools', 'Open Source', 'Performance', 'UX/UI', 'SEO']

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Article" subtitle="Apps" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <Card>
            <CardBody className="p-lg-5">
              <Row className="g-5">
                <Col lg={8}>
                  <h1 className="h3 mb-0">Mastering the Art of Focus: Tools & Strategies for Deep Work</h1>

                  <p className="d-flex flex-wrap gap-3 text-muted mb-0 mt-3 align-items-center fs-base">
                    <span className="badge text-bg-dark badge-label">Productivity</span>
                    <span className="d-flex align-items-center gap-1">
                      <TbCalendar className="fs-md" />
                      <span>Mar 18, 2025</span>
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <TbMessageCircle className="fs-md" />
                      <Link to="#" className="link-reset">
                        42
                      </Link>
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <TbEye className="fs-md" />
                      <span>982</span>
                    </span>
                  </p>

                  <img src={blogPost} width={802} height={451.13} className="img-fluid rounded mt-4" alt="blog-img" />

                  <div className="fs-md">
                    <p className="mt-4">
                      In a world full of constant notifications and distractions, developing the ability to focus has become a superpower. This
                      article dives into proven methods for cultivating deep work and staying productive in a digital age.
                    </p>
                    <p>
                      Eliminating distractions and building a workflow that encourages uninterrupted focus can drastically improve your efficiency.
                      Whether you're coding, writing, or designing — deep work leads to higher quality output and greater satisfaction.
                    </p>
                    <p>
                      Some effective strategies include time-blocking your calendar, using tools like Pomodoro timers, and creating a distraction-free
                      workspace. Even just 90 minutes of intentional, focused work per day can compound into massive progress over time.
                    </p>
                    <p className="mb-0">
                      By embracing stillness and training your attention, <mark>you’ll uncover a new level of clarity and creativity</mark> that
                      transforms how you work and what you’re capable of achieving.
                    </p>
                  </div>

                  <div className="bg-light-subtle border border-light rounded d-md-flex justify-content-between align-items-center text-center p-3 mt-5">
                    <h5 className="mb-0">Was this article helpful?</h5>
                    <p className="py-3 p-md-0 mb-0">
                      <b>41</b> out of <b>72</b> found this helpful
                    </p>

                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                      <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                      <label className="btn btn-soft-success btn-sm mb-0" htmlFor="btnradio1">
                        <TbThumbUp className="me-1" /> Yes
                      </label>
                      <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                      <label className="btn btn-soft-danger btn-sm mb-0" htmlFor="btnradio2">
                        No <TbThumbDown className="ms-1" />
                      </label>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-4 border mt-4 border-dashed p-4 rounded mb-14">
                    <div className="text-center flex-shrink-0 me-7 me-lg-13">
                      <div className="mb-2">
                        <img src={user1} width={48} height={48} className="avatar-xl rounded-circle" alt="" />
                      </div>
                      <div className="mb-0">
                        <Link to="#" className="fw-bold fs-sm">
                          Nathan Brooks
                        </Link>
                        <span className="text-muted fs-6 fw-semibold d-block mt-1">Productivity Coach</span>
                      </div>
                    </div>
                    <div className="mb-0">
                      <div className="text-muted fw-medium lh-base mb-2">
                        Nathan is passionate about helping creators, developers, and entrepreneurs reclaim their time and do meaningful work. He
                        writes regularly about mindful productivity and digital wellness.
                      </div>

                      <Link to="#" className="fw-semibold link-primary">
                        Author’s Profile
                      </Link>
                    </div>
                  </div>

                  <div className="my-4 text-center">
                    <h5 className="mb-3 text-uppercase fw-bold">Share This:</h5>

                    <div className="d-flex justify-content-center gap-2">
                      {socialLinks.map((item, idx) => (
                        <Link to={item.link} key={idx} className={`btn btn-icon rounded-circle btn-${item.variant}`}>
                          {item.icon}
                        </Link>
                      ))}
                    </div>
                  </div>
                </Col>

                <Col lg={4}>
                  <h5 className="mb-3 text-uppercase fw-bold">Search</h5>

                  <div className="app-search">
                    <FormControl type="text" className="bg-light-subtle border-light" placeholder="Search post..." />
                    <LuSearch className="app-search-icon text-muted" />
                  </div>

                  <div className="align-items-center mt-5">
                    <h5 className="mb-3 text-uppercase fw-bold">Related post:</h5>

                    <ul className="list-group list-group-flush fs-sm">
                      {relatedPosts.map((post, idx) => (
                        <li className="list-group-item ps-0" key={idx}>
                          <Link to={post.url} className="link-reset fw-medium">
                            {post.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="align-items-center mt-5">
                    <h5 className="mb-3 text-uppercase fw-bold">Popular Tags:</h5>
                    <div className="d-flex flex-wrap gap-1">
                      {tags.map((tag, idx) => (
                        <Button variant="light" size="sm" key={idx}>
                          {tag}
                        </Button>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
