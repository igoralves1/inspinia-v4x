import AppLogo from '@/components/AppLogo'
import { author, currentYear } from '@/helpers'
import { useCountdown } from '@/hooks/useCountdown'
import { useMemo } from 'react'
import { Button, Card, CardBody, Col, Container, FormControl, Row } from 'react-bootstrap'
import { LuMail } from 'react-icons/lu'

const Page = () => {
  const targetDate = useMemo(() => new Date(Date.now() + 1000 * 60 * 60 * 24 * 4), [])

  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  return (
    <div className="auth-box d-flex align-items-center">
      <Container fluid="xxl">
        <Row className="align-items-center justify-content-center">
          <Col xl={10}>
            <Card className="rounded-3 p-0 rounded-4">
              <CardBody className="p-0">
                <Row className="justify-content-between g-0">
                  <Col lg={7}>
                    <Card className="mb-0 border-0 rounded-4">
                      <CardBody>
                        <div className="auth-brand text-center mb-3">
                          <AppLogo />
                        </div>

                        <div className="p-2 text-center">
                          <h3 className="fw-bold my-2">Big things are on the Way</h3>
                          <p className="text-muted mb-0">We're crafting something awesome. Stay tuned!</p>

                          <Row className="text-center justify-content-center my-4 g-2">
                            <Col sm={4} md={3} cols={6} className="col-lg">
                              <div className="bg-light bg-opacity-10 px-2 py-4 rounded shadow-inner">
                                <h2 className="fw-bold text-primary fs-36" suppressHydrationWarning>
                                  {days}
                                </h2>
                                <p className="fw-semibold fs-xs mb-0">Days</p>
                              </div>
                            </Col>
                            <Col sm={4} md={3} cols={6} className="col-lg">
                              <div className="bg-light bg-opacity-10 px-2 py-4 rounded shadow-inner">
                                <h3 className="fw-bold text-primary fs-36" suppressHydrationWarning>
                                  {hours}
                                </h3>
                                <p className="fw-semibold fs-xs mb-0">Hours</p>
                              </div>
                            </Col>
                            <Col sm={4} md={3} cols={6} className="col-lg">
                              <div className="bg-light bg-opacity-10 px-2 py-4 rounded shadow-inner">
                                <h3 className="fw-bold text-primary fs-36" suppressHydrationWarning>
                                  {minutes}
                                </h3>
                                <p className="fw-semibold fs-xs mb-0">Minutes</p>
                              </div>
                            </Col>
                            <Col sm={4} md={3} cols={6} className="col-lg">
                              <div className="bg-light bg-opacity-10 px-2 py-4 rounded shadow-inner">
                                <h3 className="fw-bold text-primary fs-36" suppressHydrationWarning>
                                  {seconds}
                                </h3>
                                <p className="fw-semibold fs-xs mb-0">Seconds</p>
                              </div>
                            </Col>
                          </Row>

                          <div className="error-glitch fs-xl">Stay tunned!</div>

                          <div className="app-search app-search-pill w-xl-75 mx-auto input-group mt-3 rounded-pill">
                            <FormControl type="text" className="py-2" placeholder="Enter email..." />
                            <LuMail className="app-search-icon text-muted" />
                            <Button variant="secondary" type="button">
                              Notify me!
                            </Button>
                          </div>
                        </div>

                        <p className="text-center text-muted mt-5 mb-0">
                          © 2014 - {currentYear} INSPINIA — by <span className="fw-bold">{author}</span>
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg={5} className="d-none d-lg-block">
                    <div className="h-100 position-relative card-side-img rounded-end-4 rounded-end rounded-0 overflow-hidden">
                      <div className="p-4 card-img-overlay rounded-4 rounded-start-0 auth-overlay d-flex align-items-end justify-content-center"></div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Page
