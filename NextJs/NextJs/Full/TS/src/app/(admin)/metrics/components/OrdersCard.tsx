'use client'
import { getOrderChartOptions } from '@/app/(admin)/metrics/data'
import CountUpClient from '@/components/client-wrapper/CountUpClient'
import EChartClient from '@/components/client-wrapper/EChartClient'
import { BarChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { Card, CardBody } from 'react-bootstrap'

const OrdersCard = () => {
  return (
    <Card>
      <CardBody className="p-0">
        <div className="p-3">
          <h3 className="mb-3 fw-bold">
            <span>
              <CountUpClient end={421} enableScrollSpy scrollSpyOnce />
            </span>
            <span className="text-muted ms-1 fs-sm">Orders</span>
          </h3>
          <p className="mb-0">You have received 421 new orders, indicating a healthy sales trend over the past period.</p>
        </div>
        <div className="mb-3">
          <EChartClient extensions={[BarChart, TooltipComponent, CanvasRenderer]} getOptions={getOrderChartOptions} style={{ height: 120 }} />
        </div>
      </CardBody>
    </Card>
  )
}
export default OrdersCard
