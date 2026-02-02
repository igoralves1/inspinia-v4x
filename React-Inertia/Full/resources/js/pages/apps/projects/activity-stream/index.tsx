import { Col, Container, Row } from 'react-bootstrap'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import BasicActivity from '@/pages/apps/projects/activity-stream/components/BasicActivity'
import ExpandedActivity from '@/pages/apps/projects/activity-stream/components/ExpandedActivity'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Activity Stream" subtitle="Projects" />

                <Row>
                    <Col xxl={6}>
                        <BasicActivity />
                    </Col>

                    <Col xxl={6}>
                        <ExpandedActivity />
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Page
