import { Container } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import Inboxes from './components/Inboxes'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Inbox" subtitle="Email" />
                <div className="outlook-box email-app">
                    <Inboxes />
                </div>
            </Container>
        </MainLayout>
    )
}

export default Page
