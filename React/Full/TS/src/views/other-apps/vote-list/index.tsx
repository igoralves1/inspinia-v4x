import PageBreadcrumb from '@/components/PageBreadcrumb'
import { toPascalCase } from '@/helpers/casing'
import clsx from 'clsx'
import { Button, Card, CardBody, CardHeader, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { useState } from 'react'
import { LuCircleCheck, LuListFilter, LuSearch } from 'react-icons/lu'
import { TbCalendar, TbChecks, TbChevronDown, TbChevronUp, TbClock, TbLock, TbMessageCircle, TbTag, TbUsers } from 'react-icons/tb'
import { voteList, type VoteListItemType } from '@/views/other-apps/vote-list/data.ts'

const VoteListItem = ({ item }: { item: VoteListItemType }) => {
  const [userVote, setUserVote] = useState<VoteListItemType['userVote']>(item.userVote ?? null)
  const [votes, setVotes] = useState<VoteListItemType['votes']>(item.votes ?? 0)

  const incrementVotes = () => {
    if (userVote === null) {
      setVotes(votes + 1)
    }
  }

  return (
    <div className="d-flex gap-4 align-items-center">
      <div>
        <div className="vstack gap-1 text-center">
          <div>
            <button
              className={`btn p-0 ${userVote === 'up' ? 'text-danger' : 'btn-link'}`}
              disabled={!item.canVote}
              onClick={() => {
                setUserVote('up')
                incrementVotes()
              }}>
              <TbChevronUp className="fs-xxl" />
            </button>
          </div>
          <h5 className="fw-bold m-0 fs-lg">{votes}</h5>
          <div>
            <button
              className={`btn p-0 ${userVote === 'down' ? 'text-danger' : 'btn-link'}`}
              disabled={!item.canVote}
              onClick={() => {
                setUserVote('down')
                incrementVotes()
              }}>
              <TbChevronDown className="fs-xxl" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-grow-1">
        <h4 className="fs-md mb-1">
          <a href="#!" className="link-reset">
            {item.title}
          </a>
        </h4>

        <p className="text-muted mb-2">{item.description}</p>

        <p className="d-flex flex-wrap gap-3 text-muted mb-1 align-items-center fs-base">
          <span className="d-flex align-items-center gap-1">
            <img src={item.image} height={24} width={24} alt="" className="img-fluid avatar-xs rounded-circle" />
            <a href="#" className="link-reset fw-semibold">
              {item.author}
            </a>
          </span>
          <span className="d-flex align-items-center gap-1">
            <TbCalendar />
            <span>Posted on: {item.postedOn}</span>
          </span>
          <span className="d-flex align-items-center gap-1">
            <TbTag /> <span className="badge bg-light text-primary">{item.category}</span>
          </span>
          <span className="d-flex align-items-center gap-1">
            <TbMessageCircle />
            <a href="#!" className="link-reset">
              Comments: {item.comments}
            </a>
          </span>
          <span className="d-flex align-items-center gap-1">
            <TbClock />
            <span>Ends in: {item.endsIn}</span>
          </span>
          <span className="d-flex align-items-center gap-1">
            <TbUsers />
            <span>Votes: {votes}</span>
          </span>
          <span className="d-flex align-items-center gap-1">
            <TbLock />
            <span className={`badge ${item.status === 'open' ? 'text-bg-primary' : item.status === 'closed' ? 'text-bg-danger' : 'text-bg-info'}`}>
              {toPascalCase(item.status)}
            </span>
          </span>
        </p>
      </div>

      {userVote && (
        <OverlayTrigger placement="top" overlay={<Tooltip>Thank you for voting</Tooltip>}>
          <TbChecks className="ms-auto  fs-36 text-success text-opacity-25" />
        </OverlayTrigger>
      )}
    </div>
  )
}

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Vote List" subtitle="Apps" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <Card>
            <CardHeader className="border-light justify-content-between">
              <div className="app-search">
                <input type="text" className="form-control" placeholder="Search topics..." />
                <LuSearch className="app-search-icon text-muted" />
              </div>

              <div className="d-flex align-items-center gap-2">
                <span className="me-2 fw-semibold">Filter By:</span>

                <div className="app-search">
                  <select className="form-select form-control my-1 my-md-0">
                    <option>Sort By</option>
                    <option value="North America">Latest</option>
                    <option value="Europe">Popular</option>
                    <option value="Asia">Low Votes</option>
                    <option value="Africa">High Votes</option>
                  </select>
                  <LuListFilter className="app-search-icon text-muted" />
                </div>

                <div className="app-search">
                  <select className="form-select form-control my-1 my-md-0">
                    <option>Vote Status</option>
                    <option value="Voted">Voted</option>
                    <option value="Not Voted">Not Voted</option>
                    <option value="Pending">Pending</option>
                    <option value="Disqualified">Disqualified</option>
                  </select>
                  <LuCircleCheck className="app-search-icon text-muted" />
                </div>

                <Button variant="success" type="submit">
                  Add New Topics
                </Button>
              </div>
            </CardHeader>

            <CardBody className="p-0">
              {voteList.map((item, idx) => (
                <div key={idx} className={clsx('px-4 py-3', idx !== voteList.length - 1 && 'border-bottom border-dashed')}>
                  <VoteListItem item={item} />
                </div>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
