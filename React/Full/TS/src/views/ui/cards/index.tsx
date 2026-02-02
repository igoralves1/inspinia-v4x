import small1 from '@/assets/images/stock/small-1.jpg'
import small10 from '@/assets/images/stock/small-10.jpg'
import small2 from '@/assets/images/stock/small-2.jpg'
import small3 from '@/assets/images/stock/small-3.jpg'
import small4 from '@/assets/images/stock/small-4.jpg'
import small5 from '@/assets/images/stock/small-5.jpg'
import small6 from '@/assets/images/stock/small-6.jpg'
import small8 from '@/assets/images/stock/small-8.jpg'
import small9 from '@/assets/images/stock/small-9.jpg'
import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Container, Nav, NavItem, NavLink, Row } from 'react-bootstrap'
import { TbChevronRight } from 'react-icons/tb'
import { Link } from 'react-router'

type CardGroupType = {
  id: number
  image: string
  title: string
  text: string
  subtext: string
}

const Basic = () => {
  return (
    <Card>
      <CardBody>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card
          title and make up.
        </CardText>
        <Link to="" className="btn btn-sm btn-primary">
          Button
        </Link>
      </CardBody>
    </Card>
  )
}

const BasicCardWithTitle = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle as={'h5'} className="mb-2">
          Basic Card with Title
        </CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card
          title and make up.
        </CardText>
        <Link to="" className="btn btn-sm btn-primary">
          Button
        </Link>
      </CardBody>
    </Card>
  )
}

const CardWithBackgroundColor = () => {
  return (
    <Card className="text-bg-primary border-0">
      <CardBody>
        <CardTitle as={'h5'} className="mb-2">
          Card with Background Color
        </CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card
          title and make up.
        </CardText>
        <Link to="" className="btn btn-sm btn-light">
          Button
        </Link>
      </CardBody>
    </Card>
  )
}

const CardWithBackgroundGradient = () => {
  return (
    <Card className="text-bg-purple bg-gradient">
      <CardBody>
        <CardTitle as={'h5'} className="mb-2">
          Card with Background Gradient
        </CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card
          title and make up.
        </CardText>
        <Link to="" className="btn btn-sm btn-light">
          Button
        </Link>
      </CardBody>
    </Card>
  )
}

const CardWithHeader = () => {
  return (
    <ComponentCard title="Card with Header">
      <CardTitle as={'h5'} className="mb-2">
        Special title treatment
      </CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Link to="" className="btn btn-sm btn-primary">
        Go somewhere
      </Link>
    </ComponentCard>
  )
}

const CardWithSubHeader = () => {
  return (
    <Card>
      <CardHeader className="d-block">
        <CardTitle as={'h5'} className="mb-1">
          Card with Sub Header
        </CardTitle>
        <h6 className="card-subtitle text-body-secondary">Card subtitle</h6>
      </CardHeader>
      <CardBody>
        <blockquote className="card-bodyquote mb-0">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer className="mb-0">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </CardBody>
    </Card>
  )
}

const FeaturedCardTitle = () => {
  return (
    <Card>
      <CardHeader className="bg-light-subtle">Featured Card Title</CardHeader>
      <CardBody>
        <Link to="" className="btn btn-sm btn-primary">
          Go somewhere
        </Link>
      </CardBody>
      <CardFooter className="border-top border-light text-muted">2 days ago</CardFooter>
    </Card>
  )
}

const CardWithActionTools = () => {
  return (
    <ComponentCard title="Card with Action Tools">
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Link to="" className="btn btn-sm btn-primary">
        Go somewhere
      </Link>
    </ComponentCard>
  )
}

const CardWithActionToolsBgColor = () => {
  return (
    <Card className="text-bg-primary border-0">
      <CardHeader>
        <CardTitle as={'h5'}>Card with Action Tools &amp; Background Colors</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Link to="" className="btn btn-sm btn-light">
          Go somewhere
        </Link>
      </CardBody>
    </Card>
  )
}

const CardWithColoredBorder = () => {
  return (
    <Card className="border-primary">
      <CardBody>
        <CardTitle as={'h5'} className="mb-2">
          Card with Colored Border
        </CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Link to="" className="btn btn-primary btn-sm">
          Button
        </Link>
      </CardBody>
    </Card>
  )
}

const CardWithSimpleBorder = () => {
  return (
    <Card className="border-primary border border-dashed">
      <CardBody>
        <CardTitle as={'h5'} className="mb-2">
          Card with Simple Border
        </CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Link to="" className="btn btn-primary btn-sm">
          Button
        </Link>
      </CardBody>
    </Card>
  )
}

