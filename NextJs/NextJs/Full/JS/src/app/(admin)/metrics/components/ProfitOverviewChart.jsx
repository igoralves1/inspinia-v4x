import { profitChartOptions } from '@/app/(admin)/metrics/data';
import CountUpClient from '@/components/client-wrapper/CountUpClient';
import EChartClient from '@/components/client-wrapper/EChartClient';
import { LineChart } from 'echarts/charts';
import { TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { Card, CardBody } from 'react-bootstrap';
const ProfitOverviewChart = () => {
  return <Card>
      <CardBody>
        <h3 className="mb-3 fw-bold">
          <CountUpClient end={12.5} decimals={2} prefix={'$'} suffix={'k'} enableScrollSpy scrollSpyOnce />
          <span className="text-muted ms-1 fs-sm">Profit</span>
        </h3>
        <p className="mb-3">Your total profit reached $12,500 this month, showing stable and positive business growth.</p>
        <EChartClient extensions={[LineChart, TooltipComponent, CanvasRenderer]} getOptions={profitChartOptions} style={{
        height: 120
      }} />
      </CardBody>
    </Card>;
};
export default ProfitOverviewChart;