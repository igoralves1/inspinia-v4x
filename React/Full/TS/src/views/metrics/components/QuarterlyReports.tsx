import { Table } from 'react-bootstrap'

import ComponentCard from '@/components/cards/ComponentCard'
import { PieChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { quarterlyReports } from '@/views/metrics/data.ts'
import CustomEChart from '@/components/CustomEChart.tsx'
import { getPieEchartOptions } from '@/views/dashboards/dashboard/data.ts'

const QuarterlyReports = () => {
  return (
    <ComponentCard title="Quarterly Reports" bodyClassName="p-0" isCloseable isCollapsible isRefreshable>
      <div className="table-responsive">
        <Table hover className="table-custom table-nowrap table-centered mb-0">
          <thead className="bg-light bg-opacity-25 thead-sm">
            <tr className="text-uppercase fs-xxs">
              <th className="text-muted">Quarter</th>
              <th className="text-muted">Revenue</th>
              <th className="text-muted">Expense</th>
              <th className="text-muted">Margin</th>
              <th className="text-muted">•••</th>
            </tr>
          </thead>
          <tbody>
            {quarterlyReports.map((report) => (
              <tr key={report.id}>
                <td>
                  <h5 className="mb-0">{report.quarter}</h5>
                  <span className="text-muted fs-xs">{report.period}</span>
                </td>
                <td>{report.revenue}</td>
                <td>{report.expense}</td>
                <td>{report.margin}</td>
                <td style={{ width: 60 }}>
                  <div dir="ltr">
                    <CustomEChart
                      extensions={[PieChart, TooltipComponent, CanvasRenderer]}
                      getOptions={getPieEchartOptions}
                      style={{ height: 30, width: 30 }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </ComponentCard>
  )
}

export default QuarterlyReports
