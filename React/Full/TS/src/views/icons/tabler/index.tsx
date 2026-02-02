import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'
import {
  TbAd2,
  TbBell,
  TbCamera,
  TbChartPie2,
  TbCloud,
  TbCreditCard,
  TbDeviceDesktop,
  TbDeviceGamepad,
  TbDeviceTablet,
  TbDeviceWatch,
  TbLock,
  TbMail,
  TbPhone,
  TbStar,
  TbUser,
} from 'react-icons/tb'
import { iconItems } from '@/views/icons/lucide/data.tsx'

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Tabler" subtitle="Icons" />

      <Row className="justify-content-center">
        <Col xxl={10}>
          <Card>
            <CardHeader className="d-block">
              <h4 className="card-title mb-1">Overview</h4>
              <p className="mb-0 text-muted">
                Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful.
              </p>
            </CardHeader>

            <CardBody>
              <h4 className="mt-0 fs-base mb-1">Usage</h4>
              <code>{`<TbIconName />`}</code>

              <div className="d-flex align-items-center gap-2 mt-3">
                <TbPhone size={28} />
                <TbAd2 size={28} />
                <TbDeviceDesktop size={28} />
                <TbDeviceTablet size={28} />
                <TbDeviceGamepad size={28} />
                <TbDeviceWatch size={28} />
              </div>
            </CardBody>

            <CardBody>
              <h4 className="mt-0 fs-base mb-1">Colors</h4>
              <code>{`<TbIconName class="text-xxxxx" />`}</code>

              <div className="d-flex align-items-center gap-2 mt-3">
                <TbCamera size={28} className="text-primary" />
                <TbChartPie2 size={28} className="text-secondary" />
                <TbBell size={28} className="text-success" />
                <TbCreditCard size={28} className="text-info" />
                <TbCloud size={28} className="text-warning" />
                <TbMail size={28} className="text-danger" />
                <TbLock size={28} className="text-dark" />
                <TbUser size={28} className="text-purple" />
                <TbStar size={28} className="text-light" />
              </div>
            </CardBody>

            <CardBody>
              <h4 className="mt-0 fs-base mb-1">Sizes</h4>
              <code>{`<TbIconName size={28} />`}</code>

              <div className="d-flex align-items-center gap-2 mt-3">
                <TbPhone size={32} />
                <TbAd2 size={28} />
                <TbDeviceDesktop size={24} />
                <TbDeviceTablet size={20} />
                <TbDeviceGamepad size={16} />
                <TbDeviceWatch size={12} />
              </div>

              <div className="d-flex align-items-center gap-2 mt-3">
                <TbDeviceWatch />
                <TbDeviceWatch className="fs-sm" />
                <TbDeviceWatch className="fs-lg" />
                <TbDeviceWatch className="fs-xl" />
                <TbDeviceWatch className="fs-xxl" />
                <TbDeviceWatch className="fs-24" />
                <TbDeviceWatch className="fs-32" />
                <TbDeviceWatch className="fs-36" />
                <TbDeviceWatch className="fs-42" />
                <TbDeviceWatch className="fs-60" />
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
                <Button href="https://react-icons.github.io/react-icons/icons/tb/" target="_blank" variant="danger">
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
