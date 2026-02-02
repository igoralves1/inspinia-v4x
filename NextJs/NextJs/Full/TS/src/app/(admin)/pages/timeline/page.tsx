import { timelineItems1, timelineItems2, timelineItems3, timelineItems4 } from '@/app/(admin)/pages/timeline/data'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import ComponentCard from '@/components/cards/ComponentCard'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Timeline" subtitle="Pages" />

      <Row>
        <Col xxl={6}>
          <ComponentCard title="Basic Timeline">
            <div className="timeline">
              {timelineItems1.map((item, idx) => (
                <div key={idx} className="timeline-item d-flex align-items-stretch">
                  {item.time && <div className="timeline-time pe-3 text-muted">{item.time}</div>}
                  {item.variant && <div className={`timeline-dot bg-${item.variant}`}></div>}
                  <div className={`timeline-content ps-3 ${idx != timelineItems1.length - 1 ? 'pb-4' : ''}`}>
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="mb-1 text-muted">{item.description}</p>
                    <span className="text-primary fw-semibold">By {item.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </ComponentCard>
        </Col>

        <Col xxl={6}>
          <ComponentCard title="Timeline with Icons">
            <div className="timeline timeline-icon-based">
              {timelineItems2.map((item, idx) => (
                <div key={idx} className="timeline-item d-flex align-items-stretch">
                  {item.time && <div className="timeline-time pe-3 text-muted">{item.time}</div>}
                  {item.variant && item.icon && (
                    <div className={`timeline-dot text-bg-${item.variant}`}>
                      <item.icon className="fs-xl" />
                    </div>
                  )}
                  <div className={`timeline-content ps-3 ${idx != timelineItems2.length - 1 ? 'pb-4' : ''}`}>
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="mb-1 text-muted">{item.description}</p>
                    <span className="text-primary fw-semibold">By {item.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </ComponentCard>
        </Col>
      </Row>

      <Row>
        <Col xxl={6}>
          <ComponentCard title="Timeline with Border">
            <div className="timeline timeline-icon-bordered">
              {timelineItems3.map((item, idx) => (
                <div key={idx} className="timeline-item d-flex align-items-stretch">
                  {item.time && <div className="timeline-time pe-3 text-muted">{item.time}</div>}
                  {item.icon && (
                    <div className="timeline-dot">
                      <item.icon className="fs-xl text-muted" />
                    </div>
                  )}
                  <div className={`timeline-content ps-3 ${idx != timelineItems3.length - 1 ? 'pb-4' : ''}`}>
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="mb-1 text-muted">{item.description}</p>
                    <span className="text-primary fw-semibold">By {item.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </ComponentCard>
        </Col>

        <Col xxl={6}>
          <ComponentCard title="Timeline with Users">
            <div className="timeline timeline-users">
              {timelineItems4.map((item, idx) => (
                <div key={idx} className="timeline-item d-flex align-items-stretch">
                  {item.image && (
                    <div className="timeline-dot">
                      <Image src={item.image} width={30} height={30} alt="avatar-1" className="img-fluid rounded-circle" />
                    </div>
                  )}
                  <div className={`timeline-content ps-3 ${idx != timelineItems4.length - 1 ? 'pb-4' : ''}`}>
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="mb-1 text-muted">{item.description}</p>
                    <span className="text-primary fw-semibold">By {item.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
