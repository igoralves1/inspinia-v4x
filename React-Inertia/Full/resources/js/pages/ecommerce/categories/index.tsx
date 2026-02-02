import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import CategoriesTable from '@/pages/ecommerce/categories/components/CategoriesTable'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Categories" subtitle="Ecommerce" />

                <Row className="row">
                    <Col xs={12}>
                        <CategoriesTable />
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Page
