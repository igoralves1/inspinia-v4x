import MemberRoleCard from '@/app/(admin)/(apps)/users/roles/components/MemberRoleCard'
import UserTable from '@/app/(admin)/(apps)/users/roles/components/UserTable'
import { memberRoles } from '@/app/(admin)/(apps)/users/roles/data'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import { TbPlus } from 'react-icons/tb'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Roles" subtitle="Users" />
      <Row className="justify-content-center">
        <Col xxl={10}>
          <div className="d-flex align-items-sm-center flex-sm-row flex-column mb-3">
            <div className="flex-grow-1">
              <h4 className="fs-xl mb-1">Manage Roles</h4>
              <p className="text-muted mb-0">Manage roles for smoother operations and secure access.</p>
            </div>
            <div className="text-end">
              <a href="javascript: void(0);" className="btn btn-success">
                <TbPlus className="me-1" /> Add New Role
              </a>
            </div>
          </div>
          <Row>
            {memberRoles.map((member, idx) => (
              <Col md={6} lg={3} key={idx}>
                <MemberRoleCard member={member} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col xs={12}>
              <UserTable />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
