import AppLogo from '@/components/AppLogo'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import Tour from '@rc-component/tour'
import { Link } from 'react-router'
import { useRef, useState } from 'react'
import { Button, Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap'
import { TbArrowRight, TbCompass, TbFileDots, TbPlayerPlay, TbShoppingCart } from 'react-icons/tb'
import { features } from '@/views/miscellaneous/tour/data.ts'

const Page = () => {
  const [openTour, setOpenTour] = useState(false)

  const step1Ref = useRef<HTMLAnchorElement | null>(null)
  const step2Ref = useRef<HTMLAnchorElement | null>(null)
  const step3Ref = useRef<HTMLDivElement | null>(null)
  const step4Ref = useRef<HTMLButtonElement | null>(null)

  return (
    <Container fluid>
      <PageBreadcrumb title="Tour" subtitle="Miscellaneous" />

      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <div>
                <Row className="justify-content-center">
                  <Col lg={5}>
                    <div className="text-center mt-4 mb-5">
                      <div className="auth-brand text-center mb-4">
                        <AppLogo />
                      </div>

                      <h5 className="fs-lg mb-2">Powerful & Flexible Admin Panel Template</h5>
                      <p className="text-muted fs-sm">
                        Our admin panel provides a robust foundation for modern web apps. With support for multiple frameworks and over a dozen demo
                        variations, developers can build exactly what they need, fast and easily. Customize with ease and enjoy consistent UI across
                        projects.
                      </p>

                      <div className="d-flex justify-content-center mt-4 flex-wrap gap-2">
                        <Button
                          variant="primary"
                          onClick={() => {
                            if (step1Ref.current) {
                              setOpenTour(true)
                            }
                          }}>
                          <TbPlayerPlay className="me-1" /> Start Tour
                        </Button>

                        <Link ref={step1Ref} to="" className="btn btn-dark">
                          <TbCompass className="me-1" /> Explore Features
                        </Link>

                        <Link
                          ref={step2Ref}
                          to="https://wrapbootstrap.com/theme/inspinia-multipurpose-admin-dashboard-template-WB0R5L90S?ref=inspinia"
                          target="_blank"
                          className="btn btn-danger">
                          <TbShoppingCart className="me-1" /> Buy Now
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Container ref={step3Ref}>
                  <Row>
                    <Col cols={12} className="text-center">
                      <span className="text-muted rounded-3 d-inline-block">🚀 Empowering your digital journey</span>
                      <h3 className="mt-3 fw-bold mb-5">
                        Framework <mark>Support & Core</mark> Features
                      </h3>
                    </Col>
                  </Row>

                  <Row>
                    {features.map((feature, idx) => (
                      <Col xl={3} key={idx}>
                        <Card className="border-0 p-2 card-h-100">
                          <CardBody className="pb-0">
                            <div className="avatar-xl mb-3">
                              <span className="avatar-title text-bg-secondary rounded-circle fs-22">
                                <feature.icon />
                              </span>
                            </div>
                            <h4 className="fw-semibold mb-2">{feature.title}</h4>
                            <p className="text-muted mb-3">{feature.description}</p>
                          </CardBody>
                          <CardFooter className="border-0 pt-0">
                            <Link className="link-primary fw-semibold" to="">
                              Know more <TbArrowRight className="ms-2 align-middle" />
                            </Link>
                          </CardFooter>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Container>

                <div className="text-center my-4">
                  <Button ref={step4Ref} variant="success">
                    <TbFileDots className="me-1" /> Documentation
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Tour
        defaultCurrent={1}
        open={openTour}
        onClose={() => setOpenTour(false)}
        animated
        mask
        steps={[
          {
            title: 'Getting Started',
            description: 'Click here to get started and explore our framework-rich admin panel. 🚀',
            target: () => step1Ref.current!,
            placement: 'left',
          },
          {
            title: 'Buy Now',
            description: 'Ready to supercharge your project ? Click here to purchase the template!',
            target: () => step2Ref.current!,
            placement: 'left',
          },
          {
            title: 'Core Features',
            description: 'Learn more about the versatile services and modules we provide to enhance development',
            target: () => step3Ref.current!,
            placement: 'top',
          },
          {
            title: 'Documentation',
            description: 'Thanks for exploring! Read the documentation to get the most out of this template.',
            target: () => step4Ref.current!,
            placement: 'top',
          },
        ]}
      />
    </Container>
  )
}

export default Page
