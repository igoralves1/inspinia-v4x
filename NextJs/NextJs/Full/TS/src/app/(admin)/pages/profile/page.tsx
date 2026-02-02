import { Col, Container, Row } from 'react-bootstrap'

import About from '@/app/(admin)/pages/profile/components/About'
import Blogs from '@/app/(admin)/pages/profile/components/Blogs'
import PersonalInformation from '@/app/(admin)/pages/profile/components/PersonalInformation'
import ProfileCover from '@/app/(admin)/pages/profile/components/ProfileCover'
import Skills from '@/app/(admin)/pages/profile/components/Skills'
import SocialFeed from '@/app/(admin)/pages/profile/components/SocialFeed'
import StatCards from '@/app/(admin)/pages/profile/components/StatCards'
import Tasks from '@/app/(admin)/pages/profile/components/Tasks'

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
