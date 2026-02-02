import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'
import {
  LuAirplay,
  LuBadgeDollarSign,
  LuBell,
  LuCamera,
  LuCheck,
  LuCircleCheck,
  LuCloud,
  LuDatabase,
  LuFileText,
  LuGamepad2,
  LuHeart,
  LuLock,
  LuMonitor,
  LuPhone,
  LuStar,
  LuTablet,
  LuTriangleAlert,
  LuUser,
  LuWatch,
} from 'react-icons/lu'
import { iconItems } from '@/views/icons/lucide/data.tsx'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Lucide" subtitle="Icons" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <Card>
            <CardHeader className="d-block">
              <h4 className="card-title mb-1">Overview</h4>
              <p className="mb-0 text-muted">
                Lucide is an open-source library of clean, scalable SVG icons for web and app development, offering easy integration and customization
              </p>
            </CardHeader>

            <CardBody>
              <h4 className="mt-0 fs-base mb-1">Usage</h4>
              <code>{`<LuIconName />`}</code>

              <div className="d-flex align-items-center gap-2 mt-3">
                <LuCamera size={28} />
                <LuHeart size={28} />
                <LuStar size={28} />
                <LuCheck size={28} />
                <LuBell size={28} />
                <LuCloud size={28} />
                <LuUser size={28} />
              </div>
            </CardBody>

            <CardBody>
              <h4 className="mt-0 fs-base mb-1">Colors</h4>
              <code>{`<LuIconName class="text-xxxx" />`}</code>

              <div className="d-flex align-items-center gap-2 mt-3">
                <LuStar size={28} className="text-primary" />
                <LuUser size={28} className="text-secondary" />
                <LuCircleCheck size={28} className="text-success" />
                <LuBell size={28} className="text-info" />
                <LuTriangleAlert size={28} className="text-warning" />
                <LuFileText size={28} className="text-danger" />
                <LuAirplay size={28} className="text-dark" />
                <LuLock size={28} className="text-purple" />
                <LuDatabase size={28} className="text-light" />
              </div>
            </CardBody>

            <CardBody>
              <h4 className="mt-0 fs-base mb-1">Fill Colors</h4>
              <code>{`<LuIconName class="text-xxxx fill-xxxx" />`}</code>

              <div className="d-flex align-items-center gap-2 mt-3">
                <LuStar size={28} className="text-primary fill-primary" />
                <LuUser size={28} className="text-secondary fill-secondary" />
                <LuCircleCheck size={28} className="text-success fill-success" />
                <LuBell size={28} className="text-info fill-info" />
                <LuTriangleAlert size={28} className="text-warning fill-warning" />
                <LuFileText size={28} className="text-danger fill-danger" />
                <LuAirplay size={28} className="text-dark fill-dark" />
                <LuLock size={28} className="text-purple fill-purple" />
                <LuDatabase size={28} className="text-light fill-light" />
              </div>
            </CardBody>

            <CardBody>
              <h4 className="mt-0 fs-base mb-1">Sizes</h4>
              <code>{`<LuIconName size={28} />`}</code>

              <div className="d-flex align-items-center gap-2 mt-3">
                <LuPhone size={32} />
                <LuBadgeDollarSign size={28} />
                <LuMonitor size={24} />
                <LuTablet size={20} />
                <LuGamepad2 size={16} />
                <LuWatch size={12} />
              </div>

              <div className="d-flex align-items-center gap-2 mt-3">
                <LuWatch className="fs-sm" />
                <LuWatch className="fs-lg" />
                <LuWatch className="fs-xl" />
                <LuWatch className="fs-xxl" />
                <LuWatch className="fs-24" />
                <LuWatch className="fs-32" />
                <LuWatch className="fs-36" />
                <LuWatch className="fs-42" />
                <LuWatch className="fs-60" />
              </div>
            </CardBody>

            <CardBody className="border-top border-dashed">
              <h4 className="mt-0 mb-3">Icons</h4>
              <div className="d-flex flex-wrap align-items-center text-center gap-2">
                {iconItems.map(({ icon, label }, idx) => (
                  <div key={idx} className="avatar-xxl">
                    <div className="avatar-title flex-column gap-1 border border-dashed rounded-3 overflow-hidden text-truncate text-center p-1">
                      {icon}
                      <div className="fw-semibold d-block w-100 text-truncate">{label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-3">
                <Button href="https://react-icons.github.io/react-icons/icons/lu/" target="_blank" variant="danger">
                  View All Icons
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
