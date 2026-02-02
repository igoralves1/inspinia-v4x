import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ProgressBar, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { TbClock, TbDotsVertical, TbEdit, TbEye, TbTrash } from 'react-icons/tb'
import type { TeamType } from '@/views/apps/projects/team-board/data.ts'

const TeamCard = ({ team }: { team: TeamType }) => {
  return (
    <Card className="card-h-100">
      <CardHeader>
        <CardTitle as="h4" className="d-inline">
          IT-{team.id.toString().padStart(2, '0')} - {team.name}
          {team.isNew && <span className="ms-2 badge badge-label text-bg-primary">New</span>}
        </CardTitle>
        <Dropdown className="ms-auto">
          <DropdownToggle as={'a'} className="text-muted fs-xl drop-arrow-none" style={{ cursor: 'pointer' }}>
            <TbDotsVertical />
          </DropdownToggle>
          <DropdownMenu align="end">
            <DropdownItem>
              <TbEye className="me-2" />
              View
            </DropdownItem>
            <DropdownItem>
              <TbEdit className="me-2" />
              Edit
            </DropdownItem>
            <DropdownItem className="text-danger">
              <TbTrash className="me-2" />
              Remove
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
      <CardBody className="d-flex flex-column justify-content-between">
        <p className="mb-2 text-muted">Total {team.members.length} members</p>
        <div className="avatar-group avatar-group-sm mb-3">
          {team.members.map((member, i) => (
            <div className="avatar" key={i}>
              <img src={member} alt="" className="rounded-circle avatar-sm" />
            </div>
          ))}
        </div>

        <div className="mb-3">
          <h5 className="fs-base mb-2">About Team:</h5>
          <p className="text-muted">{team.description}</p>
        </div>

        <Row>
          {team.stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <Col xl={4} md={6} key={idx}>
                <div className="d-flex gap-2 mb-3 mb-xl-0">
                  <div className="avatar-sm flex-shrink-0">
                    <span className="avatar-title text-bg-light rounded-circle">
                      <Icon className="fs-lg text-primary" />
                    </span>
                  </div>
                  <div>
                    <h6 className="mb-1 text-muted text-uppercase">{stat.name}</h6>
                    <p className="fw-medium mb-0">
                      {stat.count?.prefix}
                      {stat.count?.value}
                      {stat.count?.suffix}
                    </p>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>

        <div className="my-3">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <p className="mb-0 text-muted fw-semibold fs-xxs">{team.progressTitle}</p>
            <p className="fw-semibold mb-0">{team.progress}%</p>
          </div>
          <ProgressBar now={team.progress} variant="primary" className="progress-md" />
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <span className="text-muted fs-xs">
            <TbClock className="me-1" />
            Updated {team.lastUpdatedTime}
          </span>
          <Button size="sm" className="rounded-pill" variant="primary">
            Details
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}
export default TeamCard
