import { Card, CardHeader, Collapse, Offcanvas, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router'
import { useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import {
  TbArrowBigLeft,
  TbArrowLeftDashed,
  TbBold,
  TbDotsVertical,
  TbDownload,
  TbFileText,
  TbItalic,
  TbLink,
  TbMailForward,
  TbMailOpened,
  TbMenu2,
  TbPaperclip,
  TbPhoto,
  TbPhotoUp,
  TbPrinter,
  TbSend,
  TbShare3,
  TbStarFilled,
  TbX,
} from 'react-icons/tb'

import SimpleBar from 'simplebar-react'
import useToggle from '@/hooks/useToggle'

import user3 from '@/assets/images/users/user-3.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import EmailSidebar from '@/views/apps/email/components/EmailSidebar.tsx'
import { actions } from '@/views/apps/email/data.ts'

const replyToolbarButtons = [
  { title: 'Bold', icon: TbBold },
  { title: 'Italic', icon: TbItalic },
  { title: 'Attach files', icon: TbPaperclip },
  { title: 'Insert link', icon: TbLink },
  { title: 'Insert photo', icon: TbPhotoUp },
]

const EmailDetails = () => {
  const [show, setShow] = useState(false)
  const { isTrue: isOpenCollapse1, toggle: toggleCollapse1 } = useToggle()
  const { isTrue: isOpenCollapse2, toggle: toggleCollapse2 } = useToggle()
  const { isTrue: isOpenCollapse3, toggle: toggleCollapse3 } = useToggle(true)
  const { isTrue: isOpenReply, toggle: toggleReply } = useToggle()

  return (
    <>
      <Offcanvas
        responsive="lg"
        show={show}
        onHide={() => setShow(false)}
        className="offcanvas-lg offcanvas-start outlook-left-menu outlook-left-menu-sm"
        tabIndex={-1}
        id="emailSidebaroffcanvas">
        <EmailSidebar />
      </Offcanvas>
      <Card className="h-100 mb-0 rounded-start-0 flex-grow-1 border-start-0">
        <CardHeader className="d-lg-none d-flex gap-2">
          <button className="btn btn-default btn-icon" type="button" onClick={() => setShow(true)}>
            <TbMenu2 className="fs-lg" />
          </button>
          <div className="app-search">
            <input type="text" className="form-control" placeholder="Search mails..." />
            <LuSearch className="app-search-icon text-muted" />
          </div>
        </CardHeader>
        <CardHeader className="card-bg justify-content-between">
          <div className="d-flex flex-wrap align-items-center gap-1">
            <OverlayTrigger overlay={<Tooltip>Back to Inbox</Tooltip>} placement="top">
              <Link to="/inbox" className="btn btn-default btn-icon btn-sm">
                <TbArrowLeftDashed className="fs-lg" />
              </Link>
            </OverlayTrigger>

            {actions.slice(0, 4).map(({ label, icon: Icon }, idx) => (
              <OverlayTrigger overlay={<Tooltip>{label}</Tooltip>} placement="top" key={idx}>
                <button type="button" className="btn btn-default btn-icon btn-sm">
                  <Icon className="fs-lg" />
                </button>
              </OverlayTrigger>
            ))}
          </div>
          <div className="d-flex align-items-center gap-1">
            <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle">
              <TbShare3 className="fs-xl" />
            </button>
            <button type="button" className="btn btn-icon btn-sm btn-ghost-dark rounded-circle">
              <TbDotsVertical className="fs-xl" />
            </button>
          </div>
        </CardHeader>
        <SimpleBar className="card-body pt-0 pb-5" style={{ height: 'calc(100% - 100px)' }}>
          <h4 className="py-3 mb-0 sticky-top bg-body-secondary">Design Reviews &amp; Feedback</h4>

          <div className="pb-3">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center flex-grow-1 text-reset" onClick={toggleCollapse1} role="button">
                <img src={user3} className="avatar-md rounded-circle" alt="User Avatar" />
                <div className="ms-2 overflow-hidden">
                  <h5 className="fs-sm mb-0 text-truncate">John Maxwell</h5>
                  <p className="text-muted mb-0 text-truncate">john.maxwell@uxstudio.com</p>
                </div>
              </div>
              <div className="ms-auto d-flex align-items-center gap-1">
                <button className="btn btn-icon btn-sm btn-ghost-light rounded-circle">
                  <TbStarFilled className="text-warning fs-lg" />
                </button>
                <button className="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                  <TbMailForward className="fs-lg" />
                </button>
                <button className="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                  <TbMailOpened className="fs-lg" />
                </button>
                <span className="text-muted fs-xs mb-0 ms-2">Apr 11, 07:47 AM</span>
              </div>
            </div>
            <Collapse in={isOpenCollapse1}>
              <div>
                <div className="mt-3">
                  <p>Hey team,</p>
                  <p>
                    I reviewed the new dashboard layout and overall it's looking solid. The spacing and typography are much better than the previous
                    version.
                  </p>
                  <p>A couple of suggestions:</p>
                  <ul>
                    <li>Make the chart legends slightly smaller and lighter in color.</li>
                    <li>Try a softer drop shadow for the card components – they feel a bit harsh right now.</li>
                  </ul>
                  <p>Let me know if you need a quick call to discuss.</p>
                  <p className="mt-3 mb-0">Cheers,</p>
                  <p className="fw-medium mb-0">John</p>
                </div>
              </div>
            </Collapse>
          </div>

          <div className="py-3 border-top border-dashed">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center flex-grow-1 text-reset" onClick={toggleCollapse2} role="button">
                <img src={user6} className="avatar-md rounded-circle" alt="User Avatar" />
                <div className="ms-2 overflow-hidden">
                  <h5 className="fs-sm mb-0 text-truncate">Anika Patel</h5>
                  <p className="text-muted mb-0 text-truncate">anika@creativemix.net</p>
                </div>
              </div>
              <div className="ms-auto d-flex align-items-center gap-1">
                <button className="btn btn-icon btn-sm btn-ghost-light rounded-circle">
                  <TbStarFilled className="text-warning fs-lg" />
                </button>
                <button className="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                  <TbMailForward className="fs-lg" />
                </button>
                <button className="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                  <TbMailOpened className="fs-lg" />
                </button>
                <span className="text-muted fs-xs mb-0 ms-2">Apr 11, 09:05 AM</span>
              </div>
            </div>
            <Collapse in={isOpenCollapse2}>
              <div>
                <div className="mt-3">
                  <p>Hello team,</p>
                  <p>
                    I did a final check on the landing page animations. Everything works smoothly except the testimonial slider – there's a tiny
                    jitter on loop transition.
                  </p>
                  <p>Maybe easing timing or delay tweaks can help fix it. Otherwise, great job!</p>
                  <p>Let me know once it's deployed to staging so I can do one last run-through.</p>
                  <p className="mt-3 mb-0">Thanks,</p>
                  <p className="fw-medium mb-0">Anika</p>
                </div>
                <div className="mt-3"></div>
                <div className="d-flex justify-content-between mt-3">
                  <h4 className="fs-sm text-muted">1 Attachment</h4>
                </div>
                <div className="mt-2 d-flex flex-wrap gap-2">
                  <div className="d-flex p-2 gap-2 align-items-center text-start position-relative border border-dashed rounded">
                    <i className="ti ti-video fs-24 text-primary" />
                    <div>
                      <h4 className="fs-sm mb-1">
                        <Link to="" className="link-reset stretched-link">
                          testimonial-glitch.mp4
                        </Link>
                      </h4>
                      <p className="fs-xs mb-0">4.7 MB</p>
                    </div>
                    <TbDownload className="fs-xxl text-muted" />
                  </div>
                </div>
              </div>
            </Collapse>
          </div>

          <div className="py-3 border-top border-dashed">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center flex-grow-1 text-reset" onClick={toggleCollapse3} role="button">
                <img src={user5} className="avatar-md rounded-circle" alt="User Avatar" />
                <div className="ms-2 overflow-hidden">
                  <h5 className="fs-sm mb-0 text-truncate">Laura Chen</h5>
                  <p className="text-muted mb-0 text-truncate">laura.chen@designteam.co</p>
                </div>
              </div>
              <div className="ms-auto d-flex align-items-center gap-1">
                <button className="btn btn-icon btn-sm btn-ghost-light rounded-circle">
                  <TbStarFilled className="text-warning fs-lg" />
                </button>
                <button className="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                  <TbMailForward className="fs-lg" />
                </button>
                <button className="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                  <TbMailOpened className="fs-lg" />
                </button>
                <span className="text-muted fs-xs mb-0 ms-2">Apr 12, 11:42 AM</span>
              </div>
            </div>
            <Collapse in={isOpenCollapse3}>
              <div>
                <div className="mt-lg-4 mt-3">
                  <p>Hi folks,</p>
                  <p>
                    Thanks for sharing the prototype. The color scheme and layout look clean, but I think we can still refine the mobile
                    responsiveness on the pricing page.
                  </p>
                  <p>Also, the button contrast on the footer needs more WCAG-friendly contrast – it's currently a bit hard to read.</p>
                  <p>I’ve attached some screenshots with markup for clarity.</p>
                  <p className="mt-3 mb-0">Regards,</p>
                  <p className="fw-medium">Laura</p>
                </div>
                <div className="mt-3"></div>
                <div className="d-flex justify-content-between mt-3">
                  <h4 className="fs-sm text-muted">2 Attachments</h4>
                </div>
                <div className="mt-2 d-flex flex-wrap gap-2">
                  <div className="d-flex p-2 gap-2 align-items-center text-start position-relative border border-dashed rounded">
                    <TbFileText className="fs-24 text-danger" />
                    <div>
                      <h4 className="fs-sm mb-1">
                        <Link to="" className="link-reset stretched-link">
                          footer-contrast-notes.pdf
                        </Link>
                      </h4>
                      <p className="fs-xs mb-0">1.2 MB</p>
                    </div>
                    <TbDownload className="fs-xxl text-muted" />
                  </div>
                  <div className="d-flex p-2 gap-2 align-items-center text-start position-relative border border-dashed rounded">
                    <TbPhoto className="fs-24 text-secondary" />
                    <div>
                      <h4 className="fs-sm mb-1">
                        <Link to="" className="link-reset stretched-link">
                          responsive-issues.png
                        </Link>
                      </h4>
                      <p className="fs-xs mb-0">850 KB</p>
                    </div>
                    <TbDownload className="fs-xxl text-muted" />
                  </div>
                </div>
              </div>
            </Collapse>
          </div>

          <div className="position-sticky bottom-0 z-1">
            <Collapse in={isOpenReply}>
              <div>
                <div className="mt-2 pb-5">
                  <textarea
                    className="form-control rounded-top rounded-0"
                    id="exampleFormControlTextarea1"
                    rows={6}
                    placeholder="Enter message"
                    defaultValue={''}
                  />
                  <div className="bg-light-subtle p-2 rounded-bottom border border-top-0">
                    <div className="d-flex gap-1 align-items-center">
                      {replyToolbarButtons.map(({ icon: Icon, title }, idx) => (
                        <OverlayTrigger overlay={<Tooltip>{title}</Tooltip>} placement="top" key={idx}>
                          <button type="button" className="btn btn-sm btn-icon btn-light" title="Bold">
                            <Icon />
                          </button>
                        </OverlayTrigger>
                      ))}
                      <button type="button" className="btn btn-sm btn-light ms-auto" onClick={toggleReply}>
                        <TbX className=" me-1" /> Cancel
                      </button>
                      <button type="button" className="btn btn-sm btn-success">
                        <TbSend className="me-1" /> Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </SimpleBar>
        <CardHeader className="bg-body-secondary border-top border-dashed border-bottom-0 position-absolute bottom-0 w-100">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-sm btn-default" onClick={toggleReply} type="button">
                <TbShare3 className="fs-lg" />
                <span className="fw-medium ms-1">Reply</span>
              </button>
              <button className="btn btn-sm btn-default" type="button">
                <TbArrowBigLeft className="fs-lg" />
                <span className="fw-medium ms-1">Forward</span>
              </button>
              <button className="btn btn-sm btn-default" type="button">
                <TbPrinter className="fs-lg" />
                <span className="fw-medium ms-1">Print</span>
              </button>
            </div>
          </div>
        </CardHeader>
      </Card>
    </>
  )
}

export default EmailDetails
