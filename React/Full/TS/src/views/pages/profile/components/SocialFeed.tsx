import ComponentCard from '@/components/cards/ComponentCard'
import { Button } from 'react-bootstrap'
import { TbCheck, TbMessage, TbX } from 'react-icons/tb'
import { socialFeed } from '@/views/pages/profile/data.ts'

const SocialFeed = () => {
  return (
    <ComponentCard title="My Social Feed">
      {socialFeed.map((item, idx) => (
        <div
          key={idx}
          className={`d-flex justify-content-between align-items-center ${idx != socialFeed.length - 1 ? 'border-bottom py-2' : 'pt-2'} ${idx === 0 && 'pt-0'}`}>
          <div className="d-flex align-items-center gap-2">
            <div className="avatar avatar-sm">
              <img src={item.image} height={32} width={32} alt="" className="img-fluid rounded" />
            </div>
            <div>
              <h5 className="text-nowrap fs-sm mb-0 lh-base">{item.name}</h5>
              <p className="text-muted fs-xs mb-0"> {item.email ? item.email : item.action}</p>
            </div>
            {item.badge && (
              <div>
                <span className="badge badge-soft-success">{item.badge}</span>
              </div>
            )}
          </div>
          <div>
            {item.isRequest ? (
              <>
                <Button size="sm" className="btn-icon btn-outline-primary me-1">
                  <TbCheck />
                </Button>
                <Button size="sm" variant="danger" className="btn-icon">
                  <TbX />
                </Button>
              </>
            ) : (
              <>
                {item.time ? (
                  <small className="text-muted fs-xxs">{item.time}</small>
                ) : (
                  <Button size="sm" className={`btn-icon btn-outline-${item.variant ?? 'primary'}`}>
                    {item.icon ? <item.icon /> : <TbMessage />}
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </ComponentCard>
  )
}

export default SocialFeed
