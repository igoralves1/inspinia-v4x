import SimpleBar from 'simplebar-react'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormControl,
  Offcanvas,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import { Link } from 'react-router'
import { Fragment, useEffect, useState } from 'react'
import { LuMessageSquare } from 'react-icons/lu'
import {
  TbBellOff,
  TbCircleFilled,
  TbClock,
  TbDotsVertical,
  TbMenu2,
  TbMessageCircleOff,
  TbPhone,
  TbSend2,
  TbTrash,
  TbUser,
  TbVideo,
} from 'react-icons/tb'
import type { ChatThread, ContactType } from './types'
import { contacts, currentUser, messageThreads } from './data'
import ContactList from '@/views/apps/chat/components/ContactList.tsx'

const Page = () => {
  const [show, setShow] = useState(false)

  const [currentContact, setCurrentContact] = useState<ContactType>(contacts[0])
  const [currentThread, setCurrentThread] = useState<ChatThread | null>(messageThreads[0])

  useEffect(() => {
    const foundThread = messageThreads.find((thread) => thread.participants.some((p) => p.id === currentContact.id))
    setCurrentThread(foundThread || null)
  }, [currentContact])

  return (
    <Container fluid>
      <PageBreadcrumb title="Chat" subtitle="Apps" />

      <div className="outlook-box">
        <Offcanvas responsive="lg" show={show} onHide={() => setShow(!show)} className="outlook-left-menu outlook-left-menu-lg">
          <ContactList contacts={contacts} setContact={setCurrentContact} />
        </Offcanvas>

        <Card className="h-100 mb-0 rounded-start-0 flex-grow-1">
          <CardHeader className="card-bg">
            <div className="d-lg-none d-inline-flex gap-2">
              <button className="btn btn-default btn-icon" type="button" onClick={() => setShow(!show)}>
                <TbMenu2 className="fs-lg" />
              </button>
            </div>

            <div className="flex-grow-1">
              <h5 className="mb-1 lh-base fs-lg">
                <Link to="/pages/profile" className="link-reset">
                  {currentContact.name}
                </Link>
              </h5>
              <p className="mb-0 lh-sm text-muted" style={{ paddingTop: '1px' }}>
                <TbCircleFilled className={`me-1 ${currentContact.isOnline ? 'text-success' : 'text-danger'}`} />{' '}
                {currentContact.isOnline ? 'Active' : 'Offline'}
              </p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <OverlayTrigger placement="top" overlay={<Tooltip>Video Call</Tooltip>}>
                <button type="button" className="btn btn-default btn-icon">
                  <TbVideo className="fs-lg" />
                </button>
              </OverlayTrigger>

              <OverlayTrigger placement="top" overlay={<Tooltip>Audio Call</Tooltip>}>
                <button type="button" className="btn btn-default btn-icon">
                  <TbPhone className="fs-lg" />
                </button>
              </OverlayTrigger>

              <Dropdown align="end">
                <DropdownToggle as={'button'} className="btn btn-default btn-icon drop-arrow-none">
                  <TbDotsVertical className="fs-lg" />
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem>
                    <TbUser className="me-2" /> View Profile
                  </DropdownItem>
                  <DropdownItem>
                    <TbBellOff className="me-2" /> Mute Notifications
                  </DropdownItem>
                  <DropdownItem>
                    <TbTrash className="me-2" /> Delete Chat
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </CardHeader>

          <SimpleBar className="card-body pt-0 mb-5 pb-2" style={{ maxHeight: 'calc(100vh - 317px)' }}>
            {currentThread ? (
              currentThread.messages.map((message) => (
                <Fragment key={message.id}>
                  {currentContact.id === message.senderId && (
                    <div className="d-flex align-items-start gap-2 my-3 chat-item">
                      {currentContact.avatar ? (
                        <img src={currentContact.avatar} width={36} height={36} className="avatar-md rounded-circle" alt="User" />
                      ) : (
                        <span className="avatar-sm flex-shrink-0">
                          <span className="avatar-title text-bg-primary fw-bold rounded-circle">{currentContact.name.charAt(0).toUpperCase()}</span>
                        </span>
                      )}
                      <div>
                        <div className="chat-message py-2 px-3 bg-info-subtle rounded">{message.text}</div>
                        <div className="text-muted d-inline-flex align-items-center gap-1 fs-xs mt-1">
                          <TbClock /> {message.time}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentUser.id === message.senderId && (
                    <div className="d-flex align-items-start gap-2 my-3 text-end chat-item justify-content-end">
                      <div>
                        <div className="chat-message py-2 px-3 bg-warning-subtle rounded">{message.text}</div>
                        <div className="text-muted d-inline-flex align-items-center gap-1 fs-xs mt-1">
                          <TbClock /> {message.time}
                        </div>
                      </div>
                      {currentUser.avatar ? (
                        <img src={currentUser.avatar} width={36} height={36} className="avatar-md rounded-circle" alt="User" />
                      ) : (
                        <span className="avatar-sm flex-shrink-0">
                          <span className="avatar-title text-bg-primary fw-bold rounded-circle w-25 h-25">
                            {currentUser.name.charAt(0).toUpperCase()}
                          </span>
                        </span>
                      )}
                    </div>
                  )}
                </Fragment>
              ))
            ) : (
              <div className="d-flex align-items-center justify-content-center my-5">
                <TbMessageCircleOff size={18} className="text-muted me-1" />
                <span>No messages found.</span>
              </div>
            )}
          </SimpleBar>

          <CardFooter className="bg-body-secondary border-top border-dashed border-bottom-0 position-absolute bottom-0 w-100">
            <div className="d-flex gap-2">
              <div className="app-search flex-grow-1">
                <FormControl type="text" className="py-2 bg-light-subtle border-light" placeholder="Enter message..." />
                <LuMessageSquare className="app-search-icon text-muted" />
              </div>
              <Button variant="primary">
                Send <TbSend2 className="ms-1 fs-xl" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Container>
  )
}

export default Page
