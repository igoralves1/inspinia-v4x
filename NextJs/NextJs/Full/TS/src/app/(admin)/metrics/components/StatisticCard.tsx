'use client'
import { getStatisticChartOptions } from '@/app/(admin)/metrics/data'
import { StatisticCardType } from '@/app/(admin)/metrics/types'
import CountUpClient from '@/components/client-wrapper/CountUpClient'
import EChartClient from '@/components/client-wrapper/EChartClient'
import { PieChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { Badge, Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap'

const StatisticCard = ({ item }: { item: StatisticCardType }) => {
  const { metric, count, title, badgeText, badgeColor } = item
  return (
    <Card>
      <CardHeader className="d-flex border-dashed justify-content-between align-items-center">
        <CardTitle as="h5">{title}</CardTitle>
        <Badge bg={badgeColor} className={`bg-opacity-10 text-${badgeColor}`}>
          {badgeText}
        </Badge>
      </CardHeader>
      <CardBody>
        <div className="d-flex justify-content-between align-items-center text-nowrap">
          <div className="flex-grow-1">
            <EChartClient
              extensions={[PieChart, TooltipComponent, CanvasRenderer]}
              getOptions={getStatisticChartOptions}
              style={{ height: 60, width: 60 }}
            />
          </div>

          <div className="text-end">
            <h3 className="mb-2 fw-normal">
              <CountUpClient duration={1} prefix={count.prefix} suffix={count.suffix} end={count.value} enableScrollSpy scrollSpyOnce />
            </h3>
            <p className="mb-0 text-muted">
              <span>{metric}</span>
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default StatisticCard
