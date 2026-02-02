'use client'
import { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'

import EmailSidebar from '@/app/(admin)/(apps)/(email)/components/EmailSidebar'
import EmailList from '@/app/(admin)/(apps)/(email)/inbox/components/EmailList'

const Inboxes = () => {
  const [show, setShow] = useState(false)
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

      <EmailList toggleSidebar={() => setShow(!show)} />
    </>
  )
}

export default Inboxes
