import SimpleBar from 'simplebar-react'
import clsx from 'clsx'
import { Link } from 'react-router'
import { TbChartDonutFilled } from 'react-icons/tb'
import { emailSidebarMenu } from '@/views/apps/email/data.ts'

const EmailSidebar = () => {
  const labels: { name: string; variant: string }[] = [
    { name: 'Business', variant: 'primary' },
    { name: 'Personal', variant: 'purple' },
    { name: 'Friends', variant: 'info' },
    { name: 'Family', variant: 'warning' },
  ]
  return (
    <SimpleBar className="card h-100 mb-0 rounded-end-0">
      <div className="card-body">
        <Link to="/email-compose" className="btn btn-danger fw-medium w-100">
          Compose
        </Link>
        <div className="list-group list-group-flush list-custom mt-3">
          {emailSidebarMenu.map(({ badge, link, label, icon: Icon }, idx) => (
            <Link to={link} className={clsx('list-group-item list-group-item-action', { active: idx === 0 })} key={idx}>
              <Icon className="me-2 opacity-75 fs-lg align-middle" />
              <span className="align-middle">{label}</span>
              {badge && <span className={`badge align-middle bg-${badge.variant}-subtle fs-xxs text-${badge.variant} float-end`}>{badge.text}</span>}
            </Link>
          ))}

          <div className="list-group-item mt-2">
            <span className="align-middle">Labels</span>
          </div>
          {labels.map(({ name, variant }, idx) => (
            <Link to="" className="list-group-item list-group-item-action" key={idx}>
              <TbChartDonutFilled className={`me-2 align-middle fs-sm text-${variant}`} />
              <span className="align-middle">{name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="position-absolute bottom-0 start-0 w-100 overflow-hidden" style={{ pointerEvents: 'none' }}>
        <svg
          viewBox="0 0 600 560"
          preserveAspectRatio="xMinYMax meet"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: '0.05' }}>
          <circle cx={50} cy={480} r={40} fill="#FF4C3E" />

          <path d="M140 440 C130 470, 100 470, 90 440 S50 410, 40 440" stroke="#089df1" strokeWidth={2} fill="none" />

          <path d="M100 360 L50 410 L0 360 Z" fill="#f9bf59" />

          <ellipse cx={80} cy={280} rx={30} ry={50} fill="#7b70ef" />

          <path d="M140 240 Q130 260 110 250 Q90 240 100 220 Q110 200 130 210 Q150 220 140 240 Z" fill="#089df1" />

          <path d="M130 150 C140 170, 110 180, 90 170 C70 160, 60 140, 80 120 C100 100, 120 110, 130 150 Z" fill="#f7577e" />

          <path d="M220 480 L212 460 H190 L208 445 L200 425 L220 437 L240 425 L232 445 L250 460 H228 Z" fill="#7b70ef" />

          <path
            d="M310 460 C300 470, 290 450, 300 440 C310 430, 330 430, 340 440 C350 450, 350 470, 340 480"
            stroke="#089df1"
            strokeWidth={2}
            fill="none"
          />

          <path d="M280 360 L270 350 L280 330 L300 330 L310 350 Z" fill="#f7577e" />

          <circle cx={140} cy={310} r={20} stroke="#089df1" strokeWidth={3} fill="none" />
        </svg>
      </div>
    </SimpleBar>
  )
}

export default EmailSidebar
