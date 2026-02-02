import { Col, Container, Row } from 'react-bootstrap'
import ProfileCover from '@/views/pages/profile/components/ProfileCover'
import PersonalInformation from '@/views/pages/profile/components/PersonalInformation.tsx'
import Skills from '@/views/pages/profile/components/Skills.tsx'
import SocialFeed from '@/views/pages/profile/components/SocialFeed.tsx'
import StatCards from '@/views/pages/profile/components/StatCards.tsx'
import About from '@/views/pages/profile/components/About.tsx'
import Tasks from '@/views/pages/profile/components/Tasks.tsx'
import Blogs from '@/views/pages/profile/components/Blogs.tsx'

const Page = () => {
  return (
    <Container fluid>
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
    </Container>
  )
}

export default Page
