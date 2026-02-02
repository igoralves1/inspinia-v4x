import { LineChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { Card, CardBody } from 'react-bootstrap'
import CountUp from 'react-countup'
import CustomEChart from '@/components/CustomEChart.tsx'
import { profitChartOptions } from '@/views/metrics/data.ts'

const ProfitOverviewChart = () => {
  return (
    <Card>
      <CardBody>
        <h3 className="mb-3 fw-bold">
          <CountUp end={12.5} decimals={2} prefix={'$'} suffix={'k'} enableScrollSpy scrollSpyOnce />
          <span className="text-muted ms-1 fs-sm">Profit</span>
        </h3>
        <p className="mb-3">Your total profit reached $12,500 this month, showing stable and positive business growth.</p>
        <CustomEChart extensions={[LineChart, TooltipComponent, CanvasRenderer]} getOptions={profitChartOptions} style={{ height: 120 }} />
      </CardBody>
    </Card>
  )
}

export default ProfitOverviewChart