const CardWithDoubleBorder = () => {
  return (
    <Card className="border-primary border-2">
      <CardBody>
        <CardTitle as={'h5'} className="mb-2 text-primary">
          Card with Double Border
        </CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Link to="" className="btn btn-primary btn-sm">
          Button
        </Link>
      </CardBody>
    </Card>
  )
}

const CardWithStartBorder = () => {
  return (
    <Card className="card-bordered">
      <CardBody>
        <CardTitle as={'h5'} className="mb-2">
          Card with Double Border
        </CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Link to="" className="btn btn-dark btn-sm">
          Button
        </Link>
      </CardBody>
    </Card>
  )
}

const CardWithColored = () => {
  return (
    <Card className="border-primary card-bordered">
      <CardBody>
        <CardTitle as={'h4'} className="mb-2 text-primary">
          Card with Colored Border
        </CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Link to="" className="btn btn-primary btn-sm">
          Button
        </Link>
      </CardBody>
    </Card>
  )
}

const CardColoredBorder = () => {
  return (
    <Card className="border-info card-bordered">
      <CardBody>
        <CardTitle as={'h5'} className="mb-2">
          Card with Colored Border
        </CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Link to="" className="btn btn-info btn-sm">
          Button
        </Link>
      </CardBody>
    </Card>
  )
}

const CardWithHorizontalMode = () => {
  return (
    <Card>
      <Row className="g-0 align-items-center">
        <Col md={4}>
          <img src={small1} className="img-fluid rounded-start" alt="..." />
        </Col>
        <Col md={8}>
          <CardBody>
            <CardTitle as={'h5'} className="mb-3">
              Card with Horizontal Mode
            </CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Col>
      </Row>
    </Card>
  )
}

const CardWithHorizontalMode2 = () => {
  return (
    <Card>
      <Row className="g-0 align-items-center">
        <Col md={8}>
          <CardBody>
            <CardTitle as={'h5'} className="mb-3">
              Card with Horizontal Mode
            </CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Col>
        <Col md={4}>
          <img src={small2} className="img-fluid rounded-start" alt="..." />
        </Col>
      </Row>
    </Card>
  )
}

const CardWithStretchedLink = () => {
  return (
    <Card>
      <img src={small3} className="card-img-top img-fluid" alt="..." width={373} height={233} />
      <CardBody>
        <CardTitle as={'h5'} className="mb-2">
          Card with stretched link
        </CardTitle>
        <Link to="#" className="btn btn-primary mt-2 stretched-link">
          Go somewhere
        </Link>
      </CardBody>
    </Card>
  )
}

const CardWithStretchedLink2 = () => {
  return (
    <Card>
      <img src={small4} className="card-img-top img-fluid" alt="..." width={373} height={233} />
      <CardBody>
        <CardTitle as={'h5'} className="mb-2">
          <Link to="#" className="text-primary stretched-link">
            Card with stretched link
          </Link>
        </CardTitle>
        <CardText>Some quick example text to build on the card up the bulk of the card's content.</CardText>
      </CardBody>
    </Card>
  )
}

const CardWithStretchedLink3 = () => {
  return (
    <Card>
      <img src={small5} className="card-img-top img-fluid" alt="..." width={373} height={233} />
      <CardBody>
        <CardTitle as={'h5'} className="mb-2">
          Card with stretched link
        </CardTitle>
        <Link to="#" className="btn btn-primary mt-2 stretched-link">
          Go somewhere
        </Link>
      </CardBody>
    </Card>
  )
}

const CardWithStretchedLink4 = () => {
  return (
    <Card>
      <img src={small6} className="card-img-top img-fluid" alt="..." width={373} height={233} />
      <CardBody>
        <CardTitle as={'h5'} className="mb-2">
          <Link to="#" className="text-primary stretched-link">
            Card with stretched link
          </Link>
        </CardTitle>
        <CardText>Some quick example text to build on the card up the bulk of the card's content.</CardText>
      </CardBody>
    </Card>
  )
}

const CardWithGroup = ({ item }: { item: CardGroupType }) => {
  return (
    <Card className="d-block">
      <img className="card-img-top img-fluid" height={324} width={519} src={item.image} alt="Card image cap" />
      <CardBody>
        <CardTitle className="mb-2" as={'h5'}>
          {item.title}
        </CardTitle>
        <CardText>{item.text}</CardText>
        <CardText>
          <small className="text-muted">{item.subtext}</small>
        </CardText>
      </CardBody>
    </Card>
  )
}

const CardTitle4 = ({ item }: { item: CardGroupType }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-2" as={'h5'}>
          {item.title}
        </CardTitle>
        <CardText>{item.text}</CardText>
      </CardBody>
      <CardFooter>
        <small className="text-body-secondary">{item.subtext}</small>
      </CardFooter>
    </Card>
  )
}

