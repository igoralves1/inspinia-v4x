import PageBreadcrumb from '@/components/PageBreadcrumb'
import { currency } from '@/helpers'
import { Button, Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap'
import { TbArrowLeftRhombus, TbArrowRightRhombus } from 'react-icons/tb'
import { pricingPlans, type PricingPlanType } from '@/views/pages/pricing/data.ts'

const PricingCard = ({ plan }: { plan: PricingPlanType }) => {
  return (
    <Card className={`h-100 bg-light bg-opacity-30 rounded-4 ${plan.isPopular ? 'border-success border-2' : 'border-light'}`}>
      <CardBody className="px-lg-4 p-5 pb-2 text-center">
        <div className="text-center">
          <h3 className="fw-bold mb-1">{plan.name}</h3>
          <p className="text-muted mb-0">{plan.description}</p>
        </div>
        <div className="my-4">
          <h1 className="display-6 fw-bold mb-0">
            {currency}
            {plan.price}
          </h1>
          <small className="d-block text-muted fs-base fw-medium">{plan.paymentType}</small>
          <small className="d-block text-muted fw-medium">{plan.text}</small>
        </div>

        <ul className="list-unstyled text-start fs-sm fw-medium mb-0">
          {plan.features.map((feature, idx) => {
            return (
              <li key={idx} className="mb-2">
                <feature.icon className={`text-${feature.variant} me-2 fs-5`} />
                {feature.name}
              </li>
            )
          })}
        </ul>
      </CardBody>
      <CardFooter className="bg-transparent border-0 px-5 pb-4">
        <Button variant={plan.isPopular ? 'primary' : 'dark'} className="w-100 py-2 fw-semibold rounded-pill">
          {plan.buttonText}
        </Button>
      </CardFooter>
      {plan.isPopular && (
        <span className="position-absolute fs-xs top-0 start-50 translate-middle-x badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mt-3">
          Popular Choice
        </span>
      )}
    </Card>
  )
}

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Pricing" subtitle="Pages" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <Card>
            <CardBody>
              <div className="text-center">
                <h3 className="fw-bold mt-4">Find the Perfect Fit</h3>
                <div className="fs-24">
                  <TbArrowLeftRhombus className="text-primary" />
                  <TbArrowRightRhombus className="text-primary" />
                </div>
                <p className="fst-italic fs-md">Not sure which plan suits you best? Check out our Pricing Guide for detailed insights.</p>
              </div>

              <div className="px-xxl-4 mt-5">
                <Row>
                  {pricingPlans.map((plan, idx) => (
                    <Col lg={6} xl={4} key={idx}>
                      <PricingCard plan={plan} />
                    </Col>
                  ))}
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
