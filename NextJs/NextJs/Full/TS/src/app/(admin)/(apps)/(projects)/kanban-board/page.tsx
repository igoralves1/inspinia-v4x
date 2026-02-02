import { Container } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import KanbanPage from './components/KanbanPage'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Kanban Board" subtitle="Projects" />

      <KanbanPage />
    </Container>
  )
}

export default Page
