import { BarChart, LineChart, PieChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { Card, CardBody, CardHeader } from 'react-bootstrap'
import type { StatisticsWithChartType } from '@/views/metrics/types.ts'
import CustomEChart from '@/components/CustomEChart.tsx'
import CountUp from 'react-countup'

const getExtensions = (chartType: any) => {
  const map: any = {
    line: LineChart,
    pie: PieChart,
    bar: BarChart,
  }
  const chartExtension: any = map[chartType] ? [map[chartType]] : []
  return [...chartExtension, TooltipComponent, CanvasRenderer]
}

const StatisticWidgetChartLeft = ({ item }: { item: StatisticsWithChartType }) => {
  const { count, chartHeight, chartOptions, chartWidth, badge, description, title, ChartType } = item
  return (
    <Card>
      <CardHeader className="d-flex border-0 justify-content-between align-items-center">
        <h5 className="card-title">{title}</h5>
        {badge && <span className={`badge badge-soft-${badge.variant}`}>{badge.text}</span>}
      </CardHeader>
      <CardBody>
        <div className="d-flex justify-content-between align-items-center">
          {chartOptions() && (
            <CustomEChart extensions={getExtensions(ChartType)} getOptions={chartOptions} style={{ height: chartHeight, width: chartWidth }} />
          )}
          <div className="text-end">
            <h3 className="mb-1 fw-normal">
              <CountUp end={count.value} prefix={count.prefix} suffix={count.suffix} start={0} duration={1} />
            </h3>
            <p className="mb-0 text-muted">
              <span>{description}</span>
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default StatisticWidgetChartLeft
