import { Container } from 'react-bootstrap'

import ProductsPage from '@/app/(admin)/(apps)/(ecommerce)/products-grid/components/ProductsPage'
import PageBreadcrumb from '@/components/PageBreadcrumb'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Products Grid" subtitle="Ecommerce" />

      <ProductsPage />
    </Container>
  )
}

export default Page
