import { type MessageType } from '@/views/other-apps/outlook-view/data'
import SimpleBar from 'simplebar-react'
import { useState } from 'react'
import { CardBody, ListGroup, ListGroupItem } from 'react-bootstrap'
import { TbMapPin } from 'react-icons/tb'

type PropsType = {
  messages: MessageType[]
  setMessages: (message: MessageType) => void
}

const SideBar = ({ messages, setMessages }: PropsType) => {
  const [active, setActive] = useState(messages[0])

  return (
    <SimpleBar className="card h-100 mb-0 rounded-0 border-0">
      <CardBody className="p-0">
        <ListGroup as="ul" variant="flush" className="outlook-list mb-0">
          {messages.map((item, idx) => (
            <ListGroupItem
              as="li"
              key={idx}
              className={`p-0 ${item.id === active.id ? 'active' : ''}`}
              role="button"
              onClick={() => {
                setMessages(item)
                setActive(item)
              }}>
              <span className="nav-link p-3">
                <span className="d-flex justify-content-between align-items-center mb-1">
                  <span className="ff-secondary fw-semibold">{item.name}</span>
                  <small className="float-end text-muted">{item.date}</small>
                </span>

                <span className="mb-2 d-block fs-xs text-muted">{item.summary}</span>

                <span className="d-flex align-items-center flex-wrap justify-content-between">
                  <span>
                    <TbMapPin /> {item.location}
                  </span>
                  {item.badge && <span className={`badge text-bg-${item.badge.variant} badge-label`}>{item.badge.label}</span>}
                </span>
              </span>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </SimpleBar>
  )
}

export default SideBar
