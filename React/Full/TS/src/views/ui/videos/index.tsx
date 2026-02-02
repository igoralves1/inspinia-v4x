import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Card, CardBody, CardHeader, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { TbChevronRight } from 'react-icons/tb'
import { Link } from 'react-router'

const ResponsiveEmbedVideo219 = () => {
  return (
    <ComponentCard title="Responsive embed video 21:9">
      <div className="ratio ratio-21x9">
        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" />
      </div>
    </ComponentCard>
  )
}

const ResponsiveEmbedVideo11 = () => {
  return (
    <ComponentCard title="Responsive embed video 1:1">
      <div className="ratio ratio-1x1">
        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" />
      </div>
    </ComponentCard>
  )
}

const ResponsiveEmbedVideo169 = () => {
  return (
    <ComponentCard title="Responsive embed video 16:9">
      <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" />
      </div>
    </ComponentCard>
  )
}

const ResponsiveEmbedVideo43 = () => {
  return (
    <ComponentCard title="Responsive embed video 43">
      <div className="ratio ratio-4x3">
        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" />
      </div>
    </ComponentCard>
  )
}

const page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Videos" subtitle="UI" />
        <Container fluid="xl">
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <CardTitle as={'h4'}>Embed Videos</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="text-muted mb-2">
                    Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling
                    video or slideshow embeds based on the width of the parent.
                  </p>
                  <Link className="btn btn-link p-0 fw-semibold" to="https://getbootstrap.com/docs/5.3/helpers/ratio/" target="_blank">
                    Ratios on Bootstrap
                    <TbChevronRight className="ms-1" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <ResponsiveEmbedVideo219 />
              <ResponsiveEmbedVideo11 />
            </Col>
            <Col xl={6}>
              <ResponsiveEmbedVideo169 />
              <ResponsiveEmbedVideo43 />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default page
