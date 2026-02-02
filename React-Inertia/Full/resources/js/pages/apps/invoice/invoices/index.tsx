import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import Invoices from './components/Invoices'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Invoice List" subtitle="Invoices" />

                <Row>
                    <Col cols={12}>
                        <Invoices />
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Page
