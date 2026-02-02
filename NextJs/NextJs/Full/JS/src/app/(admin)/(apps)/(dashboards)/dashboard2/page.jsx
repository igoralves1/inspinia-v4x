import { Container, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import EcomStats from './components/EcomStats';
import OrdersStatics from './components/OrdersStatics';
import ProductInventory from './components/ProductInventory';
import RecentOrders from './components/RecentOrders';
import TransactionsWorldwide from './components/TransactionsWorldwide';
export const metadata = {
  title: 'Dashboard 2'
};
const Page = () => {
  return <Container fluid>
      <PageBreadcrumb title="Dashboard 2" />

      <EcomStats />

      <OrdersStatics />

      <Row>
        <ProductInventory />

        <RecentOrders />
      </Row>

      <TransactionsWorldwide />
    </Container>;
};
export default Page;