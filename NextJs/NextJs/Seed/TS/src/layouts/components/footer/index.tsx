import { appName, author, currentYear } from '@/helpers'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md={6} className="text-center text-md-start">
            © 2014 - {currentYear} {appName} By <span className="fw-semibold">{author}</span>
          </Col>
          <Col md={6}>
            <div className="text-md-end d-none d-md-block">
              10GB of <span className="fw-bold">250GB</span> Free.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
