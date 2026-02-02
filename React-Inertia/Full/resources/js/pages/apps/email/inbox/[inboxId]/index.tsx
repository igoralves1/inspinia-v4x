import { Container } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import EmailDetails from './components/EmailDetails'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Email" subtitle="Apps" />
                <div className="outlook-box email-app">
                    <EmailDetails />
                </div>
            </Container>
        </MainLayout>
    )
}

export default Page
