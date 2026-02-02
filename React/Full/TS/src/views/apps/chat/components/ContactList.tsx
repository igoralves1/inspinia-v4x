import SimpleBar from 'simplebar-react'
import { Button, Card, CardHeader, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import { TbPencilPlus } from 'react-icons/tb'
import type { ContactType } from '@/views/apps/chat/types.ts'

type PropsType = {
  contacts: ContactType[]
  setContact: (contact: ContactType) => void
}

const ContactList = ({ contacts, setContact }: PropsType) => {
  const [currentContact, setCurrentContact] = useState<ContactType>(contacts[0])

  return (
    <Card className="h-100 mb-0 border-end-0 rounded-end-0">
      <CardHeader className="p-3 border-light card-bg d-block">
        <div className="d-flex gap-2">
          <div className="app-search flex-grow-1">
            <FormControl type="text" className="bg-light-subtle border-light" placeholder="Search here..." />
            <LuSearch className="app-search-icon text-muted" />
          </div>
          <Button variant="dark" className="btn-icon">
            <TbPencilPlus className="fs-xl" />
          </Button>
        </div>
      </CardHeader>
      <SimpleBar className="card-body p-2" style={{ height: 'calc(100% - 100px)' }} data-simplebar data-simplebar-md>
        <ListGroup variant="flush" className="chat-list">
          {contacts.map((contact) => (
            <ListGroupItem
              key={contact.id}
              action
              className={`d-flex gap-2 justify-content-between ${contact.id === currentContact.id ? 'active' : ''}`}
              onClick={() => {
                setContact(contact)
                setCurrentContact(contact)
              }}>
              <span className="d-flex justify-content-start align-items-center gap-2 overflow-hidden">
                <span className="avatar avatar-sm flex-shrink-0">
                  {contact.avatar ? (
                    <img src={contact.avatar} alt="" height={36} width={36} className="img-fluid rounded-circle" />
                  ) : (
                    <span className="avatar-title text-bg-primary fw-bold rounded-circle">{contact.name.charAt(0).toUpperCase()}</span>
                  )}
                </span>
                <span className="overflow-hidden">
                  <span className="text-nowrap fw-semibold fs-base mb-0 lh-base">{contact.name}</span>
                  {contact.lastMessage && <span className="text-muted d-block fs-xs mb-0 text-truncate">{contact.lastMessage}</span>}
                </span>
              </span>
              <span className="d-flex flex-column gap-1 justify-content-center flex-shrink-0 align-items-end">
                {contact.timestamp && <span className="text-muted fs-xs">{contact.timestamp}</span>}
                {contact.unreadMessages && <span className="badge text-bg-primary fs-xxs">{contact.unreadMessages}</span>}
              </span>
            </ListGroupItem>
          ))}
        </ListGroup>
      </SimpleBar>
    </Card>
  )
}

export default ContactList
