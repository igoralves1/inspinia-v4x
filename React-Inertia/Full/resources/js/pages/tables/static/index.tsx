import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import BasicTable from '@/pages/tables/static/components/BasicTable'
import CustomTable from '@/pages/tables/static/components/CustomTable'
import TableVariants from '@/pages/tables/static/components/TableVariants'
import StripedRowTable from '@/pages/tables/static/components/StripedRowTable'
import StripedColumnTable from '@/pages/tables/static/components/StripedColumnTable'
import HoverableRowsTable from '@/pages/tables/static/components/HoverableRowsTable'
import ActiveRowTable from '@/pages/tables/static/components/ActiveRowTable'
import BorderedTable from '@/pages/tables/static/components/BorderedTable'
import BorderlessTable from '@/pages/tables/static/components/BorderlessTable'
import SmallTable from '@/pages/tables/static/components/SmallTable'
import TableGroupDividers from '@/pages/tables/static/components/TableGroupDividers'
import NestedTable from '@/pages/tables/static/components/NestedTable'
import TableHead from '@/pages/tables/static/components/TableHead'
import TableCaption from '@/pages/tables/static/components/TableCaption'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
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
        </MainLayout>
    )
}

export default Page
