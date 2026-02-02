import { Container } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import NewEmail from './components/NewEmail'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Email" subtitle="Apps" />
      <div className="outlook-box email-app">
        <NewEmail />
      </div>
    </Container>
  )
}

export default Page
