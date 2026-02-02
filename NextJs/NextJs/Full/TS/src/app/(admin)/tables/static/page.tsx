import ActiveRowTable from '@/app/(admin)/tables/static/components/ActiveRowTable'
import BasicTable from '@/app/(admin)/tables/static/components/BasicTable'
import BorderedTable from '@/app/(admin)/tables/static/components/BorderedTable'
import BorderlessTable from '@/app/(admin)/tables/static/components/BorderlessTable'
import CustomTable from '@/app/(admin)/tables/static/components/CustomTable'
import HoverableRowsTable from '@/app/(admin)/tables/static/components/HoverableRowsTable'
import NestedTable from '@/app/(admin)/tables/static/components/NestedTable'
import SmallTable from '@/app/(admin)/tables/static/components/SmallTable'
import StripedColumnTable from '@/app/(admin)/tables/static/components/StripedColumnTable'
import StripedRowTable from '@/app/(admin)/tables/static/components/StripedRowTable'
import TableCaption from '@/app/(admin)/tables/static/components/TableCaption'
import TableGroupDividers from '@/app/(admin)/tables/static/components/TableGroupDividers'
import TableHead from '@/app/(admin)/tables/static/components/TableHead'
import TableVariants from '@/app/(admin)/tables/static/components/TableVariants'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Static Tables" subtitle="Tables" />
      <Row className="justify-content-center">
        <Col xxl={9}>
          <BasicTable />

          <CustomTable />

          <TableVariants />

          <StripedRowTable />

          <StripedColumnTable />

          <HoverableRowsTable />

          <ActiveRowTable />

          <BorderedTable />

          <BorderlessTable />

          <SmallTable />

          <TableGroupDividers />

          <NestedTable />

          <TableHead />

          <TableCaption />
        </Col>
      </Row>
    </Container>
  )
}

export default Page
