'use client';

import ChatCard from '@/app/(admin)/widgets/components/ChatCard';
import CommentCard from '@/app/(admin)/widgets/components/CommentCard';
import FileManageCard from '@/app/(admin)/widgets/components/FileMangeCard';
import ProfileCard from '@/app/(admin)/widgets/components/ProfileCard';
import SalesPerformanceOverview from '@/app/(admin)/widgets/components/SalesPerformanceOverview';
import TodaySchedule from '@/app/(admin)/widgets/components/TodaySchedule';
import TopCountries from '@/app/(admin)/widgets/components/TopCountries';
import TrafficSources from '@/app/(admin)/widgets/components/TrafficSources';
import Widget1 from '@/app/(admin)/widgets/components/Widget1';
import Widget3 from '@/app/(admin)/widgets/components/Widget3';
import Widget4 from '@/app/(admin)/widgets/components/Widget4';
import Widget5 from '@/app/(admin)/widgets/components/Widget5';
import Widget6 from '@/app/(admin)/widgets/components/Widget6';
import Widget7 from '@/app/(admin)/widgets/components/Widget7';
import { widget1Data, widget3Data, widget4Data, widget5Data, widget6Data, widget7Data } from '@/app/(admin)/widgets/data';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { TbMail, TbPhone } from 'react-icons/tb';
const Page = () => {
  return <Container fluid>
      <PageBreadcrumb title="Widgets" />
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1 g-3 align-items-center">
                {widget1Data.map((widget, idx) => <Col key={idx}>
                    <Widget1 widget={widget} />
                  </Col>)}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <SalesPerformanceOverview />
        </Col>
        <Col xxl={4} lg={6}>
          <TrafficSources />
        </Col>

        <Col xxl={4} lg={6}>
          <TopCountries />
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <ProfileCard />

          <CommentCard />
        </Col>

        <Col xl={4}>
          <ChatCard />

          <Row>
            <Col xl={6}>
              <Card className="text-bg-purple">
                <CardBody>
                  <div className="d-flex align-items-center mb-3 gap-2">
                    <div className="avatar-md">
                      <span className="avatar-title bg-light bg-opacity-20 text-white rounded-circle fs-xl">
                        <TbPhone />
                      </span>
                    </div>
                    <p className="mb-0 fw-semibold">PHONE</p>
                  </div>
                  <h5 className="mb-1 text-white text-opacity-75">+1 800 123 4567</h5>
                  <h5 className="mb-0 text-white text-opacity-75">+1 800 765 4321</h5>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card className="text-bg-success">
                <CardBody>
                  <div className="d-flex align-items-center mb-3 gap-2">
                    <div className="avatar-md">
                      <span className="avatar-title bg-light bg-opacity-20 text-white rounded-circle fs-xl">
                        <TbMail />
                      </span>
                    </div>
                    <p className="mb-0 fw-semibold">EMAIL</p>
                  </div>
                  <h5 className="mb-1 text-white text-opacity-75">support@example.com</h5>
                  <h5 className="mb-0 text-white text-opacity-75">sales@example.com</h5>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col xl={4}>
          <FileManageCard />

          <TodaySchedule />
        </Col>
      </Row>

      <Row className="row-cols-xxl-5 row-cols-md-3 row-cols-1 align-items-center">
        {widget3Data.map((item, idx) => <Col key={idx} className={idx != widget3Data.length - 1 ? 'col-lg col-md-auto' : ''}>
            <Widget3 item={item} />
          </Col>)}
      </Row>

      <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1">
        {widget4Data.map((item, idx) => <Col key={idx}>
            <Widget4 item={item} />
          </Col>)}
      </Row>

      <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1">
        {widget5Data.map((item, idx) => <Col key={idx}>
            <Widget5 item={item} />
          </Col>)}
      </Row>

      <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1">
        {widget6Data.map((item, idx) => <Col key={idx}>
            <Widget6 item={item} />
          </Col>)}
      </Row>

      <Row className="row-cols-xxl-6 row-cols-md-3 row-cols-2">
        {widget7Data.map((item, idx) => <Col key={idx}>
            <Widget7 item={item} />
          </Col>)}
      </Row>
    </Container>;
};
export default Page;