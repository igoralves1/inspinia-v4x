import { CardBody, Col, Table } from 'react-bootstrap'

import ComponentCard from '@/components/cards/ComponentCard'
import { SessionsDevicesChart } from './charts'

const SessionsDevice = () => {
  return (
    <Col xxl={4}>
      <ComponentCard title="Sessions Device" bodyClassName="p-0" isCloseable isCollapsible isRefreshable>
        <CardBody className="pb-0">
          <SessionsDevicesChart />
        </CardBody>

        <div className="table-responsive">
          <Table className="table-custom table-nowrap table-hover table-centered mb-0">
            <thead className="bg-light align-middle bg-opacity-25 thead-sm">
              <tr className="text-uppercase fs-xxs">
                <th className="text-muted">Device</th>
                <th className="text-muted">Sessions</th>
                <th className="text-muted">Change</th>
                <th className="text-muted text-end">Traffic %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h5 className="fs-base lh-base mb-0">Mobile</h5>
                  <p className="fs-xxs mb-0 text-body-secondary">- Android / iOS</p>
                </td>
                <td>4620</td>
                <td className="text-success">+3.4%</td>
                <td className="text-end">58%</td>
              </tr>
              <tr>
                <td>
                  <h5 className="fs-base lh-base mb-0">Desktop</h5>
                  <p className="fs-xxs mb-0 text-body-secondary">- Windows / Mac</p>
                </td>
                <td>2510</td>
                <td className="text-success">+1.9%</td>
                <td className="text-end">32%</td>
              </tr>
              <tr>
                <td className="border-bottom-0">
                  <h5 className="fs-base lh-base mb-0">Tablet</h5>
                  <p className="fs-xxs mb-0 text-body-secondary">- iPad / Android Tabs</p>
                </td>
                <td className="border-bottom-0">820</td>
                <td className="text-danger border-bottom-0">-0.8%</td>
                <td className="text-end border-bottom-0">10%</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </ComponentCard>
    </Col>
  )
}

export default SessionsDevice
