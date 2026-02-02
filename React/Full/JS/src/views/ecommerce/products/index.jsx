import { Container } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import ProductStats from '@/views/ecommerce/products/components/ProductStats';
import ProductsListing from '@/views/ecommerce/products/components/ProductsListing';
const Page = () => {
  return <Container fluid>
      <PageBreadcrumb title="Products" subtitle="Ecommerce" />

      <ProductStats />

      <ProductsListing />
    </Container>;
};
export default Page;