import PageBreadcrumb from '@/components/PageBreadcrumb'
import ComponentCard from '@/components/cards/ComponentCard'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Alert, Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'

import blogImg from '@/assets/images/blog/blog-1.jpg'
import { useRef } from 'react'
import { animationGroups } from '@/views/miscellaneous/animation/data.ts'

const Page = () => {
  const imageRef = useRef<HTMLImageElement>(null)

  const animate = (animation: string) => {
    if (imageRef.current) {
      imageRef.current.classList.add('animate__animated', `animate__${animation}`)

      imageRef.current.addEventListener(
        'animationend',
        () => {
          imageRef.current?.classList.remove('animate__animated', `animate__${animation}`)
        },
        { once: true },
      )
    }
  }

  return (
    <Container fluid>
      <PageBreadcrumb title="Animation" subtitle="Miscellaneous" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <ComponentCard title="Animate.css">
            <p className="text-muted">
              A cross-browser library of CSS animations. Animate.css is a bunch of cool, fun, and cross-browser animations for you to use in your
              projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.
            </p>

            <Row className="g-lg-4">
              <Col sm={4}>
                <Card className="card-top-sticky overflow-hidden">
                  <CardBody>
                    <div ref={imageRef}>
                      <img src={blogImg} width={375.66} height={281.73} className="img-fluid rounded" alt="user" />
                    </div>
                    <p className="mt-3 text-muted text-center mb-0">Example box for animation effect.</p>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={8}>
                <Alert variant="info">Click any of the buttons below to see the animation effect applied to the box on the left.</Alert>

                <Accordion defaultActiveKey="0">
                  {animationGroups.map((item, idx) => (
                    <AccordionItem eventKey={idx.toString()} key={idx}>
                      <AccordionHeader>{item.name}</AccordionHeader>
                      <AccordionBody>
                        {item.animations.map((animation) => (
                          <Button key={animation} variant="light" className="animation_select m-1" onClick={() => animate(animation)}>
                            {animation}
                          </Button>
                        ))}
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Col>
            </Row>
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
