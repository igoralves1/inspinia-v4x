import { Col, Container, Row } from 'react-bootstrap'

import Discussions from './components/Discussions'
import ProjectPerformance from './components/ProjectPerformance'
import ProjectUpdates from './components/ProjectUpdates'
import QuarterlyReports from './components/QuarterlyReports'
import StatCards from './components/StatCards'
import WelcomeRevenueProgress from './components/WelcomeRevenueProgress'
import PageMetaData from '@/components/PageMetaData'

const Page = () => {
  return (
    <>
      <PageMetaData title="Dashboard" />
      <Container fluid>
        <Row className="mt-3">
          <Col xs={12}>
            <WelcomeRevenueProgress />
          </Col>
        </Row>

        <StatCards />

        <Row>
          <Col xxl={4}>
            <QuarterlyReports />

            <ProjectPerformance />
          </Col>

          <Col xxl={4} xl={6}>
            <ProjectUpdates />
          </Col>

          <Col xxl={4} xl={6}>
            <Discussions />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
