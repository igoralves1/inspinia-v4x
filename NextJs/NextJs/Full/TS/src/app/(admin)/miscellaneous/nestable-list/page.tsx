'use client'
import { Col, Container, Row } from 'react-bootstrap'

import PageBreadcrumb from '@/components/PageBreadcrumb'
import NestedListWithHandle from './components/NestedListWithHandle'
import NestedSortableList from './components/NestedSortableList'
import SortableWithIcons from './components/SortableWithIcons'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Nestable List" subtitle="Miscellaneous" />

      <Row>
        <Col lg={6}>
          <NestedSortableList />
        </Col>

        <Col lg={6}>
          <NestedListWithHandle />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <SortableWithIcons />
        </Col>
      </Row>
    </Container>
  )
}

export default Page
