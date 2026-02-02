import { Container } from 'react-bootstrap'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import ProductsPage from '@/pages/ecommerce/products-grid/components/ProductsPage'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Products Grid" subtitle="Ecommerce" />

                <ProductsPage />
            </Container>
        </MainLayout>
    )
}

export default Page
