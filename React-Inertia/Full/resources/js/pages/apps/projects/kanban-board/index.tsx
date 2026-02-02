import { Container } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import KanbanPage from './components/KanbanPage'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Kanban Board" subtitle="Projects" />

                <KanbanPage />
            </Container>
        </MainLayout>
    )
}

export default Page
