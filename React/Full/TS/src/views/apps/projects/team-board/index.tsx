import { Col, Container, Row } from 'react-bootstrap'
import { TbPlus } from 'react-icons/tb'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { teams } from '@/views/apps/projects/team-board/data.ts'
import TeamCard from '@/views/apps/projects/team-board/components/TeamCard.tsx'
import { Link } from 'react-router'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Team Board" subtitle="Projects" />
      <Row className="justify-content-center">
        <Col xxl={10}>
          <div className="d-flex align-items-sm-center flex-sm-row flex-column mb-3">
            <div className="flex-grow-1">
              <h4 className="fs-xl mb-1">Manage Teams</h4>
              <p className="text-muted mb-0">Assign roles to streamline teamwork and secure access.</p>
            </div>

            <div className="text-end">
              <Link to="" className="btn btn-success">
                <TbPlus className="me-1" /> Add New Team
              </Link>
            </div>
          </div>

          <Row>
            {teams.map((team, idx) => (
              <Col md={6} lg={4} key={idx}>
                <TeamCard team={team} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
