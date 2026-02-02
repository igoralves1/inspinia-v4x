import { Container } from 'react-bootstrap'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import ProductsPage from '@/views/ecommerce/products-grid/components/ProductsPage.tsx'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Products Grid" subtitle="Ecommerce" />

      <ProductsPage />
    </Container>
  )
}

export default Page
