import SimpleBar from 'simplebar-react'
import { Link } from 'react-router'
import { Button, CardBody, ListGroup, ListGroupItem } from 'react-bootstrap'
import type { IconType } from 'react-icons'
import { TbChartDonutFilled, TbClock, TbDownload, TbFolder, TbShare, TbStar, TbTrash } from 'react-icons/tb'

type SideBarItemType = {
  name: string
  icon: IconType
  variant?: string
  badge?: {
    text: string
    variant: string
  }
}

const items: SideBarItemType[] = [
  { name: 'My Files', icon: TbFolder, badge: { text: '12', variant: 'danger' } },
  { name: 'Shared with Me', icon: TbShare },
  { name: 'Recent', icon: TbClock },
  { name: 'Favourites', icon: TbStar },
  { name: 'Downloads', icon: TbDownload },
  { name: 'Trash', icon: TbTrash },
]

const categories: SideBarItemType[] = [
  { name: 'Work', icon: TbChartDonutFilled, variant: 'primary' },
  { name: 'Projects', icon: TbChartDonutFilled, variant: 'purple' },
  { name: 'Media', icon: TbChartDonutFilled, variant: 'info' },
  { name: 'Documents', icon: TbChartDonutFilled, variant: 'warning' },
]

const SideBar = () => {
  return (
    <SimpleBar className="card h-100 mb-0 rounded-0 border-0">
      <CardBody>
        <Button variant="danger" className="fw-medium w-100">
          Upload Files
        </Button>

        <ListGroup variant="flush" className="list-custom mt-3">
          {items.map((item, idx) => (
            <ListGroupItem key={item.name} as={Link} to="" action className={idx === 0 ? 'active' : ''}>
              <item.icon className="align-middle me-1 opacity-75 fs-lg" />
              <span className="align-middle">{item.name}</span>
              {item.badge && (
                <span className={`badge align-middle bg-${item.badge.variant}-subtle fs-xxs text-${item.badge.variant} float-end`}>
                  {item.badge.text}
                </span>
              )}
            </ListGroupItem>
          ))}

          <ListGroupItem className="mt-2">
            <span className="align-middle">Categories</span>
          </ListGroupItem>

          {categories.map((item) => (
            <ListGroupItem key={item.name} as={Link} to="" action>
              <item.icon className={`align-middle me-1 opacity-75 fs-lg text-${item.variant ?? 'primary'}`} />
              <span className="align-middle">{item.name}</span>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>

      <div className="position-absolute bottom-0 start-0 w-100 overflow-hidden" style={{ pointerEvents: 'none' }}>
        <svg
          viewBox="0 0 600 560"
          preserveAspectRatio="xMinYMax meet"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.05 }}>
          <circle cx="50" cy="480" r="40" fill="#FF4C3E" />

          <path d="M140 440 C130 470, 100 470, 90 440 S50 410, 40 440" stroke="#089df1" strokeWidth="2" fill="none" />

          <path d="M100 360 L50 410 L0 360 Z" fill="#f9bf59" />

          <ellipse cx="80" cy="280" rx="30" ry="50" fill="#7b70ef" />

          <path d="M140 240 Q130 260 110 250 Q90 240 100 220 Q110 200 130 210 Q150 220 140 240 Z" fill="#089df1" />

          <path d="M130 150 C140 170, 110 180, 90 170 C70 160, 60 140, 80 120 C100 100, 120 110, 130 150 Z" fill="#f7577e" />

          <path d="M220 480 L212 460 H190 L208 445 L200 425 L220 437 L240 425 L232 445 L250 460 H228 Z" fill="#7b70ef" />

          <path
            d="M310 460 C300 470, 290 450, 300 440 C310 430, 330 430, 340 440 C350 450, 350 470, 340 480"
            stroke="#089df1"
            strokeWidth="2"
            fill="none"
          />

          <path d="M280 360 L270 350 L280 330 L300 330 L310 350 Z" fill="#f7577e" />

          <circle cx="140" cy="310" r="20" stroke="#089df1" strokeWidth="3" fill="none" />
        </svg>
      </div>
    </SimpleBar>
  )
}

export default SideBar
