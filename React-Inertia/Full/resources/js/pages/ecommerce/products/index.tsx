import { Container } from 'react-bootstrap'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import ProductStats from './components/ProductStats'
import ProductsListing from './components/ProductsListing'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>

            <Container fluid>
                <PageBreadcrumb title="Products" subtitle="Ecommerce" />

                <ProductStats />

                <ProductsListing />
            </Container>
        </MainLayout>
    )
}

export default Page