const NavigationWithCard = () => {
  return (
    <Card className="text-center">
      <CardHeader>
        <Nav className="nav-tabs card-header-tabs">
          <NavItem>
            <NavLink active>Active</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled>Disabled</NavLink>
          </NavItem>
        </Nav>
      </CardHeader>
      <CardBody>
        <CardTitle as={'h5'} className="mb-2">
          Special title treatment
        </CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Link to="" className="btn btn-primary">
          Go somewhere
        </Link>
      </CardBody>
    </Card>
  )
}

const NavigationWithCard2 = () => {
  return (
    <Card className="text-center">
      <CardHeader>
        <Nav className="nav-pills card-header-pills">
          <NavItem>
            <NavLink active>Active</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled>Disabled</NavLink>
          </NavItem>
        </Nav>
      </CardHeader>
      <CardBody>
        <CardTitle as={'h5'} className="mb-2">
          Special title treatment
        </CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Link to="" className="btn btn-primary">
          Go somewhere
        </Link>
      </CardBody>
    </Card>
  )
}

const page = () => {
  const CardGroupDetails: CardGroupType[] = [
    {
      id: 1,
      image: small8,
      title: 'Card title',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      subtext: 'Last updated 3 mins ago',
    },
    {
      id: 2,
      image: small9,
      title: 'Card title',
      text: 'This card has supporting text below as a natural lead-in to additional content.',
      subtext: 'Last updated 3 mins ago',
    },
    {
      id: 3,
      image: small10,
      title: 'Card title',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
      subtext: 'Last updated 3 mins ago',
    },
  ]
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Cards" subtitle="UI" />
        <Card>
          <CardHeader>
            <CardTitle as={'h4'}>Examples</CardTitle>
          </CardHeader>
          <CardBody>
            <p className="text-muted mb-2">
              Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.
            </p>
            <Link className="btn btn-link p-0 fw-semibold" to="https://react-bootstrap.netlify.app/docs/components/cards" target="_blank">
              Cards on React Bootstrap
              <TbChevronRight className="ms-1" />
            </Link>
          </CardBody>
        </Card>
        <Row>
          <Col sm={6} lg={3}>
            <Basic />
          </Col>
          <Col sm={6} lg={3}>
            <BasicCardWithTitle />
          </Col>
          <Col sm={6} lg={3}>
            <CardWithBackgroundColor />
          </Col>
          <Col sm={6} lg={3}>
            <CardWithBackgroundGradient />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <CardWithHeader />
          </Col>
          <Col md={4}>
            <CardWithSubHeader />
          </Col>
          <Col md={4}>
            <FeaturedCardTitle />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h4 className="mb-4 mt-3">Advanced Card</h4>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <CardWithActionTools />
          </Col>
          <Col md={4}>
            <CardWithActionToolsBgColor />
          </Col>
          <Col md={4}>
            <CardWithActionTools />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h4 className="mb-4 mt-3">Bordered Card</h4>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <CardWithColoredBorder />
          </Col>
          <Col md={4}>
            <CardWithSimpleBorder />
          </Col>
          <Col md={4}>
            <CardWithDoubleBorder />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <CardWithStartBorder />
          </Col>
          <Col md={4}>
            <CardWithColored />
          </Col>
          <Col md={4}>
            <CardColoredBorder />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h4 className="mb-4 mt-3">Horizontal Card</h4>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <CardWithHorizontalMode />
          </Col>
          <Col lg={6}>
            <CardWithHorizontalMode2 />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h4 className="mb-4 mt-3">Stretched Link</h4>
          </Col>
        </Row>
        <Row>
          <Col sm={6} lg={3}>
            <CardWithStretchedLink />
          </Col>
          <Col sm={6} lg={3}>
            <CardWithStretchedLink2 />
          </Col>
          <Col sm={6} lg={3}>
            <CardWithStretchedLink3 />
          </Col>
          <Col sm={6} lg={3}>
            <CardWithStretchedLink4 />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h4 className="mb-4 mt-3">Card Group</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="card-group mb-3">
              {CardGroupDetails.map((item, idx) => (
                <CardWithGroup item={item} key={idx} />
              ))}
            </div>
          </Col>
        </Row>
        <div className="card-group">
          {CardGroupDetails.map((item, idx) => (
            <CardTitle4 item={item} key={idx} />
          ))}
        </div>
        <Row>
          <Col xs={12}>
            <h4 className="my-4">Navigation with Card</h4>
          </Col>
        </Row>
        <Row>
          <Col xl={6}>
            <NavigationWithCard />
          </Col>
          <Col xl={6}>
            <NavigationWithCard2 />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default page
