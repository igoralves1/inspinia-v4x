import { Container } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import TableWithCheckboxSelect from './components/TableWithCheckboxSelect'
import TableWithDeleteButtons from './components/TableWithDeleteButtons'
import TableWithFilters from './components/TableWithFilters'
import TableWithPagination from './components/TableWithPagination'
import TableWithPaginationInfo from './components/TableWithPaginationInfo'
import TableWithRangeFilters from './components/TableWithRangeFilters'
import TableWithSearch from './components/TableWithSearch'
import TableWithSort from './components/TableWithSort'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
  return (
    <MainLayout>
      <Container fluid>
        <PageBreadcrumb title="Tanstack Tables" subtitle="Tables" />

        <TableWithSearch />

        <TableWithCheckboxSelect />

        <TableWithDeleteButtons />

        <TableWithPagination />

        <TableWithPaginationInfo />

        <TableWithFilters />

        <TableWithRangeFilters />

        <TableWithSort />
      </Container>
    </MainLayout>
  )
}

export default Page
