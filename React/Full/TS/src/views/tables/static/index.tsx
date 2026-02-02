import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import BasicTable from '@/views/tables/static/components/BasicTable.tsx'
import CustomTable from '@/views/tables/static/components/CustomTable.tsx'
import TableVariants from '@/views/tables/static/components/TableVariants.tsx'
import StripedRowTable from '@/views/tables/static/components/StripedRowTable.tsx'
import StripedColumnTable from '@/views/tables/static/components/StripedColumnTable.tsx'
import HoverableRowsTable from '@/views/tables/static/components/HoverableRowsTable.tsx'
import ActiveRowTable from '@/views/tables/static/components/ActiveRowTable.tsx'
import BorderedTable from '@/views/tables/static/components/BorderedTable.tsx'
import BorderlessTable from '@/views/tables/static/components/BorderlessTable.tsx'
import SmallTable from '@/views/tables/static/components/SmallTable.tsx'
import TableGroupDividers from '@/views/tables/static/components/TableGroupDividers.tsx'
import NestedTable from '@/views/tables/static/components/NestedTable.tsx'
import TableHead from '@/views/tables/static/components/TableHead.tsx'
import TableCaption from '@/views/tables/static/components/TableCaption.tsx'

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
