import { Container } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import EmailDetails from './components/EmailDetails'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Email" subtitle="Apps" />
      <div className="outlook-box email-app">
        <EmailDetails />
      </div>
    </Container>
  )
}

export default Page
