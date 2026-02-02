import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import AnalyticsOverview from './components/AnalyticsOverview'
import ExtraSideData from './components/ExtraSideData'
import SessionsDevice from './components/SessionsDevice'
import TopCampaignPerformance from './components/TopCampaignPerformance'
import TopCountries from './components/TopCountries'
import TrafficSources from './components/TrafficSources'

const Page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Dashboard 3" />
        <Row>
          <Col md={12}>
            <AnalyticsOverview />
            <Row>
              <SessionsDevice />

              <TrafficSources />

              <TopCountries />
            </Row>
            <Row>
              <TopCampaignPerformance />
            </Row>
          </Col>
        </Row>
      </Container>

      <ExtraSideData />
    </>
  )
}

export default Page
