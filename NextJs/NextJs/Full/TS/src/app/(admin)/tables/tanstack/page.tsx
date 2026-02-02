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

const Page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Custom Tables" subtitle="Tables" />

        <TableWithSearch />

        <TableWithCheckboxSelect />

        <TableWithDeleteButtons />

        <TableWithPagination />

        <TableWithPaginationInfo />

        <TableWithFilters />

        <TableWithRangeFilters />

        <TableWithSort />
      </Container>
    </>
  )
}

export default Page
