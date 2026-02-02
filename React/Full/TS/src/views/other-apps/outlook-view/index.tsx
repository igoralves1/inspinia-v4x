import SimpleBar from 'simplebar-react'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { useState } from 'react'
import { Button, CardBody, CardHeader, Container, Form, FormControl, Offcanvas, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { TbAlertCircle, TbClock, TbEye, TbMenu2, TbPlug, TbSend2, TbTrash } from 'react-icons/tb'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SideBar from '@/views/other-apps/outlook-view/components/SideBar.tsx'
import { messages, type MessageType } from '@/views/other-apps/outlook-view/data.ts'

const Page = () => {
  const [message, setMessages] = useState<MessageType>(messages[0])

  const [show, setShow] = useState(false)

  return (
    <Container fluid>
      <PageBreadcrumb title="Outlook View" subtitle="Apps" />

      <div className="outlook-box outlook-box-full">
        <Offcanvas responsive="lg" show={show} onHide={() => setShow(!show)} className="offcanvas-lg offcanvas-start outlook-left-menu">
          <SideBar messages={messages} setMessages={setMessages} />
        </Offcanvas>

        <SimpleBar className="card h-100 mb-0 rounded-0 border-0 flex-grow-1" data-simplebar-md>
          <CardHeader className="d-lg-none d-flex">
            <Button size="sm" className="btn-default btn-icon" type="button" onClick={() => setShow(!show)}>
              <TbMenu2 className="fs-lg" />
            </Button>
          </CardHeader>

          <CardBody>
            <div>
              <div className="d-flex justify-content-between gap-2">
                <div>
                  <div className="text-muted mb-2">
                    <TbClock /> {message.body.timestamp}
                  </div>
                  <h2 className="fs-xl mb-3">{message.body.title}</h2>
                </div>

                <div>
                  <OverlayTrigger placement="left" overlay={<Tooltip>Plug this message</Tooltip>}>
                    <Button size="sm" className="btn-default me-1">
                      <TbPlug className="me-1" /> Plug it
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={<Tooltip>Mark as read</Tooltip>}>
                    <Button size="sm" className="btn-icon btn-default me-1">
                      <TbEye />
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={<Tooltip>Mark as important</Tooltip>}>
                    <Button size="sm" className="btn-icon btn-default me-1">
                      <TbAlertCircle />
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={<Tooltip>Move to trash</Tooltip>}>
                    <Button size="sm" className="btn-icon btn-default">
                      <TbTrash />
                    </Button>
                  </OverlayTrigger>
                </div>
              </div>

              <Markdown remarkPlugins={[remarkGfm]}>{message.body.content}</Markdown>

              <Form className="my-3">
                <div className="mb-3">
                  <FormControl as="textarea" rows={4} placeholder="Enter your reply..." />
                </div>
                <div className="text-end">
                  <Button variant="secondary" type="submit">
                    Submit <TbSend2 className="align-baseline ms-1" />
                  </Button>
                </div>
              </Form>
            </div>
          </CardBody>
        </SimpleBar>
      </div>
    </Container>
  )
}

export default Page
