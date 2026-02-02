import { actions, emails } from '@/app/(admin)/(apps)/(email)/data'
import { EmailType } from '@/app/(admin)/(apps)/(email)/types'
import SimplebarClient from '@/components/client-wrapper/SimplebarClient'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Card, CardHeader, FormControl, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { LuSearch } from 'react-icons/lu'
import { TbMenu2, TbPaperclip, TbStar, TbStarFilled } from 'react-icons/tb'

const EmailList = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [search, setSearch] = useState('')

  const filteredEmails = emails.filter(
    (e: EmailType) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.subject.toLowerCase().includes(search.toLowerCase()) ||
      e.snippet.toLowerCase().includes(search.toLowerCase()),
  )

  const [selected, setSelected] = useState<number[]>([])
  const isAllSelected = filteredEmails.length > 0 && selected.length === filteredEmails.length

  const handleSelectAll = () => {
    setSelected(isAllSelected ? [] : filteredEmails.map((e) => e.id))
  }

  const handleSelect = (id: number) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }
  return (
    <Card className="h-100 mb-0 rounded-start-0 flex-grow-1 border-start-0">
      <CardHeader className="d-lg-none d-flex gap-2">
        <button className="btn btn-default btn-icon" type="button" onClick={() => toggleSidebar()} aria-controls="emailSidebaroffcanvas">
          <TbMenu2 className="fs-lg" />
        </button>
        <div className="app-search">
          <input type="text" className="form-control" placeholder="Search mails..." />
          <LuSearch className="app-search-icon text-muted" />
        </div>
      </CardHeader>
      <CardHeader className="card-header card-bg justify-content-between">
        <div className="d-flex flex-wrap align-items-center gap-1">
          <input
            checked={isAllSelected}
            onChange={handleSelectAll}
            className="form-check-input form-check-input-light fs-14 mt-0 me-3"
            type="checkbox"
            id="select-all-email"
          />

          {actions.map(({ label, icon: Icon }, idx) => (
            <OverlayTrigger overlay={<Tooltip>{label}</Tooltip>} placement="top" key={idx}>
              <button type="button" className="btn btn-default btn-icon btn-sm">
                <Icon className="fs-lg" />
              </button>
            </OverlayTrigger>
          ))}
        </div>
        <div className="app-search d-none d-lg-inline-flex">
          <FormControl value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search mails..." />
          <LuSearch className="app-search-icon text-muted" />
        </div>
      </CardHeader>
      <SimplebarClient className="card-body p-0" style={{ height: 'calc(100% - 100px)' }} data-simplebar data-simplebar-md>
        <div className="table-responsive">
          <table className="table table-hover table-select mb-0">
            <tbody>
              {filteredEmails.length === 0 ? (
                <tr className="no-results">
                  <td colSpan={0} className="text-center text-muted py-3">
                    Nothing found.
                  </td>
                </tr>
              ) : (
                filteredEmails.map((email) => (
                  <tr className={`position-relative ${email.isRead ? 'mark-as-read' : ''}`} key={email.id}>
                    <td className="ps-3" style={{ width: '1%' }}>
                      <div className="d-flex gap-3">
                        <input
                          className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check"
                          type="checkbox"
                          checked={selected.includes(email.id)}
                          onChange={() => handleSelect(email.id)}
                        />
                        <button className="btn p-0  fs-xl">
                          {email.isStarred ? <TbStarFilled className="text-warning" /> : <TbStar className="text-muted" />}
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        {email.avatar ? (
                          <Image src={email.avatar} alt="user avatar" className="avatar-xs rounded-circle" />
                        ) : (
                          <div className="avatar-xs">
                            <span className={clsx('avatar-title  rounded-circle', email.variant)}>{email.name.charAt(0)}</span>
                          </div>
                        )}
                        <h5 className="fs-base mb-0 fw-medium">{email.name}</h5>
                      </div>
                    </td>
                    <td>
                      <Link href={`/inbox/${email.id}`} className="link-reset fs-base fw-medium stretched-link">
                        {email.subject}
                      </Link>
                      &nbsp;<span className="d-xl-inline-block d-none">—</span>&nbsp;
                      <span className="fs-base text-muted d-xl-inline-block d-none mb-0">{email.snippet}</span>
                    </td>
                    <td style={{ width: '1%' }}>
                      <div className={`d-flex align-items-center gap-1 ${email.attachments === 0 ? 'opacity-25' : ''}`}>
                        <TbPaperclip />
                        <span className="fw-semibold">{email.attachments}</span>
                      </div>
                    </td>
                    <td>
                      <p className="fs-xs text-muted mb-0 text-end pe-2">
                        {email.date}, {email.time}
                      </p>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-2 p-3">
          <strong>Loading...</strong>
          <div className="spinner-border spinner-border-sm text-danger" role="status" aria-hidden="true" />
        </div>
      </SimplebarClient>
    </Card>
  )
}

export default EmailList
