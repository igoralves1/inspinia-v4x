import { PieChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { Badge, Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap'
import type { StatisticCardType } from '@/views/metrics/types.ts'
import CustomEChart from '@/components/CustomEChart.tsx'
import { getStatisticChartOptions } from '@/views/metrics/data.ts'
import CountUp from 'react-countup'

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
            <CustomEChart
              extensions={[PieChart, TooltipComponent, CanvasRenderer]}
              getOptions={getStatisticChartOptions}
              style={{ height: 60, width: 60 }}
            />
          </div>

          <div className="text-end">
            <h3 className="mb-2 fw-normal">
              <CountUp duration={1} prefix={count.prefix} suffix={count.suffix} end={count.value} enableScrollSpy scrollSpyOnce />
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
