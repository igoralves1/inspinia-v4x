import { Badge, Card, CardBody, CardHeader, ListGroup, ListGroupItem } from 'react-bootstrap'
import { TbSend2 } from 'react-icons/tb'
import { Link } from 'react-router'

import messageMail from '@/assets/images/message-mail.png'
import { discussionMessages } from '../data'

const Discussions = () => {
  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">
          Discussions
          <Badge bg="primary" className="bg-primary-subtle text-primary ms-2">
            Pro+
          </Badge>
        </h5>
        <Link to=""  className="badge text-bg-light fs-xs fw-semibold p-1">
          Mark all as read
        </Link>
      </CardHeader>
      <CardBody className="bg-light-subtle border-bottom border-dashed">
        <div className="d-flex gap-2">
          <div className="me-2 flex-shrink-0">
            <img src={messageMail} height={36} alt="message img" />
          </div>
          <div className="flex-grow-1">
            <h4 className="fs-sm mb-1">New messages</h4>
            <p className="fs-xs mb-0 text-body-secondary">
              You have <span className="text-body fw-semibold">22</span> new messages and
              <span className="text-body fw-semibold"> 16</span> waiting in draft folder.
            </p>
          </div>
        </div>
      </CardBody>
      <CardBody className="pt-1">
        <ListGroup variant="flush" className="mb-3">
          {discussionMessages.map((msg) => (
            <ListGroupItem key={msg.id} className="px-0 border-light">
              <div className="d-flex gap-2">
                <div className="me-2 flex-shrink-0">
                  {msg.hasAvatar ? (
                    <img src={msg.userImage} className="avatar-md rounded-circle" alt={msg.userName} />
                  ) : (
                    <div className="avatar avatar-md">
                      <span className={`avatar-title bg-${msg.userInitialsColor}-subtle text-${msg.userInitialsColor} rounded-circle fw-bold`}>
                        {msg.userInitials}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-grow-1 text-muted">
                  <h6 className="text-body mb-1 fs-base d-flex justify-content-between">
                    {msg.userName}
                    <small className="fs-xs text-body-secondary">{msg.timeAgo}</small>
                  </h6>
                  <p className="mb-1">{msg.message}</p>
                  <Link to="/chat" className="badge badge-soft-primary p-1">
                    Reply
                  </Link>
                </div>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
        <div className="text-center mt-3">
          <Link to="/chat" className="link-reset text-decoration-underline fw-semibold link-offset-3">
            Go to Chat Room <TbSend2 />
          </Link>
        </div>
      </CardBody>
    </Card>
  )
}

export default Discussions
