import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, CardHeader, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { LuCircleMinus, LuCirclePlus } from 'react-icons/lu'
import { TbArrowDown, TbArrowUp, TbChevronRight, TbMinus, TbPlus } from 'react-icons/tb'
import { Link } from 'react-router'

export type AccordionType = {
  question: string
  answer: string
}

const accordionData: AccordionType[] = [
  {
    question: 'Accordion Item ',
    answer:
      "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
  },
  {
    question: 'Accordion Item ',
    answer:
      "<strong>This is the second item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
  },
  {
    question: 'Accordion Item ',
    answer:
      "<strong>This is the third item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
  },
]

const DefaultAccordions = () => {
  return (
    <ComponentCard title="Default Accordions">
      <Accordion defaultActiveKey={'1'} id="accordionExample">
        {accordionData.map((item, idx) => (
          <AccordionItem eventKey={`${idx + 1}`} key={idx}>
            <AccordionHeader as={'h2'} id="headingOne">
              {item.question}
            </AccordionHeader>
            <AccordionBody dangerouslySetInnerHTML={{ __html: item.answer }}></AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </ComponentCard>
  )
}

const FlushAccordions = () => {
  return (
    <ComponentCard title="Flush Accordions">
      <Accordion defaultActiveKey={'1'} className="accordion-flush " id="accordionFlushExample">
        {accordionData.map((item, idx) => (
          <AccordionItem eventKey={`${idx + 1}`} key={idx}>
            <AccordionHeader as={'h2'} id="headingOne">
              {item.question}
            </AccordionHeader>
            <AccordionBody dangerouslySetInnerHTML={{ __html: item.answer }}></AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </ComponentCard>
  )
}

const AlwaysOpenAccordions = () => {
  return (
    <ComponentCard title="Always Open Accordions">
      <Accordion alwaysOpen defaultActiveKey={['1']} className="" id="accordionPanelsStayOpenExample">
        {accordionData.map((item, idx) => (
          <AccordionItem eventKey={`${idx + 1}`} key={idx}>
            <AccordionHeader as={'h2'} id="headingOne">
              {item.question}
            </AccordionHeader>
            <AccordionBody dangerouslySetInnerHTML={{ __html: item.answer }}></AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </ComponentCard>
  )
}

const WithoutArrowAccordion = () => {
  return (
    <ComponentCard title="Accordion Without Arrow">
      <Accordion defaultActiveKey={'1'} className="accordion-arrow-none " id="withoutarrowaccordionExample">
        {accordionData.map((item, idx) => (
          <AccordionItem eventKey={`${idx}`} key={idx}>
            <AccordionHeader as={'h2'} id="headingOne">
              {item.question}
            </AccordionHeader>
            <AccordionBody dangerouslySetInnerHTML={{ __html: item.answer }}></AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </ComponentCard>
  )
}

const BorderedAccordions = () => {
  return (
    <ComponentCard title="Bordered Accordions">
      <Accordion defaultActiveKey={'1'} className="accordion-bordered " id="BorderedaccordionExample">
        {accordionData.map((item, idx) => (
          <AccordionItem eventKey={`${idx}`} key={idx}>
            <AccordionHeader as={'h2'} id="headingOne">
              {item.question}
            </AccordionHeader>
            <AccordionBody dangerouslySetInnerHTML={{ __html: item.answer }}></AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </ComponentCard>
  )
}

const CustomIconAccordion = () => {
  return (
    <ComponentCard title="Custom Icon Accordion">
      <Accordion defaultActiveKey={'0'} className="accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample">
        <AccordionItem eventKey="0">
          <AccordionHeader as={'h2'} id="CustomIconheadingOne">
            Accordion item with tabler icons
            <TbPlus className="accordion-icon accordion-icon-on" />
            <TbMinus className="accordion-icon accordion-icon-off" />
          </AccordionHeader>
          <AccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes
            that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="1">
          <AccordionHeader as={'h2'} id="CustomIconheadingTwo">
            Accordion item with lucid icons
            <LuCirclePlus className="accordion-icon accordion-icon-on avatar-xxs me-n1" />
            <LuCircleMinus className="accordion-icon accordion-icon-off avatar-xxs me-n1" />
          </AccordionHeader>
          <AccordionBody>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes
            that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="2">
          <AccordionHeader as={'h2'} id="CustomIconheadingThree">
            Accordion item with solar duotone icons
            <TbArrowDown className="accordion-icon accordion-icon-on" />
            <TbArrowUp className="accordion-icon accordion-icon-off" />
          </AccordionHeader>
          <AccordionBody>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes
            that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </ComponentCard>
  )
}

const Page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Accordions" subtitle="UI" />
        <Container fluid="xl">
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <CardTitle as={'h4'}>Examples</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="text-muted mb-2">Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.</p>
                  <Link className="btn btn-link p-0 fw-semibold" to="https://react-bootstrap.netlify.app/docs/components/accordion/" target="_blank">
                    Accordions on React Bootstrap
                    <TbChevronRight className="ms-1" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col xl={12}>
              <DefaultAccordions />
            </Col>
            <Col xl={12}>
              <FlushAccordions />
            </Col>
            <Col xl={12}>
              <AlwaysOpenAccordions />
            </Col>
            <Col xl={12}>
              <WithoutArrowAccordion />
            </Col>
            <Col xl={12}>
              <BorderedAccordions />
            </Col>
            <Col xl={12}>
              <CustomIconAccordion />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Page
