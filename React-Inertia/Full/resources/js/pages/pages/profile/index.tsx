import { Col, Container, Row } from 'react-bootstrap'
import ProfileCover from '@/pages/pages/profile/components/ProfileCover'
import PersonalInformation from '@/pages/pages/profile/components/PersonalInformation'
import Skills from '@/pages/pages/profile/components/Skills'
import SocialFeed from '@/pages/pages/profile/components/SocialFeed'
import StatCards from '@/pages/pages/profile/components/StatCards'
import About from '@/pages/pages/profile/components/About'
import Tasks from '@/pages/pages/profile/components/Tasks'
import Blogs from '@/pages/pages/profile/components/Blogs'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
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
        </MainLayout>
    )
}

export default Page
