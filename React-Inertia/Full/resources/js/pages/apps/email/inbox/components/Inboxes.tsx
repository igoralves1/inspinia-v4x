import { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import EmailSidebar from '@/pages/apps/email/components/EmailSidebar'
import EmailList from '@/pages/apps/email/inbox/components/EmailList'

const Inboxes = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Offcanvas responsive="lg" show={show} onHide={() => setShow(false)} className="outlook-left-menu outlook-left-menu-sm">
        <EmailSidebar />
      </Offcanvas>

      <EmailList toggleSidebar={() => setShow(!show)} />
    </>
  )
}

export default Inboxes
