import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import IdleTracker from './components/IdleTracker'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Idle Timer" subtitle="Miscellaneous" />

                <Row className="justify-content-center">
                    <Col xxl={10}>
                        <IdleTracker />
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Page
