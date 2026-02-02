import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import ProjectsList from './components/ProjectsList'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Projects List" subtitle="Apps" />

                <Row>
                    <Col xs={12}>
                        <ProjectsList />
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Page
