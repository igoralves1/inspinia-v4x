import { Container } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import NewEmail from './components/NewEmail'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Compose Email" subtitle="Apps" />
                <div className="outlook-box email-app">
                    <NewEmail />
                </div>
            </Container>
        </MainLayout>
    )
}

export default Page
