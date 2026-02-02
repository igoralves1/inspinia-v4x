import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import ReactSelect from '@/pages/forms/select/components/ReactSelect'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Select" subtitle="Forms" />

                <Row className="justify-content-center">
                    <Col lg={8}>
                        <ReactSelect />
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Page
