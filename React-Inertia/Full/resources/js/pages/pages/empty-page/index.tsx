import PageBreadcrumb from '@/components/PageBreadcrumb'
import MainLayout from '@/layouts/MainLayout'
import { Container } from 'react-bootstrap'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Starter" subtitle="Pages" />
            </Container>
        </MainLayout>
    )
}

export default Page
