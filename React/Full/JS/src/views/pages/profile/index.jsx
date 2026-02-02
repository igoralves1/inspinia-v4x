import { Col, Container, Row } from 'react-bootstrap';
import ProfileCover from '@/views/pages/profile/components/ProfileCover';
import PersonalInformation from '@/views/pages/profile/components/PersonalInformation';
import Skills from '@/views/pages/profile/components/Skills';
import SocialFeed from '@/views/pages/profile/components/SocialFeed';
import StatCards from '@/views/pages/profile/components/StatCards';
import About from '@/views/pages/profile/components/About';
import Tasks from '@/views/pages/profile/components/Tasks';
import Blogs from '@/views/pages/profile/components/Blogs';
const Page = () => {
  return <Container fluid>
      <Row>
        <Col cols={12}>
          <ProfileCover />
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <PersonalInformation />

          <Skills />

          <SocialFeed />
        </Col>

        <Col xl={8}>
          <StatCards />

          <About />

          <Tasks />

          <Blogs />
        </Col>
      </Row>
    </Container>;
};
export default Page;